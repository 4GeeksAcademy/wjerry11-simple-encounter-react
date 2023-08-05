import React from "react";
import PropTypes from 'prop-types';
import SimpleCounter from "./SimpleCounter";
import calculateSeconds from "../../lib/libTime";

const Home = ((props) => {
	return (
  <div className="counter-display"> 
 <i className="fa fa-solid fa-clock"></i>
	<h1>
		{
			Math.floor (props.counter/100000) %10
		}
	</h1>
	<h1>
		{
			Math.floor (props.counter/10000) %10
		}
	</h1>
	<h1>
		{
			Math.floor (props.counter/1000) %10
		}
	</h1>
	<h1>
		{
			Math.floor (props.counter/100) %10
		}
	</h1>
	<h1>
		{
			Math.floor (props.counter/10) %10
		}
	</h1>
	<h1>
		{
			Math.floor (props.counter/1) %10
		}
	</h1>
	</div>
	);
});
Home.propTypes= {
	counter: PropTypes.number
}
export default Home;
