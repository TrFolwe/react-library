import formDataConvert from '../../../../utils/FormData';
import * as React from "react";
import {Form, Button} from 'react-bootstrap';
import CloseButton from '../../../../utils/CloseButton';
import './AddBookStyle.css';

function AddBook() {

    async function formSubmit(event) {
        event.preventDefault();
        try {
        const response = await fetch(`http://localhost:80/addBook`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formDataConvert(new FormData(event.currentTarget)))
        });
        
        alert(await response.text());
    }catch(err) {
        alert(`Server is not connected!\n${err}`);
    }
    }

    return (
        <div className='modalContainer' id='addBook'>
            <CloseButton/>
        <Form onSubmit={e => formSubmit(e)} className='modalForm' autoComplete='off'>
            <Form.Group className='mb-2' controlId='_bookName'>
                <Form.Control name='bookName' required type='text' placeholder='Kitap adını giriniz'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-2' controlId='_bookWriter'>
                
                <Form.Control name='bookWriter' required type='text' placeholder='Yazar adını giriniz'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-2' controlId='_bookPageLength'>
                
                <Form.Control name='bookPageLength' required type='number' placeholder='Sayfa sayısını giriniz'></Form.Control>
            </Form.Group>
            <Form.Group className='mb-2' controlId='_bookPrice'>
                
                <Form.Control name='bookPrice' required type='number' placeholder='Kitap fiyatını giriniz'></Form.Control>
            </Form.Group>
            <Button variant="success" type="submit">Kaydet</Button>
        </Form>
        </div>
    )
}

export default AddBook;