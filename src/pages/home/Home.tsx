
// import { Brandings } from './components/brandings/Brandings';
// import { Brandings } from './components/brandings/Brandings';
import { FullPage } from './components/brandings/FullPage';
import { Concept } from './components/concept/Concept';
import { Services } from './components/services/Services';
import './home.css';

export const Home = () => {
  
  return (
    <>
      {/* <Brandings /> */}
      <FullPage/>
      <Concept />
      <Services />
    </>
  )
}
