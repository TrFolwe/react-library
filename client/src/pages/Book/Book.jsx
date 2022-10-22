import { AddBookIcon, BookListIcon, RemoveBookIcon } from '../../utils/Icon';
import './BookStyle.css';
import './BookScript.js'
import '../../components/ModalComponent/GlobalModalStyle.css';
import Modal from '../../utils/ModalForm';
import $ from 'jquery';

function Book() {
    const bookClickAction = (type) => {
        $(`.modalContainer#${type}`).show('slow', () => $(`.modalContainer#${type}`).css("display", "flex"));
        $("html, body").animate({scrollTop: window.innerHeight}, "slow");
    }
    return (
        <>
        <div className="pageWrapper">
            <div id='image' className="page">
            <div className="imageWrapper">
            <div className="image-area">
                <h2>Kitap ekle</h2>
            <img onClick={() => bookClickAction('addBook')} alt='_addBook' src={AddBookIcon}/>
            </div>
            <div className="image-area">
                <h2>Kitap listele</h2>
            <img onClick={() => bookClickAction('listBook')} alt='_listBook' src={BookListIcon} width='256' height='256'/>
            </div>
            <div className="image-area">
                <h2>Kitap sil</h2>
            <img onClick={() => bookClickAction('removeBook')} alt='_removeBook' src={RemoveBookIcon}/>
            </div>
            </div>
            </div>
            <div id='modal' className="page">
                <div className="modal-area"><Modal/></div>
            </div>
        </div>
        </>
    );
    return (
        <>
        <div className="bookContainer">
            <div className="imageContainer">
            <div className="image-wrapper">
                <h2>Kitap ekle</h2>
            <img onClick={() => bookClickAction('addBook')} alt='_addBook' src={AddBookIcon}/>
            </div>
            <div className="image-wrapper">
                <h2>Kitap listele</h2>
            <img onClick={() => bookClickAction('listBook')} alt='_listBook' src={BookListIcon} width='256' height='256'/>
            </div>
            <div className="image-wrapper">
                <h2>Kitap sil</h2>
            <img onClick={() => bookClickAction('removeBook')} alt='_removeBook' src={RemoveBookIcon}/>
            </div>
            </div>
            <div className="modalContainer"><Modal/></div>
        </div>
        </>
    );
}

export default Book;