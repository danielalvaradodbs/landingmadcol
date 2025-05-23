import Hero from '../assets/images/brands/Hero.svg';
import Mucosolvan from '../assets/images/brands/MUCOSOLVAN.svg';
import Remo from '../assets/images/brands/Remo.svg';
import Bisolvon from '../assets/images/brands/Bisolvon.svg';
import Pluxee from '../assets/images/brands/Pluxee.svg';
import Sanofi from '../assets/images/brands/Sanofi.svg';
import Sixty from '../assets/images/brands/3Sixty.svg';
import Amgen from '../assets/images/brands/Amgen.svg';
import Abbvie from '../assets/images/brands/abbvie.svg';
import VaxTrials from '../assets/images/brands/vaxtrials.svg';
import Nutrabiotics from '../assets/images/brands/nutrabiotics.svg';
import Gaia from '../assets/images/brands/gaia.svg';


const countries = {
    colombia: '_Colombia',
    centroAmerica: '_Centroamérica',
    latam: '_Latam',
    panama: '_Panamá'
};

export const clients = [
    {
        country: countries.latam,
        img: Hero,
        altImg: 'Hero Latam',
        type: 'clients.type.hero',
    },
    {
        country: countries.centroAmerica,
        img: Mucosolvan,
        altImg: 'Mucosolvan',
        type: 'clients.type.mucosolvan',
    },
    {
        country: countries.colombia,
        img: Remo,
        altImg: 'Remo Lab',
        type: 'clients.type.remoLab',
    },
    {
        country: countries.latam,
        img: Bisolvon,
        altImg: 'Bisolvon',
        type: 'clients.type.bisolvon',
    },
    {
        country: countries.colombia,
        img: Pluxee,
        altImg: 'Pluxee',
        type: 'clients.type.pluxee',
    },
    {
        country: countries.latam,
        img: Sanofi,
        altImg: 'Sanofi',
        type: 'clients.type.sanofi',
    },
    {
        country: countries.colombia,
        img: Sixty,
        altImg: '3Sixty',
        type: 'clients.type.3Sixty',
    },
    {
        country: countries.colombia,
        img: Amgen,
        altImg: 'Amgen',
        type: 'clients.type.amgen',
    },
    {
        country: countries.colombia,
        img: Abbvie,
        altImg: 'abbvie',
        type: 'clients.type.abbvie',
    },
    {
        country: countries.panama,
        img: VaxTrials,
        altImg: 'Vax Trials',
        type: 'clients.type.vaxTrials',
    },
    {
        country: countries.colombia,
        img: Nutrabiotics,
        altImg: 'Nutrabiotics',
        type: 'clients.type.nutrabiotics',
    },
    {
        country: countries.colombia,
        img: Gaia,
        altImg: 'Gaia Amazonas',
        type: 'clients.type.gaiaAmazonas',
    },
]