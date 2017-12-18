import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import './about.css';

const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 51.667242, lng: 39.195113 }}
    >
        <Marker position={{ lat: 51.667242, lng: 39.195113 }} />
    </GoogleMap>
))

class About extends React.Component {
    render() {
        return (
            <div className="about-us">
                <h3> About us </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis lectus,
                    ultricies vitae metus et, sodales tincidunt quam. Interdum et malesuada fames
                    ac ante ipsum primis in faucibus. Nam eleifend ultrices dui, at varius urna
                    egestas ac. Vivamus in blandit tortor, sit amet euismod orci. Mauris blandit
                    vel erat nec tincidunt. Donec at risus egestas, luctus elit id, fringilla nibh.
                    Vestibulum et fermentum urna. Suspendisse potenti. Fusce tincidunt sollicitudin
                    odio, vitae tempor odio dictum in. Aenean et varius nunc. Ut maximus dapibus
                    lectus, at mattis diam fermentum nec. Maecenas porttitor velit elit, at efficitur
                    arcu rutrum id. Aenean mi nulla, mollis eget ex eget, consectetur euismod diam.
                    Pellentesque sed ligula et mi pretium pretium ac et erat. Integer blandit porta
                    sapien, sed condimentum nibh imperdiet at. Praesent ac magna hendrerit,
                    scelerisque orci a, placerat magna. Sed a neque nec nibh scelerisque rhoncus
                    vel ut nisl. Nunc accumsan malesuada elit, quis bibendum velit placerat ac.
                    Ut porta orci et lobortis viverra. Nunc at elementum lacus. Nulla maximus cursus
                    turpis facilisis luctus. Integer quis dui quis mi venenatis rhoncus vitae ac urna.
                    Etiam rutrum feugiat finibus. Ut eu est felis. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Sed mattis quam malesuada,
                    lobortis nunc faucibus, molestie nibh. Suspendisse potenti. Suspendisse eleifend
                    fringilla leo eu porta. Maecenas quis justo eu augue laoreet rhoncus non sed nisl.
                </p>
                <div className="section-map">
                    <div className="section-map__add">
                    <button type="button" className="btn btn-defaulr section-map__button" data-toggle="modal" data-target="#inputDialog">Add marker</button>
                    </div>
                    <MapComponent
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjIqDfINh-giXfkdVI4G2VmATpzhYisGc"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div className="map" />}
                    />
                </div>
            </div>
        );
    }
}

export default About;