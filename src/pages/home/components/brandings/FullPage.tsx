import { useRef, useState } from 'react';
import { useDarkMode } from '../../../../hooks/DarkModeContext';
import { brandings, ScrollDownIcon } from '../../../../shared';
import './fullpage.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Button } from '../../../../components/button/Button';

export const FullPage = () => {

    const { setIsDark } = useDarkMode();
    const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const previousIndexRef = useRef(0);

    // const [fadeOut, setFadeOut] = useState(false);

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
        // Selecciona todos los elementos con la clase '.mask'
        const sectionElements = document.querySelectorAll('.mask, .animationInUp');
    
        sectionElements.forEach((el) => {
            // Elimina las clases previas de animación para evitar conflictos
            el.classList.remove('animationInUp', 'animationOut', 'animationUp', 'mask');
    
            // Si se está desplazando hacia arriba
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
                    el.classList.add('mask'); // Asegura que 'mask' esté siempre presente después de la animación
                }, 700);
            }
        });
    };
    
    

    const handleScroll = (index: any) => {
        const isScrollingUp = index.index < previousIndexRef.current;
        resetAnimations(isScrollingUp);
        previousIndexRef.current = index.index;
    };


    return (
        <>
            <ReactFullpage
                
                scrollingSpeed={1500} 
                navigation={ false }
                sectionsColor={['#1abc9c', '#3498db', '#e74c3c', '#9b59b6']}
                credits={{ enabled: false }}
                css3={ false }
                onLeave={() => {
                }}
                beforeLeave={(_anchorLink: any, index, _slideAnchor: any, _slideIndex: any) => {
                    handleScroll(index);
                    setTimeout(() => {
                        setCurrentIndex(index.index);
                    }, 500);
                }}
                afterLoad={(_anchorLink: any, index, _slideAnchor: any, _slideIndex: any) => {
                    setIsDark(brandings[index.index].isDark);
                }}
                render={({  }) => {
                    return (
                        <ReactFullpage.Wrapper>
                           
                            <section className="brandings">
                                { brandings.map((item: any, index: any) => (
                                <section className="panel section" key={ index } style={{ 
                                    backgroundImage: hoveredPanel === index && item.imageHover ? `url(${ item.imageHover })` : `url(${ item.image })`,
                                    backgroundColor: '#000',
                                    backgroundSize: 'cover',
                                    transition: 'background 0.3s ease-in-out',
                                    backgroundPosition: 'center',
                                        
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
                                </section>
                            ))}
                            </section>

                              <div className="brandings">
                                {/* <div className="">
                                    <div className="fixed-info info animation">
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
                                </div> */}


                                <div className="scroll-down-button">
                                <a href="">Scroll down <img src={ ScrollDownIcon } alt="" /></a>
                                </div>


                              </div>

                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    );
};