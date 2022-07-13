import Main from '../../pages/main/main';

type AppProps = {
  data: {
    image: string,
    price: number,
    name: string,
    type: string,
    bookMark: boolean,
    isPremium: boolean,
    rating: number
  }[]
}

function App({data}:AppProps): JSX.Element {
  return <Main list={data}/>;
}

export default App;
