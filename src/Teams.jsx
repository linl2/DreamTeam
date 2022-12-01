import { useContext } from 'react';
import DataContext from './context/DataContext';

const Teams = () => {
  const { handleTeamSelectionChange, selectedTeam } = useContext(DataContext);

  return (
    <select className="form-select form-select-lg" id="teams" value={selectedTeam} onChange={handleTeamSelectionChange}>
        <option value="Autobots">Autobots</option>
        <option value="DSSP platform architects">DSSP platform architects</option>
        <option value="Thunderbolt">Thunderbolt</option>
        <option value="Falcon">Falcon</option>
        <option value="Hawks">Hawks</option>
        <option value="Martial">Martial</option>
      <option value="CCM - Road Runner">CCM - Road Runner</option>
    </select>

  )
}

export default Teams