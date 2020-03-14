import React from "react";
import "./SubmitButton.css";

const SubmitButton = (props) => (
    <div className="form-group submit-button">
        <button type="submit" className="btn btn-primary" onClick={props.onSubmit}>Submit</button>
    </div>
  );

  export default SubmitButton;