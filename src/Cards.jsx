import React from 'react';

function Cards(props){

    return(
        <>
        
        <div className="cards">
            <div className="card">
             <img src={props.cimg} alt="react" className="card_img"/>
             <div className="card_info">
               <span className="card_catagory">{props.cat}</span>
               <h3 className="card_title">{props.titel}</h3>
               <a href={props.slink} target="_blank">
                   <button>Read Now</button>
               </a>
             </div>
          </div>
          </div></>
    );
}

export default Cards;