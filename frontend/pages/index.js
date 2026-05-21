import Link from 'next/link';
export default function Home() {
  return (
    <div className="container">
      <h1>GrupoGuru</h1>
      <p>Encontre grupos ativos de Facebook, Telegram e Discord e receba dicas de vendas!</p>
      <Link href="/search"><button>Pesquisar Grupos</button></Link>
    </div>
  );
}
