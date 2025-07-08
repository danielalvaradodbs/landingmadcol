import ReactFullpage from '@fullpage/react-fullpage';
import './brandingsHorizontal.css';
import { brandings } from '../../../../shared';

export const BrandingsHorizontal = () => {
  return (
    <>
        <ReactFullpage
            // debug
            credits={{ enabled: false }}
            controlArrows={false}
            navigation={ false }
            autoScrolling={false}
            scrollOverflow={ false }
            scrollBar={false}
            slidesNavigation={true}
            css3={ true }
            fitToSection={ false }

            render={() => (
            <ReactFullpage.Wrapper>

                <div className="brandings">
                    <div className="section">
                        { brandings.map((item: any, index: any) => (
                            <div className="slide" key={ index }
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >

                            </div>
                        ))}
                    </div>
                </div>

                {/* <div className="section">
                    <div className="slide"><h1>Section 2</h1></div>
                    <div className="slide"><h1>Slide 2.2</h1></div>
                    <div className="slide"><h1>Slide 2.3</h1></div>
                </div> */}
            </ReactFullpage.Wrapper>
            )}
        />
    </>
  )
}
