//search_bar.js

// user types input -> search youtube api - update video list on right rail

// need to import react.js library
import React from 'react';

// syntactical sugar
// extract Component and assign to Component
// import React, { Component } from 'react';


// define component
// functional component
/*
const SearchBar = () => {
	return <input />
};
*/


// react class based component
// internal recordkeeping
// keeps track of itself
// ability to be aware
// javascript object with methods and properties

// plain javascript object (ES6)
// give SearchBar functionality from React.Component class
class Footer extends React.Component {

  // define a render method in class (SearchBar)
  // every react class has to have a render function
  render() {
  	return ( 

    <div className="container">
      <div className="row">
        <div className="footer col-md-12">

          <p>footer component</p>

        </div>
      </div>
    </div>


  			// this pattern reduces number of lines of code. but is it testable?
  			// its concise and clean, but...
  			//return <input onChange={(event) => console.log(event.target.value)} />
  	  		// Value of the input: {this.state.term}
    );
  }

}

// react components can show other components

// allow other components to import this component
export default Footer;