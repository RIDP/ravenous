import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}> {sortByOption}</li>;
    });
  }

  render() {
    return(
    <div SearchBar="SearchBar">
      <div SearchBar="SearchBar-sort-options">
      <ul>
        {this.renderSortByOptions()}
      </ul>
  </div>
  <div SearchBar="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div SearchBar="SearchBar-submit">
    <a>Let's Go</a>
  </div>
</div>
);
  }
}
