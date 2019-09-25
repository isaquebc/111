import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';

export default class Video extends Component {

	constructor(props) {
		super(props); 

		this.state = {
			viewButton: true
		};

		this.handleVideoClick = this.handleVideoClick.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	handleButtonClick() {
		this.setState({ viewButton: false });
		const { video } = this.refs;
		const videos = document.querySelectorAll('.video');
		videos.forEach(v => {
			v.click();
		});

		video.play();
		this.props.playVideo();
	}

	handleVideoClick() {
		if(!this.state.viewButton) {
			this.setState({viewButton: true});
		}

		const { video } = this.refs;
		video.pause();
	}

	renderButton() {
		return <div ref='ball' className={`video-white-ball ${this.state.viewButton ? 'cursor-pointer' : 'hide'}`} onClick={this.handleButtonClick} />;
	}

	render() {
		return (
			<div className={`column -md${this.props.md} -xs8 flex-center video-wrapper ${this.state.viewButton ? '' : 'cursor-pointer'}`}  >
				{this.renderButton()}
				<video ref='video' onClick={this.handleVideoClick} className='video' poster={this.props.poster}>
					<source src={this.props.src} type='video/ogg' />
				</video>
			</div>
		);
	}
}