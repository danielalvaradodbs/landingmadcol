import LogoMadcritter from '../assets/logos/Logo_MadCritter.svg'
import LogoBlack from '../assets/logos/Logo_black.svg'
import LogoWhite from '../assets/logos/Logo_white.svg'
import LogoShortWhite from '../assets/logos/Logo_Reducido_Blanco 1.svg'
import LogoShortBlack from '../assets/logos/Logo_Reducido_Oscuro.svg'
import LogoBlue from '../assets/logos/Logotipo_Azul.svg'

const createLogosMad = (logo: string, altSuffix: string) => ({
    logo,
    alt: `Logo MadCritter ${ altSuffix }`,
});

export const logosMadcritter = {
    logoMad: createLogosMad(LogoMadcritter, ''),
    logoBlack: createLogosMad(LogoBlack, 'Black'),
    logoWhite: createLogosMad(LogoWhite, 'White'),
    logoShortWhite: createLogosMad( LogoShortWhite, 'White'),
    logoShortBlack: createLogosMad( LogoShortBlack, 'Black'),
    logoBlue: createLogosMad( LogoBlue, 'Logo Blue'),
};