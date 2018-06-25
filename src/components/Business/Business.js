import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    return (
      <div Business="Business">
        <div Business="image-container">
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div Business="Business-information">
          <div Business="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
          </div>
          <div Business="Business-reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 Business="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
