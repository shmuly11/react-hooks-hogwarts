import React, {useState} from "react";

function Hog({name, image, weight, specialty, greased, medal}){
    // console.log(greased)
    const [clicked, setclicked] = useState(false)
    
    function handleClick(){
        setclicked((status) => !status)
    }

    return(
        <div className="ui grid container" onClick={handleClick}>
            <h3>{name}</h3>
            <img className="ui eight wide column" src={image}/>
            {clicked ? <ul>
            <li>Weight:{weight}</li>
            <li>Specialty:{specialty}</li>
            <li>{greased ? "I am greased" : "I am NOT greased"}</li>
            <li>Higher Medal Achieved:{medal}</li>
            </ul>
             : null}
        </div>
    )
}

export default Hog