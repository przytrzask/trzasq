import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import './style.css';

class SiteNav extends React.Component {
  render() {
    return (
      <nav className="blog-nav">
        <ul>
          <li>
            <Link to={prefixLink('/')} activeClassName="current" onlyActiveOnIndex> About me
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/custom/')} activeClassName="current" onlyActiveOnIndex> current
            </Link>
          </li>
          <li>
            <Link to={prefixLink('/contact/')} activeClassName="current"> Contact me
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SiteNav;
