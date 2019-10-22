import axios from 'axios'

const initialState = () => {
  return {
    listings: [],
    loading: true,
    error: ''
  }
} 

export default function listings(state = initialState(), action){
  switch (action.type){
    case "GET_LISTINGS": {
      return {...state, loading: action.payload};
    }
    case "GET_LISTINGS_FULFILED": {
      return {...state, people: action.payload, loading: action.loading};
    }
    case "GET_LISTINGS_REJECTED": {
      return {...state, errorMessage: action.payload, loading: action.loading};
    }
    default: 
      return state
  }
}


 /*case "GET_LISTINGS" :{
      const newState = [];
      axios.get('https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=brighton')
      //.then(res => newState = res.data.response.listings)
      .then(res => dispatch({type: "SAVE_DATA", payload: res.data.response.listings}))
      .catch(err => console.log(err))
      //console.log(newState);
      return newState;
      break;
    }*/