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

const ViewComplaint = ({ openModal, handleModal, complaint }) => {
  return (
    <>
      <Modal isOpen={openModal} size="xl" centered>
        <ModalHeader charCode="X" toggle={handleModal}>
          View Complaint
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Form>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">Reason</label>
                        <Input
                          className="form-control-alternative text-default"
                          value={complaint.reason}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          Attachments
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          value={complaint.attachment}
                          disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <label className="form-control-label">Details</label>
                        <Input
                          className="form-control-alternative text-default"
                          value={complaint.details}
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
          <Button onClick={handleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ViewComplaint;
