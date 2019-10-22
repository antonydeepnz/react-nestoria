import axios from 'axios' 

const initialState = () => {
  return 1;
}

export default function favorites(state = initialState(),action){
  switch (action.type){
    case "GET_LISTINGS" :{
      axios()
      break;
    }

  }
  return state;
}