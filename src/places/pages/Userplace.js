import React from 'react';

import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES =[
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world',
        imageUrl:'https://lh5.googleusercontent.com/p/AF1QipNAZWH5XAJT81otOykRk8j8wQR6u_Nle08TTGym=w408-h272-k-no',
        address:'20 W 34th St, New York, NY 10001, United States',
        location:{
            lat:40.7484405,
            lng:-73.9856644
        },
        creator:'u1'
    },
    
    {
        id:'p2',
        title:'Emp State Building',
        description:'One of the most famous sky scrapers in the world',
        imageUrl:'https://lh5.googleusercontent.com/p/AF1QipNAZWH5XAJT81otOykRk8j8wQR6u_Nle08TTGym=w408-h272-k-no',
        address:'20 W 34th St, New York, NY 10001, United States',
        location:{
            lat:40.7484405,
            lng:-73.9856644
        },
        creator:'u2'
    }

];

const UserPlaces = () =>{
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return (
        <PlaceList items={loadedPlaces} />
    );
};

export default UserPlaces;