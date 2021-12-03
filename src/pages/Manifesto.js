import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Container, Row, Col } from "react-bootstrap";
import ManifestInfo from "../components/Manifesto/ManifestInfo";
import { FiSearch } from "react-icons/fi";


const Manifesto = () => {
  const [manifestolar, setManifestolar] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [token] = useCookies(["mytoken"]);
  // const SORTERS = {
  //   NUMBER_ASCENDING: mapper => (a, b) => mapper(a) - mapper(b),
  //   NUMBER_DESCENDING: mapper => (a, b) => mapper(b) - mapper(a),
  //   STRING_ASCENDING: mapper => (a, b) => mapper(a).localeCompare(mapper(b)),
  //   STRING_DESCENDING: mapper => (a, b) => mapper(b).localeCompare(mapper(a))
  // };
  
  // const getSorter = data => {
  //   const mapper = x => x[data.field];
  //   let sorter = SORTERS.STRING_ASCENDING(mapper);
  
  //   if (data.field === "id") {
  //     sorter =
  //       data.direction === "ascending"
  //         ? SORTERS.NUMBER_ASCENDING(mapper)
  //         : SORTERS.NUMBER_DESCENDING(mapper);
  //   } else {
  //     sorter =
  //       data.direction === "ascending"
  //         ? SORTERS.STRING_ASCENDING(mapper)
  //         : SORTERS.STRING_DESCENDING(mapper);
  //   }
  
  //   return sorter;
  // };
  

  useEffect(() => {
    fetch("https://panel.poshta.ua/api/logistic/manifesto/group", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 3057|DraPldMhNNyBnGB9YiWso6jgZvnoMpgHS0en9edp`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setManifestolar(response);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, [token]);

  const filteredManifesto = manifestolar?.filter(
    (manifestolar) =>
      manifestolar.barcode.toString().indexOf(searchTerm) > -1
  );

  return (
    <Container className="manifesto_container">
      <Container>
        <Row>
          <Col sm={10}></Col>
          <Col sm={2}>
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Barcode..."
              id="search_input_manifesto"
              className="form-control inputs"
            />
             <FiSearch
            className='search_icons'

                  id="search_icon-manifesto"
                  fontSize={"19px"}
                  color={"#145AA0"}
                />
          </Col>
        </Row>
        <Row className="manifesto_container-header justify-content-center text-center bg-white">
          <Col sm={2}>
            <Row>Barcode</Row>
          </Col>
          <Col sm={3}>
            <Row>Gönderici Şube</Row>
          </Col>
          <Col sm={3}>
            <Row>Alıcı Şube</Row>
          </Col>
          <Col sm={2}>
            <Row>Açılış Zamanı</Row>
          </Col>
          <Col sm={2}>
            <Row>İşlemler</Row>
          </Col>
        </Row>
        <Row className="manifesto_container-info">
          <Col>
            {filteredManifesto?.map((manifesto) => (
                <ManifestInfo manifesto={manifesto} key={manifesto.id} />
              ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Manifesto;
