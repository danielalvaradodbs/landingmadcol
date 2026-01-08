import { useTranslation } from 'react-i18next';
import { Button } from '../../../../components/button/Button';
import { useInView } from '../../../../hooks/useInView';
import { FlechaBlue } from '../../../../shared';
import { Books, Diamond, FigureHero, HeroHowDoIt, HeroHuman, Settings, Spinner } from '../../../../shared/howDoIt';
import './howDoIt.css';

export const HowDoIt = () => {

    const { ref: sectionRef, isVisible } = useInView({
        threshold: 0.0
    });

    const { t } = useTranslation();

  return (
    <>
        <div 
            id='howDoIt' ref={ sectionRef } 
            className={`howDoIt ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}
        >
            <div className="title">
                <h2 dangerouslySetInnerHTML={{ __html: t('howDoIt.title') }}></h2>
                {/* <h2>¿Cómo <br/> lo <strong>hacemos?</strong></h2> */}
                <span dangerouslySetInnerHTML={{ __html: t('howDoIt.method') }}></span>
            </div>
            <div className="hero">
                <img src={ HeroHowDoIt } className='background'  width={'100%'} alt="" />
                <div className="content">
                    <img src={ FigureHero } alt="" />
                    <h1 dangerouslySetInnerHTML={{ __html: t('howDoIt.brandCenter') }}></h1>
                </div>
            </div>
            <div className="humanCentered">
                <h2 dangerouslySetInnerHTML={{ __html: t('howDoIt.humanCenteredBranding') }}></h2>
            </div>
            <div className="items">
                <div className="cols">
                    <div className="col-one">
                        <img src={ Books } alt="" />
                        <span>01.</span>
                        <h2 dangerouslySetInnerHTML={{ __html: t('howDoIt.cols.one.title') }}></h2>
                        <p dangerouslySetInnerHTML={{ __html: t('howDoIt.cols.one.description') }}></p>
                    </div>
                    <div className="col-two">
                        <img src={ Spinner } alt="" />
                        <span>02.</span>
                        <h2 dangerouslySetInnerHTML={{ __html: t('howDoIt.cols.two.title') }}></h2>
                        <p dangerouslySetInnerHTML={{ __html: t('howDoIt.cols.two.description') }}></p>
                    </div>
                    <div className="col-three">
                        <img src={ Settings } alt="" />
                        <span>03.</span>
                        <h2 dangerouslySetInnerHTML={{ __html: t('howDoIt.cols.third.title') }}></h2>
                        <p dangerouslySetInnerHTML={{ __html: t('howDoIt.cols.third.description') }}></p>
                    </div>

                </div>
            </div>

            <div className="cardSection">
                <div className="card">
                    <div className="content">
                        <div className="image">
                            <img src={ Diamond } alt="" />
                        </div>
                        <div className="description">
                            <h2 dangerouslySetInnerHTML={{ __html: t('howDoIt.resultsCard.title') }}></h2>
                            <p dangerouslySetInnerHTML={{ __html: t('howDoIt.resultsCard.description') }}></p>
                        </div>
                    </div>
                </div>
                <div className="humanCentered">
                    <img src={ HeroHuman } alt="" />
                    <div className="content">
                        <p dangerouslySetInnerHTML={{ __html: t('howDoIt.cardHumanCenteredBranding.accompaniment') }}></p>
                        <p>-</p>
                        <h3 dangerouslySetInnerHTML={{ __html: t('howDoIt.cardHumanCenteredBranding.title') }}></h3> <br/>
                         <Button
                            texto={t('howDoIt.cardHumanCenteredBranding.buttonMeeting')}
                            urlIcon={ FlechaBlue }
                            hoverBorderColor={'#101820'}
                            backgroundColor={'#fff'}
                            hoverBackgroundColor={'#101820'}
                            // border={'#101820'}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
