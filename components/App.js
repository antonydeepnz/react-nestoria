import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios' 

/////STYLES IMPORT
import '../styles/App.css'

/////COMPONENTS IMPORT
import { Header } from './Header'
import { Listing } from './Listing'

/////ACTIONS IMPORT
import { getListings } from '../store/actions/listingsActions'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='app'>
        <Header onSearch={this.props.onGetListings}/>
        <div className='list-of-listings'>
        {this.props.listings.map((item,index) => {
          return <Listing key={index} 
                    imgSrc={item.img_url}
                    title={item.title}
                    price={item.price_formatted}/>
        })}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    listings: state.listings.listings,
  }),
  dispatch => ({
    onGetListings: () => {
      dispatch(getListings());
    },
    Set : () => {
      const a = () => {
        return dispatch => {
          setTimeout(()=> {
            console.log('dsfdsfsfdf');
            dispatch({type: 'SET', payload: []})
          }, 2000)
        }
      }
      dispatch(a());
    }
  })
)(App)

