import React from 'react';
import VisualPing from "./visualPing";
import './subscribeModal.css';

function SubscribeModal(){
    return (
      <>
        <div className="interior">
            <a className="btn" href="#open-modal">Subscribe to updates</a>
        </div>
        <div id="open-modal" className="modal-window">
          <div>
            <a href="/" title="Close" className="modal-close">Close</a>
            <VisualPing/>
          </div>
        </div>
      </>
    )
}


export default SubscribeModal;