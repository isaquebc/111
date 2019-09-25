import React, { Component } from 'react';

export default class Text extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: 100,
			scrollHeight: 0,
			scrollTop: 0,
			scroll: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		const { scrollHeight } = this.refs.text;
		this.setState({ scrollHeight });
	}

	handleChange(e) {
		const { value } = e.target;
		const { scrollHeight } = this.state;
		const scrollTop = value*(300 - scrollHeight)/100 + scrollHeight - 300;

		this.refs.text.scrollTop = scrollTop;
		this.props.setScrollPoints(this.props.id, value);
		this.setState({ value, scrollTop });
	}

	handleScroll(e) {
		const { scrollTop, scrollHeight } = e.target;
		const value = 100*(300 + scrollTop - scrollHeight)/(300 - scrollHeight);
		this.props.setScrollPoints(this.props.id, value);
		this.setState({ value, scrollTop });
	}

	renderBall() {
		if(this.props.textType == 'small') 
			return (
				<input
					className='small-text-scroll'
					type='range'
					orient='vertical'
					value={this.state.scrollHeight > 300 ? this.state.value : 100}
					onChange={this.handleChange}
					ref='ball' />
			);
		return <div className='big-text-red-ball' ref='ball'/>;
	}

	readMoreClick() {
		this.setState({scroll: !this.state.scroll});
	}

	renderButtonReadMore() {
		if(this.props.textType == 'small' && this.props.windowWidth <= 992) {
			return(
				<button className='text-read-more' onClick={this.readMoreClick.bind(this)}>
					<img src={this.state.scroll ? 'assets/icons/round-remove-button.svg' : 'assets/icons/round-add-button.svg'} />
					<div>{this.state.scroll ? 'Ver Menos' : 'Ler Mais' }</div>
				</button>
			);
		}
	}

	render() {

		const { textType, text, windowWidth } = this.props;
		const { scroll } = this.state;

		return (
			<div className='default-scroll'>
				{this.renderBall()}
				<div className={`text -${textType} ${scroll ? '' : 'noScroll'}`} onScroll={this.handleScroll} ref='text'>
					{textType == 'small' ? text : typeof text == 'string' ? text.toUpperCase() : text}
				</div>
				{this.renderButtonReadMore()}
			</div>
		);
	}
}