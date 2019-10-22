import axios from 'axios'

export const requestData = (bool) => {
    return {
        type: "GET_LISTINGS",
        payload: bool,
    };
}

export const requestDataFulfilled = (data) => {
    return {
        type: "GET_LISTINGS_FULFILED",
        payload: data,
        loading: false,
    };
}

export const requestDataRejected = (error) => {
    return {
        type: "GET_LISTINGS_REJECTED",
        payload: error,
        loading: false,
    };
}

export const getListings = () => {
    //IN order to use await your callback must be asynchronous using async keyword.
    return async dispatch => {
        //Then perform your asynchronous operations.
        try {
            //Have it first fetch data from our starwars url.
            const listingsPromise = await axios.get('https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=brighton')
            dispatch(requestData(true));
            //Then use the json method to get json data from api/
            const people = await starWarsPromise.json();
            console.log('people-----------', people);
            //Now when the data is retrieved dispatch an action altering redux state.
            dispatch(requestDataFulfilled(people.results))
          } catch(error) {
            console.log('Getting People Error---------', error);
            dispatch(requestDataRejected(error))
          }
    }
}