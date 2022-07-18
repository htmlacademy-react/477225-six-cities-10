import {Card} from '../../types/types';
import Main from '../../pages/main/main';

type PropsType = {
  cardList: Card[]
}

const App = ({cardList}: PropsType) => <Main cardList={cardList}/>;

export default App;
