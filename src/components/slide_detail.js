//slide_detail.js

// slide
// title, image and description

import React from 'react';

const SlideDetail = ({slide}) => {

	if (!slide) {
		return <div>Loading...</div>;
	}

	const imageUrl = `https://www.healthline.com${slide.image.imageUrl}`;

	function createDangerousMarkup() {
    return {__html: slide.body};
  }

	return (

		<div className="container">
			<div className="row">
				<div className="slide-detail col-md-12">
					<div className="row">
						<div className="slide-image col-md-6">
							<img src={imageUrl} />
						</div>
						<div className="details col-md-6" dangerouslySetInnerHTML={createDangerousMarkup()}></div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default SlideDetail;