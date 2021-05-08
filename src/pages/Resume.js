import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Leadership from '../components/Resume/Leadership';
import References from '../components/Resume/References';

import leadership from '../data/resume/leardership';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Leadership',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Aditi Pandey's Resume. Udaan.com, Genpact, Udhyam, Netskope, BITS Pilani ."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Leadership data={leadership} />
      <Skills skills={skills} categories={categories} />
      <References />

    </article>
  </Main>
);

export default Resume;
