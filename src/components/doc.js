import React from 'react';
import checktoday from "./../utils/checktoday";
import './doc.css';

function Doc(props) {
    let doc_date = new Date(props.information.date.timestamp)
    return (
        <div className="doc-update fade-in">
            <h4>{props.information.message}</h4>
            {checktoday(doc_date) ? <h4><u>Released Today</u></h4> : props.information.date.verbose}
            <hr />
            <ul className="links-list">
            {props.information.urls.map((url, i) =><li key={"url" + i}><a href={url} rel="noopener noreferrer" target="_blank">View Attachment ({i + 1})</a></li>)}
            </ul>
        </div>
    )
}
  export default Doc;