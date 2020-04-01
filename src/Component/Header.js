import React from "react";

 const Headers = (props) => {
   const {Books} = props;

    return ( 
        <div className="Header">
         <h1>List Of Books.</h1>
    <p>Number Of Books : <span>{Books.length} Book.</span> </p>
        </div>
     );
}
 
export default Headers;
