
import Aboutpage from "../../Componets/Aboutpage/Aboutpage"
import Baaner from "../../Componets/Baaner/Baaner"
import Header from "../../Componets/Header/Header"
import Pricing from "../../Componets/Pricing/Pricing"
import Readmore from "../../Componets/Readmore/Readmore"
import Searchfrom from "../../Componets/Search-from/Search-from"

const Homepages=()=>{
    return(
        <>
            <Header/>
            <Baaner/>
            <Searchfrom/>
            <Aboutpage/>
            <Readmore/>
            <Pricing/>
        </>
    )
}
export default Homepages