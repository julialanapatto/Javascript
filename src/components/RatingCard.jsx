import React, { useContext } from 'react';
import star from '../images/star.svg';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
import myContext from '../Context/myContext';
import './RatingCard.css';

const RatingCard = () => {
  const { handleClick, isClicked } = useContext(myContext);
  const history = useHistory();

  return (
    <>
      <main>
        <section className="ratingCard">
          <img src={ star } alt="" />
          <div className="paragraph">
            <h1>How did we do?</h1>
            <p> 
              Please let us know how we did with your support request. All feedback is appreciated 
              to help us improve our offering!
            </p>
          </div>
          <div className="rating">
            <button
              type='button'
              value='1'
              className={isClicked ? "clicked" : ""}
              onClick={ handleClick }
            >
              1
            </button>
            <button
              type='button'
              value='2'
              className={isClicked ? "clicked" : ""}
              onClick={ handleClick }
            >
              2
            </button>
            <button
              type='button'
              value='3'
              className={isClicked ? "clicked" : ""}
              onClick={ handleClick }
            >
              3
            </button>
            <button
              type='button'
              value='4'
              className={isClicked ? "clicked" : ""}
              onClick={ handleClick }
            >
              4
            </button>
            <button
              type='button'
              value='5'
              className={isClicked ? "clicked" : ""}
              onClick={ handleClick }
            >
              5
            </button>
          </div>
          <button
            type="button"
            className="submit"
            onClick={ () => history.push('/thanks') }
          >
            SUBMIT
          </button>
        </section>
      </main>
      <Footer />
    </>

  );
}

export default RatingCard;