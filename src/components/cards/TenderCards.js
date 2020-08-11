import React, { useState, useEffect } from 'react';
import TenderCard from 'react-tinder-card';
import database from '../../firebase';
import './TinderCards.css'

const TenderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    database.collection('people').onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ));
  }, []);
   
  return (
    <div className="tinder-card_container">
      {people.map(person => (
        <TenderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TenderCard>
      ))}
    </div>
  )
}

export default TenderCards;
