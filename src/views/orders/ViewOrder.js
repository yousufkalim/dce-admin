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

const { Option } = Select;

const ViewOrder = ({ openModal, handleModal, order }) => {
  return (
    <>
      <Modal isOpen={openModal} size="xl" centered>
        <ModalHeader charCode="X" toggle={handleModal}>
          View Order
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Form>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">Client</label>
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
                        <label className="form-control-label">Designer</label>
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
                        <label className="form-control-label">Name</label>
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
                        <label className="form-control-label">Gender</label>
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
                        <label className="form-control-label">Category</label>
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
                        <label className="form-control-label">Cut</label>
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
                          Measurements
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
                        <label className="form-control-label">Color</label>
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
                        <label className="form-control-label">Fabric</label>
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
                        <label className="form-control-label">Type</label>
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
                        <label className="form-control-label">Address</label>
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
                        <label className="form-control-label">Date</label>
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
                        <label className="form-control-label">Country</label>
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
                        <label className="form-control-label">City</label>
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
                        <label className="form-control-label">Note</label>
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
                          Delivery Type
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
                          Budget Type
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
                          Budget Note
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
                        <label className="form-control-label">Min Price</label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.budget.min_price}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">Max Price</label>
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
                          Rating Count
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
                          Rating Value
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
                        <label className="form-control-label">Attachment</label>
                        <Input
                          className="form-control-alternative text-default"
                          value={order.attachment || "N/A"}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">Status</label>
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
          <Button onClick={handleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ViewOrder;
