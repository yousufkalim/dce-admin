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

const ViewQuote = ({ openModal, handleModal, quote }) => {
  const { t } = useTranslation();

  return (
    <>
      <Modal isOpen={openModal} size="xl" centered>
        <ModalHeader charCode="X" toggle={handleModal}>
          {t("View Quote")}
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
                          value={quote.tailor.name}
                          name="tailor"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Name")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={quote.order.name}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Price")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={quote.price}
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
                          value={quote.status}
                          name="status"
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    {" "}
                    <Col lg="12" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Description")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={quote.description}
                          name="description"
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

export default ViewQuote;
