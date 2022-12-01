import { useState, useContext, useEffect } from 'react';
import DataContext from './context/DataContext';
import { Input } from 'semantic-ui-react'
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const SearchMember = () => {
  const { employees } = useContext(DataContext);

  const [searchInput, setSearchInput] = useState('');

  function searchItems(event){
    setSearchInput(event.target.value);
  }

  var foundMember = employees.filter((employee) => employee.fullName.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <main className="container">

      <div className="row justify-content-center">
        <div className = "col-6">
          <Input icon='search'
                 placeholder='Search...'
                 onChange={searchItems}
          />

        </div>
      </div>

      <div className="row justify-content-center">
        <div className = "col-8">
          <div className="single-card-collection">
            {
              foundMember.map((employee) => (
                  <div>
                    {(employee.picture !== "")? <img src={employee.picture} className="card-img-top" alt="profile" />  :
                        (employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" alt="profile" /> :
                            <img src={femaleProfile} className="card-img-top" alt="profile" />}
                    <div className="card-body">
                      <h5 className="card-title">Full Name: {employee.fullName}</h5>
                      <p className="card-text"> <b>Role:</b> {employee.role}</p>
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
export default SearchMember