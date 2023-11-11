import AppMain from './components/AppMain/AppMain';
import './App.css';

import { stateContext } from './provider/Provider';
import { useContext } from 'react';
import ErrorModal from './components/ErrorModal/ErrorModal';

function App() {

  const { states, functions } = useContext(stateContext)

  function handleAppClick(e) {
    if (e.target === e.currentTarget) {

      functions.appHandler(!states.appIsClicked);

    }
  }


  return (

    <div className="App" onClick={(e) => handleAppClick(e)}>
      <AppMain ></AppMain>
      {states.errorState.state && <ErrorModal></ErrorModal>}

    </div>

  );
}

export default App;
