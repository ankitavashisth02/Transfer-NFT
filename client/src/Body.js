import React from 'react';
import nftImg from '../assets/NFT-Img.jpg';

const Body = ()=>{
    const handleChange=()=>{
        console.log("created")
    }
    return(
        <div className="center-container">
            <img src={nftImg}/>
            <button onClick={handleChange}>Click</button>
        </div>
    )
}

export default Body;