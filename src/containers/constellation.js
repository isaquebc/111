import React, { Component } from 'react';
import { connect } from 'react-redux';

import { desktop, mobile, sections } from '../models/index';
import { fadeOutSection } from '../actions/index';

class Constellation extends Component {

	constructor(props) {
		super(props);

		this.state = {
			width: 0
		};
	}

	componentDidMount() {
		this.setState({width: window.innerWidth});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({width: nextProps.w});
	}

	renderAreas() {
		const { width } = this.state;
		const isFirefox = typeof InstallTrigger !== 'undefined';
		var toMap = [];
		var imgWidth;
		
		if(width >= 992) {
			toMap = desktop;
			imgWidth = 7996;
		}
		else {
			toMap = mobile;
			imgWidth = 830;
		} 

		const newArray = toMap.map(arr =>
			arr.map(n =>  
				Math.round(width/imgWidth*arr[arr.indexOf(n)])
			)
		);

		const strArr = newArray.map(arr => {
			var str = '';
			for(var i in arr) str += `${arr[i]},`;
			return str.slice(0, -1);
		});

		return strArr.map((s, i) => {
			if(isFirefox) return <area key={i} shape='poly' coords={s} href={sections[i]} />;
			return (
				<a onClick={() => this.props.fadeOutSection(sections[i])} href={sections[i]} key={i}>
			  	<area shape='poly' coords={s}  />
		  	</a>
			);
		});
	}

	render() {
		const { width } = this.state;
		const src = `${width >= 992 ? 'https://s3-us-west-2.amazonaws.com/centoeonze/images/constellation.png' : width == 0 ? '' : 'https://s3-us-west-2.amazonaws.com/centoeonze/images/constellation_mobile.png'}`;
		return (
			<section className='constellation' id='index'>
				<img
					width={width}
					src={src}
					useMap='#Constellation'/>
				<map name='Constellation' id='Constellation'>
				  {this.renderAreas()}
				</map>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return {
		w: state.listener.windowWidth
	};
}

export default connect(mapStateToProps, { fadeOutSection })(Constellation);