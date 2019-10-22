const initialState = () => {
 return {
    CORS: 'https://cors-anywhere.herokuapp.com/',
    query: 'https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=london'}
}

export default function query(state = initialState(),action){
  switch (action.type){

  }
  return state;
}