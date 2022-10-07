
import { useState, useEffect } from 'react';
import api from 'api';
import { useHistory } from 'react-router-dom';

import { Store, UpdateStore } from 'StoreContext';
import {
  Badge,
  Card,
  CardHeader,
  Button,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from 'reactstrap';
import { useTranslation } from 'react-i18next';

// core components

import Header from 'components/Headers/Header.js';
import { toast } from 'react-toastify';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const { language } = i18n;
  
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [blog, setBlog] = useState({});
  
  const updateStore = UpdateStore();
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const { contact } = Store();
  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    const res = await api('get', '/contact');
console.log("ress",res)
    if (res) {
      updateStore({ contact: res });
    }
  };

  const handleModal = () => {
    setOpenModal((open) => !open);
    return openModal;
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <div className="d-flex justify-content-between ">
                  <h3 className="mb-0">{t('Contactez')}</h3>
               
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">{t('Name')}</th>
                    <th scope="col">{t('Email')}</th>
                    <th scope="col">{t('Descriprion')}</th>
                    <th scope="col">{t('CREATED AT')}</th>
                    <th scope="col">{t('UPDATED AT')}</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {contact.map((con) => {
                    return (
                      <tr>
                        <th scope="row">
                          
                           
                              <span
                                className="mb-0 text-sm"
                                title={con.name}
                              >
                                {con.name}
                              </span>
                            
                          
                        </th>
                        <td title={con.email}>
                        {con.email}
                        </td>
                        <td title={con.description}>
                        {con.description}
                        </td>
                       
                        <td>
                          { new Date(con.createdAt).toDateString()}
                        </td>
                        <td>
                          {new Date(con.updatedAt).toDateString()}
                        </td>
                        <td className="text-right">
                          
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>

           
            </Card>
          </div>
        </Row>

     
      </Container>
    </>
  );
};

export default Contact;
