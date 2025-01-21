import { logosMadcritter } from '../../../../shared';
import './footer.css';


export const Footer = () => {
  return (
    <>
        <section className="pre-footer">

            <div className="escribenos">
                <p> <strong>ESCRÍBENOS</strong><br/>Nuestro equipo comercial te ayudará</p>
                <div>
                  <a>rafajordan@madcritter.com</a><br/>
                  <a>+57 318 695 4120</a>
                </div>
            </div>
            <div className="talento">
              <p> <strong>TALENTO</strong><br/>Envía tu CV y portafolio</p>
              <div>
                <a>talento@madcritter.com</a>
              </div>
            </div>
            <div className="stalkeanos">
              <p> <strong>STALKEANOS</strong><br/>Portafolio</p>
              <div className='container'>
                <a href="">DRIBBBLE</a>
                <a href="">BEHANCE</a>
              </div>
            </div>
            <div className="siguenos">
              <p> <strong>SÍGUENOS</strong><br/>Social Media</p>
              <div className='container'>
                <a href="">LINKEDIN</a>
                <a href="">INSTAGRAM</a>
                <a href="">FACEBOOK</a>
                <a href="">TIKTOK</a>
                <a href="">STRAVA</a>
              </div>
            </div>
        </section>
        <section className="footer">
          <img src={ logosMadcritter.logoBlue.logo } alt="" />
          <div className="texto-footer">
            <ul className="meeting-footer">
              <li>Mad Critter® 2025</li>
              <li><a href="">Meet the team!</a></li>
            </ul>

            <ul className="cities-footer">
              <li>Bogotá, Colombia</li>
              <li>Orlando, USA</li>
              <li>Quito, Ecuador</li>
            </ul>

            <ul className="terms-footer">
              <li><a href="">Términos y Condiciones</a></li>
            </ul>
          </div>
        </section>
    </>
  )
}
