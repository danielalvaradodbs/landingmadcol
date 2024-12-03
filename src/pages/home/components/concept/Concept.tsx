
import { SectionObserver } from '../../../../components/header/SectionObserver';
import { FiguraAsterisco, Flecha, PildoraAzul, PildoraMagenta, VideoMad } from '../../../../shared';
import './concept.css';
import { useEffect, useRef, useState } from 'react';

export const Concept = () => {

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

  useEffect(() => {

    const video1: any = contentVideo.current;
    const video2: any = contentVideo2.current;

    setTimeout(() => {
      video1.classList.add("show");
      video2.classList.add("show");
    }, 0);

  }, []);

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

  const animateText = (text: any) => {
    return text.split('').map((letter: any, index: any) => (
      <span style={{ animationDelay: `${index * 70}ms` }} key={index}>
        {letter}
      </span>
    ));
  };
  
  return (
    <>
    <SectionObserver darkMode={ false }>
      <section className='concept' style={{ backgroundColor: 'white'}}>

        <div className="human ">
          <div className="text">
            <h1 className={`cssanimation ${showText.human ? 'leFadeInBottom' : ''}`}>
              {animateText('Human')}
            </h1>
            <img className='animate__animated animate__fadeInUpBig' src={ FiguraAsterisco } alt=""/>
          </div>
          <div className="video animation-video" ref={contentVideo}>
            <video src={ VideoMad } autoPlay={ true } loop muted></video>
          </div>
        </div>

        <div className="centered">
          <div className="video animation-video" ref={contentVideo2} >
            <video src={ VideoMad } ref={videoRef} autoPlay={ true } loop muted></video>
          </div>
          <div className="text">
            <h1 className={`cssanimation ${showText.centered ? 'leFadeInBottom' : ''}`} style={{ paddingRight: '10px'}}>
              {animateText('Centered')}

            </h1>
            <img className='animate__animated animate__fadeInUpBig' src={ PildoraAzul } alt="" /> 
            <img className='animate__animated animate__fadeInUpBig' src={ PildoraMagenta } alt="" />
          </div>
        </div>

        <div className="branding">
          <div className="text">
            <h1 className={`cssanimation ${showText.branding ? 'leFadeInBottom' : ''}`}>
              {animateText('Branding')}
            </h1>
            <img className='animate__animated animate__fadeInUpBig' src={ Flecha } alt="" />
          </div>
          <div className="video-mobile" style={{ display: 'none' }}>
            <video src={ VideoMad } autoPlay loop muted></video>
          </div>
          <div className="centro">
            <h5 className='animate__animated animate__fadeInUp animate__delay-1s  animate__faster'>// La marca es el todo,</h5>
            <h5 className='animate__animated animate__fadeInUp animate__delay-1s animate__fast'>el humano es el centro_</h5>
          </div>
        </div>

      </section>

    </SectionObserver>
    </>
  )
}
