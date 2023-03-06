import ScrollToTop from 'react-scroll-to-top'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Contact />

        <ScrollToTop smooth={true} />
      </div>
      <Footer />
    </>
  )
}

export default App
