import React from 'react';
import './TourDates.scss';

const TourDatesWrapper = React.createClass({

  componentWillMount() {
    let tourDates = (
	  <a 
		href="http://www.bandsintown.com/Vanna" 
		className="bit-widget-initializer" 
		data-artist="Vanna"
	  > Vanna Tour Dates
	  </a>
	);

	this.setState({tourDates: tourDates});
  },

	render () {
	  return (
	    <div className="tour-dates-wrapper">
		  {this.state.tourDates}
		</div>
	  );
	}
});

export default TourDatesWrapper;