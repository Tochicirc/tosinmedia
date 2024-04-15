import Navbar from "../../Components/Navbar/Navbar"
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
        </main>
    </>
  )
}

export default Layout