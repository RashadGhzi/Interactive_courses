import React, { useState } from "react";
import styled from "styled-components";

export default function Update(props) {
  const id = props.context.id;
  const setId = props.context.setId;
  const students = props.context.students;
  const setStudents = props.context.setStudents;

  const student_object = students.find((student) => student.id === id);

  const [name, setName] = useState(student_object.name);
  const [age, setAge] = useState(student_object.age);
  const [gender, setGender] = useState(student_object.gender);
  const [email, setEmail] = useState(student_object.email);
  const [phone, setPhone] = useState(student_object.phone);
  const [address, setAddress] = useState(student_object.address);
  const [country, setCountry] = useState(student_object.country);
  const [skills, setSkills] = useState(student_object.skills);
  const [interests, setInterests] = useState(student_object.interests);

  const updateStudent = () => {
    const upd_student = students.map((element) => {
      if (element.id === student_object.id) {
        return {
          ...element,
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
      }
      return element;
    });
    setStudents(upd_student);
    setId(null);
  };

  return (
    <Div>
      <ItemDiv>
        <Input
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          name="age"
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <Select
          name="gender"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
        </Select>
        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          name="phone"
          type="number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <Input
          name="address"
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <Input
          name="country"
          type="text"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <Input
          name="skills"
          type="text"
          value={skills.join(",")}
          onChange={(e) => {
            setSkills(e.target.value.split(","));
          }}
        />
        <Input
          name="interests"
          type="text"
          value={interests.join(",")}
          onChange={(e) => {
            setInterests(e.target.value.split(","));
          }}
        />
        <Button type="button" onClick={updateStudent}>
          UPDATE STUDENT
        </Button>
      </ItemDiv>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ItemDiv = styled.div`
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
