import React, { Component } from 'react';
import MapCanvas from './MapCanvas';

class MapView extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-8 map-view">
				{/* Wrapping div required to ensure that images aren't generated with a ton of whitespace */}
				<div ref={this.props.mapRef}>
					<h5 id="title">{this.props.mapTitle}</h5>
					<div id="map">
						<MapCanvas
							mapDimensions={this.props.mapDimensions}
							mapPadding={20}
							mapStyleDefs={this.props.mapStyleDefs}
							mapEvolutionStates={this.props.mapEvolutionStates}
							mapStyle={this.props.mapStyle}
							mapObject={this.props.mapObject}
							mapText={this.props.mapText}
							mutateMapText={this.props.mutateMapText}
							setMetaText={this.props.setMetaText}
							metaText={this.props.metaText}
							evolutionOffsets={this.props.evolutionOffsets}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default MapView;
