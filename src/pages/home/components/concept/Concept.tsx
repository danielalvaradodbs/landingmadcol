
import { VideoMad } from '../../../../shared';
import './concept.css';
import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDarkMode } from '../../../../hooks/DarkModeContext';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export const Concept = () => {

  const { setIsDark } = useDarkMode();
  const { t } = useTranslation();
  

  const videoRef = useRef(null);
  const contentVideo = useRef(null);
  const contentVideo2 = useRef(null);
  const startTime = 4;

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

   const [showText, setShowText] = useState({
    human: false,
    centered: false,
    branding: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setShowText(prev => ({ ...prev, human: true }));
      setTimeout(() => {
        setShowText(prev => ({ ...prev, centered: true }));
        setTimeout(() => {
          setShowText(prev => ({ ...prev, branding: true }));
        }, 300);
      }, 200);
    }, 100);

  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray('.concept');


    sections.forEach((section: any) => {
    const h1Span = document.querySelectorAll('.concept .text h1 span');
    const h5Text = document.querySelectorAll('.concept .centro h5');
    const video = document.querySelectorAll('.concept .video video');
    const figures = document.querySelectorAll('.concept img');
    const texto = document.querySelectorAll('.concept .second-section p');
    const textoH5 = document.querySelectorAll('.concept .second-section h5');
    // const imgs = document.querySelectorAll('.concept img');

      ScrollTrigger.create({
        trigger: section,
        start: 'top 90%',
        onEnter: () => {
          h1Span.forEach( (span: any) => span.classList.remove('animationText'));
          video.forEach( (video: any) => video.classList.remove('showVideo'));
          h5Text.forEach( (h5Text: any) => h5Text.classList.remove('animate__fadeInUpBig'));
          figures.forEach( (figures: any) => figures.classList.remove('animate__fadeInUp'));
          texto.forEach( (text: any) => text.classList.remove('animationText'));
          textoH5.forEach( (text: any) => text.classList.remove('animate__fadeInUpBig'));
          setTimeout(() => {
            h1Span.forEach( (span: any) => span.classList.add('animationText'));
            video.forEach( (video: any) => video.classList.add('showVideo'));
            h5Text.forEach( (h5Text: any) => h5Text.classList.add('animate__fadeInUpBig'));
            figures.forEach( (figures: any) => figures.classList.add('animate__fadeInUp'));
            texto.forEach( (text: any) => text.classList.add('animationText'));
            textoH5.forEach( (text: any) => text.classList.add('animate__fadeInUpBig'));


          }, 100);
        },
        onLeaveBack: () => {
          setIsDark(true);
          h1Span.forEach( (span: any) => span.classList.remove('animationText'));
          video.forEach( (video: any) => video.classList.remove('showVideo'));
          h5Text.forEach( (h5Text: any) => h5Text.classList.remove('animate__fadeInUpBig'));
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const animateText = (text: any) => {
    return text.split('').map((letter: any, index: any) => (
      <span className='animationText' style={{ animationDelay: `${index * 70}ms` }} key={ index }>
        { letter }
      </span>
    ));
  };
  
  
  return (
    <>
    {/* <SectionObserver darkMode={ false } > */}
      <section className='concept section-concept' id='concept' style={{ backgroundColor: 'white'}}>

      <div className="first-section">
        <div className="human ">
          <div className="text">
            <h1 className={`cssanimation ${ showText.human ? 'leFadeInBottom' : ''}`}>
              {animateText('Human')}
            </h1>
            {/* <img className='animate__animated animate__fadeInUp' src={ FiguraAsterisco } alt=""/> */}
          </div>
          <div className="video animation-video" ref={ contentVideo }>
            <video 
              className='showVideo' 
              src={ VideoMad } 
              autoPlay={true}
              loop 
              muted
              controls={false}
              playsInline
            ></video>
          </div>
        </div>

        <div className="centered">
          <div className="video animation-video" ref={ contentVideo2 } >
            <video 
              className='showVideo' 
              src={ VideoMad } 
              ref={ videoRef } 
              autoPlay={true}
              loop 
              muted
              controls={false}
              playsInline
            ></video>
          </div>
          <div className="text">
            <h1 className={`cssanimation ${ showText.centered ? 'leFadeInBottom' : ''}`}>
              {animateText('Centered')}

            </h1>
            {/* <img className='animate__animated animate__fadeInUp' src={ PildoraAzul } alt="" /> 
            <img className='animate__animated animate__fadeInUp' src={ PildoraMagenta } alt="" /> */}
          </div>
        </div>

        <div className="branding">
          <div className="text">
            <div className="line">
              <h1 className={`cssanimation ${ showText.branding ? 'leFadeInBottom' : ''}`}>
                {animateText('Branding')}
              </h1>              
            </div>
            {/* <img className='animate__animated animate__fadeInUp' src={ Flecha } alt="" /> */}
          </div>

          <div className="video-mobile" style={{ display: 'none' }}>
            <video 
              className='showVideo' 
              src={ VideoMad } 
              autoPlay={true}
              loop 
              muted
              controls={false}
              playsInline
            ></video>
          </div>
          <div className="centro">
             <h1 className={`cssanimation ${ showText.branding ? 'leFadeInBottom' : ''}`}>
                {animateText('—')}
              </h1>
           
          </div>
        </div>
        <div className="second-section">
          <p dangerouslySetInnerHTML={{ __html: t('concept.yearsOld') || <></> }}></p><br/>
          <p dangerouslySetInnerHTML={{ __html: t('concept.guide') || <></> }}></p>
          <h5 className='animate__animated animate__fadeInUpBig'>{t('humanCentered.brand')}</h5>
        </div>

      </div>

      </section>

    {/* </SectionObserver> */}
    </>
  )
}
