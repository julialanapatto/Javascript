import React, { useContext } from 'react';
import thanks from '../images/thanks.svg';
import Footer from './Footer';
import myContext from '../Context/myContext';
import './ThanksCard.css';

const ThanksCard = () => {
  const { value } = useContext(myContext);
  return (
    <>
      <main>
        <section className="ThanksCard">
        <img src={ thanks } alt="" />
        <p className='ratingNote'>You selected { value } out of 5</p>
        <div className="paragraph">
          <h1>Thank you!</h1>
          <p> 
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don't hesitate to get in touch!
          </p>
        </div>
        </section>
      </main>
    <Footer />
    </>
  );
}

export default ThanksCard;