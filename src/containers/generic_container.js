import React, { Component } from  'react';
import { connect } from 'react-redux';

import Text from '../components/text';
import Audio from '../components/audio';
import Image from '../components/image';
import Video from '../components/video';
import SVG from '../components/svg';

import { screenSize } from '../helper/index';


export default class GenericContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			balls: null,
			sectionHeight: null,
			windowWidth: 992,
			hide: false,
 		};
	}

	componentDidMount() {
		this.svgLifecycle();
		this.setState({ windowWidth: window.innerWidth });
	}

	componentWillReceiveProps(nextProps) {
		const { windowWidth, id } = this.props;
		this.svgLifecycle(this.props.points);
		if(windowWidth !== 0) this.setState({ windowWidth });
	}


	svgLifecycle(values = {}) {
		const section = document.getElementById(this.props.id);
		const sectionLeft = section.offsetLeft;
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;

		const balls = Object.keys(this.refs).map(ref => {
			var boundings = this.refs[ref].refs.ball.getBoundingClientRect();
			var { type, textType, id } = this.refs[ref].props;
			return { boundings, type, textType, sectionLeft, sectionTop, values, id };
		});

		this.setState({ balls, sectionHeight });
	}

	renderSvgContainer() {
		const { lines } = this.props;
		const { windowWidth } = this.state;
		const toProps = {
			...this.state,
			lines
		};

		if(this.state.balls && windowWidth >= 992) return <SVG { ...toProps } />;
	}

	renderRows() {
		return this.props.rows.map(row => 
			this.renderRow(row)
		);
	}

	renderRow(row) {
		const { windowWidth } = this.state;
		return (
			<div className={`row ${row.marginTop}`}>
				<div className={windowWidth >= 991 || windowWidth == 0 ? row.flex : ''}>
					{row.elements.map(e => this.renderElement(e))}
				</div>
			</div>
		);
	}

	renderElement(element) {
		const { windowWidth } = this.state;
		const { sizes, margin, type } = element;
		const { setScrollPoints, audioSelected, playVideo } = this.props;
		var to;

		switch(type) {
			case 'text'	: to = <Text {...element} windowWidth={windowWidth} setScrollPoints={setScrollPoints} />; 	break;
			case 'audio': to = <Audio {...element} audioSelected={audioSelected} />; 	break;
			case 'image': to = <Image {...element} />; 	break;
			case 'video': to = <Video {...element} playVideo={playVideo} />; 	break;
			default			: to = <div>Erro - sem type</div>;
		}

		return (
			<div className={`column -xs${sizes.xs} -md${sizes.md} ${windowWidth >= 992 ? margin : 0}`}>
				{to}
			</div>
		);

	}

	render() {
		const { id, title, containerMargin } = this.props;
		const { hide } = this.state;
		return (
			<section className={`container ${containerMargin}`} id={id} >
				<h1 className={`container-title` }>{title}</h1>
				{this.renderSvgContainer()}
				{this.renderRows()}
			</section>
		);
	}
}
