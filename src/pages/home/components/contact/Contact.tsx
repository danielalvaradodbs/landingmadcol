
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../../../components/button/Button';
import { FiguraContacto, FlechaButton, FlechaRoja, Selector } from '../../../../shared';
import './contact.css';
import { useForm } from './hooks/useForm';

const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const Contact = () => {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const [formSubmitted, setFormSubmitted] = useState(false);
        
    const formValidations = {
            fullName: [ (value: string) => value.length >= 1, '*Este dato es necesario para poder contactarte.' ],
            email: [ (value: string) => new RegExp(emailPattern).test(value), '*Revisa el correo que ingresaste, parece un formato no válido.' ],
            phone: [ (value: string) => value.length >= 10, '*Este dato es necesario para poder contactarte.' ],
            terms: [ (value: boolean) => value, '*Para continuar, por favor confirma haber leído nuestros términos y condiciones' ],
    }

    const formData = {
        fullName: '',
        email: '',
        phone: '',
        terms: false
    }

    const {
        fullName, 
        email,
        phone,
        terms,

        onInputChange,
        fullNameValid,
        emailValid,
        phoneValid,
        termsValid,
        isFormValid,
        onResetForm
    } = useForm( formData, formValidations );

    const onSubmitForm = ( event: any ) => {
        event.preventDefault();
        setFormSubmitted(true);
        if( !isFormValid ) return;
        submitForm();

        onResetForm();
        setFormSubmitted(false);
    }

    const submitForm = () => {
        console.log('hola Mundo');
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                console.log('visible');
            },
            {
                root: null,
                threshold: 0.1
            },
    
        );
        
        setIsVisible(!isVisible);
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
    
    
        return () => {
            if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
            }
        };
    }, []);

  return (
    <>
    <div>
        <section className="contact" ref={ sectionRef }>
            <div className="title-contact">
                <div className="first">
                    <h2 className= { `${isVisible ? 'reveal' : ''}` }>Da el primer paso</h2>
                    <img src={ FlechaRoja } alt="" className= { `flecha-roja ${isVisible ? 'reveal' : ''}` }/>
                </div>
                <div className="second">
                    <h2 className= { `${isVisible ? 'reveal' : ''}` }>para aumentar el </h2>
                </div>
                <div className="third">
                    <h2 className= { `third ${isVisible ? 'reveal' : ''}` }>valor de tu marca</h2>
                    <img src={ FiguraContacto } alt="" className= { `figura-contacto ${isVisible ? 'reveal' : ''}` } />
                </div>
            </div>
           

            <div className="form">
                <form onSubmit={onSubmitForm}>
                    <div className={`name ${isVisible ? 'reveal' : ''} `}>
                        <label htmlFor="name" className={ `${fullNameValid && formSubmitted ? 'text-danger' :  " "}` }>Nombre*</label>
                        <input type="text" id='name' name='fullName' value={ fullName } onChange={ onInputChange } placeholder='Ingresa nombre y apellido' />
                        <span className="p-0 text-danger">
                            {fullNameValid && formSubmitted ? fullNameValid : ""}
                        </span>
                    </div>
                    <div className={`email ${isVisible ? 'reveal' : ''}` }>
                        <label htmlFor="email" className={ `${emailValid && formSubmitted ? 'text-danger' :  " "}` }>Correo corporativo**</label>
                        <input type="text" id='email' name='email' value={ email } onChange={ onInputChange } placeholder='Ingresa tu correo corporativo' />
                        <span className="p-0 text-danger">
                            {emailValid && formSubmitted ? emailValid : ""}
                        </span>
                    </div>
                    <div className={`phone ${isVisible ? 'reveal' : ''}`}>
                        <label htmlFor="phone" className={ `${phoneValid && formSubmitted ? 'text-danger' :  " "}` }>Teléfono*</label>
                        <div className="code-input">
                            <select name="code" id="code">
                                <option value="+57">CO</option>
                                <option value="+1">USA</option>
                                <option value="+593">ECU</option>
                            </select>
                            <img src={ Selector } alt="" style={{ position: 'absolute', left: '4%', zIndex: -1 }} />
                            <input type="number" id='phone' name='phone' value={ phone } onChange={ onInputChange } placeholder='(+57)'></input>
                        </div>
                            <span className="p-0 text-danger">
                                {phoneValid && formSubmitted ? phoneValid : ""}
                            </span>
                    </div>
                    <div className={`message ${isVisible ? 'reveal' : ''}`} >
                        <label htmlFor="message">Mensaje (Opcional)</label>
                        <input type="text" id='message' placeholder='Cuéntanos como podemos ayudarte' />
                    </div>
                    <div className={`terms-submit ${isVisible ? 'reveal' : ''}`}>
                        <div className="terms">
                            <input type="checkbox" id='terms' name='terms' checked={ terms } onChange={ onInputChange } />
                            <label htmlFor="terms">Al enviar los datos proporcionados confirmo que he leído y aceptado los <a href="">términos legales</a> de este sitio web.</label>
                        </div>
                           
                        <div className="submit">
                            <Button 
                                texto='Enviar' 
                                urlIcon={ FlechaButton } 
                                backgroundColor={'#FF2951'}
                                hoverBackgroundColor={'#2A00FF'}
                                border={ '#FF2951' }
                                hoverBorderColor={ '#2A00FF' }
                            />
                        </div>

                    </div>
                    <span className="p-0 text-danger" style={{ width: '100%' }}>
                        {termsValid && formSubmitted ? termsValid : ""}
                    </span>

                </form>
            </div>
        </section>

    </div>
    </>
  )
}
