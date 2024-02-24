import './App.css';
import { Provider } from 'react-redux'
import { store } from './Redux/store';
import AllRoutes from './Routes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
     <Provider store={store}>
    <div className="App">
     <NavBar/>
    <AllRoutes/>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
