
import { VideoMad } from '../../../../shared';
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
        <h1>Human</h1>
        <div className="video">
          <video src={ VideoMad } autoPlay={ true } loop muted></video>
        </div>
      </div>

      <div className="centered">
        <div className="video">
          <video src={ VideoMad } ref={videoRef} autoPlay={ true } loop muted></video>
        </div>
        <h1>Centered</h1>
      </div>

      <div className="branding">
        <h1>Branding</h1>
        <div className="centro">
          <h5>// La marca es el todo, <br />el humano es el centro_</h5>
        </div>
      </div>

    </section>
    </>
  )
}
