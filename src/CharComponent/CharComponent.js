import React from 'react';



const charComponent = (prop) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
       border: '1px solid black'}
    

    return (
    <div style={style} onClick={prop.click}>
        {prop.character}
    </div>)

};

export default charComponent;