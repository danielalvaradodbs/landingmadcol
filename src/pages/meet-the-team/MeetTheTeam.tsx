import { useEffect, useRef, useState } from 'react';
import './meet-the-team.css';
import { BackButtonFigureBlue, BackButtonFigureWhite, logosMadcritter, meetTheTeam, TheTeamImage } from '../../shared';
import { gsap } from 'gsap';
import { Button } from '../../components/button/Button';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const MeetTheTeam = () => {

    const { i18n } = useTranslation();

    const { t } = useTranslation();
    const button = useRef(null);
    const [isHover, setIsHover] = useState(false);
    const teamRefs = useRef<any>([]);
    const mcRef = useRef<any>();
    const [firstCharge, setFirstCharge] = useState(true);

    const currentPath = useLocation();

    useEffect(() => {
        const buttonCurrent: any = button.current;

        if (buttonCurrent) {
            buttonCurrent.addEventListener('mouseover', () => setIsHover(true));
            buttonCurrent.addEventListener('mouseout', () => setIsHover(false));
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.2 });
                } else {
                    gsap.to(entry.target, { opacity: 0, y: 50, duration: 0.2 });
                }
            });
        });

        if(firstCharge) {
            setTimeout(() => {
                teamRefs.current.forEach((ref: any) => {
                    if (ref) observer.observe(ref);
                });
        
                if(mcRef) observer.observe(mcRef.current);
                setFirstCharge(false);
            }, 900);

        }

        return () => {
            teamRefs.current.forEach((ref: any) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const sendToLink = ( link: string ) => {
        window.location.href = link;
    }

    const handleMouseEnter = () => {
        setIsHover(!isHover);
    };
    
    const handleMouseLeave = () => {
        setIsHover(!isHover);
    };

    useEffect(() => {
        const preFooter: any = document.querySelector('.pre-footer');
        if( currentPath.pathname === '/meet-the-team' ) {
            preFooter.style.display = 'none'
        }
    }, []);

    return (
        <section className="meet-the-team">
            <div className="button-back" style={{gap: '5px'}}>
                <Button
                    texto={t('meetTheTeam.button')}
                    backgroundColor='rgba(255, 255, 255, 0.20)'
                    hoverBorderColor='#FF2951'
                    hoverBackgroundColor='#FF2951'
                    urlIcon={ isHover ? BackButtonFigureWhite : BackButtonFigureBlue  }
                    onClick= { () => sendToLink('/') }
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                />

                 <Button
                    texto='Español'
                    backgroundColor='rgba(255, 255, 255, 0.20)'
                    hoverBorderColor='#FF2951'
                    hoverBackgroundColor='#FF2951'
                    onClick={() => i18n.changeLanguage('es')}
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                />
                <Button
                    texto='English'
                    backgroundColor='rgba(255, 255, 255, 0.20)'
                    hoverBorderColor='#FF2951'
                    hoverBackgroundColor='#FF2951'
                    onClick={() => i18n.changeLanguage('en')}
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                />
               
            </div>
            <div className='img-text'>
                <img className='animate__animated animate__fadeInUp animate__faster' style={{ width: '100%' }} src={logosMadcritter.logoMad.logo} alt={logosMadcritter.logoMad.alt} />
                <p className='animate__animated animate__fadeInUp animate__fast'>{t('meetTheTeam.present')}</p>
            </div>
            <div className="the-team-image">
                <img className='animate__animated animate__fadeInUp' width={'100%'} src={TheTeamImage} alt="The Mad Team" />
            </div>

            <span className='exito animate__animated animate__fadeInUp animate__delay-1s'>
                <i dangerouslySetInnerHTML={{ __html: t('meetTheTeam.subTitle') || <></> }}></i>
            </span>

            <span className='conoce-the-team animate__animated animate__fadeInUp animate__delay-1s' dangerouslySetInnerHTML={{__html: t('meetTheTeam.team')}}></span>

            { meetTheTeam.map((item, index) => (
                <div 
                    className="conoce" 
                    key={index} 
                    ref={el => teamRefs.current[index] = el} 
                    style={{ opacity: 0, transform: 'translateY(50px)', transition: 'opacity 0.5s ease-in-out' }}
                >
                    <div className="name">
                        <h1>{item.name}</h1>
                    </div>
                    <div className="cargo">
                        <span>{t(item.cargo)}</span>
                    </div>
                </div>
            ))}


            <span>-</span>
            <div className="logo-mad" ref={ mcRef }>
                <img src={logosMadcritter.logoWhite.logo} alt={logosMadcritter.logoWhite.alt} />
            </div>
        </section>
    );
};
