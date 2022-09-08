import React from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import CartButton from './HeaderCartButton';
function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Bubba's Meals</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
}

export default Header;
