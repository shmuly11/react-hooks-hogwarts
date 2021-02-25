import React, {useState} from "react";
import Hog from "./Hog"
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg"



function Hogs({hogs}){
    const [filtered, setFiltered] = useState(false)

    const hogImages = {
        'Augustus Gloop': augustus_gloop,
        'Babe': babe,
        'Bailey': bailey,
        'Cherub': cherub,
        'Galaxy Note': galaxy_note,
        'Leggo My Eggo': leggo_my_eggo,
        'Peppa': peppa,
        'Piggy smalls': piggy_smalls,
        'Piglet': piglet,
        'Porkchop': porkchop,
        'Trouble': trouble,
        'Truffle Shuffle': truffle_shuffle
    }
    
    function handleFiltered(){   
       setFiltered((a) => !a)
    }
    
    const filteredHogs =  hogs.filter(hog =>  hog.greased)


    // console.log(hogImages["babe"])
    let totalHogs =  filtered ? filteredHogs : hogs
    const hogsToDisplay = totalHogs.map(hog=> {
        return <Hog 
        name={hog.name} 
        key={hog.name} 
        image={hogImages[hog.name]}
        specialty={hog.specialty}
        weight={hog.weight}
        greased={hog.greased}
        medal={hog["highest medal achieved"]}
        />
    })
    return(
        <div >
            <button onClick={handleFiltered}>{filtered ? "Show All" : "Show Greased"}</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
       {hogsToDisplay} 
        </div>
    )
}

export default Hogs