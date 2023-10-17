import React from "react";
import styled from "styled-components";
export default function EditAndUpdate(props) {
  const setStudents = props.context.setStudents;
  const students = props.context.students;

  const handleSubmit = (e) => {
    const form = document.getElementsByTagName("form")[0];
    // console.log(studentId);
    // console.log(form);
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const age = data.get("age");
    const gender = data.get("gender");
    const email = data.get("email");
    const phone = data.get("phone");
    const address = data.get("address");
    const country = data.get("country");
    const skills = data.get("skills").split(",");
    const interests = data.get("interests").split(",");
    const id = students.length + 1;

    const obj = {
      id: id,
      name: name,
      age: age,
      gender: gender,
      email: email,
      phone: phone,
      address: address,
      country: country,
      skills: skills,
      interests: interests,
    };

    setStudents((students) => [...students, obj]);
    form.reset();
  };

  return (
    <Div>
      <Form method="post" onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Your name" />
        <Input name="age" type="number" placeholder="Your age" />
        <Select name="gender" id="gender">
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
        </Select>
        <Input name="email" type="email" placeholder="Your email" />
        <Input name="phone" type="number" placeholder="Your phone number" />
        <Input name="address" type="text" placeholder="Your address" />
        <Input name="country" type="text" placeholder="Your country name" />
        <Input name="skills" type="text" placeholder="Your skills" />
        <Input name="interests" type="text" placeholder="Your interests" />
        <Button type="submit" name="submit-btn">
          ADD STUDENT
        </Button>
      </Form>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Form = styled.form`
  width: 50vw;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  padding: 0px 20px;
  border-radius: 3px;
  margin: 20px 0px;
  font-weight: bold;
  border: 1px solid grey;
  &:active {
    border: none;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 50px;
  padding: 0px 20px;
  letter-spacing: 3px;
  border-radius: 3px;
  font-weight: bold;
  background: transparent;
  cursor: pointer;
  border: 1px solid grey;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: gray;
    border: none;
  }
`;
const Select = styled.select`
  width: 50%;
  height: 50px;
  border-radius: 3px;
  padding: 0px 20px;
  font-weight: bold;
`;
const Option = styled.option``;
