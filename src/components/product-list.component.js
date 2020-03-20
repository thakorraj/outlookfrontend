import React, {Component} from 'react';
import axios from 'axios';
import NewComponent from "./new-component.component";

export default class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            product: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/')
            .then(response => {
                this.setState({
                    product: response.data
                });
            });
    }

    render() {
        var data = '';
        if (this.state.product) {
            data = <NewComponent data={this.state.product}/>;
        }
        return (
            <div>
              {data}
            </div>
        )
    }
}
