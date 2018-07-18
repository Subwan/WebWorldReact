import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { connect } from 'react-redux';

import InputCoord from './input-coord/input-coord';

import './about.css';
// import { audio } from '
const { compose, withProps } = require("recompose");


const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBjIqDfINh-giXfkdVI4G2VmATpzhYisGc",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div className="map" />
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 51.667242, lng: 39.195113 }}
    >
        {props.markers.map((marker, index) => (
            <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
    </GoogleMap>
    )

const audio = new Audio('file:///home/subwan/projects/WebWorldReact/src/assets/new-accident.mp3');

class About extends React.Component {

    onClick() {
        audio.play().then(()=>{console.log('succ')}).catch((e)=>{console.log('err', e)});
    };

    render() {
        return (

            <div className="about-us">
                <h3> About us </h3>
                <button onClick={this.onClick}>AAAA</button>
                <div className="section-map">
                    <div className="section-map__add">
                        <button type="button" className="btn btn-defaulr section-map__button"
                            data-toggle="modal" data-target="#inputDialog">Add marker</button>
                        <InputCoord />
                    </div>
                    <MapComponent markers={this.props.markers} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
        markers: state.coords.markers
})

export default connect(mapStateToProps,{})(About);