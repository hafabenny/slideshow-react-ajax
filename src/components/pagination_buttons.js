//pagination_buttons.js

import React from 'react';


class PaginationButtons extends React.Component {

	constructor(props) {
		super(props);

	}

  render() {
		return (
			<div className="col-md-12">
				<button className="btn btn-default" onClick={() => this.onPreviousButton()}>Previous</button>
				<button className="btn btn-default" onClick={() => this.onNextButton()}>Next</button>
			</div>

		);
	}

	  onPreviousButton() {
	  	const currentSlide = this.props.currentSlide > 1 ? this.props.currentSlide - 1 : this.props.currentSlide;
	  	console.log('previous currentSlide: '+currentSlide);
	  	this.props.onButtonClick(currentSlide);

	  };

	  onNextButton() {
	  	const currentSlide = this.props.currentSlide < this.props.lastSlide ? this.props.currentSlide + 1 : this.props.currentSlide;
	  	console.log('next currentSlide: '+currentSlide)
	  	this.props.onButtonClick(currentSlide);
	  };

}

export default PaginationButtons;