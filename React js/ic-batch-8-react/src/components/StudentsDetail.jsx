import React, { useState } from "react";
import AllStudentsList from "./AllStudentsList";
import { persons } from "../data/persons";
import styled from "styled-components";
import Update from "./Update";
import Add from "./Add";

export default function StudentsDetail() {
  const [students, setStudents] = useState(persons);
  const [id, setId] = useState(null);

  // ! This is function is for delete student object
  const deleteStudent = (studentId) => {
    const updateStudents = students.filter(
      (student) => student.id !== studentId
    );
    setStudents(updateStudents);
  };

  // * This is function is for update student presence students
  const updateStudentPresence = (studentId, isPresent) => {
    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        return { ...student, is_present: isPresent };
      }
      return student;
    });

    setStudents(updatedStudents);
  };

  // * This variable store a list of present students
  const presentList = students.filter((student) => student.is_present === true);
  // * This variable store a list of absent students
  const absentList = students.filter((student) => student.is_present === false);

  const context = {
    updateStudentPresence: updateStudentPresence,
    deleteStudent: deleteStudent,
    setId: setId,
  };

  return (
    <>
      {id ? (
        <>
          <Title>Update Student</Title>
          <Update
            context={{
              id: id,
              setId: setId,
              students: students,
              setStudents: setStudents,
            }}
          />
        </>
      ) : (
        <>
          <Title>Add Student</Title>
          <Add
            context={{
              students: students,
              setStudents: setStudents,
              id: id,
              setId: setId,
            }}
          />
        </>
      )}
      <Title>All Student Details</Title>
      <AllStudentsList students={students} context={context} />
      <Title>All Present Student Details</Title>
      <AllStudentsList students={presentList} context={context} />
      <Title>All Absent Student Details</Title>
      <AllStudentsList students={absentList} context={context} />
    </>
  );
}

const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid grey;
  margin-top: 100px;
  margin-bottom: 50px;
`;
