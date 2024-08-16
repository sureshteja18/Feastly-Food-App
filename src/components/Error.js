import React from "react";
import { useRouteError } from "react-router-dom";

const Error =()=>{
  const error = useRouteError();
  console.log(error)
    return(
        <div className="error">
            <h4>{error.status}</h4>
            <h4><i>{error.statusText}</i></h4>
            <div>There is some Error in the file</div>
            <div>{error.data}</div>
        </div>
    )
}

export default Error;