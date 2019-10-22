import axios from 'axios'

const initialState = () => {
  return []
} 

export default function listings(state = initialState(), action){
  switch (action.type){
    case "GET_LISTINGS" :{
      const newState = [];
      axios.get('https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=brighton')
      .then(res => newState = res.data.response.listings)
      .catch(err => console.log(err))
      console.log(newState);
      return newState;
      break;
    }
  }
  return state
}