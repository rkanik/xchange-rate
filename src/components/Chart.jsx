import React from "react";
import Chart from "react-apexcharts";

class ApexChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: {
				colors: ["#00B22D"],
				fill: {
					colors: ["#00B22D"],
				},
				chart: {
					id: "apexchart-example",
					toolbar: {
						show: false,
					},
				},
				xaxis: {
					categories: [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
				},
				yaxis: {
					max: 150,

					y: 150,
					borderColor: "#999",
					label: {
						show: true,
						text: "Support",
						style: {
							color: "#fff",
							background: "#00E396",
						},
					},
				},

				dataLabels: {
					enabled: false,
				},
				stroke: {
					curve: "straight",
				},
			},
			series: [
				{
					name: "Expense",
					data: [150, 125, 130, 115, 140, 70, 90, 110, 120, 40, 70],
				},
			],
		};
	}
	render() {
		return (
			<Chart
				options={this.state.options}
				series={this.state.series}
				width="100%"
				type="area"
			/>
		);
	}
}

export default ApexChart;
