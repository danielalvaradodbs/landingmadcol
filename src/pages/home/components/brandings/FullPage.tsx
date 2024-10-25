import { useState } from 'react';
import { useDarkMode } from '../../../../hooks/DarkModeContext';
import { brandings } from '../../../../shared';
import './fullpage.css';
import ReactFullpage from '@fullpage/react-fullpage';
import { Button } from '../../../../components/button/Button';

export const FullPage = () => {

    const { setIsDark } = useDarkMode();
    const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

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

      const resetAnimations = () => {
        const sectionElements = document.querySelectorAll('.mask');
        sectionElements.forEach((el: any, i: any) => {
           
            el.classList.remove('mask');
            el.classList.add('animationOut');

            setTimeout(() => {
                el.classList.remove('animationOut');
            }, 500);
            el.classList.add('mask');
            
        });
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
                beforeLeave={(anchorLink, index, slideAnchor, slideIndex) => {
                    resetAnimations();
                    setTimeout(() => {
                        setCurrentIndex(index.index);
                    }, 500);
                }}
                afterLoad={(anchorLink, index, slideAnchor, slideIndex) => {
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

                              {/* <div className="brandings">
                                <div className="">
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
                                </div>


                                <div className="scroll-down-button">
                                <a href="">Scroll down <img src={ ScrollDownIcon } alt="" /></a>
                                </div>


                              </div> */}

                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        </>
    );
};