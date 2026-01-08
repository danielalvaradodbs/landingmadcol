import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './services.css';
import { useTranslation } from 'react-i18next';
import { ConstruccionDeMarca, IdentidadDeMarca, PosicionamientoDeMarca } from '../../../../shared';

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {

   const { t } = useTranslation();

  const itemsBrandBuilding = t('services.brandBuilding.items', { returnObjects: true }) as string[];
  const itemsBrandIdentity = t('services.brandIdentity.items', { returnObjects: true }) as string[];
  const itemsbrandPositioning = t('services.brandPositioning.items', { returnObjects: true }) as string[];
  
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>('.service-section');
    
    if( window.innerWidth > 899 ) {
      sections.forEach((section: any, _index) => {
        const items = section.querySelector('.items');
        const textFooter = section.querySelector('.footer-section');
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=25%',
            pin: true,
            pinSpacing: false,
            scrub: true,
  
          },
        });
  
        const nextSection = sections[_index + 1];
        if (nextSection) {
          ScrollTrigger.create({
            trigger: nextSection,
            start: 'top 45%',
            onEnter: () => {
              gsap.to(items, { opacity: 0, duration: 0.5 });
              gsap.to(textFooter, { opacity: 0, duration: 0.5 });
            },
            onLeaveBack: () => {
              gsap.to(items, { opacity: 1, duration: 0.5 });
              gsap.to(textFooter, { opacity: 1, duration: 0.5 });
            },
          });
        }
      });
    }


    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray('.service-section');

    
    sections.forEach((section: any) => {
      const items = section.querySelectorAll('.items ul li');
      const textFooter = section.querySelectorAll('.footer-section p');
      const headerTexts = section.querySelectorAll('h6, .header-sections h2');
      const figures = section.querySelectorAll('img')

      
      ScrollTrigger.create({
        trigger: section,
        start: "top 95%",
        onEnter: () => {
          items.forEach((li: any) => { li.classList.remove('reveal')});
          textFooter.forEach((p: any) => { p.classList.remove('animation-text')});
          setTimeout(() => {
            items.forEach((li: any) => { li.classList.add('reveal')});
            textFooter.forEach((p: any) => { p.classList.add('animation-text')});

          }, 50);
          headerTexts.forEach((header: any) => header.classList.add('reveal'));
          figures.forEach((figures: any) => figures.classList.add('animate__fadeInUp'));
        },
        onLeaveBack: () => {
          items.forEach((li: any) => {
            li.classList.remove('reveal');
          });
          textFooter.forEach((p: any) => { p.classList.remove('animation-text')});
          headerTexts.forEach((header: any) => header.classList.remove('reveal'));
          figures.forEach((figures: any) => figures.classList.remove('animate__fadeInUp'));
        },
      });
    });


    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const animateText = (items: any) => {
    return items.map((item: any, index: any) => (
      <li className='reveal' style={{ animationDelay: `${index * 70}ms` }} key={ index }>
        { item }
      </li>
    ));
  };

  return (
    <div className="services" id='services'>
      <div className="titleSection animate__animated animate__fadeIn">
        <h2 dangerouslySetInnerHTML={{ __html: t('services.title') }}></h2>
        <span dangerouslySetInnerHTML={{ __html: t('services.ourServices') }}></span>
      </div>
      <section className="service-section first-section" id='first-section'>
        <div className="number">
          <h6>01.</h6>
        </div>
        <div className="header-sections">
          <div className="marca">
            <div className="title">
              <h2 dangerouslySetInnerHTML={{ __html: t('services.brandBuilding.title') || <></> }}></h2>
            </div>
            <div className="footer-section desktop">
              <p className='animation-text' style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: t('services.brandBuilding.description') }}></p>
            </div>
            {/* <img src={ Thumbnail } alt="" style={{ marginTop: '24px' }} /> */}
            <video 
              src={ ConstruccionDeMarca } 
              style={{ marginTop: '24px', borderRadius: '10px'}}
              autoPlay={true}
              loop 
              muted
              width={'100%'}
              controls={ false }
              playsInline
            ></video>
          </div>

          <div className="footer-section mobile">
            <p className='animation-text' dangerouslySetInnerHTML={{ __html: t('services.brandBuilding.description') }}></p>
          </div>
          <div className="items">
            <ul>
              {animateText(itemsBrandBuilding)}
            </ul>
          </div>

        <div className="image-mobile">
            {/* <img src={ Thumbnail } alt="" style={{ marginTop: '24px', width: '100%' }} /> */}
            <video 
              src={ ConstruccionDeMarca } 
              style={{ marginTop: '24px', borderRadius: '10px', width: '100%'}}
              autoPlay={true}
              loop 
              muted
              width={'100%'}
              controls={ false }
              playsInline
            ></video>
        </div>
        </div>
      </section>

      <section className="service-section second-section" id='second-section'>
        <div className="number">
          <h6>02.</h6>
        </div>
        <div className="header-sections">
          <div className="identidad">
            <div className="title">
              <h2 dangerouslySetInnerHTML={{ __html: t('services.brandIdentity.title') || <></> }}></h2>
            </div>
            <div className="footer-section desktop">
              <p className='animation-text' style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: t('services.brandIdentity.description') }}></p>
            </div>
            {/* <img src={ Thumbnail } alt="" style={{ marginTop: '24px' }} /> */}
            <video 
              src={ IdentidadDeMarca } 
              style={{ marginTop: '24px', borderRadius: '10px'}}
              autoPlay={true}
              loop 
              muted
              width={'100%'}
              controls={ false }
              playsInline
            ></video>
          </div>

          <div className="footer-section mobile">
            <p className='animation-text' dangerouslySetInnerHTML={{ __html: t('services.brandIdentity.description') }}></p>
          </div>
          
          <div className="items">
            <ul>
              {animateText(itemsBrandIdentity)}
            </ul>
          </div>
        <div className="image-mobile">
            {/* <img src={ Thumbnail } alt="" style={{ marginTop: '24px', width: '100%' }} /> */}
            <video 
              src={ IdentidadDeMarca } 
              style={{ marginTop: '24px', borderRadius: '10px', width: '100%'}}
              autoPlay={true}
              loop 
              muted
              width={'100%'}
              controls={ false }
              playsInline
            ></video>
        </div>
        </div>
      </section>

      <section className="service-section third-section" id='third-section'>
        <div className="number">
          <h6>03.</h6>
        </div>
        <div className="header-sections">
          <div className="posicionamiento">
            <div className="title">
              <h2 dangerouslySetInnerHTML={{ __html: t('services.brandPositioning.title') || <></> }}></h2>
            </div>
            <div className="footer-section desktop">
              <p className='animation-text' style={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: t('services.brandPositioning.description') }}></p>
            </div>
            {/* <img src={ Thumbnail } alt="" style={{ marginTop: '24px' }} /> */}
            <video 
              src={ PosicionamientoDeMarca } 
              style={{ marginTop: '24px', borderRadius: '10px'}}
              autoPlay={true}
              loop 
              muted
              width={'100%'}
              controls={ false }
              playsInline
            ></video>

          </div>
          <div className="footer-section mobile">
            <p className='animation-text' dangerouslySetInnerHTML={{ __html: t('services.brandPositioning.description') }}></p>
          </div>
          <div className="items">
            <ul>
            {animateText(itemsbrandPositioning)}
            </ul>
          </div>
        <div className="image-mobile">
            {/* <img src={ Thumbnail } alt="" style={{ marginTop: '24px', width: '100%' }} /> */}
            <video 
              src={ PosicionamientoDeMarca } 
              style={{ marginTop: '24px', borderRadius: '10px', width: '100%'}}
              autoPlay={true}
              loop 
              muted
              width={'100%'}
              controls={ false }
              playsInline
            ></video>
        </div>
        </div>
      </section>

      <section className="service-section four-section">
      </section>

    </div>
  );
};