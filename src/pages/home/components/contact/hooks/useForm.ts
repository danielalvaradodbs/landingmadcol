import { useEffect, useMemo, useState } from 'react';


export const useForm = ( initialForm: any, formValidations: any = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState<any>({});

    useEffect(() => {
        createValidators();
    }, [ formState ]);


    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if( formValidation[ formValue ] !== null ) return false;
        }

        return true;
    }, [ formValidation ] );
    

    const onInputChange = ( { target }: React.ChangeEvent<HTMLInputElement> ) => {

        const { name, value, checked, type } = target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormState({
            ...formState,
            [ name ]: inputValue
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {

        const formCheckedValues: any = {};

        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];
            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}
