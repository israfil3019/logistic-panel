import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Modal, Button } from "react-bootstrap";
import KuryeShow from "./KuryeShow";
import KuryeEdit from "./KuryeEdit";

const KuryeInfo = (props) => {
  const kurye = props.kurye;
  const [showInfo, setShowInfo] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleShowInfo = () => setShowInfo(true);

  return (
    <>
      <Row>
        <Col sm={3}>
          {kurye.courier[0] ? (
            <Row>{kurye.courier[0].full_name}</Row>
          ) : (
            <Row></Row>
          )}
        </Col>
        <Col sm={3}>
          {kurye.courier[0] ? (
            <Row>{kurye.courier[0].mobile_phone}</Row>
          ) : (
            <Row></Row>
          )}
        </Col>
        <Col sm={3}>
          {kurye.courier[0] ? <Row>{kurye.courier[0].email}</Row> : <Row></Row>}
        </Col>
        <Col sm={3}>
          <Row>
            <Col>
              <FiEdit
                className="nextButton"
                onClick={handleShowEdit}
                fontSize={24}
                color={'red'}
              />
              <FaEye onClick={handleShowInfo} fontSize={24} color={'blue'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row>
        <KuryeEdit kurye={kurye} setShowEdit={setShowEdit} showEdit={showEdit}/>
      </Row>
      <Row>
        <KuryeShow kurye={kurye} setShowInfo={setShowInfo} showInfo={showInfo}/>
      </Row>
    </>
  );
};

export default KuryeInfo;
