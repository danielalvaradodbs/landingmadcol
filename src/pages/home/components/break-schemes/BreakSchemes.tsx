import { Button } from '../../../../components/button/Button';
import { FlechaBlue, PlusBlue } from '../../../../shared';
import { Hero } from '../../../../shared/images';
import './breakSchemes.css';

export const BreakSchemes = () => {
  return (
    <>
        <div className="breakSchemes">
            <div className="title">
                <h2>Romper esquemas es <strong>lo que necesita<br/> una marca</strong> para diferenciarse.</h2>
            </div>
            <div className="description">
                <p>La tuya está lista para hacerlo: <strong>desafiemos lo establecido y hagámoslo diferente.</strong></p><br/>
                <p>Como agencia de <strong>branding, digital y de diseño,</strong> te acompañamos a transformar lo que tu <br /> marca <strong>comunica, transmite y despierta</strong> en las personas.</p>
            </div>
            <div className="buttons">
                <Button
                    texto='Conoce nuestra metodología'
                    urlIcon={ FlechaBlue }
                    hoverBorderColor={'#101820'}
                    backgroundColor={'#fff'}
                    hoverBackgroundColor={'#101820'}
                    // border={'#101820'}
                />
                <Button
                    texto='Agenda una reunión'
                    urlIcon={ PlusBlue }
                    hoverBorderColor={'#101820'}
                    backgroundColor={'#101820'}
                    hoverBackgroundColor={'#fff'}
                    // border={'#101820'}
                />
            </div>
            <div className="hero">
                <img src={ Hero } alt="" />
            </div>
        </div>
    </>
  )
}
