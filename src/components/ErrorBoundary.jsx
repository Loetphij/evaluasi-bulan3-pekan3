import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ backgroundColor: "#ffe6e6", padding: "20px" }}>
                <h2>Terjadi Kesalahan!</h2>
                <p>Maaf, ada error di aplikasi.</p>
                </div>
            )
        }
        return this.props.children;
    }
}
