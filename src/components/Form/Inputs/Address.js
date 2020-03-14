import React from "react";
import "./Address.css";

const Address = () => (
    <div className="form-group address-input">
        <label>Address</label>
        <input type="text" id="exampleInputAddress" placeholder="Address" onChange={props.onChange} />
    </div>
  );

  export default Address;