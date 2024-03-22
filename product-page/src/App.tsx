import './App.css'
import { Contacts } from './Components/Contacts/Contacts'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Products } from './Components/Products/Products'
import { PromoBlock } from './Components/PromoBlock/PromoBlock'

function App() {

  return (
    <>
      <Header/>
      <PromoBlock/>
      <Contacts/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App
