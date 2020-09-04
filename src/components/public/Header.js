import React from 'react'
import {Link} from 'react-router-dom'
import Home from '@material-ui/icons/Home'

import '../../asset/header.scss'
const Header = props => {
    return (
      <div className="Header__container">
        <div className="Header__left">
          <Link to="/">
            <div className="Header__home"> <Home fontSize='large'></Home></div>
          </Link>
        </div>
        <div className="Header__middle">
          <div className="Header__logo">Trello-clone</div>
        </div>
        <div className="Header__right">
          <div className="Header__user">user</div>
        </div>
      </div>
    );
}


export default Header;
