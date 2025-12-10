import { Contact } from './components/contact/Contact';
import { Services } from './components/services/Services';
import './home.css';
import { BrandingsHorizontal } from './components/brandings/BrandingsHorizontal';
import { BreakSchemes } from './components/break-schemes/BreakSchemes';
import { YourBrand } from './components/your-brand/YourBrand';
import { HowDoIt } from './components/how-do-it/HowDoIt';
import { TrustUs } from './components/trust-us/TrustUs';
import { ClientsMethod } from './components/clientsMethod/ClientsMethod';

export const Home = () => {

  
  
  return (
    <>
      {/* <Brandings /> */}
      <BreakSchemes />
      <YourBrand />
      <HowDoIt />
      <Services />
      <section style={{ height: '100vh', overflow: 'hidden' }}>
        <BrandingsHorizontal />
      </section>
      <TrustUs />
      <ClientsMethod />
      {/* <Clients /> */}
      {/* <FullPage/> */}
      <Contact />

    </>
  )
}
