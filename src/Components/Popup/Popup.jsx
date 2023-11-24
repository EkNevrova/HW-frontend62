import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../Button/button'

export default function Popup(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div>
            <h3>{props.name}</h3>
            <p>{props.info}</p>
            <Button onClick={closeModal} content="Close" />
        </div>
    );

    return (
        <div>
            <Button onClick={openModal} content="Click" />
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                {modalContent}
            </Modal>
        </div>
    );

}