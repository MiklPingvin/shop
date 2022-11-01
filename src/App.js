import {Provider, useDispatch} from "react-redux";
import store from "./redux/redux";
import AppView from "./AppView";
import {setCards} from "./redux/reducer";
import {useEffect} from "react";
import axios from "axios";


const AppContainer = () => {
    const dispatch = useDispatch()

    useEffect(() => {
         async function f() {
            return  await axios.get('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')
        }
        f().then(r => dispatch(setCards(r.data)))
    }, [])

    return (
        <AppView/>
    );
}

const App = () => {
    return <Provider store={store}>
        <AppContainer/>
    </Provider>
}

export default App;
