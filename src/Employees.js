import { useState } from "react";
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

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
  },
  {
    id: 5,
    fullName: "John Doe",
    designation: "Product Manager",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 6,
    fullName: "Praise Imoniakemu",
    designation: "Data Scientist",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 7,
    fullName: "Dara Paul",
    designation: "Content Writer",
    gender: "female",
    teamName: "TeamB"
  }
])

  return (
    <main className="container">
        <div class="row justify-content-center mt-3 mb-3" >
            <div class="col-8">
                <div class="card-collection" >
                    {
                        employees.map((employee) => (
                            <div id="{employee.id}" className="card m-2" style={{cursor: " pointer "}}>
                                {(employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" />
                                : <img src={femaleProfile} className="card-img-top" /> }
                                <div className="card-body">
                                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                                    <p className="card-text"><b>Designation:</b> {employee.designation}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </main>
  )
}
export default Employees