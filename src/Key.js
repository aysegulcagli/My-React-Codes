import React from "react";

function Key({keyVal,bgColor}){
    return( 
        <div className="key" style={{ backgroundColor: bgColor }}>{keyVal}</div>
    );
}
export default Key;