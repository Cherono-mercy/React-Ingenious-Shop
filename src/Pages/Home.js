import React, { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup, FormControl, Form } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { BiSearch } from "react-icons/bi";

function Home() {
  const [theme] = useThemeHook();
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <h1 className={theme ? "text-light my-5" : "text-black my-5"}>
            Search Products
          </h1>
          <InputGroup className="mb-3">
            <InputGroup.Text className={theme? "bg-black text-dark-primary" : "bg-light text-light-primary"}>
            <BiSearch size="2rem" />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={theme? "bg-light-black text-light" : "bg-light text-black"}
            />
          </InputGroup>
          {searchInput}
        </Col>
        
      </Row>
    </Container>
  );
}

export default Home;
