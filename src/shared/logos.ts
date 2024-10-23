import LogoMadcritter from '../assets/logos/Logo_MadCritter.svg'
import LogoBlack from '../assets/logos/Logo_black.svg'
import LogoWhite from '../assets/logos/Logo_white.svg'

const createLogosMad = (logo: string, altSuffix: string) => ({
    logo,
    alt: `Logo MadCritter ${ altSuffix }`,
});

export const logosMadcritter = {
    logoMad: createLogosMad(LogoMadcritter, ''),
    logoBlack: createLogosMad(LogoBlack, 'Black'),
    logoWhite: createLogosMad(LogoWhite, 'White'),
};