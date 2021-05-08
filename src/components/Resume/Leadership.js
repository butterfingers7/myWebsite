import React from 'react';
import PropTypes from 'prop-types';

import Accom from './Leadership/Job';

const Leadership = ({ data }) => (
  <div className="leadership">
    <div className="link-to" id="leadership" />
    <div className="title">
      <h3>Leadership & Accomplishments</h3>
    </div>
    {data.map((job) => (
      <Accom
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Leadership.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Leadership.defaultProps = {
  data: [],
};

export default Leadership;
