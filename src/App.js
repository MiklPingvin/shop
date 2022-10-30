import './App.css';
import {Provider} from "react-redux";
import store from "./redux/redux";
import AppView from "./AppView";


function App() {
    return (<Provider store={store}>
            <AppView cards={store.getState().mainPage.products} />
        </Provider>
    );
}

export default App;
