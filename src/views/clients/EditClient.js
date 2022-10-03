import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../api';
import { Select } from 'antd';
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
  Col
} from 'reactstrap';
// core components
import { useTranslation, Trans } from 'react-i18next';
import AddressInput from 'components/Form/AddressInput';
const { Option } = Select;

const EditUser = ({ openModal, handleModal, user, setUser, getUsers }) => {
  let [address, setAddress] = useState({
    label: '',
    city: ''
  });
  var validPhone =
    /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
  const arr = user.name.split(' ');
  const last = arr.slice(1, 4).join(' ');

  useEffect(() => {
    setAddress(() => {
      return {
        label: user?.address,
        city: user?.city
      };
    });
  }, []);
  useEffect(() => {
    if (address) {
      setUser({
        ...user,
        address: address.label,
        city: address?.city,
        country: 'France',
        first_name: arr[0],
        last_name: last
      });
    }
  }, [address]);
  const { t } = useTranslation();
  const handleBlock = () => {
    setUser({ ...user, active: !user.active });
  };
  const handleInput = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (user.first_name == '') {
      return toast.error(t("Please enter user's first name"));
    }
    if (user.last_name == '') {
      return toast.error(t("Please enter user's last name"));
    }

    if (user.email == '') {
      return toast.error(t('Please enter email'));
    }
    if (!(user.email.includes('.') && user.email.includes('@'))) {
      return toast.error(t('Please enter a valid email'));
    }
    let rPhone = user.phone;
    if (!rPhone.match(validPhone)) {
      return toast.error(t('Please enter a valid phone number'));
    }

    if (user.password && user.password.length < 8) {
      return toast.error(t('Passwords should be of atleast 8 letters'));
    }

    if (user.phone == '') {
      return toast.error(t('Contact no. is required'));
    }

    api('put', `/clients/updateByAdmin/${user._id}`, user).then(res => {
      toast.success(t('User edited successfully'));
      getUsers();
      handleModal();
    });
  };

  return (
    <>
      <Modal isOpen={openModal} size="xl" centered>
        <ModalHeader charCode="X" toggle={handleModal}>
          {t('Edit a client')}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Form>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6" style={{ margin: 'auto' }}>
                      <FormGroup>
                        <span style={{ color: 'red' }}>{user.name ? '' : '*'} </span>
                        <label className="form-control-label">{t('First Name')}</label>
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder="Enter user's name here"
                          type="text"
                          value={user.first_name}
                          name="first_name"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: 'auto' }}>
                      <FormGroup>
                        <span style={{ color: 'red' }}>{user.name ? '' : '*'} </span>
                        <label className="form-control-label">{t('Last Name')}</label>
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder="Enter user's name here"
                          type="text"
                          value={user.last_name}
                          name="last_name"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: 'auto' }}>
                      <FormGroup>
                        <span style={{ color: 'red' }}>{user.email ? '' : '*'} </span>
                        <label className="form-control-label">{t('Email')}</label>
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder="Enter user's email here"
                          type="email"
                          value={user.email}
                          name="email"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: 'auto' }}>
                      <FormGroup>
                        <label className="form-control-label" htmlFor="input-password">
                          {t('Password')}
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-password"
                          placeholder="Password"
                          type="password"
                          value={user.password}
                          name="password"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: 'auto' }}>
                      <FormGroup>
                        <span style={{ color: 'red' }}>{user.phone ? '' : '*'} </span>
                        <label className="form-control-label">{t('Contact no.')}</label>
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder="Enter user's contact here"
                          type="phone"
                          value={user.phone}
                          name="phone"
                          onChange={handleInput}
                          maxLength="10"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: 'auto' }}>
                      <FormGroup>
                        <label className="form-control-label">{t('Address')}</label>
                        <FormGroup>
                          <AddressInput
                            label="Enter Address"
                            address={address}
                            setAddress={setAddress}
                          />
                        </FormGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6" style={{ margin: 'auto' }}>
                      <FormGroup>
                        <label className="form-control-label">{t('City')}</label>
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder="Enter user's city here"
                          type="text"
                          value={address?.city}
                          name="city"
                          readonly={address?.city}
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6" style={{ margin: 'auto' }}>
                      <FormGroup>
                        <label className="form-control-label">{t('Country')}</label>
                        <Input
                          className="form-control-alternative text-default"
                          required={true}
                          placeholder="Enter user's country here"
                          type="text"
                          value={user.country}
                          name="country"
                          onChange={handleInput}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="12" style={{ margin: 'auto' }}>
                      <FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                          <input
                            className="custom-control-input"
                            id="customCheck5"
                            type="checkbox"
                            checked={!user.active}
                            onChange={handleBlock}
                          />
                          <label className="custom-control-label" htmlFor="customCheck5">
                            {t('Block')}
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
            {t('Update')}
          </Button>

          <Button onClick={handleModal}>{t('Cancel')}</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default EditUser;
