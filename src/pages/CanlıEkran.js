import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CargoContext } from "../context/CargoContext";
import CargoLoad from "../components/CargoLoad";
import { FiSearch } from "react-icons/fi";

const CanlıEkran = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermm, setSearchTermm] = useState("");
  const { cargosAssigned } = useContext(CargoContext);

  const filteredCargos = cargosAssigned.filter(
    (cargo) => cargo.Barkod_Kodu.toString().indexOf(searchTerm) > -1
  );
  const filteredCargoss = cargosAssigned.filter(
    (cargo) => cargo.Barkod_Kodu.toString().indexOf(searchTermm) > -1
  );

  return (
    <div>
      <Container>
        <Row
          id="canli-ekran_header"
          className="justify-content-center text-center operasyon_header"
        >
          <Col sm={5}>Yüklenmiş Kargolar</Col>
          <Col sm={5}>Yüklenmeyi Bekleyen Kargolar</Col>
        </Row>
        <Row className="justify-content-center ">
          <Col id="kargo_gösterim" className="col-sm-5">
            <Row className="justify-content-center">
              <div className="search_area">
                <input
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="text"
                  placeholder="Arama"
                  id="search_input"
                  className="form-control"
                />
                <FiSearch
                  className="search_icon"
                  fontSize={"19px"}
                  color={"#145AA0"}
                />
              </div>
            </Row>
            <Row className="justify-content-center" id="assign_kargo_row">
              <Col className="assign_kargo">
                {filteredCargos
                  .filter((cargo) => cargo.Kargo_Teslim_Tipi_ID)
                  .map((cargo) => (
                    <CargoLoad cargo={cargo} key={cargo.id} />
                  ))}
              </Col>
            </Row>
          </Col>
          <Col sm={5} id="kargo_gösterim2">
            <Row className="justify-content-center">
              <div className="search_area">
                <input
                  onChange={(e) => setSearchTermm(e.target.value)}
                  type="text"
                  placeholder="Arama"
                  id="search_input"
                  className="form-control"
                />
                <FiSearch
                  className="search_icon"
                  fontSize={"19px"}
                  color={"#145AA0"}
                />
              </div>
            </Row>
            <Row className="justify-content-center" id="assign_kargo_row2">
              <Col className="assign_kargo">
                {filteredCargoss
                  .filter((cargo) => !cargo.Kargo_Teslim_Tipi_ID)
                  .map((cargo) => (
                      <CargoLoad cargo={cargo} key={cargo.id} />
                  ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CanlıEkran;
