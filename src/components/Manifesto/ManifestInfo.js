import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { TiTick } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { RiBarcodeFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import ManifestoShow from "./ManifestoShow";
import ManifestoEdit from "./ManifestoEdit";
import ManifestoPreview from "./ManifestoPreview";
import ManifestoLoad from "./ManifestoLoad";

const ManifestInfo = (props) => {
  const manifesto = props.manifesto;
  const [showInfo, setShowInfo] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showLoad, setShowLoad] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const handleShowInfo = () => setShowInfo(true);
  const handleShowEdit = () => setShowEdit(true);
  const handleShowLoad = () => setShowLoad(true);
  const handleShowPreview = () => setShowPreview(true);

  return (
    <>
      <Row>
        <Col sm={2}>
          <Row>{manifesto.barcode}</Row>
        </Col>
        <Col sm={3}>
          <Row>
            {manifesto.start_department.Sube_Adi +
              " " +
              manifesto.start_department.Sube_Kodu}
          </Row>
        </Col>
        <Col sm={3}>
          {manifesto.end_department ? (
            <Row>
              {manifesto.end_department.Sube_Adi +
                " " +
                manifesto.end_department.Sube_Kodu}
            </Row>
          ) : (
            <Row></Row>
          )}
        </Col>
        <Col sm={2}>
          <Row>{manifesto.drop_first_touch}</Row>
        </Col>
        <Col sm={2}>
          <Row>
            <Col>
              <FiEdit onClick={handleShowEdit} fontSize={24} />
              <FaEye onClick={handleShowInfo} fontSize={24} />
              <TiTick onClick={handleShowLoad} fontSize={24} />
              <RiBarcodeFill fontSize={24} />
              <AiFillPrinter onClick={handleShowPreview} fontSize={24} />
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row>
        <ManifestoEdit
          manifesto={manifesto}
          setShowEdit={setShowEdit}
          showEdit={showEdit}
        />
      </Row>
      <Row>
        <ManifestoShow
          manifesto={manifesto}
          setShowInfo={setShowInfo}
          showInfo={showInfo}
        />
      </Row>
      <Row>
        <ManifestoLoad
          manifesto={manifesto}
          setShowLoad={setShowLoad}
          showLoad={showLoad}
        />
      </Row>
      <Row>
        <ManifestoPreview
          manifesto={manifesto}
          setShowPreview={setShowPreview}
          showPreview={showPreview}
        />
      </Row>
    </>
  );
};

export default ManifestInfo;
