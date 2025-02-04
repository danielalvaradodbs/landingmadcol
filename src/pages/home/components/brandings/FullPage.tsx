import { useEffect, useRef, useState } from 'react';
import { useDarkMode } from '../../../../hooks/DarkModeContext';
import { brandings, IconPlus, ScrollDownIcon, ScrollDownIconMobile } from '../../../../shared';
import './fullpage.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Button } from '../../../../components/button/Button';
// import { Concept } from '../concept/Concept';
declare global {
    interface Window {
        fullpage_api: any;
    }
}

export const FullPage = () => {

    const { setIsDark } = useDarkMode();
    const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
    let [currentIndex, setCurrentIndex] = useState(0);
    const previousIndexRef = useRef(0);
    

    const imagesRef = useRef<{ [key: string]: HTMLImageElement }>({});

    useEffect(() => {
        preloadImages(brandings.map(item => item.imageHover));
    }, []);
    

    useEffect(() => {
        if (window.fullpage_api) {
          window.fullpage_api.setAutoScrolling(true);
          window.fullpage_api.setFitToSection(true);
        }
    
        return () => {
          if (window.fullpage_api) {
            window.fullpage_api.setAutoScrolling(false);
            window.fullpage_api.setFitToSection(false);
          }
        };
      }, []);

    const sendToLink = ( link: string ) => {
        window.open(link, '_blank');
    }

    const sendToSectionId = ( id: string ) => {

        // if (window.fullpage_api) {
        //     window.fullpage_api.setFitToSection(false);
        // }
    
        // console.log(id);
        const section = document.querySelector(id);
        if (section) {
            brandings[2].isDark = false;
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        setTimeout(() => {
            if (window.fullpage_api) {
                window.fullpage_api.setFitToSection(false);
                brandings[2].isDark = true;
            }
        }, 0);
    }

    useEffect(() => {
        console.log(window.location);
        if( window.location.hash ) {
            console.log('hi');
            setTimeout(() => {
                sendToSectionId(window.location.hash);
                
            }, 1000);
        }
    }, []);
    
      const handleMouseEnter = (index: number) => {
        setHoveredPanel(index);
      };
    
      const handleMouseLeave = () => {
        setHoveredPanel(null);
      };

      const resetAnimations = (isScrollingUp: any) => {
        const sectionElements = document.querySelectorAll('.mask, .animationInUp');
    
        sectionElements.forEach((el) => {
            
            el.classList.remove('animationInUp', 'animationOut', 'animationUp', 'mask');
    
            
            if (isScrollingUp) {
                el.classList.add('animationOut');
                setTimeout(() => {
                    el.classList.remove('mask', 'animationOut');
                    el.classList.add('animationInUp');
                }, 700);
            } else {
                el.classList.add('animationOut');
                setTimeout(() => {
                    el.classList.remove('animationOut', 'animationUp');
                    el.classList.add('mask');
                }, 700);
            }
        });
    };    

    const handleScroll = (index: any) => {
        const isScrollingUp = index.index < previousIndexRef.current;
        resetAnimations(isScrollingUp);
        previousIndexRef.current = index.index;
    };

    const preloadImages = (images: any) => {
        images.forEach((src: any) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                imagesRef.current[src] = img;
            }
        });
    };

    // const observer = new IntersectionObserver((entries) => {
    //     const targets  = document.querySelectorAll('.fp-overflow') as NodeListOf<HTMLElement>;

    //     if(!entries) return;
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             targets.forEach((target) => {
    //                 target.style.setProperty('display', 'none', 'important');
    //             });
    //         } else {
    //             targets.forEach((target) => {
    //                 target.style.setProperty('display', 'flex', 'important');
    //             });
    //         }
    //     });
    // });


    return (
        <>
            <div className={`black-screen`} />
            <ReactFullpage
                
                scrollingSpeed={1000} 
                navigation={ false }
                credits={{ enabled: false }}
                css3={ true }
                autoScrolling={ true }
                scrollOverflow={ true }
                scrollBar={ true }
                fitToSection={ false }
                sectionsColor={['#fff', '#f0f0f0', '#000', '#fff']}
                onLeave={(_origin, destination, _direction) => {
                    const isLastSection = destination.isLast === true;
                                    
                    if(isLastSection) {
                     

                        // fpOverflow.styles.position = 'fixed';

                        // Reactiva el scroll automático en otras secciones
                        // if (window.fullpage_api) {
                        //     window.fullpage_api.setAutoScrolling(true);
                        //     window.fullpage_api.setFitToSection(true);
                        //     document.body.style.overflowY = 'hidden'; // Oculta el scroll normal
                        // }
                    } 
                
                    // if (window.fullpage_api) {
                    //     window.fullpage_api.setAutoScrolling(true);
                    //     window.fullpage_api.setFitToSection(true);
                    //     document.body.style.overflowY = 'auto';
                    // }
                    }
                }
                beforeLeave={(_anchorLink: any, index, _slideAnchor: any, _slideIndex: any) => {
                    handleScroll(index);
                    setTimeout(() => {
                        setCurrentIndex(index.index);
                        
                    }, 500);
                    setTimeout(() => {
                        setIsDark(brandings[index.index].isDark);
                    }, 600);
                }}
                afterLoad={(_anchorLink: any, _destination: any, _slideAnchor: any, _slideIndex: any) => {           
                    // const isLastSection = destination.isLast === true;  
                    // const fpOverflow: any = document.querySelectorAll('.fp-overflow');
                    // if( isLastSection ) {
                    //     fpOverflow.forEach((element: any) => {
                    //         element.style.position = 'fixed';
                    //         element.style.zIndex = 1;
                    //     });
                    // } else {
                    //     fpOverflow.forEach((element: any) => {
                    //         element.style.position = 'relative';
                    //         element.style.zIndex = 1;
                    //     });
                    // }
                    // if (index.index === brandings.length - 1) {
                    //     document.body.style.overflowY = 'auto';

                    //   } else {
                    //     document.body.style.overflowY = 'hidden'; 
                    //   }

                    //   const concept = document.querySelector('.concept');
                    //   if( !concept ) return;
                    //   observer.observe(concept!);
                }}
                render={({  }) => {
                    return (
                        <ReactFullpage.Wrapper>
                           
                            <section className="brandings">
                                { brandings.map((item: any, index: any) => (
                                <section className="panel section" key={ index } style={{ 
                                    backgroundImage: (hoveredPanel === index && item.imageHover) ? `url(${ item.imageHover })` : `url(${ item.image })`,
                                    backgroundColor: '#fff',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    transition: 'background 0.3s ease-in-out',
                                    backgroundPosition: 'center center',
                                    }}
                                    >
                                    <div className="mask">
                                        <div className="info">
                                            <div className="mask">
                                                <span>{brandings[currentIndex]?.info}</span>
                                            </div>
                                            <div className="mask">
                                                <span>-</span>
                                            </div>
                                            <div className="mask title">
                                                <h4 className='animation-title'>{brandings[currentIndex]?.title}</h4>
                                            </div>
                                            <div className="mask description">
                                                <p dangerouslySetInnerHTML={{ __html: brandings[currentIndex]?.description || <></> }}></p>
                                            </div>
                                            <div className="mask">
                                                <Button 
                                                    texto='Ver proyecto'
                                                    backgroundColor='transparent'
                                                    hoverBorderColor='#2A00FF'
                                                    hoverBackgroundColor='#2A00FF'
                                                    urlIcon={ IconPlus }
                                                    onClick= { () => sendToLink(brandings[currentIndex].linkButton) } 
                                                    onMouseEnter={ () => handleMouseEnter(currentIndex) }
                                                    onMouseLeave={ handleMouseLeave }
                                                />

                                            </div>
                                        </div>

                                    </div>

                                    <div className="brandings-button">
                                    <div className="scroll-down-button animate__animated animate__fadeInRight">
                                        <Button
                                            width='auto'
                                            height='auto'
                                            texto='Scroll down'
                                            urlIcon={ ScrollDownIcon }
                                            backgroundColor='rgba(117, 149, 182, 0.40)'
                                            hoverBorderColor='rgb(96 0 18 / 77%)'
                                            hoverBackgroundColor='rgb(96 0 18 / 77%)'
                                            border='none'
                                            onClick={ () => sendToSectionId('#concept') }
                                        />
                                    {/* <a href="">Scroll down <img src={ ScrollDownIcon } alt="" /></a> */}
                                    </div>
                                </div>

                                <div className="brandings-button">
                                    <div className="scroll-down-button-mobile animate__animated animate__fadeInRight">
                                    <a 
                                        onClick={() => sendToSectionId('#concept')}><img src={ ScrollDownIconMobile } alt="" /></a>
                                    </div>
                                </div>

                                    
                                </section>
                            ))}
                             {/* <section className="panel section">
                                <Concept />
                             </section>  */}
                            </section>

                           

                        </ReactFullpage.Wrapper>
                    );
                }}
            />
              
        </>
    );
};