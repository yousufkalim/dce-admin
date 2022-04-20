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

const ViewOrder = ({ openModal, handleModal, order }) => {
  const { t } = useTranslation();
  return (
    <>
      <Modal isOpen={openModal} size="xl" centered>
        <ModalHeader charCode="X" toggle={handleModal}>
          {t("View Order")}
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
                          {t("Client")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.client.name}
                          name="client"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Designer")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.tailor.name}
                          name="tailor"
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
                          value={order.name}
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
                          value={order.gender}
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
                          {t("Category")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.category}
                          name="category"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">{t("Cut")}</label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.cut}
                          name="cut"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Measurements")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.measurements}
                          name="measurements"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Color")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.color}
                          name="color"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Fabric")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.fabric}
                          name="fabric"
                          disabled
                        />
                      </FormGroup>
                    </Col>

                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Type")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.type}
                          name="type"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    {" "}
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Address")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.delivery.address}
                          name="address"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Date")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.delivery.date}
                          name="date"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Country")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.delivery.country}
                          name="country"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("City")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.delivery.city}
                          name="city"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Note")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.delivery.note}
                          name="note"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Delivery Type")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.delivery.type}
                          name="type"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Budget Type")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.budget.type}
                          name="type"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Budget Note")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.budget.note || "N/A"}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Min Price")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.budget.min_price}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Max Price")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.budget.max_price}
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
                          value={order.rating.count}
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
                          value={order.rating.value}
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
                          value={order.attachment || "N/A"}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Status")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.status}
                          name="status"
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

export default ViewOrder;
