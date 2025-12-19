
import { useInView } from '../../../../hooks/useInView';
import { EquipoMultidisciplinario, ImplementacionAgil, MetodologiaMedida, ParteDeTuEquipo } from '../../../../shared/trustus';
import './trustus.css';

export const TrustUs = () => {

    const { ref: sectionRef, isVisible } = useInView({
        threshold: 0.0
    });

  return (
    <>
        <div 
            ref={ sectionRef } 
            className={`trustUs ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}
        >
            <div className="title">
                <h2>¿Por qué confiar <br/> <strong>en nosotros?</strong></h2>
            </div>

            <div className="columns-grid">
                <div className="first-column">
                    <img src={ EquipoMultidisciplinario } alt="" />
                    <h2>Equipo multidisciplinario</h2>
                    <p>Contamos con un equipo multidisciplinario que une <strong>estrategia, creatividad, gestión y ejecución.</strong> Diferentes mesas, un solo objetivo: <strong>resultados reales.</strong></p>
                </div>
                <div className="second-column">
                    <img src={ ParteDeTuEquipo } alt="" />
                    <h2>Somos parte de tu equipo</h2>
                    <p>Co-creamos contigo, <strong>como parte de tu equipo,</strong> no como consultores externos lejanos.</p>
                </div>
                <div className="third-column">
                    <img src={ ImplementacionAgil } alt="" />
                    <h2>Implementación ágil</h2>
                    <p>Nos integramos a tus procesos, para que <strong>la implementación sea ágil y sin fricciones.</strong></p>
                </div>
                <div className="third-column">
                    <img src={ MetodologiaMedida } alt="" />
                    <h2>Metodología a tu medida</h2>
                    <p>Trabajamos con una <strong>metodología probada,</strong> que se adapta a lo que <strong>tu marca necesita.</strong></p>
                </div>
            </div>
        </div>
    </>
  )
}
