
import { useState } from 'react';
import { Button } from '../../../../components/button/Button';
import { FiguraContacto, FlechaButton, FlechaRoja, Selector } from '../../../../shared';
import './contact.css';
import { useForm } from './hooks/useForm';

const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const Contact = () => {
    
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

  return (
    <>
    <div>
        <section className="contact">
            <div className="title-contact">
                <h2>Da el primer paso para aumentar el valor de tu marca</h2>
                <img src={ FlechaRoja } alt="" className='flecha-roja'/>
                <img src={ FiguraContacto } alt="" className='figura-contacto' />
            </div>
           

            <div className="form">
                <form onSubmit={onSubmitForm}>
                    <div className="name">
                        <label htmlFor="name" className={ `${fullNameValid && formSubmitted ? 'text-danger' :  " "}` }>Nombre*</label>
                        <input type="text" id='name' name='fullName' value={ fullName } onChange={ onInputChange } placeholder='Ingresa nombre y apellido' />
                        <span className="p-0 text-danger">
                            {fullNameValid && formSubmitted ? fullNameValid : ""}
                        </span>
                    </div>
                    <div className="email">
                        <label htmlFor="email" className={ `${emailValid && formSubmitted ? 'text-danger' :  " "}` }>Correo corporativo**</label>
                        <input type="text" id='email' name='email' value={ email } onChange={ onInputChange } placeholder='Ingresa tu correo corporativo' />
                        <span className="p-0 text-danger">
                            {emailValid && formSubmitted ? emailValid : ""}
                        </span>
                    </div>
                    <div className="phone">
                        <label htmlFor="phone" className={ `${phoneValid && formSubmitted ? 'text-danger' :  " "}` }>Teléfono*</label>
                        <div className="code-input">
                            <select name="code" id="code">
                                <option value="+57">CO</option>
                                <option value="+1">USA</option>
                                <option value="+593">ECU</option>
                            </select>
                            {/* <img src={ Selector } alt="" style={{ position: 'absolute', left: '10%', zIndex: -1 }} /> */}
                            <input type="number" id='phone' name='phone' value={ phone } onChange={ onInputChange } placeholder='(+57)'></input>
                        </div>
                            <span className="p-0 text-danger">
                                {phoneValid && formSubmitted ? phoneValid : ""}
                            </span>
                    </div>
                    <div className="message">
                        <label htmlFor="message">Mensaje (Opcional)</label>
                        <input type="text" id='message' placeholder='Cuéntanos como podemos ayudarte' />
                    </div>
                    <div className="terms-submit">
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
