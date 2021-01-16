import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  function createNewId() {
    onIdSubmit(uuidV4());
  }

  return (
    <Container className="mt-5 login">
      <div className="row">
        <div className="col-sm-8 d-flex align-items-center">
          <img
            src="https://cdn.discordapp.com/attachments/795010536365752320/799761776824418354/bg4.png"
            alt=""
            style={{ maxHeight: "100vh", maxWidth: "100%" }}
          />
        </div>
        <div className="col-sm-4 d-flex align-items-center flex-column justify-content-center">
          <div className="pl-0">
            <h1 className="text-white pl-0">Freee Chat App</h1>
            <p className="text-white pl-0">No Signup Required</p>
          </div>
          <Form onSubmit={handleSubmit} className="w-100 mt-3">
            <Form.Group>
              <Form.Label className="text-white">Enter Your Id</Form.Label>
              <Form.Control
                type="text"
                ref={idRef}
                required
                placeholder="Enter ID"
              />
            </Form.Group>
            <Button type="submit" className="mr-2 button">
              Login
            </Button>
            <Button onClick={createNewId} className="button">
              Create A New Id
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}
