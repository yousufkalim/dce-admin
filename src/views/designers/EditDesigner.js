import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../api";
import AddressInput from "components/Form/AddressInput";
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

const EditUser = ({ openModal, handleModal, user, setUser, getUsers }) => {
  const { t } = useTranslation();
  let [address, setAddress] = useState({
    label: "",
    city: "",
  });
  const arr = user.name.split(" ");
  const last = arr.slice(1, 4).join(" ");

  var validPhone =
    /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
  useEffect(() => {
    setAddress(() => {
      return {
        label: user?.address,
        city: user?.city,
        country: "France",
      };
    });
  }, []);
  useEffect(() => {
    if (address) {
      setUser({
        ...user,
        address: address.label,
        city: address?.city,
        first_name: arr[0],
        last_name: last,
      });
    }
  }, [address]);
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleBlock = () => {
    setUser({ ...user, active: !user.active });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name == "") {
      return toast.error(t("Please enter user's name"));
    }

    if (user.email == "") {
      return toast.error(t("Please enter email"));
    }
    if (!(user.email.includes(".") && user.email.includes("@"))) {
      return toast.error(t("Please enter a valid email"));
    }

    if (user.password && user.password.length < 8) {
      return toast.error(t("Passwords should be of atleast 8 letters"));
    }

    if (user.phone == "") {
      return toast.error(t("Contact no. is required"));
    }
    let rPhone = user.phone;
    if (!rPhone.match(validPhone)) {
      return toast.error(t("Please enter a valid phone number"));
    }
    api("put", `/tailors/updateByAdmin/${user._id}`, user).then((res) => {
      toast.success(t("Designer edited successfully"));
      getUsers();
      handleModal();
    });
  };

  return (
    <>
      <Modal isOpen={openModal} size="xl" centered>
        <ModalHeader charCode="X" toggle={handleModal}>
          {t("Edit a designer")}
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
                            {user.first_name ? "" : "*"}{" "}
                          </span>
                          {t("First Name")}
                        </label>{" "}
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder={t("Enter user's first name here")}
                          type="text"
                          value={user.first_name}
                          name="first_name"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <label className="form-control-label">
                          {" "}
                          <span style={{ color: "red" }}>
                            {user.last_name ? "" : "*"}{" "}
                          </span>
                          {t("Last Name")}
                        </label>{" "}
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder={t("Enter user's last name here")}
                          type="text"
                          value={user.last_name}
                          name="last_name"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
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
                  </Row>
                  <Row>
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
                          maxLength="10"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: "auto" }}>
                      <FormGroup>
                        <AddressInput
                          label="Enter Address"
                          address={address}
                          setAddress={setAddress}
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
                          // readonly={address?.city}
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
                  </Row>{" "}
                  <Row>
                    <Col lg="12" style={{ margin: "auto" }}>
                      <FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            id="customCheck5"
                            type="checkbox"
                            checked={!user.active}
                            onChange={handleBlock}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck5"
                          >
                            {t("Block")}
                          </label>
                        </div>
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
            Update
          </Button>

          <Button onClick={handleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditUser;
