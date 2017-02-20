// Javascript modules available in ES6
// accessing other javascript files
//

import _ from  'lodash';


// find library 'react' and assign it to variable 'React'
// these references know to look on node_modules folder
import React from 'react';

// needed to add elements to DOM
import ReactDOM from 'react-dom';


// we need to let react know it is a file (file reference)
// import component Header from file header.js
import Header from './components/header';

import Pagination from './components/pagination';

import SlideDetail from './components/slide_detail';

import PaginationButtons from './components/pagination_buttons';

import Footer from './components/footer';


// https://api.healthline.com/api/service/2.0/slideshow/content?partnerId=7eef498c-f7fa-4f7c-81fd-b1cc53ac7ebc&contentid=17103&includeLang=en

   // - use the following data items:
   // - Page title
   // - summary
   // - individual slide data (slides array):
   //   - title
   //   - image (image object)
   //   - slide text content (body)




// create a new component. this component should produce some HTML

// const means this is the final value of this variable. we are never going to redefine App later on
// html in the return is JSX
// const App = function() {
//	return <div>Hafa</div>;
//}

class App extends React.Component {

	constructor(props) {
		super(props);

    const slide = [];

		this.state = {
			slide: null,
			slides: null,
			currentSlide: 0,
			lastSlide: 10
		};


	fetch("https://api.healthline.com/api/service/2.0/slideshow/content?partnerId=7eef498c-f7fa-4f7c-81fd-b1cc53ac7ebc&contentid=17103&includeLang=en")
      .then(response => response.json())
      .then(json => {
        console.log(json.data[0].slides[1].image.imageUrl);

         //slide = json.data[0].slides[0];

        this.setState({
          slide: json.data[0].slides[0],
          slides: json.data[0].slides,
          currentSlide: 1,
			    lastSlide: json.data[0].slides.length
        });
      });

	}

  // use ES6 fat arrow to bind "this", otherwise, this.setState is undefined.
	updatePaginationLabel = (currentSlide) => {
	  this.setState({
      slide: this.state.slides[currentSlide-1],
	  	currentSlide: currentSlide
	  });
	}

  // pass data from parent App to child VideoList - use props
	render() {

	  	return (
	  		<div>
	  	  		<Header />
	  	  		<Pagination currentSlide={this.state.currentSlide} lastSlide={this.state.lastSlide} />
	  	  		<SlideDetail slide={this.state.slide} />
	  	  		<PaginationButtons onButtonClick={this.updatePaginationLabel} currentSlide={this.state.currentSlide} lastSlide={this.state.lastSlide} />
	  	  		<Footer />
	    	</div>		
		);
	}
}


// put component into DOM - take this component generated HTML and put it on the page (in the DOM)

// <App> is an instance of class App
ReactDOM.render(<App />, document.querySelector('.container'));