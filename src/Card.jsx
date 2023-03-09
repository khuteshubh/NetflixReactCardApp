import React from 'react';
function Card(props){
    return (
    <>
    <div className="cards">
        <div className="card">
            <img src={props.imgSrc} alt="img" className="card-img"/> 
        
            <div className="card_info">
                <span className="card_category">A Netflix Orignal Series</span>
                <h3 className="card_title" >{props.title}</h3>
                <a href={props.link} target="_blank" className='link-a'>
                    <button className='btn'>Watch Now</button>
                </a>
            </div>
        </div>
    </div> 
    </>)
}

export default Card;