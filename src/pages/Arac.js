import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Container, Row, Col } from "react-bootstrap";
import AracInfo from "../components/Arac/AracInfo";
import { FiSearch } from "react-icons/fi";

const Arac = () => {
  const [araclar, setAraclar] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [token] = useCookies(["mytoken"]);

  useEffect(() => {
    fetch("https://panel.poshta.ua/api/logistic/manifesto/car", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 3057|DraPldMhNNyBnGB9YiWso6jgZvnoMpgHS0en9edp`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setAraclar(response);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, [token]);


  const filteredArac = araclar?.filter(
    (arac) => arac.barcode.toString().indexOf(searchTerm) > -1
  );

  return (
    <Container className="arac_container">
      <Container>
        <Row>
          <Col sm={10}></Col>
          <Col sm={2}>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Arama"
              id="search_input_arac"
              className="form-control inputs"
            />
            <FiSearch
            className='search_icons'
              id="search_icon-arac"
              fontSize={"19px"}
              color={"#145AA0"}
            />
          </Col>
        </Row>
        <Row className="arac_container-header justify-content-center text-center bg-white">
          <Col sm>
            <Row>Barcode</Row>
          </Col>
          <Col sm>
            <Row>Araç</Row>
          </Col>
          <Col sm>
            <Row>Çıkış Şube</Row>
          </Col>
          <Col sm>
            <Row>Alıcı Şube</Row>
          </Col>
          <Col sm>
            <Row>Kapasitesi</Row>
          </Col>
          <Col sm>
            <Row>İşlemler</Row>
          </Col>
        </Row>
        <Row className="arac_container-info">
          <Col>
            {filteredArac?.map((arac) => (
                <AracInfo arac={arac} key={arac.id} />
              ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Arac;
