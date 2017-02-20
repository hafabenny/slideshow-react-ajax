//pagination.js

import React from 'react';

const Pagination = (props) => {

	return (

		<div className="col-md-12">
			{props.currentSlide} of {props.lastSlide}
		</div>

	);

};

export default Pagination;