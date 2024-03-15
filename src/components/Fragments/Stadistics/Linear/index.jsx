import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	LabelList,
} from "recharts";

const CustomizedLabel = (props) => {
	const { x, y, stroke, value } = props;

	return (
		<text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
			{value}
		</text>
	);
};

const CustomizedAxisTick = (props) => {
	const { x, y, payload } = props;

	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={16}
				fill="#666"
				textAnchor="end"
				transform="rotate(-35)">
				{payload.value}
			</text>
		</g>
	);
};

export function Linear({ litters }) {
	const data = () => {
		let litter_ = [];
		litters.map((lit) => {
			const {
				id,
				stages: {
					partum: { dead, alive, homogenized },
				},
			} = lit;

			litter_.push({
				id: id,
				dead: dead,
				alive: alive,
				homogenized: homogenized,
			});
			return true;
		});
		return litter_;
	};

	return (
		<LineChart
			width={350}
			height={250}
			data={data()}
			margin={{
				top: 20,
				left: 0,
				right: 30,
				bottom: 10,
			}}>
			<CartesianGrid strokeDasharray="4 4" />
			<XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey="alive" stroke="#ffff55">
				<LabelList content={<CustomizedLabel />} />
			</Line>
			<Line type="monotone" dataKey="dead" stroke="#ff5500">
				<LabelList content={<CustomizedLabel />} />
			</Line>
			<Line type="monotone" dataKey="homogenized" stroke="#ff00ff">
				<LabelList content={<CustomizedLabel />} />
			</Line>
		</LineChart>
	);
}
