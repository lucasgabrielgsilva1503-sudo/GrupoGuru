export default function GroupCard({ group }) {

  return (
    <div className="group-card">

      <h3>
        {group.name} ({group.platform})
      </h3>

      <p>
        Membros: {group.members}
      </p>

      <p>
        Atividade: {group.activity}
      </p>

      <p>
        Dica: {group.salesTip}
      </p>

      <p>
        Hashtags: {group.hashtags}
      </p>

      <button>
        Ir para o grupo
      </button>

    </div>
  );
}
