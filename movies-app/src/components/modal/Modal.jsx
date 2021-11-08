import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

const Modal = props => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    return (
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </div>
    )
};

Modal.propTypes = {
    active: propTypes.bool,
    id: propTypes.string
};

export const ModalContent = props => {
    const constRef = useRef(null);

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if(props.onClose) props.onClose();
    }

    return(
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
            </div>
        </div>
    )
}

ModalContent.propTypes ={
    onClose: propTypes.func
}

export default Modal;
