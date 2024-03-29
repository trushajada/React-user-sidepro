
import React from "react";
import Baaner from "../../Componets/Baaner/Baaner"
import Header from "../../Componets/Header/Header"
import Rsearch from "../../Componets/R-Search/R-search";
import Aboutpage from "../../Componets/Aboutpage/Aboutpage";
import Readmore from "../../Componets/Readmore/Readmore";
import Pricing from "../../Componets/Pricing/Pricing";

const Rhome=()=>{
    return(
        <>
            <Header/>
            <Baaner/>
            <Rsearch/>
            <Aboutpage/>
            <Readmore/>
            <Pricing/>
        </>
    )
}
export default Rhome