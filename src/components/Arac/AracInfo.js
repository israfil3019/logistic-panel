import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Modal, Button } from "react-bootstrap";

const AracInfo = (props) => {
  const arac = props.arac;
  const [showInfo, setShowInfo] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseInfo = () => setShowInfo(false);
  const handleShowInfo = () => setShowInfo(true);

  return (
    <>
        <Row>
          <Col sm>
            <Row>{arac.barcode}</Row>
          </Col>
          <Col sm>
            <Row>{arac.vehicle.Marka + ' ' + arac.vehicle.Model}</Row>
          </Col>
          <Col sm>
            <Row>{arac.start_department.Sube_Adi +' '+ arac.start_department.Sube_Kodu }</Row>
          </Col>
          <Col sm>
            <Row>{arac.end_department.Sube_Adi +' '+ arac.end_department.Sube_Kodu }</Row>
          </Col>
          <Col sm>
            <Row>{arac.vehicle.Bagaj_Hacmi}</Row>
          </Col>
          <Col sm>
            <Row>
              <Col>
                <FiEdit
                  className="nextButton"
                  onClick={handleShowEdit}
                  fontSize={24}
                />
                <FaEye onClick={handleShowInfo} fontSize={24} />
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row>
          <Modal show={showEdit} onHide={handleCloseEdit} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>Arac</Modal.Title>
            </Modal.Header>
            <Modal.Body>Arac için yer eğer gerekiyorsa</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEdit}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCloseEdit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
        <Row>
          <Modal show={showInfo} onHide={handleCloseInfo} centered>
            <Modal.Header closeButton>
              <Modal.Title>Arac Görüntüleme</Modal.Title>
            </Modal.Header>
            <Modal.Body>Arac bilgileri ....</Modal.Body>
          </Modal>
        </Row>
    </>
  );
};

export default AracInfo;
