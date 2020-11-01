import React from 'react';
import './card.scss';
import { FiStar} from 'react-icons/fi';


function Card() {
    return (
        <div className="mainDivCard">
            <article className='card'>
                <header>
                <img src="../../Assets/1220.jpg" alt="cover" className="cov"/>
              <div className="txt"> <h2 className="title">Daupinois</h2>
               <p>Un Jolie Dauphin</p></div></header>
               <footer><h3 className="rate">Rate this Song:</h3><div className="stars"> <FiStar className="star" /><FiStar className="star" /><FiStar className="star" /><FiStar className="star" /><FiStar className="star" /></div>
               </footer>
            </article>

        </div>
    );
}



export default Card;