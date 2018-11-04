import React from 'react';
import './Book.css';
import {openModal} from "../modal/Modal";

export function Book({book, number}) {
    return (
        <div className="list-item">
            <div className="list-item__number">{number}</div>
            <div className="list-item__cover">
                <img height="236" onClick={() => openModal(book.cover.large)} src={book.cover.small}/>
            </div>
            <div className="list-item__content">
                <div className="list-item__header text text--big text--heavy">{book.title}</div>
                <div className="list-item__separator"/>
                <div
                    className="list-item__header text text--medium text--light text--italic">By {book.author}</div>
                <div className="row text text--small text--gray text--italic">
                    <div className="row__field-50 text--to-right">Release Date:</div>
                    <div className="row__field-50 text--to-left">{book.releaseDate}</div>
                </div>
                <div className="row text text--small text--gray text--italic">
                    <div className="row__field-50 text--to-right">Pages:</div>
                    <div className="row__field-50 text--to-left">{book.pages}</div>
                </div>
                <div className="row text text--small text--gray text--italic">
                    <div className="row__field-50 text--to-right">Link:</div>
                    <a className="row__field-50 text--to-left text--link" href={book.link}>shop
                    </a>
                </div>
            </div>
        </div>
    );
}

