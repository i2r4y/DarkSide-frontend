import { useContext, useState } from "react";
import { AutenticadoContexto } from '../Context/authContexts'
import { toast } from 'react-toastify'
import './Login.css'



const Login = () => {
  const { loginEntrada } = useContext(AutenticadoContexto)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function dadosLogin(e) {
    e.preventDefault()
    if (!email || !password) {
      toast.warning('preencha todos os campos')
      return
    }

    try {
      await loginEntrada(email, password)
    } catch (err) {

    }

  }

  return (
    <div className="LoginInicio">
      <div className="login-container">
        <h1>Iniciar Sessão</h1>
        <form onSubmit={dadosLogin}>
          <div className="email-login">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="senha-login">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />

          <button className="button-login" type="submit">Entrar</button>
          <div className="forgot-password" >
            <p>Esqueceu  a senha?
              <a href="#" className="span-password">Recuperar a senha</a></p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
