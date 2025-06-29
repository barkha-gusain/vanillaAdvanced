import React, { Suspense } from 'react';
import './index.css';
import { Element } from 'react-scroll'; // ✅ Add this import

// Lazy-loaded components
const Navbar = React.lazy(() => import('./Components/Navbar/Navbar.jsx'));
const Home = React.lazy(() => import('./Components/Home/Home.jsx'));
const Card = React.lazy(() => import('./Components/Card/Card.jsx'));
const Grid = React.lazy(() => import('./Components/Grid/Grid.jsx'));
const Vanilla = React.lazy(() => import('./Components/Vanila/Vanilla.jsx'));
const Delivery = React.lazy(() => import('./Components/Del/Delivery.jsx'));
const Res = React.lazy(() => import('./Components/Res/Res.jsx'));
const Footer = React.lazy(() => import('./Components/Footer/Footer.jsx'));

const App = () => {
  return (
    <Suspense>
      <Navbar />

      {/* Smooth scroll sections */}
      <Element name="home"><Home /></Element>
      <Element name="card"><Card /></Element>
      <Element name="grid"><Grid /></Element>
      <Element name="vanilla"><Vanilla /></Element>
      <Element name="delivery"><Delivery /></Element>
      <Element name="res"><Res /></Element>

      <Footer />
    </Suspense>
  );
};

export default App;
