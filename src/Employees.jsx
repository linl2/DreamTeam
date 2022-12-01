import Teams from './Teams'
import { useContext } from 'react';
import maleProfile from "./images/maleProfile.jpg";
import femaleProfile from "./images/femaleProfile.jpg";
import DataContext from "./context/DataContext.jsx";
const Employees = () => {

    const { employees, selectedTeam } = useContext(DataContext);

    const teamMembers = employees.filter((employee) => employee.teamName === selectedTeam);

    return (
        <main className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <Teams />
                </div>
            </div>
            <hr />
            <div className="row justify-content-center">
                <div className="col-8">
                    <h3>{selectedTeam} has {teamMembers.length} Members</h3>
                    <div className="card-collection">
                        {
                            teamMembers.map((employee) => (
                                <div >
                                    {(employee.picture !== "")? <img src={employee.picture} className="card-img-top" alt="profile" />  :
                                        (employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" alt="profile" /> :
                                            <img src={femaleProfile} className="card-img-top" alt="profile" />}
                                    <div className="card-body">
                                        <h5 className="card-title">Full Name: {employee.fullName}</h5>
                                        <p className="card-text"> <b>Role:</b> {employee.role}</p>
                                        <p className="card-text"> <b>Location:</b> {employee.location}</p>
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

