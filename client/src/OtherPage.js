import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <p>Nazwa programu: Zadanie 2</p>
      <p>Imię i nazwisko autora: Tomasz Smyk</p>
      <p>Numer grupy dziekańskiej: I2S 2.4</p>
      <Link to="/">Go back home</Link>
    </div>
  );
};
