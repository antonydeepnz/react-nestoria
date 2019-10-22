import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../style.css'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      
      </div>
    );
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    onGetListings: () => {
      dispatch({type: 'GET_LISTINGS'})
    }
  })
)(App)