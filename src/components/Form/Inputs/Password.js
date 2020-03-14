import React from "react";
import "./Password.css";

const Password = (props) => (
    <div className="form-group password-input">
        <label>Password</label>
        <input name="password" type="password" id="exampleInputPassword1" onChange={props.onChange}/>
    </div>
  );

  export default Password;