import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Feedback.css';

const feedbacks = [
  {
    id: 1,
    name: 'Tom Morrison',
    title: 'Executive Account Manager, NCS',
    feedback: 'It seemed to be in-line with everything we were looking at.',
    imgUrl: 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Ftom-morrison.png&w=640&q=75'
  },
  {
    id: 2,
    name: 'Dalibor Kruljac',
    title: 'KAMELEYA LTD',
    feedback: 'Most complete MDM solution I found, including major names',
    imgUrl: 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=640&q=75'
  },
  {
    id: 3,
    name: 'Justin Modrak',
    title: 'Technology Coordinator, East Troy Community School District',
    feedback: 'Hexnode is of great value. Works great with Android and iOS!',
    imgUrl: 'https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=640&q=75'
  }
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };


  const currentFeedback = feedbacks[currentIndex];

  return (
    <div className="feedback-container">
      <TransitionGroup>
        <CSSTransition
          key={currentFeedback.id}
          timeout={500}
          classNames="feedback-card"
        >
          <div className="feedback-card">
            <div className="feedback-img">
              <img src={currentFeedback.imgUrl} alt={currentFeedback.name} />
            </div>
            <div className="feedback-content">
              <p className="feedback-text">"{currentFeedback.feedback}"</p>
              <p className="feedback-name">{currentFeedback.name}</p>
              <p className="feedback-title">{currentFeedback.title}</p>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div className="feedback-navigation">
        <button className="nav-button left" onClick={handlePrev}>
          {'<'}
        </button>
        <button className="nav-button right" onClick={handleNext}>
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Feedback;
