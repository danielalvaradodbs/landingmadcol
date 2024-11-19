
import { FiguraAsterisco, Flecha, PildoraAzul, PildoraMagenta, VideoMad } from '../../../../shared';
import './concept.css';
import { useEffect, useRef } from 'react';

export const Concept = () => {

  const videoRef = useRef(null);
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
  
  return (
    <>
    <section className='concept' style={{ backgroundColor: 'white'}}>

      <div className="human">
        <h1>Human  <img src={ FiguraAsterisco } alt=""/></h1>
        <div className="video">
          <video src={ VideoMad } autoPlay={ true } loop muted></video>
        </div>
      </div>

      <div className="centered">
        <div className="video">
          <video src={ VideoMad } ref={videoRef} autoPlay={ true } loop muted></video>
        </div>
        <h1>Centered <img src={ PildoraAzul } alt="" /> <img src={ PildoraMagenta } alt="" /></h1>
      </div>

      <div className="branding">
        <h1>Branding <img src={ Flecha } alt="" /></h1>
        <div className="video-mobile" style={{ display: 'none' }}>
          <video src={ VideoMad } autoPlay loop muted></video>
        </div>
        <div className="centro">
          <h5>// La marca es el todo, <br />el humano es el centro_</h5>
        </div>
      </div>

    </section>
    </>
  )
}
