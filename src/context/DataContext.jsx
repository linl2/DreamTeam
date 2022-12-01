import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "Autobots");

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
    {
      id: 1,
      fullName: "Michael Furmaniuk",
      role: "PO, Manager",
      gender: "male",
      teamName: "Autobots",
      picture: "/src/images/Michael.png",
      location: "MA"
    },
    {
      id: 2,
      fullName: "Victor Anton",
      role: "Scrum Master",
      gender: "male",
      teamName: "Autobots",
      picture: "/src/images/Victor.png",
      location: "GA"
    },
    {
      id: 3,
      fullName: "Lisa Yannakopoulos",
      role: "Tech Lead",
      gender: "female",
      teamName: "Autobots",
      picture: "/src/images/Lisa.png",
      location: "MA"
    },
    {
      id: 4,
      fullName: "Andrei Antipin",
      role: "Engineer",
      gender: "male",
      teamName: "Autobots",
      picture: "/src/images/Andrei.png",
      location: "CA"
    },
    {
      id: 5,
      fullName: "Fangyu Lin",
      role: "Senior Engineer",
      gender: "male",
      teamName: "Autobots",
      picture: "/src/images/Fangyu.png",
      location: "MA"
    },

    {
      id: 6,
      fullName: "Akmaliddin Omonov",
      role: "Engineer",
      gender: "male",
      teamName: "Autobots",
      picture: "/src/images/Akmal.png",
      location: "IL"
    },
    {
      id: 7,
      fullName: "Mohammad Semati",
      role: "Engineer",
      gender: "male",
      teamName: "Autobots",
      picture: "/src/images/MJ.png",
      location: "CA"
    },
    {
      id: 8,
      fullName: "Nodir Sultan Mukhamedov",
      role: "Senior Engineer",
      gender: "male",
      teamName: "Autobots",
      picture: "/src/images/Nodir.png",
      location: "FL"
    },
    {
      id: 9,
      fullName: "Li Lin",
      role: "Tech Lead",
      gender: "male",
      teamName: "Autobots",
      picture: "/src/images/LiLin.png",
      location: "MA"
    },
    {
      id: 10,
      fullName: "Pan Wong",
      role: "Engineering Manager",
      gender: "male",
      teamName: "Thunderbolt",
      picture: "/src/images/Pan.png",
      location: "NY"
    },
    {
      id: 11,
      fullName: "Ethan Kiczek",
      role: "Architect",
      gender: "male",
      teamName: "DSSP platform architects",
      picture: "/src/images/Ethan.jpg",
      location: "MA"
    },
    {
      id: 12,
      fullName: "Jiaqi Gu",
      role: "Engineer",
      gender: "female",
      teamName: "Thunderbolt",
      picture: "/src/images/Jiaqi.jpg",
      location: "MA"
    },
    {
      id: 13,
      fullName: "Qing Xu",
      role: "Engineer",
      gender: "female",
      teamName: "Falcon",
      picture: "",
      location: "MA"
    },
    {
      id: 14,
      fullName: "John Behringer",
      role: "Product Manager",
      gender: "male",
      teamName: "Hawks",
      picture: "",
      location: "NY"
    },
    {
      id: 15,
      fullName: "Jonathon Mainguy",
      role: "Solution Engineer",
      gender: "male",
      teamName: "Martial",
      picture: "/src/images/Jon.png",
      location: "NC"
    },
    {
      id: 16,
      fullName: "Chuanchieh Chou",
      role: "DIGITAL SR DEV ENGINEER I",
      gender: "male",
      teamName: "CCM - Road Runner",
      picture: "/src/images/Jeffrey.jpg",
      location: "MA"
    },
     {
      id: 17,
      fullName: "Madrigal Torres Misael",
      role: "DIGITAL PRINCIPAL ENGINEER ICHS MOBILE APP DEV",
      gender: "male",
      teamName: "CCM - Road Runner",
      picture: "/src/images/Misa.png",
      location: "MA"
    },]);


  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }


  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? employee.teamName === selectedTeam ? { ...employee, teamName: '' }
        : { ...employee, teamName: selectedTeam } : employee);
    setEmployees(transformedEmployees);
  }
  return <DataContext.Provider value={{
    employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick, setTeam
  }}>
    {children}
  </DataContext.Provider>
};

export default DataContext;