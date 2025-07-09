
import { Rafael } from '../../shared/floatingButton';
import './floatingButton.css';

export const FloatingButton = ({ isVisible }: any) => {
  return (
    <>
        <div className={`buttonFloating ${isVisible ? 'visible' : ''}`}>
            <img src={ Rafael } alt="Rafael" />
            <div className="info">
                <div className="text">
                    <span>Soy Rafa. ¿Te ayudo? <br/> Hablemos de tu marca.</span>

                </div>
            </div>

        </div>
    </>
  )
}
