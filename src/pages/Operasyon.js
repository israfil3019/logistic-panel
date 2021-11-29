import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CargoContext } from "../context/CargoContext";
import CargoAssign from "../components/CargoAssign";
import { FiSearch } from "react-icons/fi";

const Operasyon = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermm, setSearchTermm] = useState("");
  const {cargosAssigned,cargosUnAssigned} = useContext(CargoContext);

  const filteredCargos = cargosAssigned.filter(
    (cargo) => cargo.Barkod_Kodu.toString().indexOf(searchTerm) > -1
  );
  const filteredCargosUn = cargosUnAssigned.filter(
    (cargo) => cargo.Barkod_Kodu.toString().indexOf(searchTermm) > -1
  );

  return (
    <div>
      <Container>
        <Row
          id="operasyon_header"
          className="justify-content-center text-center operasyon_header"
        >
          <Col sm={5}>Atanmış Kargolar</Col>
          <Col sm={5}>Atanmamış Kargolar</Col>
        </Row>
        <Row className="justify-content-center ">
          <Col id="kargo_gösterim" className="col-sm-5">
            <Row className="search_container">
              <Col className="search_area">
                <div className="process_area">
                  <button>Atanmamış</button>
                  <button>Taşı</button>
                  <button>İptal</button>
                  <button>Sorun</button>
                </div>
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
              </Col>
            </Row>
            <Row className="justify-content-center" id="assign_kargo_row">
              <Col className="assign_kargo">
                {filteredCargos
                  .filter((cargo) => !cargo.durum)
                  .map((cargo) => (
                    <CargoAssign cargo={cargo} key={cargo.id} />
                  ))}
              </Col>
            </Row>
          </Col>
          <Col sm={5} id="kargo_gösterim2">
            <Row className="search_container">
              <Col className="search_area">
                <div className="process_area">
                  <button>Atanmamış</button>
                  <button>Taşı</button>
                  <button>İptal</button>
                  <button>Sorun</button>
                </div>
                <input
                  onChange={(e) => setSearchTermm(e.target.value)}
                  type="text"
                  placeholder="Arama"
                  id="search_input2"
                  className="form-control"
                />
                <FiSearch
                  className="search_icon"
                  fontSize={"19px"}
                  color={"#145AA0"}
                />
              </Col>
            </Row>
            <Row className="justify-content-center" id="assign_kargo_row2">
              <Col className="assign_kargo">
                {filteredCargosUn
                  .filter((cargo) => cargo.durum)
                  .map((cargo) => (
                    <CargoAssign cargo={cargo} key={cargo.id} />
                  ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Operasyon;
