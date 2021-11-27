import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const CargoLoad = (props) => {
  const [checked, setChecked] = useState(false);
  const cargo = props.cargo;
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  let myClass = "kargo_bilgileri";
  if (cargo.Kargo_Durum_ID === 1) myClass = "kargo_bilgileri red";
  else if (cargo.Kargo_Durum_ID === 2) myClass = "kargo_bilgileri blue";
  else myClass = "kargo_bilgileri yellow";

  return (
    <Container className={myClass}>
      <Row className="kargo_bilgileri--üst">
        <Col sm={1} className="checkbox">
          <Form.Check
            type="checkbox"
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
        <Row>{cargo.Barkod_Kodu}</Row>
          <Row>{cargo.sender_full_name}</Row>
          <Row>{cargo.receiver_full_name}</Row>
          <Row>{cargo.receiver_full_address}</Row>
          <Row>{cargo.Kargo_Teslim_Zamani}</Row>
          <Row>{cargo.sender_address_cargo.yerlesimAdi}</Row>
          <Row>{cargo.Desi}</Row>
        </Col>
      </Row>
      <Row className="kargo_bilgiler--alt">
        <Col sm={4} >
          {cargo.yukleme ? (
            <Row id='horizontal_line--left1'>Yüklenen Yer</Row>
          ) : (
            <Row id='horizontal_line--left1'>Yüklemesi Planlanan Yer</Row>
          )}
          <Row id='horizontal_line--left2'>{cargo.receiver_full_address}</Row>
        </Col>
        <Col>
          <Row>
            <div className="horizontal_line">
              <div className="horizontal_line--dot1"></div>
              <div className="horizontal_line--dot2"></div>
            </div>
          </Row>
        </Col>
        <Col sm={4} className="text-right">
          <Row id='horizontal_line--right1'>Araç Yada Kurye İsmi</Row>
          <Row id='horizontal_line--right2'>{cargo.Kargo_Teslim_Eden_Kurye_ID}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CargoLoad;
