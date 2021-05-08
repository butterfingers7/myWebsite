import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Aditi Pandey</h2>
        <p><a href="mailto:aditipandeygkp@gmail.com">aditipandeygkp@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Aditi. I like solving puzzles.
        I am a <a href="https://icme.stanford.edu/">BITS Pilani</a> graduate, and have worked in both Technology and Product in the Previous 2 years. Before working at <a href="https://udaan.com">Udaan</a>, I was
        at <a href="https://matroid.com">Genpact</a>
        , <a href="https://planet.com">Udhyam</a>
        , and <a href="https://seds.org">Netskope</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Aditi Pandey <Link to="/">findaditipandey96.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
