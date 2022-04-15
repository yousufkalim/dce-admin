import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
import { useTranslation, Trans } from "react-i18next";
const { Option } = Select;

const ViewClient = ({ openModal, handleModal, user }) => {
  const { t } = useTranslation();

  return (
    <>
      <Modal isOpen={openModal} size="xl" centered>
        <ModalHeader charCode="X" toggle={handleModal}>
          {t("View client")}
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
                          {t("Name")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={user.name}
                          name="name"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Email")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={user.email}
                          name="email"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Contact no.")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={user.phone || "N/A"}
                          name="phone"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Address")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={user.address}
                          name="address"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("City")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={user.city}
                          name="city"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Country")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={user.country}
                          name="country"
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

export default ViewClient;
