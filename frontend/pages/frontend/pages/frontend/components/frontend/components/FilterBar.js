import { useState } from 'react';

export default function FilterBar({ applyFilter }) {

  const [minMembers,setMinMembers] = useState('');
  const [activity,setActivity] = useState('');

  return (
    <div>

      <input
        type="number"
        placeholder="Membros mínimos"
        value={minMembers}
        onChange={e=>setMinMembers(e.target.value)}
      />

      <select
        value={activity}
        onChange={e=>setActivity(e.target.value)}
      >

        <option value="">
          Todas atividades
        </option>

        <option value="Alta">
          Alta
        </option>

        <option value="Média">
          Média
        </option>

      </select>

      <button
        onClick={()=>
          applyFilter(
            Number(minMembers),
            activity
          )
        }
      >
        Filtrar
      </button>

    </div>
  );
}
