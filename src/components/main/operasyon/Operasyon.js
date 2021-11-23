import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { CargoContext } from "../../../context/CargoContext";
import CargoItem from "./CargoItem";
import { FiSearch } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { getData } from "../../../functions/Functions";

const Operasyon = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [cargos, setCargos] = useContext(CargoContext);
  const [cargos, setCargos] = useState([]);

  const handleFilter = (event) => {
    setSearchTerm(event.target.value);
    if (searchTerm === "") {
      getData("data.json").then((res) => {
        setCargos(res.data);
      });
    } else
      setCargos(
        cargos?.filter((cargo) => cargo.ttn.toString().indexOf(searchTerm) > -1)
      );
    setSearchTerm("");
  };

  useEffect(() => {
    getData("data.json")
      .then((res) => {
        setCargos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row
          id="atanmıs_head"
          className="justify-content-center text-center mb-2"
        >
          <Col sm={5}>Atanmış Kargolar</Col>
          <Col sm={5}>Atanmamış Kargolar</Col>
        </Row>
        <Row className="justify-content-center ">
          <Col id="kargo_gösterim" className="col-sm-5">
            <Row className="justify-content-center">
              <div className="search_area">
                <input
                  onChange={handleFilter}
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
                {cargos
                  .filter((cargo) => cargo.durum)
                  .map((cargo) => (
                    <CargoItem cargo={cargo} key={cargo.id} />
                  ))}
              </Col>
            </Row>
          </Col>
          <Col sm={5} id="kargo_gösterim2">
            <Row className="justify-content-center">
              <div className="search_area">
                <input
                  // onChange={handleFilter}
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
                {cargos
                  .filter((cargo) => !cargo.durum)
                  .map((cargo) => (
                    <CargoItem cargo={cargo} key={cargo.id} />
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
