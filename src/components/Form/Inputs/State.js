import React from "react";
import "./State.css";

const State = (props) => (
    <div className="form-group state-input">
        <label>State</label>
        <input type="text" id="exampleInputState" placeholder="State" onChange={props.onChange}/>
    </div>
  );

  export default State;