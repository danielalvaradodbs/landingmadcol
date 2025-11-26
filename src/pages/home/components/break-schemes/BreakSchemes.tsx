import { useState } from 'react';
import { Button } from '../../../../components/button/Button';
import { FlechaBlue, PlusBlue } from '../../../../shared';
import { Hero } from '../../../../shared/images';
import './breakSchemes.css';

export const BreakSchemes = () => {

    const [showVideo, setShowVideo] = useState(false);

    const linkToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`No existe un elemento con id "${id}"`);
        }
    }

    const goToExternalLink = (url: string) => {
        window.open(url, "_blank"); 
    };


  return (
    <>
        <div className="breakSchemes">
            <div className="title">
                <h2>Romper esquemas es <strong>lo que necesita<br/> una marca</strong> para diferenciarse.</h2>
            </div>
            <div className="description">
                <p>La tuya está lista para hacerlo: <strong>desafiemos lo establecido y hagámoslo diferente.</strong></p><br/>
                <p>Como agencia de <strong>branding, digital y de diseño,</strong> te acompañamos a transformar lo que tu <br /> marca <strong>comunica, transmite y despierta</strong> en las personas.</p>
            </div>
            <div className="buttons">
                <Button
                    texto='Conoce nuestra metodología'
                    urlIcon={ FlechaBlue }
                    hoverBorderColor={'#101820'}
                    backgroundColor={'#fff'}
                    hoverBackgroundColor={'#101820'}
                    onClick={() => linkToSection('howDoIt')}

                    // border={'#101820'}
                />
                <Button
                    texto='Agenda una reunión'
                    urlIcon={ PlusBlue }
                    hoverBorderColor={'#101820'}
                    backgroundColor={'#101820'}
                    hoverBackgroundColor={'#fff'}
                    onClick={() => 
                        goToExternalLink(
                            "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ12euwb2Uy1UvzhRF_SQdolpkv5jfrBY0_NtP-CMtacwbBKrYClgozZjtZrnPtdbYXLzfZmrI0F"
                        )
                    }
                    // border={'#101820'}
                />
            </div>
            <div className="hero">
                { !showVideo &&(
                    <img
                        src={Hero}
                        style={{ width: '100%' }}
                        alt="Portada del video"
                        className="video-cover"
                        onClick={() => setShowVideo(true)}
                    />
                )}
                { showVideo &&(
                <div className="vimeo-container">
                        <iframe
                            src="https://player.vimeo.com/video/1058048282?h=3c3e34c78c&autoplay=1&title=0&byline=0&portrait=0"
                            style={{
                                width: "100%",
                                height: "100%",
                                border: "none",
                            }}
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            title="Mad Critter Video"
                        ></iframe>
                    </div>
                )}

            </div>
        </div>
    </>
  )
}
