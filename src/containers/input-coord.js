import React from 'react';
import { connect } from 'react-redux';
import { addCoords } from '../actions';

let InputCoord = ({ dispatch }) => {
    let lng;
    let lat;
    return (
        <div id="inputDialog" className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <form className="modal-content"
                    onSubmit={e => {
                        e.preventDefault();
                        if (!lat.value.trim() || !lng.value.trim()) {
                            return;
                        }
                        dispatch(addCoords(lat.value, lng.value));
                        lng.value = '';
                        lat.value = '';
                    }}>
                    <div className="modal-header">
                        <h5 className="modal-title">Add marker</h5>
                        <button type="button" className="close"
                            data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input id="latitude" ref={node => lat = node}
                            name="default.lat" type="number"
                            className="section-map__input" required
                        />
                        <input id="longitude" ref={node => lng = node}
                            name="default.lng" type="number"
                            className="section-map__input" required
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-defaulr"
                            data-dismiss="modal">
                            OK
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
InputCoord = connect()(InputCoord)


export default InputCoord;