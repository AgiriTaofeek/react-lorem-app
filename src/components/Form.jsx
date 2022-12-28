import React from 'react';
import Button from './Button';

const Form = ({ onSubmit, count, onCount }) => {
  return (
    <form className="lorem-form" onSubmit={onSubmit}>
      <label htmlFor="amount">Paragraphs:</label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={count}
        onChange={(e) => onCount(e.target.value)}
      />
      <Button css="btn" type="submit">
        Generate
      </Button>
    </form>
  );
};

export default Form;
