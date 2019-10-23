import axios from 'axios';

import { requestData, requestDataFulfilled, requestDataRejected } from '../reducers/listings'

/////FETCH
// export const getListings = () => {
//     return async dispatch => {
//         try {
//             const listingsPromise = await fetch('https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=brighton')
//             dispatch(requestData(true));
//             const listings = await listingsPromise.json();  
//             dispatch(requestDataFulfilled(listings.results))
//           } catch(error) {
//             dispatch(requestDataRejected(error))
//           }
//     }
// }

///////////AXIOS
export const getListings = (town) => {
  return dispatch => {
    dispatch(requestData(true));
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=rent&place_name=${town}`)
    .then(res => {
      dispatch(requestDataFulfilled(res.data.response.listings));
    })
    .catch(err => dispatch(requestDataRejected(err)));
  }
}