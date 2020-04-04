import React from 'react';
import './visualPing.css';

function VisualPing(){
    return(
        <div className="visualping-container">
            <div className="vpiframe-container">
                <iframe title="visualping-subscribe" src='https://visualping.io/externalfiles/widget/vpwidget2.html?clientid=zzz&tpl=1a&mode=visual&trigger=1&precrop=10_130_600_300&url=https://covid19.swetankpoddar.me'></iframe>
            </div>
            <div className="containerprivacy">
                <span className="privacyline">We keep your email  
                    <a href="https://visualping.io/privacy" target="_blank" rel="noopener noreferrer" className="vpprivatelink ">private</a>
                </span>
                <a href="https://visualping.io/" target="_blank" rel="noopener noreferrer" className="vplogolink noopener noreferrer">
                    <img src="https://visualping.io/assets/img/logo-blue@2x.png" alt="visual-ping-logo" className="vplogo"/>
                </a>
            </div>
        </div>
    )
}

export default VisualPing;


