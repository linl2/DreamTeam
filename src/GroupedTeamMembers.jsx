import { useState, useContext } from 'react';
import DataContext from './context/DataContext';

const GroupedTeamMembers = () => {
  const { employees, selectedTeam, setTeam } = useContext(DataContext);
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
  const teamMembersLength = employees.filter((employee) => employee.teamName === selectedTeam).length;

  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter((employee) => employee.teamName === 'Autobots');
    var teamA = { team: 'Autobots', members: teamAMembers, collapsed: selectedTeam === 'Autobots' ? false : true };
    teams.push(teamA);

    var teamBMembers = employees.filter((employee) => employee.teamName === 'Falcon');
    var teamB = { team: 'Falcon', members: teamBMembers, collapsed: selectedTeam === 'Falcon' ? false : true };
    teams.push(teamB);

    var teamCMembers = employees.filter((employee) => employee.teamName === 'Hawks');
    var teamC = { team: 'Hawks', members: teamCMembers, collapsed: selectedTeam === 'Hawks' ? false : true };
    teams.push(teamC);

    var teamDMembers = employees.filter((employee) => employee.teamName === 'Martial');
    var teamD = { team: 'Martial', members: teamDMembers, collapsed: selectedTeam === 'Martial' ? false : true };
    teams.push(teamD);

    var teamEMembers = employees.filter((employee) => employee.teamName === 'Thunderbolt');
    var teamE = { team: 'Thunderbolt', members: teamEMembers, collapsed: selectedTeam === 'Thunderbolt' ? false : true };
    teams.push(teamE);

    var teamFMembers = employees.filter((employee) => employee.teamName === 'DSSP platform architects');
    var teamF = { team: 'DSSP platform architects', members: teamFMembers, collapsed: selectedTeam === 'DSSP platform architects' ? false : true };
    teams.push(teamF);

    var teamGMembers = employees.filter((employee) => employee.teamName === 'CCM - Road Runner');
    var teamG = { team: 'CCM - Road Runner', members: teamGMembers, collapsed: selectedTeam === 'CCM - Road Runner' ? false : true };
    teams.push(teamG);


    return teams;
  }
  function handleTeamClick(event) {
    var newGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
    setGroupedData(newGroupedData);
    setTeam(event.currentTarget.id);

  }

  return (
    <main className="container">
      <div> <h3>{selectedTeam} has {teamMembersLength} Members</h3></div>
      {groupedEmployees.map((item) => {
        return (
          <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
              Team Name: {item.team}
            </h4>
            <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
              <hr />
              {item.members.map((member) => {
                return (
                  <div key={member.id} className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                    </h5>
                    <p className="card-text text-dark mt-2">
                      <b>Role:</b> {member.role}
                    </p>
                  </div>
                );
              })}
            </div>
            <hr />
          </div>
        );
      })}
    </main>
  )
}
export default GroupedTeamMembers