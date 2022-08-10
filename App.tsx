import * as React from 'react';
import './style.css';
import { Layout } from './Components/Layout';
import { Route } from 'react-router';
import { Home } from './Components/Home';
import { NavMenu } from './Components/NavMenu/NavMenu';

import {
  Form,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';

export default function App() {
  let component;
  switch (window.location.pathname) {
    case '#':
      break;
    case '/Home':
      component = <Home />;
      break;
  }
  return (
    <div>
      <NavMenu />
      <div>{component}</div>
    </div>
  );
}
