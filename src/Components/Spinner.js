import React, { Component } from 'react'
import load from './new.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-4'>
        <img src={load} alt="loading" />
      </div>
    )
  }
}
export default Spinner
