import { GloboIcono, ScrollDownIcon, VideoBrandy } from '../../../../shared';
import './branding.css';
import { Button } from '../../../../components/button/Button';

export const Brandings = () => {

    const sendToSectionId = ( id: string ) => {
    
        if (window.fullpage_api) {
            window.fullpage_api.setFitToSection(false);
        }

        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
   
    return (
        <>
            <section id="brandy" className="brandy">
                
                <video loop autoPlay muted controls src={ VideoBrandy }></video>
                <div className="text">
                    <div className="mask">
                        <h1>No hacemos Brandy, pero si</h1>
                    </div>
                    <div className="mask">
                        <h1><strong>branding</strong> y <strong>¡del bueno!</strong></h1>
                    </div>


                    
                    <div className="info">
                        <div className="mask">
                            <span>Nosotros no fermentamos, destilamos ideas. No</span>
                        </div>
                        <div className="mask">
                            <span>embotellamos, creamos identidad. No solo diseñamos,</span>  
                        </div>
                        <div className="mask">
                            <span>construimos marcas.</span>
                        </div>
                    </div>

                    <div className="mask">
                        <img src={ GloboIcono } alt="Globo-icono" />
                    </div>
                </div>

                <div className="button-brandy">
                    <Button 
                        texto='Scroll'
                        width='69px'
                        height='36px'
                        urlIcon={ ScrollDownIcon }
                        backgroundColor='rgba(255, 255, 255, 0.20)'
                        hoverBorderColor='#7595B6'
                        hoverBackgroundColor='#7595B6'
                        border='none'
                        onClick={ () => sendToSectionId('#concept') }

                    ></Button>
                </div>
            </section>

        </>
    );
};