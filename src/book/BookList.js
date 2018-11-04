import React from 'react';
import './Book.css';
import {Book} from "./Book";

export function BookList({books}) {
    return (
        <div className="list-container">
            {
                books.map((b, i) =>
                    <Book
                        book={b}
                        number={i + 1}
                        key={b.title}
                    />
                )
            }
        </div>
    );
}

