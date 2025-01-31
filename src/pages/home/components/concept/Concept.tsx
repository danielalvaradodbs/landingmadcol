
import { SectionObserver } from '../../../../components/header/SectionObserver';
import { FiguraAsterisco, Flecha, PildoraAzul, PildoraMagenta, VideoMad } from '../../../../shared';
import './concept.css';
import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDarkMode } from '../../../../hooks/DarkModeContext';

gsap.registerPlugin(ScrollTrigger);

export const Concept = () => {

    const { setIsDark } = useDarkMode();
  

  const videoRef = useRef(null);
  const contentVideo = useRef(null);
  const contentVideo2 = useRef(null);
  const startTime = 4;

  //  const [isFirstRender, setIsFirstRender] = useState(true);

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

  // useEffect(() => {

  //   const video1: any = contentVideo.current;
  //   const video2: any = contentVideo2.current;

  //   setTimeout(() => {
  //     video1.classList.add("show");
  //     video2.classList.add("show");
  //   }, 0);

  // }, []);

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
    const figures = document.querySelectorAll('.concept img')
    // const imgs = document.querySelectorAll('.concept img');

      ScrollTrigger.create({
        trigger: section,
        start: 'top 90%',
        onEnter: () => {
          h1Span.forEach( (span: any) => span.classList.remove('animationText'));
          video.forEach( (video: any) => video.classList.remove('showVideo'));
          h5Text.forEach( (h5Text: any) => h5Text.classList.remove('animate__fadeInUpBig'));
          figures.forEach( (figures: any) => figures.classList.remove('animate__fadeInUp'));
          setTimeout(() => {
            h1Span.forEach( (span: any) => span.classList.add('animationText'));
            video.forEach( (video: any) => video.classList.add('showVideo'));
            h5Text.forEach( (h5Text: any) => h5Text.classList.add('animate__fadeInUpBig'));
            figures.forEach( (figures: any) => figures.classList.add('animate__fadeInUp'));
          }, 100);
          // imgs.forEach( (img: any ) => img.classList.add('animate__fadeInUpBig'));
        },
        onLeaveBack: () => {
          setIsDark(true);
          h1Span.forEach( (span: any) => span.classList.remove('animationText'));
          video.forEach( (video: any) => video.classList.remove('showVideo'));
          h5Text.forEach( (h5Text: any) => h5Text.classList.remove('animate__fadeInUpBig'));
          // imgs.forEach( (img: any ) => img.classList.remove('animate__fadeInUpBig'));
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
    <SectionObserver darkMode={ false } >
      <section className='concept section-concept' id='concept' style={{ backgroundColor: 'white'}}>

        <div className="human ">
          <div className="text">
            <h1 className={`cssanimation ${ showText.human ? 'leFadeInBottom' : ''}`}>
              {animateText('Human')}
            </h1>
            <img className='animate__animated animate__fadeInUp' src={ FiguraAsterisco } alt=""/>
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
            <img className='animate__animated animate__fadeInUp' src={ PildoraAzul } alt="" /> 
            <img className='animate__animated animate__fadeInUp' src={ PildoraMagenta } alt="" />
          </div>
        </div>

        <div className="branding">
          <div className="text">
            <h1 className={`cssanimation ${ showText.branding ? 'leFadeInBottom' : ''}`}>
              {animateText('Branding')}
            </h1>
            <img className='animate__animated animate__fadeInUp' src={ Flecha } alt="" />
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
            <h5 className='animate__animated animate__fadeInUpBig   animate__faster'>// La marca es el todo,</h5>
            <h5 className='animate__animated animate__fadeInUpBig animate__fast'>el humano es el centro_</h5>
          </div>
        </div>

      </section>

    </SectionObserver>
    </>
  )
}
