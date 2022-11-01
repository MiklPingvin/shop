import {Provider} from "react-redux";
import store from "./redux/redux";
import AppView from "./AppView";


function App() {

    return (<Provider store={store}>
            <AppView  />
        </Provider>
    );
}

export default App;
