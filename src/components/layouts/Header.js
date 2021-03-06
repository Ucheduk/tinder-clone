import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';

import './Header.css'

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)} className="header_icon">
          <ArrowBackIosIcon fontSize="large" />
        </IconButton>
      ) :
        <IconButton className="header_icon">
          <PersonIcon fontSize="large" />
        </IconButton>
      }

      <img
        className="header_logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="tinder logo"
      />

      <Link to="/chat">
        <IconButton className="header_icon">
          <ForumIcon fontSize="large" />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
