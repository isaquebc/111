import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import Constellation from './constellation';
import GenericContainer from './generic_container';
import Audio from './audio';

import { containers } from '../models/index';
import { setWindowWidth, setScrollPoints, audioSelected, playVideo } from '../actions/index';

class Home extends Component {

	constructor(props) {
		super(props);

		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
  	window.removeEventListener('resize', this.handleResize);
	}

	handleResize() {
		this.props.setWindowWidth(window.innerWidth);
	}

	renderContainers() {
		const { points, setScrollPoints, audioSelected, windowWidth, playVideo } = this.props;
		const propsTo = {
			setScrollPoints,
			points,
			audioSelected,
			windowWidth,
			playVideo
		};
		return containers.map( c => 
			<GenericContainer {...c} key={c.id} {...propsTo} />
		);
	}

	render() {
		return (
			<div>
				<Header />
				<Constellation />
					<div className="list">
						{this.renderContainers()}
					</div>
				<Audio />
			</div>
		);
	};
}

function mapStateToProps(state) {
	return {
		points: state.svg.points,
		windowWidth: state.listener.windowWidth
	};
}

export default connect(mapStateToProps, { setWindowWidth, setScrollPoints, audioSelected, playVideo })(Home);