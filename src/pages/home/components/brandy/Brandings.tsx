import { GloboIcono, ScrollDownIcon, VideoBrandy } from '../../../../shared';
import './branding.css';
import { Button } from '../../../../components/button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const Brandings = () => {

    const { t } = useTranslation();

    const sendToSectionId = ( id: string ) => {
    
        if (window.fullpage_api) {
            window.fullpage_api.setFitToSection(false);
        }

        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        setVh();
        window.addEventListener('resize', setVh);
        return () => window.removeEventListener('resize', setVh);
    }, []);
   
    return (
        <>
            <section id="brandy" className="brandy">
                
                <video loop autoPlay muted src={ VideoBrandy }></video>
                <div className="text">
                    <div className="mask">
                        <h1>{t('brandy.noBrandy')}</h1>
                    </div>
                    <div className="mask">
                        <h1 dangerouslySetInnerHTML={{ __html: t('brandy.butYes') || <></> }}></h1>
                    </div>
                    
                    <div className="info">
                        <div className="mask">
                            <span>{ t('brandy.noFerment') }</span>
                        </div>
                        <div className="mask">
                            <span>{ t('brandy.bottle') }</span>  
                        </div>
                        <div className="mask">
                            <span>{t('brandy.brandings')}</span>
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