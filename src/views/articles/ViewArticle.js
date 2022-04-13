// reactstrap components
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "api";
import { Store, UpdateStore } from "StoreContext";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  Badge,
  Card,
  CardHeader,
  Container,
  Row,
  ModalHeader,
  FormGroup,
  Form,
  Input,
  Col,
} from "reactstrap";

// core components
import AddArticle from "./AddArticle";
import EditArticle from "./EditArticle";
import Header from "components/Headers/Header.js";
import { toast } from "react-toastify";

const ViewArticle = () => {
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [article, setArticle] = useState({});
  const { articles } = Store();
  const { articleId } = useParams();
  let [blog, setBlog] = useState({ is_featured: false });

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const data = await api("get", `/results/${articleId}`);
    setArticle(data?.article);
  };

  const handleModal = () => {
    setOpenModal((open) => !open);
    return openModal;
  };

  const handleEditModal = (item) => {
    setArticle(item || article);
    setEditModal((open) => !open);
    return openModal;
  };

  return (
    <>
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row className="mb-4">
          <div className="col">
            <Card isOpen={openModal} className="shadow">
              <CardHeader className="border-1">
                <ModalHeader charCode="X" toggle={handleModal}>
                  View Article
                </ModalHeader>
              </CardHeader>

              <Row>
                <Col>
                  <Form>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="9" style={{ margin: "auto" }}>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-fname"
                            >
                              Title
                            </label>
                            <Input
                              className="form-control-alternative text-default"
                              type="text"
                              value={blog.blog_title || "N/A"}
                              disabled
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="9" style={{ margin: "auto" }}>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-lname"
                            >
                              Description
                            </label>
                            <Input
                              className="form-control-alternative text-default"
                              type="textarea"
                              value={blog.blog_desc || "N/A"}
                              disabled
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      {/* <div className="pl-lg-4"> */}
                      <Row>
                        <Col lg="9" style={{ margin: "auto" }}>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-image"
                            >
                              Featured image <i className="ni ni-album-2" />
                            </label>
                            <Input
                              className="form-control-file form"
                              id="input-image"
                              type="file"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      {/* </div> */}
                      <Row>
                        <Col lg="9" style={{ margin: "auto" }}>
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-lname"
                            >
                              Article
                            </label>
                            {/* <CKEditor
                              editor={ClassicEditor}
                              data={blog.blog_content}
                              onReady={(editor) => {
                                editor.plugins.get(
                                  "FileRepository"
                                ).createUploadAdapter = (loader) => {
                                  return new MyUploadAdapter(loader);
                                };
                              }}
                              onChange={(event, editor) => {
                                const data = editor.getData();
                                setBlog((prev) => {
                                  return {
                                    ...prev,
                                    blog_content: data,
                                  };
                                });
                              }}
                            /> */}
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="9" style={{ margin: "auto" }}>
                          <FormGroup>
                            <div className="custom-control custom-control-alternative custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="customCheck5"
                                type="checkbox"
                                value={blog.is_featured || "N/A"}
                                disabled
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck5"
                              >
                                Featured
                              </label>
                            </div>
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </Col>
              </Row>

              {/* ///////////     Pagination Disabled Temp     ///////////// */}

              {/* <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter> */}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ViewArticle;
