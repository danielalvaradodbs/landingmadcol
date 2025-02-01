import RemoLab from '../assets/images/brandings/RemoLab.jpg';
import RemoLabMobile from '../assets/images/brandings/RemoLab Mobile.jpg';
import RemoLabHover from '../assets/images/brandings/Remo2.avif';
import VaxTrials from '../assets/images/brandings/VaxTrials1.avif';
import VaxTrialsMobile from '../assets/images/brandings/VaxTrialsMobile.jpg';
import VaxTrialsHover from '../assets/images/brandings/VaxTrials2.avif';
import HeroMotoCorp from '../assets/images/brandings/HeroMotoCorp1.avif';
import HeroMotoCorpMobile from '../assets/images/brandings/HeroMobile.jpg';
import HeroMotoCorpHover from '../assets/images/brandings/HeroMotoCorp2.avif';

export const brandings = [
    {
        image: RemoLab,
        imageMobile: RemoLabMobile,
        altImage: 'RemoLab',
        info: 'IDENTIDAD DE MARCA',
        title: 'Remó Lab',
        description: 'Diseño consistente que refuerza la identidad de marca en cada empaque.',
        linkButton: 'https://www.behance.net/gallery/210736629/Remo-Lab-Packaging-Design',
        imageHover: RemoLabHover,
        isDark: true,
    },
    {
        image: VaxTrials,
        imageMobile: VaxTrialsMobile,
        altImage: 'Vax TRIALS',
        info: 'IDENTIDAD DE MARCA',
        title: 'Vax TRIALS',
        description: 'Ciencia + estrategia: <br/> Crecimiento B2B y atracción de talento científico.',
        linkButton: 'https://www.behance.net/gallery/217026631/Lifting-Brand-Vax-Trials',
        imageHover: VaxTrialsHover,
        isDark: false,
    },
    {
        image: HeroMotoCorp,
        imageMobile: HeroMotoCorpMobile,
        altImage: 'VaxTrials',
        info: 'POSICIONAMIENTO DE MARCA',
        title: 'Hero Motocorp',
        description: 'Optimización digital, impulsada por una experiencia web intuitiva y funcional.',
        linkButton: 'https://www.behance.net/gallery/217025697/Web-Site-Hero-MotoCorp',
        imageHover: HeroMotoCorpHover,
        isDark: true,
    },
]