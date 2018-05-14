/**
 * @author Aman Soni
 * # Purpose
 * Allows the user's to select from their list of groups
 * 
 * # TODO 
 * # Changes
 * 
 */

import React, { Component } from "react";
import _ from "lodash";
import axios from 'axios';

export default class GroupList extends Component {

    constructor() {
        super();
        this.state = {
            article_title: '',
            article_body: ''
        };
    }

    componentDidMount() {
        var self = this;
        this.serverRequest = axios.get('https://eas-grist06.aston.ac.uk/home?_format=json')
            .then(function (result) {
                self.setState({
                    article_title: result.data.title["0"].value,
                    article_body: result.data.body["0"].value
                });
            })
    }

    render() {
        return (
            <div className="row top-buffer">
                <div className="col">
                    <div className="card text-center">
                        <div className="card-header">
                            {this.state.article_title}
                        </div>
                        <div className="card-block" dangerouslySetInnerHTML={{ __html: this.state.article_body }} />
                    </div>
                </div>
            </div>
        );
    }
}

