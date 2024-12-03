import Router from './Router/index'
import AuthProvider from './Context/authContexts'

function App() {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  )
}

export default App
