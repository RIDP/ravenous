import React from 'react';
import './Business.css';

//create javascript object
let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

//create react component
class Business extends React.Component {
  render() {
    return <div Business="Business">
  <div Business={this.business.imageSrc}>
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
  </div>
  <h2>MarginOtto Pizzeria</h2>
  <div Business="Business-information">
    <div Business={this.business.address}>
      <p>1010 Paddington Way</p>
      <p>Bordertown</p>
      <p>NY 10101</p>
    </div>
    <div Business={this.business.reviewCount}>
      <h3>ITALIAN</h3>
      <h3 Business="rating">4.5 stars}</h3>
      <p>90 reviews</p>
    </div>
  </div>
</div>;
  }
}

export default Business;
