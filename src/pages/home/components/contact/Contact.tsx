
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../../../components/button/Button';
import { FiguraContacto, FlechaButton, FlechaRoja, Selector } from '../../../../shared';
import './contact.css';
import { useForm } from './hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';

const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const Contact = () => {

    const currentPath = useLocation();
    const navigate = useNavigate();
    const sectionRef: any = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const [labelColor, setLabelColor] = useState({ fullName: 'white', email: 'white', phone: 'white', message: 'white' });

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
        code= '+57',
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
        navigate('/thanks-contact')
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
                const clients: any = document.querySelector('.clients');
                if ( clients ) {
                    clients.style.backgroundColor = entry.isIntersecting ? '#101820' : '#FFFFFF';
                    sectionRef.current.style.backgroundColor = entry.isIntersecting ? '#101820' : '#FFFFFF';

                }

                const clientHeaders: any = document.querySelector('.clients h2');
                const clientImg: any = document.querySelectorAll('.clients .slider-brands .brand img');
                const contactHeaders: any = document.querySelector('.contact h2');
                clientHeaders.style.color = entry.isIntersecting ? 'white' : '#000000'; 
                contactHeaders.style.color = entry.isIntersecting ? 'white' : '#000000';

                clientImg.forEach((img: any) => {
                    img.style.filter = entry.isIntersecting ? 'invert()' : 'none';
                });

            },
            {
                root: null,
                threshold: 0.2
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

    useEffect(() => {
        const footer: any = document.querySelector('.pre-footer');

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);

                // footer.style.backgroundColor = !entry.isIntersecting ? '#101820' : '#FFFFFF';
                // sectionRef.current.style.backgroundColor = !entry.isIntersecting ? '#101820' : '#FFFFFF';

                
                if( entry.isIntersecting ) {
                    sectionRef.current.classList.add('contact-hidden');
                    footer.classList.remove('footer-hidden');

                    // footer.style.backgroundColor = !entry.isIntersecting ? '#101820' : '#FFFFFF';
                } else {
                    sectionRef.current.classList.remove('contact-hidden');
                    footer.classList.add('footer-hidden');

                    // footer.style.backgroundColor = !entry.isIntersecting ? '#101820' : '#FFFFFF';
                }
            },
            {
                root: null,
                threshold: 0.3
            },
    
        );
        
        setIsVisible(!isVisible);
        if (footer) {   
            observer.observe(footer);
        }
    
    
        return () => {
            if (footer) {
            observer.unobserve(footer);
            }
        };
    }, []);

    const handleFocus = (field: any) => {
        setLabelColor(prev => ({ ...prev, [field]: '#415970' }));
    };

    const handleBlur = (field: any) => {
        setLabelColor(prev => ({ ...prev, [field]: 'white' }));
    };

    useEffect(() => {
        const preFooter: any = document.querySelector('.pre-footer');
        if( currentPath.pathname !== '/meet-the-team' ) {
            preFooter.style.display = 'block'
        }
    }, []);

  return (
    <>
    <div>
        <section className="contact" ref={ sectionRef } id='contact'>
            <div className="title-contact">
                <div className="first">
                    <h2 className= { `${isVisible ? 'reveal' : ''}` }>Da el primer paso</h2>
                    <img src={ FlechaRoja } alt="" className= { `flecha-roja ${isVisible ? 'reveal' : ''}` }/>
                </div>
                <div className="second">
                    <h2 className= { `${isVisible ? 'reveal' : ''}` }>para aumentar el </h2>
                </div>
                <div className="third" style={{ position: 'relative' }}>
                    <h2 className= { `third ${isVisible ? 'reveal' : ''}` }>valor de tu marca</h2>
                    <img src={ FiguraContacto } alt="" className= { `figura-contacto ${isVisible ? 'reveal' : ''}` } />
                </div>
            </div>
           

            <div className="form">
                <form onSubmit={onSubmitForm}>
                    <div className={`name ${isVisible ? 'reveal' : ''} `}>
                        <label 
                            htmlFor="name" 
                            className={ `${fullNameValid && formSubmitted ? 'text-danger' :  " "}` }
                            style={{ color: labelColor.fullName }}
                        >
                            Nombre*
                        </label>
                        <input 
                            type="text" 
                            id='name' 
                            name='fullName' 
                            value={ fullName } 
                            onChange={ onInputChange } 
                            onFocus={() => handleFocus('fullName')}
                            onBlur={() => handleBlur('fullName')} 
                            placeholder='Ingresa nombre y apellido' />
                        <span className="p-0 text-danger">
                            {fullNameValid && formSubmitted ? fullNameValid : ""}
                        </span>
                    </div>
                    <div className={`email ${isVisible ? 'reveal' : ''}` }>
                        <label 
                            style={{ color: labelColor.email }} 
                            htmlFor="email" 
                            className={ `${emailValid && formSubmitted ? 'text-danger' :  " "}` }>Correo corporativo*</label>
                        <input 
                            onFocus={() => handleFocus('email')}
                            onBlur={() => handleBlur('email')} 
                             type="text" 
                             id='email' 
                             name='email' 
                             value={ email } onChange={ onInputChange } placeholder='Ingresa tu correo corporativo' />
                        <span className="p-0 text-danger">
                            {emailValid && formSubmitted ? emailValid : ""}
                        </span>
                    </div>
                    <div className={`phone ${isVisible ? 'reveal' : ''}`}>
                        <label 
                            htmlFor="phone" 
                            className={ `${phoneValid && formSubmitted ? 'text-danger' :  " "}` }
                            style={{ color: labelColor.phone }}
                            >Teléfono*</label>
                        <div className="code-input">
                            <div className="container" style={{ position: 'relative' }}>

                                <select name="code" id="code" value={ code } onChange={ onInputChange }>
                                    <option value="+57">CO</option>
                                    <option value="+1">USA</option>
                                    <option value="+593">ECU</option>
                                </select>
                                <img src={ Selector } alt="" style={{ position: 'absolute', left: '30%', zIndex: -1 }} />
                                <span style={{ width: '1px', height: '16px', backgroundColor: 'white', margin: 0, marginRight: '11px' }}></span>
                                <label htmlFor='phone' className='value-code'>({ code })</label>    

                            </div>
                            <input 
                                type="number" 
                                id='phone' 
                                name='phone' 
                                value={ phone } 
                                onChange={ onInputChange }
                                onFocus={() => handleFocus('phone')}
                                onBlur={() => handleBlur('phone')} 
                                placeholder=''></input>
                        </div>
                            <span className="p-0 text-danger">
                                {phoneValid && formSubmitted ? phoneValid : ""}
                            </span>
                    </div>
                    <div className={`message ${isVisible ? 'reveal' : ''}`} >
                        <label style={{ color: labelColor.message }} htmlFor="message">Mensaje (Opcional)</label>
                        <input 
                            onFocus={() => handleFocus('message')}
                            onBlur={() => handleBlur('message')} 
                            type="text" 
                            id='message' 
                            placeholder='Cuéntanos como podemos ayudarte'
                        />
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
