import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Employees from './Employees'
import Footer from './Footer'
import { useState } from "react";


function App() {

  const [selectedTeam, setTeam] = useState("TeamB");
  const [employees, setEmployees] = useState([
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
  ]);

  function handleTeamSelectionChange(event)
  {
    setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event){
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
    ?(employee.teamName === selectedTeam)?{...employee, teamName:''}:{...employee,teamName: selectedTeam}:employee);
    
    setEmployees(transformedEmployees);
  }

  return (
    <main>
      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
      <Employees
        employees={employees}
        selectedTeam={selectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamSelectionChange={handleTeamSelectionChange}
       />
      <Footer />
    </main>
  );
}

export default App;
