import './branding.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Asegúrate de importar el plugin aquí
import ScrollMagic from 'scrollmagic';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export const Brandings = () => {
    useEffect(() => {
        const controller = new ScrollMagic.Controller();
        const slides = document.querySelectorAll('.branding-section');

        // Establecer la posición inicial para los elementos con la clase .delayed
        const delayedElements = document.querySelectorAll('.delayed');
        gsap.set(delayedElements, { y: '100%' });

        slides.forEach((slide, index) => {
            // Crear una escena para pinnear la sección
            new ScrollMagic.Scene({
                triggerElement: slide,
                triggerHook: 0, // Cambiar a 0 para iniciar al principio de la sección
                duration: "100%" // Cambiar a 100% para cubrir toda la altura de la sección
            })
            .setPin(slide)
            .addTo(controller);

            // Escena para desplazamiento hacia arriba
            new ScrollMagic.Scene({
                triggerElement: slide,
                triggerHook: 1, // Cambiar a 1 para que inicie al final de la sección
                duration: "100%"
            })
            .on('leave', function () {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: `.hero${index + 1}`, autoKill: false },
                    ease: "power4.out"
                });
            })
            .addTo(controller);

            // Escena para desplazamiento hacia abajo
            new ScrollMagic.Scene({
                triggerElement: slide,
                triggerHook: 0,
                duration: "100%"
            })
            .on('enter', function () {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: `.hero${index + 1}`, autoKill: false },
                    onStart: function () {
                        let delayed = document.querySelector(`.hero${index + 1} .delayed`);
                        if (delayed) {
                            gsap.to(delayed, { duration: 0.75, y: '0%', ease: "power1.out" });
                        }
                    },
                    ease: "power4.out"
                });
            })
            .addTo(controller);
        });
    }, []);

    return (
        <>
            <section id="landing-page" className="hero-story hero hero1 branding-section">
                <div className="full-col width-100">
                    <h1>Landing Screen</h1>
                </div>
            </section>

            <section id="rooms" className="hero-story hero second-hero hero2 branding-section">
                <div className="left-col width-100">
                    <h2>Des chambres pour vous</h2>
                </div>
            </section>

            <section id="you" className="hero-story hero second-hero hero3 branding-section">
                <div className="left-col width-100 delayed">
                    <h2>Contenu gauche pour proche de vous</h2>
                </div>
            </section>

            <section id="near" className="hero-story hero second-hero hero4 branding-section">
                <div className="left-col width-100 delayed">
                    <h2>Contenu pour proche de tout</h2>
                </div>
            </section>

            <footer className="hero-story hero second-hero hero5 branding-section">
                <h2>Contenu du footer</h2>
            </footer>
        </>
    );
};