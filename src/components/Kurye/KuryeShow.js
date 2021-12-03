import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";



export default function KuryeShow(props) {
  const kurye = props.kurye;

  const handleClose = () => props.setShowInfo(false);
  return (
    <>
      <Modal show={props.showInfo} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Kurye Görüntüleme</Modal.Title>
        </Modal.Header>
        <Modal.Body>{kurye.courier[0] ? (
              <Col>
                <Row>{kurye.courier[0].full_name}</Row>
                <Row>{kurye.courier[0].mobile_phone}</Row>
              </Col>
            ) : (
              kurye.id
            )}</Modal.Body>
      </Modal>
    </>
  );
}