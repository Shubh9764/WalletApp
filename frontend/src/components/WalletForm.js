import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import axios from 'axios'
import {Navigate, useNavigate} from 'react-router-dom'


const WalletForm = () => {
  const [state, setState] = useState({
    name: "",
    accountNumber: "",
    description: "",
    priority: "1",
  });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setState({...state , 
      [e.target.name]: e.target.value,
    });
  };

  const submitHanlder = (e) =>{
    console.log(state)
    const data = {...state}
    e.preventDefault()
    axios.post("http://localhost:8080/wallet",data)
    .then((res)=>{
      console.log(res.data)
      navigate("/dashboard")
    })
    .catch((e) => {
      console.log(e)
    })
  }
  return (
    <>
      <Form onSubmit={submitHanlder}>
        <h1>Create/Edit Wallet</h1>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Account name
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Account Name" name="name" onChange={changeHandler}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Account Number
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Account Number"
              name="accountNumber"
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" as={Row}>
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={8}>
            <Form.Control as="textarea" rows={3} name="description" onChange={changeHandler}/>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" as={Row}>
          <Form.Label column sm={2}>
            Priority
          </Form.Label>
          <Col sm={8}>
            <Form.Select name="priority" onChange={changeHandler}>
              <option value={1} >
                High
              </option>
              <option value={2}>Medium</option>
              <option value={3}>Low</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <Button type="submit">Create/Update</Button>
      </Form>
    </>
  );
};

export default WalletForm;
