import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
  userName: yup.string().required("User name is required"),
  password: yup
      .string()
      .required("Password is required")
      .min(4, "Password must be minimum 4 letters")
});

function LoginForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
      console.log("data", data);
  } 
    
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>User Name</Form.Label>
        <Form.Control name="userName" placeholder="User name" ref={register} />
        {errors.userName && <p>{errors.userName.message}</p>}
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" placeholder="Password" ref={register} />
        {errors.password && <p>{errors.password.message}</p>}
      </Form.Group>
      
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default LoginForm;
