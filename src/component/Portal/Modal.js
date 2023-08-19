import ReactDom from 'react-dom'
import Back from './Back'
import Confirm from './Confirm'

export default function Modal({ data }) {

    return ReactDom.createPortal(
        <>
            <Back></Back>
            <Confirm data={data}></Confirm>
        </>
        , document.querySelector('.modal-container')
    )
}