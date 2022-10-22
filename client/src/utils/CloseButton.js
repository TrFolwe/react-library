import {CloseButton as ClsButton} from 'react-bootstrap';
import $ from 'jquery';

/**
 *
 * @param setIsOpen
 * @returns {JSX.Element}
 * @constructor
 */
export default function CloseButton() {
    const inComposedId = ({event, id}) => event.nativeEvent.composedPath().filter(i => i !== event.target && i instanceof HTMLDivElement).map(i => i.id).includes(id);

    function closeModal(event) {
        const modalControl = [];
        for(let id of ["addBook","listBook","removeBook"]) modalControl[id] = inComposedId({"event": event, "id": id});
        $(`.modalContainer#${Object.entries(modalControl).filter(i => i[1])[0]}`).hide('slow');
        console.log($(".modalContainer").filter(":visible").length-1)
        if(!($(".modalContainer").filter(":visible").length-1)) $("html, body").animate({scrollTop: -window.innerHeight}, "slow");
    }

    return <div style={{cursor: 'pointer'}} onClick={event => closeModal(event)} className='closeButton'>❌</div>;
     
    //return <ClsButton onClick={() => new Modal({setIsOpen}).setModalState({isOpen: false})} className='closeButton'/>
}