import React from "react";
import "./Zip.css";

const Zip = (props) => (
    <div className="form-group zip-input">
        <label>ZIP Code</label>
        <input type="text" id="exampleInputZip" placeholder="ZIP" onChange={props.onChange}/>
    </div>
  );

  export default Zip;