import { useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([
    { id: 1, name: "Jojo" },
    { id: 2, name: "Wuthichai" },
    { id: 3, name: "Kong" },
  ]);
  const [show, setShow] = useState(false);
  const [hideText, setHideText] = useState("ซ่อนข้อมูล");

  const deleteStudent = (id) => {
    setStudents(students.filter((item) => item.id !== id));
  };
  const toggleShow = () => {
    if (hideText === "ซ่อนข้อมูล") {
      setHideText("แสดงข้อมูล");
    } else {
      setHideText("ซ่อนข้อมูล");
    }

    setShow(!show);
  };

  return (
    <div className="App">
      <h1>จำนวนชั้นนักเรียน = {students.length}</h1>
      <button onClick={() => toggleShow()}>{hideText}</button>
      <ul>
        {students.map((item) => (
          <li key={item.id}>
            <p>
              {item.id} - {item.name}
            </p>
            <button onClick={() => deleteStudent(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
