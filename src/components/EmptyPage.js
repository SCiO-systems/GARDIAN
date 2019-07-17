import React, { Component } from 'react';

export class EmptyPage extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <div className="card-title">Empty Page</div>
                    <p>Use this page to start from scratch and place your custom content.</p>
                </div>
            </div>
        </div>
    }
}