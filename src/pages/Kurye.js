import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Container, Row, Col } from "react-bootstrap";
import KuryeInfo from "../components/Kurye/KuryeInfo";
import { FiSearch } from "react-icons/fi";

const Kurye = () => {
  const [kurye, setKurye] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [token] = useCookies(["mytoken"]);


  useEffect(() => {
    fetch("https://panel.poshta.ua/api/logistic/manifesto/courier", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 3057|DraPldMhNNyBnGB9YiWso6jgZvnoMpgHS0en9edp`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setKurye(response);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, [token]);

  const filteredKurye = kurye?.filter(
    (kurye) => kurye.courier[0]?.full_name.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
  );

  return (
    <Container className="kurye_container">
      <Container>
        <Row>
          <Col sm={10}></Col>
          <Col sm={2}>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Arama"
              id="search_input_kurye"
              className="form-control inputs"
            />
            <FiSearch
            className='search_icons'

              id="search_icon-kurye"
              fontSize={"19px"}
              color={"#145AA0"}
            />
          </Col>
        </Row>
        <Row className="kurye_container-header justify-content-center text-center bg-white">
          <Col sm={3}>
            <Row>Courier Name</Row>
          </Col>
          <Col sm={3}>
            <Row>Phone</Row>
          </Col>
          <Col sm={3}>
            <Row>Email</Row>
          </Col>
          <Col sm={3}>
            <Row>Operations</Row>
          </Col>
        </Row>
        <Row className="kurye_container-info">
          <Col>
            {filteredKurye?.map((kurye) => (
                <KuryeInfo kurye={kurye} key={kurye.id} />
              ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Kurye;
