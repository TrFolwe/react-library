import './Home.css';
import {
    StudentActionIcon,
    BookActionIcon
} from '../../utils/Icon';

function Home() {
    return (
        <>
        <h1 style={{textAlign: 'center', color:'white', margin: '50px'}}>Kütüphane</h1>
        <div className='homeContainer'>
            <a href='/ogrenci'><img src={StudentActionIcon} alt='_student'/></a>
            <a href='/kitap'><img src={BookActionIcon} alt='_book'/></a>
        </div>
        </>
    );
}

export default Home;