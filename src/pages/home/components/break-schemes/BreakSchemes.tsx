import { useEffect, useRef, useState } from 'react';
import { Button } from '../../../../components/button/Button';
import { FlechaBlue, PlusBlue } from '../../../../shared';
import { VideoMad } from '../../../../shared';
import './breakSchemes.css';
import { BtnPlay } from '../../../../shared/images';
import { useTranslation } from 'react-i18next';

export const BreakSchemes = () => {

    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef(null);
    const contentVideo = useRef(null);
    const startTime = 4;

    const { t } = useTranslation();

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

    useEffect(() => {
        const video: any = videoRef.current;
    
        const handleLoadedMetadata = () => {
          video.currentTime = startTime;
          video.play();
    
        };
        video.addEventListener("loadedmetadata", handleLoadedMetadata);
      
        return () => {
          video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
      }, [startTime]);


  return (
    <>
        <div className="breakSchemes">
            <div className="title">
                <h2 dangerouslySetInnerHTML={{ __html: t('schemes.title') }}></h2>
            </div>
            <div className="description">
                <p dangerouslySetInnerHTML={{ __html: t('schemes.challenge')}}></p><br/>
                <p dangerouslySetInnerHTML={{ __html: t('schemes.agency')}}></p>
            </div>
            <div className="buttons">
                <Button
                    texto={ t('schemes.buttonMethod') }
                    urlIcon={ FlechaBlue }
                    hoverBorderColor={'#101820'}
                    backgroundColor={'#fff'}
                    hoverBackgroundColor={'#101820'}
                    onClick={() => linkToSection('howDoIt')}

                    // border={'#101820'}
                />
                <Button
                    texto={ t('schemes.buttonMeeting') }
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
                <div className="video animation-video" ref={ contentVideo }>
                        <video 
                            className='showVideo' 
                            src={ VideoMad } 
                            autoPlay={true}
                            loop 
                            muted
                            width={'100%'}
                            controls={ false }
                            ref={ videoRef }
                            playsInline
                            style={{ borderRadius: '10px' }}
                            onClick={() => setShowVideo(true)}
                        ></video>
                        <div className="btnPlay-container">
                            <img
                                src={ BtnPlay }
                                alt="Botón play del video"
                                className="btnPlay"
                                onClick={() => setShowVideo(true)}
                            />
                        </div>
                    </div>
                    
                    
                )}
                { showVideo &&(
                    <div className="video-modal">
                        <div className="video-modal-content">
                            <button className="video-close" onClick={() => setShowVideo(false)}>✕</button>
                            <iframe
                                src="https://player.vimeo.com/video/1158545630?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                style={{ width: "100%", height: "100%", border: "none" }}
                                allow="autoplay; fullscreen; picture-in-picture"
                                title="Mad Critter Video"
                            ></iframe>
                        </div>
                    </div>
                // <div className="vimeo-container">
                //         <iframe
                //             src="https://player.vimeo.com/video/1058048282?h=3c3e34c78c&autoplay=1&title=0&byline=0&portrait=0"
                //             style={{
                //                 width: "100%",
                //                 height: "100%",
                //                 border: "none",
                //             }}
                //             allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                //             referrerPolicy="strict-origin-when-cross-origin"
                //             title="Mad Critter Video"
                //         ></iframe>
                //     </div>
                )}

            </div>
        </div>
    </>
  )
}
