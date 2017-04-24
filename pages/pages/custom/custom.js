import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

// import './style.css';
// import '../../static/css/highlight.css';

export const data = {
  title: 'Tile',
  layout: "page",
path: "/custom"}

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        render text
      </div>
    )
  }
})

