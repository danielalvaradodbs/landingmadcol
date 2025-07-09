
import { useTranslation } from 'react-i18next';
import { Rafael } from '../../shared/floatingButton';
import './floatingButton.css';

export const FloatingButton = ({ isVisible }: any) => {

  const { t } = useTranslation();

  const sendToLink = () => {
    const phoneNumber = '3186954120';
    const message = encodeURIComponent('¡Hola! Quisiera más información.');
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

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
