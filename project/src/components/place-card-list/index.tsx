import {Card} from '../../types';
import PlaceCard from '../place-card';
import {useState} from 'react';

type PropsType = {
  cardList: Card[]
}

const PlaceCardList = ({cardList}: PropsType) => {
  [activeCard, setActiveCard] = useState(null);
  const list = cardList.map((item) => <PlaceCard cardItem={item} key={Math.random() * 2} func={setActiveCard}/>);
  return (
    <div className="cities__places-list places__list tabs__content">
      {list}
    </div>
  );
};

export default PlaceCardList;
