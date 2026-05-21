export default function GroupCard({ group }) {
  return (
    <div className="group-card">
      <h3>{group.name} ({group.platform})</h3>
      <p>Membros: {group.members} | Atividade: {group.activity}</p>
      <p>Tipo: {group.type} | Idioma: {group.language}</p>
      <p>Dica: {group.salesTip}</p>
      <p>Hashtags: {group.hashtags}</p>
      <a href={group.link} target="_blank"><button>Ir para o grupo</button></a>
    </div>
  );
}
