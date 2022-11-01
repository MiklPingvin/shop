import CardView from "./CardView";
import {useDispatch} from "react-redux";

export const Card =({name, category, price})=>{
    const dispatch = useDispatch();
    return <CardView price={price} name={name} category={category} dispatch={dispatch} />
}