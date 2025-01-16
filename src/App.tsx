
import './App.css'
import { Header } from './components/header/Header'
import { DarkModeProvider } from './hooks/DarkModeContext'
import { Footer } from './components/footer/Footer'
import { AppRouter } from './routes/AppRouter'

function App() {

  return (
    <>
    <DarkModeProvider>
      <Header />
      <AppRouter />
      <Footer />
    </DarkModeProvider>
    </>
  )
}

export default App
