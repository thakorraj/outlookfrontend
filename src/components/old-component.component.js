import React from 'react';

const OldComponent = props => {
    console.log("old ma aave che" + props.data);
    console.log(window.location.pathname.toString().substring(4));
    return (
        <div>
            <h3>Hellsdnjfkjs</h3>
        </div>
    )
};

export default OldComponent;