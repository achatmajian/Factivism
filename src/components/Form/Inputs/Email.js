import React from "react";
import "./Email.css";

const Email = (props) => (
    <div className="form-group email-input">
        <label>Email address</label>
        <input name="email" type="email" id="exampleInputEmail" onChange={props.onChange}/>
    </div>
  );

  export default Email;