import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Employees from "./Employees";
import Footer from "./Footer";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || [
      {
        id: 1,
        fullName: "Precious Imoniakemu",
        designation: "FullStack Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "John Doe",
        designation: "Product Manager",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Praise Imoniakemu",
        designation: "Data Scientist",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Dara Paul",
        designation: "Content Writer",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "John Doe",
        designation: "Product Manager",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 6,
        fullName: "Praise Imoniakemu",
        designation: "Data Scientist",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 7,
        fullName: "Dara Paul",
        designation: "Content Writer",
        gender: "female",
        teamName: "TeamB",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );

    setEmployees(transformedEmployees);
  }

  return (
    <main>
      <Router>
        <Nav />
        <Header
          selectedTeam={selectedTeam}
          teamMemberCount={
            employees.filter((employee) => employee.teamName === selectedTeam)
              .length
          }
        />
        <Routes>
          <Route
            path="/"
            element={
              <Employees
                employees={employees}
                selectedTeam={selectedTeam}
                handleEmployeeCardClick={handleEmployeeCardClick}
                handleTeamSelectionChange={handleTeamSelectionChange}
              />
            }
          ></Route>
          <Route
            path="/GroupedTeamMembers"
            element={
              <GroupedTeamMembers
                employees={employees}
                 selectedTeam={setTeam}
                setTeam={setTeam}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
