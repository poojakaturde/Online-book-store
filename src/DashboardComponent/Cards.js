import React from "react";
import './Cards.css';

function Cards(props) {

    function showBooks(){
        
    }

    return (

        <React.Fragment>
            <body className="border">
            <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                   
                        <img src={props.imgsrc} className = "card_image" alt="Avatar" />
                        </div>
                        <div className="flip-card-back">
                  
                        <h2 className="category-heading">  {props.category}</h2>
                        <button className="show" onClick={showBooks}> Show Books</button>
                        </div>
                        
            </div>
           </div>
            </body>
           
        </React.Fragment>
    );
}

export default Cards;