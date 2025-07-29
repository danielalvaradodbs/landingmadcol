
import { useTranslation } from 'react-i18next';
import { Rafael } from '../../shared/floatingButton';
import './floatingButton.css';

export const FloatingButton = ({ isVisible }: any) => {

  const { t } = useTranslation();

  const sendToLink = () => {
    // const phoneNumber = '3186954120';
    // const message = encodeURIComponent('¡Hola! Quisiera más información.');
    // https://api.whatsapp.com/send?phone=3186954120&text=%C2%A1Hola%21+Quisiera+m%C3%A1s+informaci%C3%B3n&utm_source=whatssapp_rafa&utm_medium=cpc&utm_campaign=mad_critter_leads_whatsapp_rafa
    // const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    // const url = `https://api.whatsapp.com/send?phone=3186954120&text=%C2%A1Hola%21+Quisiera+m%C3%A1s+informaci%C3%B3n&utm_source=whatssapp_rafa&utm_medium=cpc&utm_campaign=mad_critter_leads_whatsapp_rafa`;
    const baseUrl = 'https://api.whatsapp.com/send';
    const phone = '3186954120';
    const message = '¡Hola Mad Critter!  Quiero contarles un poco sobre mi proyecto y escuchar sus ideas. ¿Me pueden guiar?';
    const url = `${baseUrl}?phone=${phone}&text=${encodeURIComponent(message)}&utm_source=whatssapp_rafa&utm_medium=cpc&utm_campaign=mad_critter_leads_whatsapp_rafa`;

    window.open(url, '_blank');
  };

  return (
    <>
        <div className={`buttonFloating ${isVisible ? 'visible' : ''}`}>
            <img src={ Rafael } alt="Rafael" onClick={ () => sendToLink() } />
            <div className="info" onClick={ () => sendToLink() }>
                <div className="text">
                    <span dangerouslySetInnerHTML={{ __html: t('floatingButton') || <></> }}></span>
                </div>
            </div>

        </div>
    </>
  )
}
