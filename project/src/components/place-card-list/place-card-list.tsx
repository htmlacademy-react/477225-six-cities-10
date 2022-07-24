import {useState} from 'react';
import {Card} from '../../types';
import PlaceCard from '../place-card';
import classNames from 'classnames';

type PropsType = {
  cardList: Card[],
  classTitle: string
}

const PlaceCardList = ({cardList, classTitle}: PropsType) => {
  const [, setActiveCardId] = useState<null | number>(null);
  const classListTitle = classNames({'favorites__places': classTitle === 'favorites', 'cities__places-list places__list tabs__content': classTitle === 'cities','near-places__list places__list': classTitle === 'near-places'});
  return (
    <div className={classListTitle}>
      {cardList.map((item) => <PlaceCard cardItem={item} classTitle={classTitle} key={item.id} setActiveCardId={setActiveCardId}/>)}
    </div>
  );
};

export default PlaceCardList;
