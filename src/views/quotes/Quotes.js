/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "api";
import { Store, UpdateStore } from "StoreContext";
import { useTranslation } from "react-i18next";

import {
  Badge,
  Card,
  CardHeader,
  Button,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Table,
  Container,
  Row,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import { toast } from "react-toastify";
import ViewQuote from "./ViewQuote";

const Users = () => {
  const { t } = useTranslation();

  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const { quotes } = Store();
  const updateStore = UpdateStore();
  const history = useHistory();
  const [user, setUser] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
    address: "",
    number: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await api("get", "/quotes");

    updateStore({ quotes: data.quotes });
  };

  const handleModal = () => {
    setOpenModal((open) => !open);
    return openModal;
  };

  const handleViewModal = (item) => {
    if (item) {
      setUser(item);
    }

    setViewModal((open) => !open);
    return openModal;
  };

  const handleDelete = (id) => {
    api("delete", `/users/${id}`).then(() => {
      toast.success("User deleted successfully");
      getUsers();
    });
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
                  <h3 className="mb-0">{t("Quotes")}</h3>
                  {/* <Button color="primary" href="#pablo" onClick={handleModal} size="md">
                    <i className="ni ni-fat-add"></i>
                    Add designer
                  </Button> */}
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">{t("Designer")}</th>
                    <th scope="col">{t("ORDER")}</th>
                    <th scope="col">{t("Price")}</th>
                    <th scope="col">{t("Description")}</th>
                    <th scope="col">{t("Status")}</th>
                    <th scope="col">{t("CREATED AT")}</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {quotes?.map((item) => {
                    return (
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <Media>
                              <span
                                className="mb-0 text-sm"
                                title={item.tailor?.name}
                              >
                                {item.tailor?.name || "N/A"}
                              </span>
                            </Media>
                          </Media>
                        </th>
                        <td title={item.order?.name}>{item.order?.name}</td>

                        <td>{item.price}</td>
                        <td title={item.description}>
                          {item.description?.length > 30
                            ? item.description?.substring(0, 30) + "..."
                            : item.description}
                        </td>
                        <td title={item.status}>{item.status}</td>
                        <td>{new Date(item.createdAt).toDateString()}</td>

                        <td className="text-right">
                          <i
                            className="fa fa-eye"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleViewModal(item)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        {viewModal && (
          <ViewQuote
            openModal={viewModal}
            handleModal={handleViewModal}
            quote={user}
          />
        )}
      </Container>
    </>
  );
};

export default Users;
