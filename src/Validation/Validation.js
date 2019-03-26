import React from 'react';

const validation = (prop) => {
    let result = null;

    prop.length < 3 ? 
        result = "too short" : result = "too long";
    
    
    return (
        <div>
            {result}
        </div>
        
    )
};

export default validation;