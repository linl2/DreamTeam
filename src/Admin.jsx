
import Teams from './Teams'
import TeamMembers from './TeamMembers'
import {useContext} from "react";
import DataContext from "./context/DataContext.jsx";
const Admin = () => {
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
                        <TeamMembers />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Admin