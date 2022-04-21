import { useEffect, useState } from "react";
import api from "../../api";
import { Select } from "antd";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
// core components
import { useTranslation } from "react-i18next";

const { Option } = Select;

const ViewCatalog = ({ openModal, handleModal, catalog }) => {
  const { t } = useTranslation();

  return (
    <>
      <Modal isOpen={openModal} size="xl" centered>
        <ModalHeader charCode="X" toggle={handleModal}>
          {t("View catalogue")}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Form>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Designer")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={catalog.tailor?.name}
                          name="tailor"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Category")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={catalog.category}
                          name="category"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Name")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={catalog.name}
                          name="name"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Gender")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={catalog.gender}
                          name="gender"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Attachment")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={catalog.attachment || "N/A"}
                          disabled
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Price")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={catalog.price}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Rating Count")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={catalog.rating?.count}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Rating Value")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={catalog.rating?.value}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Description")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={catalog.description}
                          name="note"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Form>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleModal}>{t("Cancel")}</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ViewCatalog;
