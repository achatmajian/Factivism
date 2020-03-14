import React from "react";
import "./City.css";

const City = (props) => (
    <div className="form-group city-input">
        <label>City</label>
        <input type="text" id="exampleInputCity" placeholder="City" onChange={props.onChange} />
    </div>
  );

  export default City;