import React, {Component} from 'react';
import './App.css';
import './text.css';
import './title.css';

import books from './books';
import {BookModel} from "./BookModel";
import {BookList} from "./book/BookList";
import {Filter} from "./Filter";
import {sortBy} from "lodash";

export default class App extends Component {

    constructor() {
        super();
        this.books = books.map(b => new BookModel(b));
        this.state = {
            limit: 0,
            sortKey: null
        };
    }

    setPageLimit = (limit) => {
        this.setState({limit})
    };

    setSortKey = (sortKey) => {
        this.setState({sortKey})
    };

    render() {
        let books = this.books
            .filter(b => b.pages > this.state.limit);
        books = sortBy(books, this.state.sortKey);
        return (
            <div className="main-container">
                <Filter
                    setPageLimit={this.setPageLimit}
                    setSortKey={this.setSortKey}
                />
                <BookList books={books}/>
            </div>
        );
    }
}