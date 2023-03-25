import { Component } from 'react';

import Error from "./Error";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message };
    }

    render() {
        if (this.state.hasError) {
            console.log(this.state.errorMessage);
            return (<Error error='Something went wrong! Please try again.' />);
        }

        return this.props.children;
    }
}

export default ErrorBoundary;