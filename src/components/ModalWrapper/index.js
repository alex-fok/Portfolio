import Modal from 'react-bootstrap/Modal';

const ModalWrapper = ({title, children}) => {
  return (
    <Modal.Dialog className='modal-lg mx-5' role='document'>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal.Dialog>
  );
}

export default ModalWrapper;