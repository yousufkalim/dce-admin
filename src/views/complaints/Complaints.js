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
import {
  Badge,
  Card,
  CardHeader,
  Media,
  Button,
  Table,
  Container,
  Row,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";
import { toast } from "react-toastify";

const Complaints = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const { complaints } = Store();
  const updateStore = UpdateStore();
  const history = useHistory();
  const [complaint, setCompliant] = useState({
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

  const handleEditModal = (item) => {
    if (item) {
      setCompliant({
        _id: item._id,
        reason: item.reason,
        details: item.details,
        attachment: item.attachment,
      });
    }

    setEditModal((open) => !open);
    return openModal;
  };

  const handleDelete = (id) => {
    api("delete", `/complaints/${id}`).then(() => {
      toast.success("Complaint deleted successfully");
      getComplaints();
    });
  };

  //   const handleDelete = () => {
  //     let method = "delete";
  //     let uri = "/complaints";

  //     uri = uri + `/${complaints._id}`;

  //     api(method, uri).then((res) => {
  //       // eslint-disable-next-line eqeqeq
  //       if (res.status == 200) {
  //         toast.success("Delete Successfully");
  //         handleModal();
  //       } else {
  //         toast.error("Delete Error", res.data.message);
  //       }
  //     });
  //   };

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
                  <h3 className="mb-0">Complaints</h3>
                  {/* <Button color="primary" href="#pablo" onClick={handleModal} size="md">
                    <i className="ni ni-fat-add"></i>
                    Add designer
                  </Button> */}
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Reason</th>
                    <th scope="col">Details</th>
                    <th scope="col">Attachment</th>
                    <th scope="col">Created At</th>
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

                        <td>{new Date(item.createdAt).toDateString()}</td>
                        <td>
                          <Button color="danger" onClick={handleDelete}>
                            Delete
                          </Button>
                        </td>

                        {/* <td className="text-right">
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
                              <DropdownItem href="#pablo" onClick={() => handleEditModal(item)}>
                                Edit
                              </DropdownItem>
                              <DropdownItem href="#pablo" className="text-danger" onClick={() => handleDelete(item._id)}>
                                Delete
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td> */}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        {/* {openModal && <AddUser openModal={openModal} handleModal={handleModal} getComplaints={getComplaints} />}
        {editModal && (
          <EditUser openModal={editModal} handleModal={handleEditModal} user={user} setCompliant={setCompliant} getComplaints={getComplaints} />
        )} */}
      </Container>
    </>
  );
};

export default Complaints;
