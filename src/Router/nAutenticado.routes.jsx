import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../Login/index'
import CadastrarUsuarios from '../CadastraUsuarios'

function nAutenticado() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/CadastroUsuarios' element={< CadastrarUsuarios />} />
        <Route path='*' element={<Login/>}/>
       
      </Routes>
    </BrowserRouter>
  )
}

export default nAutenticado
