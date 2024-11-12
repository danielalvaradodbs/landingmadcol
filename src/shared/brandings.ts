import RemoLab from '../assets/images/brandings/Remo1.avif';
import RemoLabHover from '../assets/images/brandings/Remo2.avif';
import VaxTrials from '../assets/images/brandings/VaxTrials1.avif';
import VaxTrialsHover from '../assets/images/brandings/VaxTrials2.avif';
import HeroMotoCorp from '../assets/images/brandings/HeroMotoCorp1.avif';
import HeroMotoCorpHover from '../assets/images/brandings/HeroMotoCorp2.avif';

export const brandings = [
    {
        image: RemoLab,
        altImage: 'RemoLab',
        info: 'IDENTIDAD DE MARCA',
        title: 'Remó Lab',
        description: 'Diseño consistente que refuerza la identidad de marca en cada empaque.',
        linkButton: 'https://www.google.com',
        imageHover: RemoLabHover,
        isDark: true,
    },
    {
        image: VaxTrials,
        altImage: 'Vax TRIALS',
        info: 'IDENTIDAD DE MARCA',
        title: 'Vax TRIALS',
        description: 'Ciencia + estrategia: <br/> Crecimiento B2B y atracción de talento científico.',
        linkButton: 'https://www.google.com',
        imageHover: VaxTrialsHover,
        isDark: false,
    },
    {
        image: HeroMotoCorp,
        altImage: 'VaxTrials',
        info: 'POSICIONAMIENTO DE MARCA',
        title: 'Hero Motocorp',
        description: 'Optimización digital, impulsada por una experiencia web intuitiva y funcional.',
        linkButton: 'https://www.google.com',
        imageHover: HeroMotoCorpHover,
        isDark: true,
    },
]