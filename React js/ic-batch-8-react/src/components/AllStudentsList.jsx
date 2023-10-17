import React from "react";
import styled from "styled-components";
import "./AllStudentList.css";

export default function AllStudentsList(props) {
  let students = props.students;

  return (
    <div className="students-body">
      <Table>
        <THead>
          <TR>
            <TH>ID</TH>
            <TH>Name</TH>
            <TH>Age</TH>
            <TH>Gender</TH>
            <TH>Email</TH>
            <TH>Phone</TH>
            <TH>Address</TH>
            <TH>Country</TH>
            <TH>Skills</TH>
            <TH>Interests</TH>
            <TH>Actions</TH>
          </TR>
        </THead>
        <TBody>
          {students.map((item) => (
            <TR key={item.id} id={item.id}>
              <TD>{item.id}</TD>
              <TD>{item.name}</TD>
              <TD>{item.age}</TD>
              <TD>{item.gender}</TD>
              <TD>{item.email}</TD>
              <TD>{item.phone}</TD>
              <TD>{item.address}</TD>
              <TD>{item.country}</TD>
              <TD>
                {item.skills.map((skill, index) => (
                  <SkillInfo key={index}>{skill.toUpperCase()}</SkillInfo>
                ))}
              </TD>
              <TD>
                {item.interests.map((skill, index) => (
                  <InterestInfo key={index}>{skill.toUpperCase()}</InterestInfo>
                ))}
              </TD>
              <TD>
                <ButtonList>
                  <Btn
                    onClick={() => {
                      props.context.setId(item.id);
                      window.scrollTo(100, 100);
                    }}
                  >
                    EDIT
                  </Btn>
                  <Btn
                    onClick={() => {
                      props.context.deleteStudent(item.id);
                    }}
                  >
                    DELETE
                  </Btn>
                  {item.is_present === true && (
                    <Btn
                      onClick={() => {
                        props.context.updateStudentPresence(item.id, false);
                      }}
                    >
                      Make Absent
                    </Btn>
                  )}

                  {item.is_present === false && (
                    <Btn
                      onClick={() => {
                        props.context.updateStudentPresence(item.id, true);
                      }}
                    >
                      Make Present
                    </Btn>
                  )}
                  {item.is_present === undefined && (
                    <>
                      <Btn
                        onClick={() => {
                          props.context.updateStudentPresence(item.id, false);
                        }}
                      >
                        Make Absent
                      </Btn>
                      <Btn
                        onClick={() => {
                          props.context.updateStudentPresence(item.id, true);
                        }}
                      >
                        Make Present
                      </Btn>
                    </>
                  )}
                </ButtonList>
              </TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </div>
  );
}

const Table = styled.table`
  width: 90vw;
  margin-top: 10px;
`;
const THead = styled.thead``;
const TBody = styled.tbody``;
const TR = styled.tr``;
const TH = styled.th`
  text-align: start;
  padding: 10px;
  border-bottom: 1px solid;
  border-left: 1px solid;
`;
const TD = styled.td`
  padding: 10px;
  border-bottom: 1px solid;
  border-left: 1px solid;
  /* font-size: 11px; */
  /* font-weight: bold; */

  &:nth-child(11) {
    width: 150px;
  }
`;
const ButtonList = styled.div``;
const Btn = styled.button`
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 5px 0px;
  margin: 2px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: #ffff;
  width: 100%;

  &:hover {
    opacity: 0.5;
  }

  &:nth-child(1) {
    background-color: green;
  }
  &:nth-child(2) {
    background-color: red;
  }
  &:nth-child(3) {
    background-color: deepskyblue;
  }
  &:nth-child(4) {
    background-color: darkcyan;
  }
`;

const SkillInfo = styled.div`
  width: 100%;
  background: grey;
  letter-spacing: 2px;
  text-align: center;
  border-radius: 4px;
  margin: 2px;
  padding: 2px 4px;
  color: #ffff;
  font-size: 11px;
  font-weight: bold;
`;
const InterestInfo = styled.div`
  width: 100%;
  background: grey;
  letter-spacing: 2px;
  text-align: center;
  border-radius: 4px;
  margin: 2px;
  padding: 2px 4px;
  color: #ffff;
  font-size: 11px;
  font-weight: bold;
`;
