import './Card.css';

function Card(props){
    return <>
    <div className="card">
        <h2>Name: {props.name}</h2>
        <p> Class {props.class}</p>
        <p> Roll No {props.rollno}</p>
        <p> Age {props.age} </p>
    </div>
    </>
}

export default Card;