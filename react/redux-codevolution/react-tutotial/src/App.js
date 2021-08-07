import './App.css'
import CakeContainer from './components/CakeContainer'
import {Provider} from 'react-redux'
import Store from './redux/store'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}


export default App;
