import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1996-07-19T21:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Bangalore, Karnataka',
  },
  {
    key: 'organisations',
    label: 'Number of organisations I have been a part of',
    value: '5',
  },
  {
    key: 'experience',
    label: 'Years of corporate experience',
    value: '1.75 years',
  },
  {
    key: 'lastUpdated',
    label: 'Last updated at',
    value: 'May 08, 2021',
  },
];

export default data;
