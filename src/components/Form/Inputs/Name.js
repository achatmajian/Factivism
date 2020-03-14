import React from "react";
import "./Name.css";

const Name = (props) => (
    <div className="form-group password-input">
        <label>Name</label>
        <input type="text" id="exampleInputName" placeholder="Name" onChange={props.onChange} />
    </div>
  );

  export default Name;