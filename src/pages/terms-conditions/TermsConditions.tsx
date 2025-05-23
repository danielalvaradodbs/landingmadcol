import { useTranslation } from 'react-i18next';
import './terms-conditions.css';

export const TermsConditions = () => {

  const { t } = useTranslation();
// termsConditions
  return (
    <>  
        <div className="terms-conditions">
            <h2 dangerouslySetInnerHTML={{__html: t('termsConditions.title')}}></h2>

            <p>{t('termsConditions.description')}</p>

            <ol>
                <li><strong>{t('termsConditions.conditionsOrderList.one.title')}</strong> {t('termsConditions.conditionsOrderList.one.information')}</li>
                <li><strong>{t('termsConditions.conditionsOrderList.two.title')}</strong> {t('termsConditions.conditionsOrderList.two.information')}</li>
            </ol>

            <p>
              <strong>{t('termsConditions.legality.title')} </strong>
              {t('termsConditions.legality.information')}
            </p>
            <p>
              <strong>{t('termsConditions.purpose.title')} </strong>
              {t('termsConditions.purpose.information')}
            </p>
            <p>
              <strong>{t('termsConditions.freedom.title')} </strong>
              {t('termsConditions.freedom.information')}
            </p>
            <p>
              <strong>{t('termsConditions.transparency.title')} </strong>
              {t('termsConditions.transparency.information')}
            </p>

            <p>
              <strong>{t('termsConditions.security.title')} </strong>
              {t('termsConditions.security.information')}
            </p>

            <ol>
            <li>Derechos que asisten al titular de los datos personales: Los titulares de la información podrán, en cualquier tiempo ejercer los siguientes derechos: conocer, actualizar y rectificar sus datos personales frente a LA COMPAÑÍA, solicitar prueba de la autorización otorgada a LA COMPAÑÍA para el tratamiento, ser informado por LA COMPAÑÍA sobre el uso que se ha dado a los datos; revocar la autorización y/o solicitar la supresión de sus datos cuando sea procedente, acceder en forma gratuita a los mismos, presentar ante la Superintendencia de Industria y Comercio quejas por infracciones en que incurra LA COMPAÑÍA a las normas relacionadas con datos personales.</li>

            <li>Atención de peticiones, consultas y reclamos, responsable y proceso: Para el ejercicio de los derechos el titular de la información podrá comunicarse con la línea de atención al cliente (1) 3576031 o enviar un correo electrónico a info@www.madcritter.com, o establecer contacto con LA COMPAÑÍA a través de los distintos medios que éstas tienen dispuestos para tal fin, tales como página web, redes sociales y oficinas de atención al cliente.</li>

            <li>Información que recolectamos y almacenamos de nuestros clientes: en virtud de la asesoría que brinda LA COMPAÑÍA, la información que se recopila o almacena puede incluir lo siguiente: Datos generales de contacto, tales como: Dirección, teléfono fijo, teléfono móvil, correo electrónico.</li>
            </ol>

            <p>Datos particulares según el tipo de vinculación: Nivel de ingresos, datos financieros, capacidad de endeudamiento, patrimonio bruto, personas a cargo, composición del grupo familiar, hobbies o aficiones, bienes que posee, información laboral.</p>

            <p>Datos sensibles: Datos biométricos y relativos a la salud.</p>

            <ol>
                <li>Política para el tratamiento de datos sensibles: LA COMPAÑÍA no recolectará, incorporará ni almacenará datos sensibles de sus clientes, empleados o terceros a menos que exista una autorización previa del titular de la información. Sólo se solicitará la autorización mencionada cuando sea necesaria y proporcional para la ejecución de la relación contractual con el titular, siempre y cuando la ley exija o permita acceder a información sensible de éste. La autorización para el tratamiento de los datos sensibles se solicitará previa la incorporación de los mismos, y en ésta se señalará la finalidad para la cual se incorporan, se indicará que la respuesta a las preguntas sobre datos sensibles es facultativa, y los demás elementos descritos en la presente política para la obtención de la autorización para el tratamiento de la información. No podrá realizarse tratamiento de datos sensibles para fines distintos de los autorizados por el titular. El acceso, circulación y tratamiento de los datos sensibles será restringido y se limitará a lo expresamente autorizado por el titular y a lo estipulado en la ley.</li>
                <li>Política para el tratamiento de datos de niños y adolescentes: Los niños y adolescentes, podrán ser usuarios de los productos y servicios que ofrece LA COMPAÑÍA, siempre y cuando actúen a través de o debidamente representados por sus padres o por quienes tengan la patria potestad del menor o su representación legal. LA COMPAÑÍA velará por el uso adecuado de los datos personales de los niños y adolescentes menores de edad, garantizando que en el tratamiento de sus datos se respete el interés superior de ellos, y sus derechos fundamentales, únicamente habrá tratamiento de éstos datos cuando exista autorización expresa de sus representantes legales.</li>
                <li>El tratamiento de la información personal de los titulares: LA COMPAÑÍA usará la información personal de sus clientes para proveer nuestros servicios, productos y soluciones en seguros y aquellos señalados en las presentes políticas, siempre que el tratamiento obedezca a un fin legítimo y sea proporcional de acuerdo a la vinculación del cliente, particularmente para lo que resulte necesario para la prestación de los servicios encargados, como ejecutar y cumplir el contrato. También se realizará tratamiento de la información para entregarla o compartirla con autoridades administrativas y judiciales en virtud de un requerimiento legal o reglamentario con proveedores, con el fin de ser contactado para promocionar y publicitar nuestras actividades, productos y servicios, envío de información, incluyendo ofertas comerciales y publicitarias de terceros.</li>
                <li>Entrega de información personal a proveedores de servicios: Es posible que para cumplir con la relación contractual que LA COMPAÑÍA sostenga con el titular de la información, ésta sea entregada o compartida con proveedores para las finalidades autorizadas por el titular o las previstas en la ley, tales como, personas naturales o jurídicas que presten servicios sus servicios profesionales para efectuar estadísticas, cálculos actuariales, desarrollo de software y cualquier otra actividad para llevar a cabo el objeto social de LA COMPAÑÍA y prestar correctamente el servicio. Siempre que su información sea entregada o compartida con proveedores LA COMPAÑÍA se asegurará de establecer unas condiciones que vinculen al proveedor a las políticas de privacidad de ésta de tal forma que la información personal de los clientes se encuentre protegida, así mismo, se establecerán acuerdos de confidencialidad para el manejo de la información y obligaciones responsable-encargado cuando el tipo de entrega lo amerite. Para el efecto, LA COMPAÑÍA garantizará que en todas las relaciones comerciales y contractuales en donde se transmita información personal a un proveedor de servicios, se garantizará la realización de auditorías aleatorias preventivas y a que la política de seguridad sea divulgada al interior de dichas compañías para la aplicación en todos sus dependientes y contratistas.</li>
                <li>Preferencias para el envío de información comercial, publicidad y ofertas de productos y servicios: Los titulares de la información personal podrán contactarse con LA COMPAÑÍA por los medios señalados para el ejercicio de los derechos que les asisten como titulares con el fin de manifestar sus preferencias para el envío de ofertas comerciales, de publicidad e información sobre productos y servicios, igualmente podrán solicitar la cancelación del envío de éstas ofertas, sin perjuicio de que LA COMPAÑÍA pueda continuar enviando información que resulte necesaria para la ejecución de la relación contractual. Nuestro objetivo es cumplir con la solicitud de cancelación efectuada por el titular dentro de un plazo razonable, sin embargo, en caso de que LA COMPAÑÍA haya compartido la información personal con anterioridad al recibo de la solicitud de cancelación, de acuerdo a la autorización otorgada previamente por el titular, no se podrá garantizar que éste no vuelva a recibir la información descrita cuando la base de datos en que se almacene la información no sea responsabilidad de LA COMPAÑÍA.</li>
                <li>Vigencia del tratamiento de los datos: La información suministrada por los titulares, permanecerá almacenada por el término necesario para el cumplimiento de los fines para los cuales fue incorporada.</li><li>Modificaciones a la política de privacidad y tratamiento de datos personales: LA COMPAÑÍA se reserva el derecho de modificar las normas de confidencialidad y protección de datos con el fin de adaptarlas a nuevos requerimientos de tipo legal, jurisprudencial, técnico y en general, cuando sea necesario para prestar un mejor servicio.</li>
            </ol>
            
            <p>El responsable del tratamiento de la información es Mad Critter S.A.S con sede principal en Calle 74a # 22-31 oficina 308.</p>

            <p>Aceptación de esta Política de Privacidad:El titular de la información acepta el tratamiento de sus datos personales conforme los términos de esta Política de Privacidad, cuando proporciona los datos a través de nuestros canales o puntos de atención o compra incluyendo Call Centers o cuando adquiere, se afilia o usa cualquiera de nuestros productos o servicios.</p>
        </div>
    </>
  )
}
