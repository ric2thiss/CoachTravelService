import Card from './components/Card/Card'
import TravelCards from './components/Card/TravelCards'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
     <body>
        <Navbar />
        <Hero />
        <Card />
        <TravelCards />
        {/* <div class="b-example-divider"></div> */}
        <Footer />
     </body>
    </>
  )
}

export default App
