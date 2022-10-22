import formDataConvert from '../../../../utils/FormData';
import {Form, Button} from 'react-bootstrap';
import './RemoveBookStyle.css';
import CloseButton from "../../../../utils/CloseButton";
import { useState } from 'react';
import { useEffect } from 'react';

export default function RemoveBook() {

    async function formSubmit(event) {
        event.preventDefault();
        const formData = formDataConvert(new FormData(event.currentTarget));
        alert(await (await fetch("http://localhost/removeBook", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })).text());
    }

    return (
        <div className='modalContainer' id='removeBook'>
            <CloseButton/>
        <Form onSubmit={event => formSubmit(event)} className='modalForm' autoComplete='off'>
            <Form.Group className='mb' controlId='_bookId'>
                <Form.Control
                name='bookId' required type='text' placeholder='Kitap ID giriniz'></Form.Control>
            </Form.Group>
            <Button variant="danger" type="submit">Sil</Button>
        </Form>
        </div>
    )
}