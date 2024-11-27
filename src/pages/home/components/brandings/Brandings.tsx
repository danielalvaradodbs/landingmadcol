import './branding.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollMagic from 'scrollmagic';
import { useEffect } from 'react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Concept } from '../concept/Concept';

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export const Brandings = () => {
    useEffect(() => {
        const controller = new ScrollMagic.Controller();
        const slides = document.querySelectorAll('section, footer');

        // Establecer la posición inicial para los elementos con la clase .delayed
        const delayedElements = document.querySelectorAll('.delayed');
        gsap.set(delayedElements, { y: '100%' });

        slides.forEach((slide, index) => {
            new ScrollMagic.Scene({
                triggerElement: slide,
                triggerHook: 'onLeave',
                duration: "200%"
            })
            .setPin(slide, { pushFollowers: false })
            .addTo(controller);

            // Up
            new ScrollMagic.Scene({
                triggerHook: 'onLeave',
                triggerElement: slide,
                offset: -10
            })
            .on('leave', function () {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: window.innerHeight * (index - 1), autoKill: false },
                    onComplete: function () {
                        let delayed = document.querySelector(`.hero${index + 1} .delayed`);
                        if (delayed) {
                            gsap.set(delayed, { y: '100%' });
                        }
                    },
                    ease: "power4.out"
                });
            })
            .addTo(controller);

            // Down
            new ScrollMagic.Scene({
                triggerElement: slide,
                triggerHook: 'onEnter',
                offset: 10
            })
            .on('enter', function () {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: index === slides.length - 1 ? '#concept-section' : `.hero${index + 1}`, autoKill: false }, // Cambia esto
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
            <section id="landing-page" className="hero-story hero hero1 scrollMajicFix">
                <div className="full-col width-100">
                    <h1>Landing Screen</h1>
                </div>
            </section>

            <section id="rooms" className="hero-story hero second-hero hero2 scrollMajicFix">
                <div className="left-col width-100">
                    <h2>Des chambres pour vous</h2>
                </div>
            </section>

            <section id="you" className="hero-story hero second-hero hero3 scrollMajicFix">
                <div className="left-col width-100 delayed">
                    <h2>Contenu gauche pour proche de vous</h2>
                </div>
            </section>

            <section id="near" className="hero-story hero second-hero hero4 scrollMajicFix">
                <div className="left-col width-100 delayed">
                    <h2>Contenu pour proche de tout</h2>
                </div>
            </section>

            <section className="hero-story hero second-hero hero5 scrollMajicFix" id="concept-section">
                <div className="left-col width-100 delayed">
                    <Concept />
                </div>
            </section>

            <footer className="hero-story hero second-hero hero6 scrollMajicFix">
                <h2>Contenu du footer</h2>
            </footer>
        </>
    );
};