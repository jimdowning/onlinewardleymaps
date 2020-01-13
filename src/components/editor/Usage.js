import React from 'react';
var createReactClass = require('create-react-class');

function Usage(props) {
	const addOnClick = txt => {
		let before = props.mapText;
		console.log(before);
		before =
			before + (props.mapText.trim().length > 0 ? '\n' : '') + txt.trim();
		props.mutateMapText(before);
	};

	return (
		<p id="usage" className="small">
			Usage:
			<br />
			<br />
			<UsageDefinition
				title={'To create a component:'}
				summary={'component Name [Visibility (Y Axis), Maturity (X Axis)]'}
				example={'component Customer [1, 0.5]'}
				example2={'component Cup of Tea [0.9, 0.5]'}
				addOnClick={addOnClick}
			/>
			<UsageDefinition
				title={'To evolve a component:'}
				summary={
					'component Name [Visibility (Y Axis), Maturity (X Axis)] evole (X Axis)'
				}
				example={'component Customer [1, 0.5] evolve 0.8'}
				example2={'component Cup of Tea [0.9, 0.5] evolve 0.8'}
				addOnClick={addOnClick}
			/>
			<UsageDefinition
				title={'To evolve a component with inertia:'}
				summary={
					'component Name [Visibility (Y Axis), Maturity (X Axis)] evole (X Axis) inertia'
				}
				example={'component Customer [1, 0.5] evolve 0.8 inertia'}
				example2={'component Cup of Tea [0.9, 0.5] evolve 0.8 inertia'}
				addOnClick={addOnClick}
			/>
			<UsageDefinition
				title={'To link components:'}
				summary={''}
				example={'Start Component->End Component'}
				example2={'Customer->Cup of Tea'}
				addOnClick={addOnClick}
			/>
			<UsageDefinition
				title={'To indicate flow:'}
				summary={''}
				example={'Start Component+<>End Component'}
				example2={'Customer+<>Cup of Tea'}
				addOnClick={addOnClick}
			/>
			<UsageDefinition
				title={'To indicate flow - past components only:'}
				summary={''}
				example={'Start Component+<End Component'}
				example2={'Hot Water+<Kettle'}
				addOnClick={addOnClick}
			/>
			<UsageDefinition
				title={'To indicate flow - future components only:'}
				summary={''}
				example={'Start Component+>End Component'}
				example2={'Hot Water+>Kettle'}
				addOnClick={addOnClick}
			/>
			<UsageDefinition
				title={'To indicate flow - with label:'}
				summary={''}
				example={"Start Component+'insert text'>End Component"}
				example2={"Hot Water+'$0.10'>Kettle"}
				addOnClick={addOnClick}
			/>
			<UsageDefinition
				title={'Stages of Evolution:'}
				summary={'Change the stages of evolution labels on the map'}
				example={'evolution First->Second->Third->Fourth'}
				example2={'evolution Novel->Emerging->Good->Best'}
				addOnClick={addOnClick}
			/>
			<UsageDefinition
				title={'Available styles:'}
				summary={'Change the look and feel of a map'}
				example={'style wardley'}
				example2={'style handwritten'}
				example3={'style colour'}
				addOnClick={addOnClick}
			/>
		</p>
	);
}

var UsageDefinition = createReactClass({
	render: function() {
		return (
			<>
				<strong>{this.props.title}</strong>
				{this.props.summary.length > 0 ? (
					<>
						<br /> {this.props.summary}{' '}
					</>
				) : null}
				<br />
				<br />
				<strong>Example:</strong>
				<br />
				<UsageExample
					addOnClick={this.props.addOnClick}
					example={this.props.example}
				/>
				{this.props.example2.length > 0 ? (
					<>
						<br />
						<UsageExample
							addOnClick={this.props.addOnClick}
							example={this.props.example2}
						/>{' '}
					</>
				) : null}
				{this.props.example3 != undefined && this.props.example3.length > 0 ? (
					<>
						<br />
						<UsageExample
							addOnClick={this.props.addOnClick}
							example={this.props.example3}
						/>{' '}
					</>
				) : null}
				<br />
				<br />
				------------------------
				<br />
			</>
		);
	},
});

var UsageExample = createReactClass({
	render: function() {
		return (
			<a
				onClick={() => this.props.addOnClick(this.props.example)}
				href="#"
				className="add"
			>
				{this.props.example}
			</a>
		);
	},
});

export default Usage;
