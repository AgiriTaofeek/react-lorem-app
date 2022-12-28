import React, { useState } from 'react';
import Data from './Data';
import Wrapper from './components/Wrapper';
import Form from './components/Form';
import Article from './components/Article';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(+count);
    let amount = +count;
    if (amount <= 0) amount = 1;
    if (amount > Data.length) amount = Data.length;
    setText(Data.slice(0, amount));
  };

  const Text = text.map((para, i) => {
    return <p key={i}>{para}</p>;
  });
  return (
    <Wrapper>
      <h3>Tired of boring lorem ipsum?</h3>
      <h3>
        Input the number of paragraphs you want but if less than or equal to 0,
        it would generate 1 paragraph{' '}
      </h3>
      <Form onSubmit={handleSubmit} count={count} onCount={setCount} />
      <Article>{Text}</Article>
    </Wrapper>
  );
};

export default App;
