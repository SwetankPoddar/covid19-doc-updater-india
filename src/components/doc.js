import React from 'react';
import checktoday from "./../utils/checktoday";
import './doc.css';

function Doc(props) {
    let today = checktoday(new Date(props.information.date.timestamp));
    return (
        <div className="doc-update">
            <h3>{props.information.message}</h3>
            {today ? <h2>Happened Today!</h2> : null}
            <hr />
            <ul className="links-list">
            {
                props.information.urls.map((url, i) =>
                    <li key={"url" + i}> <a href={url} rel="noopener noreferrer" target="_blank">View Attachment - {i + 1}</a> </li> 
                )
            }
            </ul>
            
        </div>
    )
}
  export default Doc;