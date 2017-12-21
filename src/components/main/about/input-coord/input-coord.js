import React from 'react';

class InputCoord extends React.Component {
    render() {
        return (
            <div id="inputDialog" class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add marker</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input id="latitude" name="default.lat" type="number" class="section-map__input" required />
                            <input id="longitude" name="default.lng" type="number" class="section-map__input" required />
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-defaulr" data-dismiss="modal"
                                onClick={() => this.props.onClick()}
                            >OK</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputCoord;