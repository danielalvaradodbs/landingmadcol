import { Button } from '../../../../components/button/Button';
import { useInView } from '../../../../hooks/useInView';
import { FlechaBlue } from '../../../../shared';
import { Books, Diamond, FigureHero, HeroHowDoIt, HeroHuman, Settings, Spinner } from '../../../../shared/howDoIt';
import './howDoIt.css';

export const HowDoIt = () => {

    const { ref: sectionRef, isVisible } = useInView({
        threshold: 0.1
    });

  return (
    <>
        <div 
            id='howDoIt' ref={ sectionRef } 
            className={`howDoIt ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}
        >
            <div className="title">
                <h2>¿Cómo <br/> lo <strong>hacemos?</strong></h2>
                <span>NUESTRA<br/>METODOLOGÍA</span>
            </div>
            <div className="hero">
                <img src={ HeroHowDoIt } className='background'  width={'100%'} alt="" />
                <div className="content">
                    <img src={ FigureHero } alt="" />
                    <h1>La marca es el todo, el <br/> humano es el centro.</h1>
                </div>
            </div>
            <div className="humanCentered">
                <h2>Esto es <strong>Human Centered Branding,</strong> la metodología de <strong>Mad Critter®</strong> que ve tu marca como un sistema vivo, poniendo <strong>al usuario en el centro de cada acción</strong> para transformar resultados.</h2>
            </div>
            <div className="items">
                <div className="cols">
                    <div className="col-one">
                        <img src={ Books } alt="" />
                        <span>01.</span>
                        <h2>Inmersión</h2>
                        <p>Talleres prácticos y análisis profundo de tu marca y usuarios, para <strong>detectar lo que otros no ven y definir objetivos claros.</strong></p>
                    </div>
                    <div className="col-two">
                        <img src={ Spinner } alt="" />
                        <span>02.</span>
                        <h2>Co-creación</h2>
                        <p>Diseñamos conceptos, contenidos e identidades basados en <strong>insights que realmente diferencian y conectan.</strong></p>
                    </div>
                    <div className="col-three">
                        <img src={ Settings } alt="" />
                        <span>03.</span>
                        <h2>Implementación</h2>
                        <p>Ejecutamos las ideas de <strong>manera coherente en cada punto de contacto,</strong> medimos impacto y ajustamos para <strong>maximizar resultados y aportar al aumento</strong> de tu participación en el mercado.</p>
                    </div>

                </div>
            </div>

            <div className="cardSection">
                <div className="card">
                    <div className="content">
                        <div className="image">
                            <img src={ Diamond } alt="" />
                        </div>
                        <div className="description">
                            <h2>El resultado</h2>
                            <p>Una marca que <strong>conecta, genera valor real y crece</strong> de forma sostenible.</p>
                        </div>
                    </div>
                </div>
                <div className="humanCentered">
                    <img src={ HeroHuman } alt="" />
                    <div className="content">
                        <p>Te acompañamos a cuestionar y romper esquemas en tu comunicación visual, verbal y cultural.</p>
                        <p>-</p>
                        <h3>Conoce cómo <strong>Human Centered Branding</strong> puede transformar tu marca.</h3> <br/>
                         <Button
                            texto='Agenda una reunión'
                            urlIcon={ FlechaBlue }
                            hoverBorderColor={'#101820'}
                            backgroundColor={'#fff'}
                            hoverBackgroundColor={'#101820'}
                            // border={'#101820'}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
