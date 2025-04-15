import React from "react";
 
export default function Card(props){
    const {title,quote,image} = props

    return (
        <div className="card">
        <div className="card-image">
          <img className="activator" src={image} alt="HTML,CSS,JS,BTS Logo" />
          <div className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons activator">more_vert_updating</i>
          </div>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
           {title}
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <i className="material-icons right">close</i>
          </span>
          <p className="flex-container">
            {quote}
          </p>
        </div>
      </div>

    );

}