import React, { Component } from 'react';

export default class SVG extends Component {

	renderLines() {
		const { balls, lines } = this.props;

		const top = balls[0].textType == 'small' ? 22 : balls[0].type == 'video' ? 181 : 0;

		const origin = {
			x: balls[0].sectionLeft + 15,
			y: balls[0].boundings.top - 192 - top
		};

		const points = balls.map((ball, i) => {
			var a, verticalCorrect = 0;
			switch(ball.type) {
				case 'audio': a = 21; break;
				case 'text': ball.textType == 'small' ? a = 5 : a = 9.5; break;
				case 'image': a = 9.5; break;
				case 'video': a = 33; break;
				default: a = 9.5;
			}
			if(ball.textType == 'small' && ball.values[ball.id] + 1) verticalCorrect = 300 - 3 * ball.values[ball.id] - (100 - ball.values[ball.id])*0.1;
			return {
				x: ball.boundings.left + a,
				y: ball.boundings.top + a + verticalCorrect
			};
		});

		return lines.map((line, i) => {
			var point1 = line.split('-')[0];
			var point2 = line.split('-')[1];
			return [
				<line
					x1={points[point1].x - origin.x}
					y1={points[point1].y - origin.y}
					x2={points[point2].x - origin.x}
					y2={points[point2].y - origin.y}
					key={`${point1}${point2}-${i}`}
					style={{'stroke': 'rgb(255,0,0)', 'strokeWidth': '3'}} />,
				balls[point2].textType == 'small' ? <circle cx={points[point2].x - origin.x} cy={points[point2].y - origin.y} r="5" fill="black" /> : null
			];
		});
	}

	render() {
		return (
			<svg className='svg-component' height={this.props.sectionHeight} width="100%" >
				{this.renderLines()}
			</svg>
		);
	}
}