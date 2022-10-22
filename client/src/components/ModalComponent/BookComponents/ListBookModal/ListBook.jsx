import './ListBookStyle.css';
import CloseButton from "../../../../utils/CloseButton";
import { useEffect, useState } from 'react';

export default function ListBook() {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            setBookList(await (await fetch("http://localhost:80/listBook")).json());
        }, 2000);
        return () => {
            clearInterval(intervalId)
        }
    }, []);

    function clickRow(index) {
        alert(JSON.stringify(bookList.find(i => bookList.indexOf(i) === index)));
    }

    return (
        <div className='modalContainer' id='listBook'>
            {!bookList.length && <h1>{bookList.length}</h1>}
            <CloseButton/>
        <div className="bookList">
            {!!bookList.length && (
                <table className='table table-bordered table-dark overflow-auto bookTable'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Kitap</th>
                        <th scope='col'>Yazar</th>
                        <th scope='col'>Sayfa</th>
                        <th scope='col'>Fiyat</th>
                    </tr>
                </thead>
                <tbody>
                {bookList.map((value, i) => (
                    <tr onClick={() => clickRow(i)} key={i}>
                        <th scope='row'>{i+1}</th>
                        <td>{value.bookName}</td>
                        <td>{value.bookWriter}</td>
                        <td>{value.bookPageLength}</td>
                        <td>{value.bookPrice}₺</td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
        </div>
    )
}