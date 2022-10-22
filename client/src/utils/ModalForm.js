import $ from 'jquery';
import React from "react";
import AddBook from "../components/ModalComponent/BookComponents/AddBookModal/AddBook";
import ListBook from "../components/ModalComponent/BookComponents/ListBookModal/ListBook";
import RemoveBook from "../components/ModalComponent/BookComponents/RemoveBookModal/RemoveBook";


class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    setModalState({isOpen, type = undefined}) {
        if(isOpen) {
            this.setIsOpen(type);
            $(`.modal-container#${type}`).show('slow', () => {
            $(`.modal-container#${type}`).css('display', 'flex');
        });
    }else $(`.modal-container#${this.modalType}`).hide('slow', this.setIsOpen(undefined));
}

    render() {
        return (
        <>
        <AddBook/>
        <ListBook/>
        <RemoveBook/>
        </>
        );
    }
}

export default Modal;