import React, { Component } from 'react'

export const Search = (props) => {
  return (
    <>
      <input placeholder="Input city where to search" />
      <button onClick={props.onSearch}>Search</button>
    </>
  );

}
