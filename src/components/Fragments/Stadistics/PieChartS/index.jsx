import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import { useState } from "react";

const renderActiveShape = (props) => {
	const RADIAN = Math.PI / 180;
	const {
		cx,
		cy,
		fill,
		value,
		payload,
		percent,
		endAngle,
		midAngle,
		startAngle,
		outerRadius,
		innerRadius,
	} = props;
	const sin = Math.sin(-RADIAN * midAngle);
	const cos = Math.cos(-RADIAN * midAngle);
	const sx = cx + (outerRadius + 10) * cos;
	const sy = cy + (outerRadius + 10) * sin;
	const mx = cx + (outerRadius + 30) * cos;
	const my = cy + (outerRadius + 30) * sin;
	const ex = mx + (cos >= 0 ? 1 : -1) * 22;
	const ey = my;
	const textAnchor = cos >= 0 ? "start" : "end";

	const TextWithEllipsis = () => {
		const text =
			payload.name.length > 10
				? `${payload.name.substring(0, 14)}`
				: payload.name;

		return (
			<text
				x={cx}
				y={cy}
				dy={8}
				textLength="100"
				textAnchor="middle"
				fill={fill}>
				<title>{payload.name}</title>
				{text}
			</text>
		);
	};

	return (
		<g>
			<TextWithEllipsis />
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			<path
				d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
				stroke={fill}
				fill="none"
			/>
			<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				textAnchor={textAnchor}
				fill="#333">{`PV ${value}`}</text>
			<text
				x={ex + (cos >= 0 ? 1 : -1) * 12}
				y={ey}
				dy={18}
				textAnchor={textAnchor}
				fill="#999">
				{`(Rate ${(percent * 100).toFixed(2)}%)`}
			</text>
		</g>
	);
};

export function PieChartS({ data }) {
	const [state, setState] = useState({ activeIndex: 0 });

	const onPieEnter = (_, index) => {
		setState({
			activeIndex: index,
		});
	};

	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart>
				<Pie
					cy="50%"
					cx="50%"
					data={data}
					fill="#345146"
					dataKey="value"
					innerRadius={60}
					outerRadius={80}
					onMouseEnter={onPieEnter}
					activeShape={renderActiveShape}
					activeIndex={state.activeIndex}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
}
