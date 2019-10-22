import axios from 'axios';

import { requestData, requestDataFulfilled, requestDataRejected } from '../reducers/listings'

// export const getListings = () => {
//     return async dispatch => {
//         try {
//             const listingsPromise = await fetch('https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=brighton')
//             dispatch(requestData(true));
//             const listings = await listingsPromise.json();
//             console.log('listings-----------', listings);
//             dispatch(requestDataFulfilled(listings.results))
//           } catch(error) {
//             console.log('Getting People Error---------', error);
//             dispatch(requestDataRejected(error))
//           }
//     }
// }

 export const getListings = () => {
    return dispatch => {
        dispatch(requestData(true));
        axios.get('https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=brighton')
        .then(res => {
          dispatch(requestDataFulfilled(res.data.response.listings));
          console.log(res);
        })
        .catch(err => dispatch(requestDataRejected(err)));
    }
}