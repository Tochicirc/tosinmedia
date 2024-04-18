import Navbar from "../../Components/Navbar/Navbar"
import Bonus from "../Bonus/Bonus"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import MarketDisp from "../MarketDisp/MarketDisp"
import Offer from "../Offer/Offer"
import WhoWeHelp from "../WhoWehelp/WhoWeHelp"

const Layout = () => {
  return (
    <>
        <Navbar/>
        <main>
            <Hero/>
            <MarketDisp/>
            <WhoWeHelp/>
            <Offer/>
            <Bonus/>
            <hr/>
            <Footer/>
        </main>
    </>
  )
}

export default Layout