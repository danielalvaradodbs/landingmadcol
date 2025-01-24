import { useEffect, useRef, useState } from 'react';
import './meet-the-team.css';
import { BackButtonFigureBlue, BackButtonFigureWhite, logosMadcritter, meetTheTeam, TheTeamImage } from '../../shared';
import { gsap } from 'gsap';
import { Button } from '../../components/button/Button';

export const MeetTheTeam = () => {
    const button = useRef(null);
    const [isHover, setIsHover] = useState(false);
    const teamRefs = useRef<any>([]);
    const mcRef = useRef<any>();
    const [firstCharge, setFirstCharge] = useState(true);

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

    return (
        <section className="meet-the-team">
            <div className="button-back">
                <Button
                    texto='Volver'
                    backgroundColor='rgba(255, 255, 255, 0.20)'
                    hoverBorderColor='#FF2951'
                    hoverBackgroundColor='#FF2951'
                    urlIcon={ isHover ? BackButtonFigureWhite : BackButtonFigureBlue  }
                    onClick= { () => sendToLink('/') }
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                />
            </div>
            <div className='img-text'>
                <img className='animate__animated animate__fadeInUp animate__faster' style={{ width: '100%' }} src={logosMadcritter.logoMad.logo} alt={logosMadcritter.logoMad.alt} />
                <p className='animate__animated animate__fadeInUp animate__fast'>PRESENTA</p>
            </div>
            <div className="the-team-image">
                <img className='animate__animated animate__fadeInUp' width={'100%'} src={TheTeamImage} alt="The Mad Team" />
            </div>

            <span className='exito animate__animated animate__fadeInUp animate__delay-1s'>
                <i>“El éxito de una <strong>gran marca</strong> comienza <br /> con <strong>el talento</strong> que la impulsa.”</i>
            </span>

            <span className='conoce-the-team animate__animated animate__fadeInUp animate__delay-1s'>
                Conoce a nuestro equipo, los protagonistas y creadores que hacen <br />
                <strong>posible cada proyecto.</strong><br />
                -
            </span>

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
                        <span>{item.cargo}</span>
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
