export default function Home() {
  const objetos = [{
    rm: 551491,
    nome: 'Cássio',
    idade: 18 
  }, {
    rm: 550323,
    nome: 'Paulo',
    idade: 18 
  }, {
    rm: 550929,
    nome: 'Helena',
    idade: 18 
  }];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js</h1>
      <ul>
        {
          objetos.map(
            function(objeto) {
              return(<li key={objeto.rm}>{objeto.nome} - {objeto.idade}</li>)
            }
          )
        }
      </ul>
    </main>
  )
}
