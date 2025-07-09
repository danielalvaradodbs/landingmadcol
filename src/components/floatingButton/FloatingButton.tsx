
import { useTranslation } from 'react-i18next';
import { Rafael } from '../../shared/floatingButton';
import './floatingButton.css';

export const FloatingButton = ({ isVisible }: any) => {

  const { t } = useTranslation();
  return (
    <>
        <div className={`buttonFloating ${isVisible ? 'visible' : ''}`}>
            <img src={ Rafael } alt="Rafael" />
            <div className="info">
                <div className="text">
                    <span dangerouslySetInnerHTML={{ __html: t('floatingButton') || <></> }}></span>

                </div>
            </div>

        </div>
    </>
  )
}
