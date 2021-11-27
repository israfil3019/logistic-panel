import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const CargoAssign = (props) => {
  const [checked, setChecked] = useState(false);
  const cargo = props.cargo;
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  let myClass = "kargo_bilgileri";
  if (cargo.Kargo_Durum_ID === 1) myClass = "kargo_bilgileri red";
  else if (cargo.type === 2) myClass = "kargo_bilgileri blue";
  else myClass = "kargo_bilgileri yellow";

  return (
    <Container className={myClass}>
      <Row>
        <Col sm={1} className="checkbox">
          <Form.Check type="checkbox" id='checkbox_container'>
            <Form.Check.Input
              id="checkbox"
              onChange={handleChange}
              checked={checked}
            />
          </Form.Check>
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
          <Row>{cargo.Barkod_Kodu}</Row>
          <Row>{cargo.sender_full_name}</Row>
          <Row>{cargo.receiver_full_name}</Row>
          <Row>{cargo.receiver_full_address}</Row>
          <Row>{cargo.Kargo_Teslim_Zamani}</Row>
          <Row>{cargo.sender_address_cargo.yerlesimAdi}</Row>
          <Row>{cargo.Desi}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CargoAssign;
