import { useState } from 'react';
import GroupCard from '../components/GroupCard';
import FilterBar from '../components/FilterBar';

export default function Search() {
  const [niche,setNiche] = useState('');
  const [groups,setGroups] = useState([]);
  const [filteredGroups,setFilteredGroups] = useState([]);

  const searchGroups = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?niche=${niche}`);
    const data = await res.json();
    setGroups(data);
    setFilteredGroups(data);
  };

  const applyFilter = (minMembers,activity)=>{
    let filtered = groups;
    if(minMembers) filtered = filtered.filter(g=>g.members>=minMembers);
    if(activity) filtered = filtered.filter(g=>g.activity===activity);
    setFilteredGroups(filtered);
  };

  return (
    <div className="container">
      <h2>Pesquisar Grupos</h2>
      <input value={niche} onChange={e=>setNiche(e.target.value)} placeholder="Digite o nicho"/>
      <button onClick={searchGroups}>Buscar</button>

      <FilterBar applyFilter={applyFilter}/>

      <div className="group-list">
        {filteredGroups.map((g,i)=><GroupCard key={i} group={g}/>)}
      </div>
    </div>
  );
}
