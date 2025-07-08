
// import { Brandings } from './components/brandings/Brandings';
import { Brandings } from './components/brandy/Brandings';
import { FullPage } from './components/brandings/FullPage';
import { Clients } from './components/clients/Clients';
import { Concept } from './components/concept/Concept';
import { Contact } from './components/contact/Contact';
import { Services } from './components/services/Services';
import './home.css';
import { BrandingsHorizontal } from './components/brandings/BrandingsHorizontal';

export const Home = () => {
  
  return (
    <>
      {/* <FullPage/> */}
      <Brandings />
      <Concept />
      <Services />
      <Clients />
      <section style={{ height: '100vh', overflow: 'hidden' }}>
        <BrandingsHorizontal />
      </section>
      {/* <FullPage/> */}
      {/* <BrandingsHorizontal/> */}
      <Contact />

    </>
  )
}
