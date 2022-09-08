import React from 'react';
import classes from './AvailableMeals.module.css';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: `Bubba's Special`,
    description: 'A German Import',
    price: 7.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Cuban Cigar',
    description: 'illegal',
    price: 150.0,
  },
];

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => {
    <li>{meal.name}</li>;
  });

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
}

export default AvailableMeals;