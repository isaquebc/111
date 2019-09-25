import React, { Component } from 'react';
import { connect } from 'react-redux';

import { audioClosed } from '../actions/index';

class Audio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			use: true
		};

		this.handleAction = this.handleAction.bind(this);
		this.setTimeControl = this.setTimeControl.bind(this);
		this.changeTime = this.changeTime.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.src != this.props.src) {
			const { audio } = this.refs;
			audio.load();
			this.setState({ use: true, time: 0 });
		}	
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.src != this.props.src) {
			const { audio } = this.refs;
			audio.play();
		}
	}

	setTimeControl(e) {
		const { audio } = this.refs;
		const time = e.target.value;
		audio.currentTime = (time * audio.duration) / 100;
		this.setState({ time });
	}

	changeTime() {
		const { audio } = this.refs;
		const time = (audio.currentTime / audio.duration) * 100;
		this.setState({time});
	}

	handleAction() {
		const { audio } = this.refs;
		const { use } = this.state;
		if(!use) audio.play();
		else audio.pause();

		this.setState({ use: !use });
	}

	handleClose () {
		this.props.audioClosed();
	}

	renderAudio () {
		return (
			<section id='audio' onTimeUpdate={this.changeTime} className={`audio-wrapper ${this.props.src ? '' : '-hide'}`}>
				<div className='audio'>
					<audio ref='audio'>
						<source src={this.props.src} type='audio/mp3' ref='source' />
					</audio>
					<span className='title'>{this.props.title}</span>
					<div className='actions'>
						<button className='start' onClick={this.handleAction} >
							<img className='image' src={this.state.use ? '/assets/icons/stop.svg' : '/assets/icons/play.svg'} />
						</button>
						<input type='range' className='control' value={this.state.time} onChange={this.setTimeControl} />
					</div>
					<button className='close' onClick={this.handleClose}><img src='assets/icons/close.svg' /></button>
				</div>
			</section>
		);
	}

	render() {
		return this.renderAudio();
	}
}

function mapStateToProps(state) {
	return { 
		title: state.audio.title,
		src: state.audio.src
	};
}

export default connect(mapStateToProps, { audioClosed })(Audio);