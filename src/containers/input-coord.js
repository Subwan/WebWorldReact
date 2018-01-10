import React from 'react';

let InputCoord = () => {
    let lng;
    let lat;
    return (
        <div id="inputDialog" class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <form class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add marker</h5>
                        <button type="button" class="close" 
                            data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <input id="latitude" ref={node => lat = node}
                            name="default.lat" type="number"
                            class="section-map__input" required
                        />
                        <input id="longitude" ref={node => lng = node}
                            name="default.lng" type="number"
                            class="section-map__input" required
                        />
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-defaulr"
                            data-dismiss="modal">
                            OK
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InputCoord;