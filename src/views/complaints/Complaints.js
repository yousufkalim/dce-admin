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
  Media,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Button,
  Table,
  Container,
  Row,
} from "reactstrap";
import moment from "moment";
// core components
import Header from "components/Headers/Header.js";
import { toast } from "react-toastify";
import ViewComplaint from "./ViewComplaint";
import { titleCase } from "components/dateFormat";

const Complaints = () => {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [openModal, setOpenModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const { complaints } = Store();
  const updateStore = UpdateStore();
  const history = useHistory();
  const [complaint, setComplaint] = useState({
    _id: "",
    reason: "",
    details: "",
    attachment: "",
  });

  useEffect(() => {
    getComplaints();
  }, []);

  const getComplaints = async () => {
    const data = await api("get", "/complaints");

    updateStore({ complaints: data.complaints });
  };

  const handleModal = () => {
    setOpenModal((open) => !open);
    return openModal;
  };

  const handleViewModal = (item) => {
    if (item) {
      setComplaint(item);
    }

    setViewModal((open) => !open);
    return openModal;
  };

  const handleDelete = (id) => {
    var a = window.confirm("Are you sure you want to delete?");
    if (a)
      api("delete", `/complaints/${id}`).then(() => {
        toast.success(t("Complaint deleted successfully"));
        getComplaints();
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
                  <h3 className="mb-0">{t("Complaints")}</h3>
                  {/* <Button color="primary" href="#pablo" onClick={handleModal} size="md">
                    <i className="ni ni-fat-add"></i>
                    Add designer
                  </Button> */}
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">{t("Reason")}</th>
                    <th scope="col">{t("Details")}</th>
                    <th scope="col">{t("Attachment")}</th>
                    <th scope="col">{t("CREATED AT")}</th>

                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {complaints?.map((item) => {
                    return (
                      <tr>
                        {/* <th scope="row">
                          <Media className="align-items-center">
                            <Media>
                              <span className="mb-0 text-sm" title={item.name}>
                                {item.name?.length > 30
                                  ? item.name?.substring(0, 30) + "..."
                                  : item.name}
                              </span>
                            </Media>
                          </Media>
                        </th> */}
                        <td title={item.reason}>{item.reason}</td>
                        <td title={item.details}>{item.details}</td>
                        <td title={item.attachment}>{item.attachment}</td>

                        <td>
                          {" "}
                          {language == "fr"
                            ? titleCase(
                                new Date(item.createdAt).toLocaleDateString(
                                  "fr-FR",
                                  options
                                )
                              )
                            : new Date(item.createdAt).toDateString()}
                        </td>

                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              href="#pablo"
                              role="button"
                              size="sm"
                              color=""
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={() => handleViewModal(item)}
                              >
                                {t("View")}
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                className="text-danger"
                                onClick={() => handleDelete(item._id)}
                              >
                                {t("Delete")}
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
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
          <ViewComplaint
            openModal={viewModal}
            handleModal={handleViewModal}
            complaint={complaint}
          />
        )}
      </Container>
    </>
  );
};

export default Complaints;
