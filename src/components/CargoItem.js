import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const CargoItem = (props) => {
  const [checked, setChecked] = useState(false);
  const cargo = props.cargo;
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  let myClass = "kargo_bilgileri";
  if (cargo.type === 1)  myClass = "kargo_bilgileri red";
  else if (cargo.type === 2) myClass = "kargo_bilgileri blue";
  else myClass = "kargo_bilgileri yellow";
  
  return (
    <Container className={myClass}>
      <Row>
        <Col sm={1} className="checkbox">
          <Form.Check
            type="checkbox"
            aria-label="option 1"
            checked={checked}
            onChange={handleChange}
            id="checkbox"
          />
        </Col>
        <Col sm={5}>
          <Row>Kargo numarası</Row>
          <Row>Gönderici Müşteri İsmi</Row>
          <Row>Alıcı Müşteri İsmi</Row>
          <Row>Adres</Row>
          <Row>Time Zone</Row>
          <Row>Zone</Row>
          <Row>Desi</Row>
        </Col>
        <Col sm={6} className="text-right">
          <Row>{cargo.ttn}</Row>
          <Row>{cargo.gonderici}</Row>
          <Row>{cargo.alici}</Row>
          <Row>{cargo.adres}</Row>
          <Row>{cargo.timeZone}</Row>
          <Row>{cargo.zone}</Row>
          <Row>{cargo.desi}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CargoItem;
