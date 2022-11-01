import CardView from "./CardView";
import {useDispatch} from "react-redux";

export const Card =({card})=>{
    const dispatch = useDispatch();
    return <CardView card={card} dispatch={dispatch} />
}