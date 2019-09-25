import React, { Component } from 'react';

export default class Audio extends Component {

	componentDidMount(){
		const { audioSelected, title, src } = this.props;
		this.props.title == 'O Que é Trabalho' ? audioSelected(title, src) : null;
	}

	handleClick() {
		const { audioSelected, title, src } = this.props;

		audioSelected(title, src);
		const videos = document.querySelectorAll('.video');
		videos.forEach(v => {
			v.click();
		});
	}

	render() {
		return (
			<div className='audio-component' onClick={this.handleClick.bind(this)}>
				<button className='column audio-button xs8 md3' ref='ball'/>
				<h3 className='audio-title'>{this.props.title}</h3>
			</div>
		);
	}
}