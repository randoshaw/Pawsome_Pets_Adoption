import React from 'react'
import {Link} from 'react-router-dom'

const Cat = (props) => {

    return (
        <div className="indCat">
            <Link to={{pathname: '/adoption', state:{animalId: props._id, catArray: props.catArray}}}
            >Name: {props.name}</Link>
            <img src={props.image} alt='cat' />
            <h5>Breed: {props.breed}</h5>
            <h5>Gender: {props.gender}</h5>
            <h5>Age: {props.age}</h5>
            <h5>Color: {props.furColor}</h5>
            {props.goodWithKids ? <h5>Good with Kids: Yes!</h5> : <h5> Good with Kids: Unfortunately, No</h5>}
            {props.goodWithPets ? <h5>Good with Other Pets: Yes!</h5> : <h5> Good with Pets: Better kept with no other pets</h5>}
        </div>
    )
}

export default Cat