import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';


export default function ManifestoPreview(props) {
  const handleClose = () =>props.setShowPreview(false);
  return (
    <>
     <Modal show={props.showPreview} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Ön izleme</Modal.Title>
          </Modal.Header>
          <Modal.Body>......eğer gerekiyorsa......</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Yazdır
            </Button>
          </Modal.Footer>
        </Modal>
    </>
  );
}