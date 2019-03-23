import React, { Component } from 'react';
import { api } from '../../api/init';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: ''
        };
    };

    componentDidMount = () => {
        this.fetchLandingPage();
    };

    fetchLandingPage = async () => {
        const response = await api.get('/');

        this.setState({
            initial: response.data
        });
    };

    render() {
        const { initial } = this.state
        return (
            <div>
                <h1>REACT APP RUNNING</h1>
                {initial}
            </div>
        )
    };
};

export default LandingPage;