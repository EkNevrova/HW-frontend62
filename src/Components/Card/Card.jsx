import Button from "../Button/button";
import Popup from "../Popup/Popup";

export default function Card(props) {
    return (

        <div className="card">
            <div className="card-header">
                <span><h2 className="card-title">{props.name}</h2></span>
                <Button content="Click" onClick={Popup} />
            </div>
            <div className="card-body">
                <p className="card-universe">Вселенная: {props.universe}</p>
                <p className="card-alterego">Альтер эго: {props.alterego}</p>
                <p className="card-occupation">Род деятельности: {props.occupation}</p>
                <p className="card-friends">Друзья: {props.friends}</p>
                <p className="card-superpowers">Суперсилы: {props.superpowers}</p>
            </div>
            <div className="card-footer">
                <img src={props.url} alt={props.name} />
            </div>
        </div>
    );
}