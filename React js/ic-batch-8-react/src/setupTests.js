// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


const editStudent = (studentId) => {
    // console.log("Edit student function called");
    const item = props.students.find((student) => student.id === studentId);
    const editElement = document.getElementById(studentId);
    const tdElements = `<td class="td-style">${item.id}</td>
      <td class="td-style"><input type="text" name="name" value="${
        item.name
      }" /></td>
      <td class="td-style"><input type="text" name="age" value="${
        item.age
      }" /></td>
      <td class="td-style"><input type="text" name="gender" value="${
        item.gender
      }" /></td>
      <td class="td-style"><input type="email" name="email" value="${
        item.email
      }" /></td>
      <td class="td-style"><input type="number" name="phone" value="${
        item.phone
      }" /></td>
      <td class="td-style"><input type="text" name="address" value="${
        item.address
      }" /></td>
      <td class="td-style"><input type="text" name="country" value="${
        item.country
      }" /></td>
      <td class="td-style"><input type="text" name="skills" value="Add Skills"/></td>
      <td class="td-style"><input type="text" name="interests" value="Add Interests"/></td>
      <td class="td-style"><button onClick=${props.context.updateStudentInfo(
        item.id
      )} type="button">UPDATE</button><button type="button">CANCEL</button></td>`;

    editElement.innerHTML = tdElements;
  };