import { useEffect, useRef, useState } from 'react';
import { useDarkMode } from '../../../../hooks/DarkModeContext';
import { brandings, ScrollDownIcon, ScrollDownIconMobile } from '../../../../shared';
import './fullpage.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Button } from '../../../../components/button/Button';

declare global {
    interface Window {
        fullpage_api: {
            setAutoScrolling: (value: boolean) => void;
            setFitToSection: (value: boolean) => void;
        };
    }
}

export const FullPage = () => {

    const { setIsDark } = useDarkMode();
    const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const previousIndexRef = useRef(0);

    const imagesRef = useRef<{ [key: string]: HTMLImageElement }>({});

    useEffect(() => {
        preloadImages(brandings.map(item => item.imageHover));
    }, []);

    const sendToLink = ( link: string ) => {
        window.open(link, '_blank');
      }
    
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

    const observer = new IntersectionObserver((entries) => {
        const targets  = document.querySelectorAll('.fp-overflow') as NodeListOf<HTMLElement>;

        if(!entries) return;
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                targets.forEach((target) => {
                    target.style.setProperty('display', 'none', 'important');
                });
            } else {
                targets.forEach((target) => {
                    target.style.setProperty('display', 'flex', 'important');
                });
            }
        });
    });


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
                fitToSection={ true }
                sectionsColor={['#fff', '#f0f0f0', '#000']}
                onLeave={(_origin, destination, direction) => {
                    const isLastSection = destination.index === brandings.length - 1;
                    // console.log(direction);
                    // console.log(isLastSection);                    
                    // if(isLastSection && direction === 'up') {
                    //     // Reactiva el scroll automático en otras secciones
                    //     if (window.fullpage_api) {
                    //         window.fullpage_api.setAutoScrolling(true);
                    //         window.fullpage_api.setFitToSection(true);
                    //         document.body.style.overflowY = 'hidden'; // Oculta el scroll normal
                    //     }
                    // } else {
                    //     if (window.fullpage_api) {
                    //         window.fullpage_api.setAutoScrolling(true);
                    //         window.fullpage_api.setFitToSection(true);
                    //         document.body.style.overflowY = 'auto';
                    //     }
                    // }
                }}
                beforeLeave={(_anchorLink: any, index, _slideAnchor: any, _slideIndex: any) => {
                    handleScroll(index);
                    setTimeout(() => {
                        setCurrentIndex(index.index);
                        
                    }, 500);
                    setTimeout(() => {
                        setIsDark(brandings[index.index].isDark);
                    }, 600);
                }}
                afterLoad={(_anchorLink: any, _index: any, _slideAnchor: any, _slideIndex: any) => {                
                    // if (index.index === brandings.length - 1) {
                    //     document.body.style.overflowY = 'auto';

                    //   } else {
                    //     document.body.style.overflowY = 'hidden'; 
                    //   }

                      const concept = document.querySelector('.concept');
                      if( !concept ) return;
                      observer.observe(concept!);
                }}
                render={({  }) => {
                    return (
                        <ReactFullpage.Wrapper>
                           
                            <section className="brandings">
                                { brandings.map((item: any, index: any) => (
                                <section className="panel section" key={ index } style={{ 
                                    backgroundImage: hoveredPanel === index && item.imageHover ? `url(${ item.imageHover })` : `url(${ item.image })`,
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
                                                    onClick= { () => sendToLink(brandings[currentIndex].linkButton) } 
                                                    onMouseEnter={ () => handleMouseEnter(currentIndex) }
                                                    onMouseLeave={ handleMouseLeave }
                                                />

                                            </div>
                                        </div>

                                    </div>
                                    {/* <div></div> */}
                                </section>
                            ))}
                            </section>

                              <div className="brandings">
                               <div className="scroll-down-button animate__animated animate__fadeInRight">
                                <a href="">Scroll down <img src={ ScrollDownIcon } alt="" /></a>
                                </div>
                              </div>

                              <div className="brandings">
                               <div className="scroll-down-button-mobile animate__animated animate__fadeInRight">
                                <a href=""><img src={ ScrollDownIconMobile } alt="" /></a>
                                </div>
                              </div>

                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    );
};