import React from "react";
import Card from "./Card";
import Sdata from "./Sdata"

function App(){
    return (
        <>
        <div className="App">
            {Sdata.map((val,index,arr) => {
                return(
                    <Card imgSrc={val.imgSrc}
                    title={val.title}
                    link={val.link}/>
                )
            })} 

        </div>


       
        </>
    )
}
export default App;