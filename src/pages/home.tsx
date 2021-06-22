import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-logo.svg';
import loginImg from '../assets/images/log-in.svg';
import { Button } from '../components/Button'


import '../styles/auth.scss'

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração de perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>  

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo LetMeAsk" />
          <button className="create-room">
            <img src={googleImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">Ou entre em uma sala</div>

          <form action="">
            <input 
              type="text" 
              placeholder="Digite o código da sala"
            />
            
            <Button type="submit">
              <img src={loginImg} alt="Log-in ícone" />
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}