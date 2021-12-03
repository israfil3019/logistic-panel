import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';


export default function ManifestoLoad(props) {
  const handleClose = () =>props.setShowLoad(false);
  return (
    <>
     <Modal show={props.showLoad} onHide={handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Yüklensin mi????</Modal.Title>
          </Modal.Header>
          <Modal.Body>.......... eğer gerekiyorsa ...........</Modal.Body>
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