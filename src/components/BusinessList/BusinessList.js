import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Componet {
  render() {
    return <div BusinessList="BusinessList">
              <Business />
              <Business />
              <Business />
              <Business />
              </div>
  }
};

export default BusinessList;
