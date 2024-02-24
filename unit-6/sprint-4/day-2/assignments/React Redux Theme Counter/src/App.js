import { Provider } from "react-redux";
import "./App.css";
import Counter from "./Components/Counter";
import store from "./Redux/store";
import Theme from "./Components/Theme";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Theme/>
    <Counter />
    </div>
    </Provider>
  );
}

export default App;
