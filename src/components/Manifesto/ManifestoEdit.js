import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';


export default function ManifestoEdit(props) {
  const handleClose = () =>props.setShowEdit(false);
  return (
    <>
     <Modal show={props.showEdit} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Manifesto Düzenleme</Modal.Title>
          </Modal.Header>
          <Modal.Body>Manifesto düznleme için yer eğer gerekiyorsa</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}