import React from 'react';
import './Person.scss';
import PropTypes from 'prop-types';

export const Person = ({ personInfo }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = personInfo;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? (`My ${sex === 'f' ? ('husband') : ('wife')}'s name is ${partnerName}`)
          : ('I am not married')}
      </p>
    </section>
  );
};

Person.defaultProps = {
  age: 0,
  partnerName: 'None',
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string.isRequired,
  isMarried: PropTypes.bool.isRequired,
  partnerName: PropTypes.string,
};