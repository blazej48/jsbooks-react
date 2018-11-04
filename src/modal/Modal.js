import React from 'react';
import './modal.css';
import {sortBy} from "lodash";
import ReactDOM from 'react-dom';

export function Modal({clicked, imgSrc}) {

    return (
        <div className="modal" onClick={clicked}>
            <img className="modal__content" src={imgSrc}/>
        </div>
    );

}

export function openModal(imgSrc) {
    const container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(
        <Modal
            imgSrc={imgSrc}
            clicked={function remove() {
                container.remove()
            }}
        />, container);
}
