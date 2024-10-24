
import './App.css'
import { Header } from './components/header/Header'
import { DarkModeProvider } from './hooks/DarkModeContext'
import { Home } from './pages/home/Home'

function App() {

  return (
    <>
    <DarkModeProvider>
     <Header />
     <Home />
    </DarkModeProvider>
    </>
  )
}

export default App
