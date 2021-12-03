import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

export default function ManifestoShow(props) {
  const manifesto = props.manifesto;

  const handleClose = () => props.setShowInfo(false);
  return (
    <>
      <Modal show={props.showInfo} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>manifesto Görüntüleme</Modal.Title>
        </Modal.Header>
        <Modal.Body>{manifesto.barcode}</Modal.Body>
      </Modal>
    </>
  );
}
