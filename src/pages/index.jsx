import style from "../styles/home.module.css"
import Navegador from "../components/Navegador/Navegador"


export default function Home() {
  return (
    <>

      <div className={style.logo} >
        <img src='/images/logo.png' alt="logo" />
      </div>
      <div className={style.nav}>
        <Navegador destino='/' texto='INÍCIO' />
        <Navegador destino='/' texto='SOBRE' />
        <Navegador destino='/encontrar servicos' texto='QUERO ENCONTRAR SERVIÇOS' />
        <Navegador destino='/Prestar servicos' texto='QUERO PRESTAR SERVIÇOS' />
      </div>
      
      <main className={style.main}>
        <img src="/images/marido.jpg" alt="" />
        <h1> Aqui você encontrará os melhores profissionais, para realizar as tarefas rotineiras de sua casa ou comércio/empresa.</h1>
      </main>
    </>
  )
}
