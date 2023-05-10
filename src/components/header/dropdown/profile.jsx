import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';





function DropdownProfile(props) {
  
  return (
    <div className="navbar-item navbar-user dropdown">
      <a href="#/" className="navbar-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown">
        <img src="" alt="profile" />
        <span>
          <span className="d-none d-md-inline">{props.userNameProp}</span>
          <b className="caret"></b>
        </span>
      </a>
      <div id="profile-dropdown" className="dropdown-menu dropdown-menu-end me-1">
        <a href="#/" className="dropdown-item">Edit Profile</a>
        <a href="#/" className="dropdown-item">Settings</a>
        <div className="dropdown-divider"></div>
        <Link to="/" className="dropdown-item">
          Log Out
        </Link>

      </div>
      <ReactNotifications />
    </div>
  );
};

export default DropdownProfile;