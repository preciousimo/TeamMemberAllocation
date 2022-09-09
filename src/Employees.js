import { useState } from "react";

const Employees = () => {

  const [employees, setEmployees] = useState([{
    id: 1,
    fullName: "Precious Imoniakemu",
    designation: "FullStack Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "John Doe",
    designation: "Product Manager",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Praise Imoniakemu",
    designation: "Data Scientist",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Dara Paul",
    designation: "Content Writer",
    gender: "female",
    teamName: "TeamB"
  }
])

  return (
    <main>
       {
        employees.map((employee) => (
            <p>{employee.fullName}</p>
        ))
       }
    </main>
  )
}
export default Employees