import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import axios from "axios";

const NewComponent = props => {
    const [redirect, setRedirect] = useState(false);
    const [token, setToken] = useState();
    console.log("new ma aave che" + props.data);

    axios.post(props.data)
        .then(response => {
            this.setState({
                product: response.data
            });
            setRedirect(true);
        });

    if (redirect) {
        console.log("Redirect ma");
        return <Redirect to='/no'/>;
    } else {
        return (
            <div>
                <div>
                    <a href={props.data}>Lai le</a>
                </div>
            </div>
        )
    }
};
export default NewComponent;