
import { useTranslation } from 'react-i18next';
import { useInView } from '../../../../hooks/useInView';
import { EquipoMultidisciplinario, ImplementacionAgil, MetodologiaMedida, ParteDeTuEquipo } from '../../../../shared/trustus';
import './trustus.css';

export const TrustUs = () => {

    const { ref: sectionRef, isVisible } = useInView({
        threshold: 0.0
    });

    const { t } = useTranslation()

  return (
    <>
        <div 
            ref={ sectionRef } 
            className={`trustUs ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}
        >
            <div className="title">
                <h2 dangerouslySetInnerHTML={{ __html: t('whyTrustUs.title') }}></h2>
            </div>

            <div className="columns-grid">
                <div className="first-column">
                    <img src={ EquipoMultidisciplinario } alt="" />
                    <h2>{ t('whyTrustUs.cols.first.title') }</h2>
                    <p dangerouslySetInnerHTML={{ __html: t('whyTrustUs.cols.first.description') }}></p>
                </div>
                <div className="second-column">
                    <img src={ ParteDeTuEquipo } alt="" />
                    <h2>{ t('whyTrustUs.cols.two.title') }</h2>
                    <p dangerouslySetInnerHTML={{ __html: t('whyTrustUs.cols.two.description') }}></p>
                </div>
                <div className="third-column">
                    <img src={ ImplementacionAgil } alt="" />
                    <h2>{ t('whyTrustUs.cols.third.title') }</h2>
                    <p dangerouslySetInnerHTML={{ __html: t('whyTrustUs.cols.third.description') }}></p>
                </div>
                <div className="four-column">
                    <img src={ MetodologiaMedida } alt="" />
                    <h2>{ t('whyTrustUs.cols.four.title') }</h2>
                    <p dangerouslySetInnerHTML={{ __html: t('whyTrustUs.cols.four.description') }}></p>
                </div>
            </div>
        </div>
    </>
  )
}
