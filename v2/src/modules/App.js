import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <main className="main-container">
        {this.props.children}
      </main>
    )
  }
})