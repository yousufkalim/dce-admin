import { useState } from "react";
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
  Label,
} from "reactstrap";
// core components
import { useTranslation, Trans } from "react-i18next";
const { Option } = Select;

const AddUser = ({ openModal, handleModal, getUsers }) => {
  const { t } = useTranslation();
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    country: "",
    city: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name == "") {
      return toast.error("Please enter user's name");
    }

    if (user.email == "") {
      return toast.error("Please enter email");
    }
    if (!(user.email.includes(".") && user.email.includes("@"))) {
      return toast.error("Please enter a valid email");
    }
    if (user.password == "") {
      return toast.error("Password is required");
    }
    if (user.password.length < 8) {
      return toast.error("Passwords should be of atleast 8 letters");
    }
    if (user.phone == "") {
      return toast.error("Contact no. is required");
    }

    api("post", "/tailors/createByAdmin", user).then((res) => {
      toast.success("Tailor added successfully");
      getUsers();
      handleModal();
    });
  };

  return (
    <>
      <Modal isOpen={openModal} size="xl" centered>
        <ModalHeader charCode="X" toggle={handleModal}>
          {t("Add a designer")}
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
                          {" "}
                          <span style={{ color: "red" }}>
                            {user.name ? "" : "*"}{" "}
                          </span>
                          {t("Name")}
                        </label>{" "}
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder={t("Enter user's name here")}
                          type="text"
                          value={user.name}
                          name="name"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {" "}
                          <span style={{ color: "red" }}>
                            {user.email ? "" : "*"}{" "}
                          </span>
                          {t("Email")}
                        </label>{" "}
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder={t("Enter user's email here")}
                          type="email"
                          value={user.email}
                          name="email"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-password"
                        >
                          <span style={{ color: "red" }}>
                            {user.password ? "" : "*"}{" "}
                          </span>
                          {t("Password")}
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-password"
                          placeholder={t("Password")}
                          type="password"
                          value={user.password}
                          name="password"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          <span style={{ color: "red" }}>
                            {user.phone ? "" : "*"}{" "}
                          </span>{" "}
                          {t("Contact no.")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder={t("Enter user's contact here")}
                          type="phone"
                          value={user.phone}
                          name="phone"
                          onChange={handleInput}
                          maxLength="11"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {t("Address")}
                        </label>
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder={t("Enter user's address here")}
                          type="text"
                          value={user.address}
                          name="address"
                          onChange={handleInput}
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
                          required={true}
                          placeholder={t("Enter user's city here")}
                          type="text"
                          value={user.city}
                          name="city"
                          onChange={handleInput}
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
                          required={true}
                          placeholder={t("Enter user's country here")}
                          type="text"
                          value={user.country}
                          name="country"
                          onChange={handleInput}
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
          <Button color="primary" onClick={handleSubmit}>
            {t("Save")}
          </Button>

          <Button onClick={handleModal}>{t("Cancel")}</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AddUser;
