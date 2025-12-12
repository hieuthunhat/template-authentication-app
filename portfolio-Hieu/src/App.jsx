import './App.css'
import AppRoutes from "./AppRoutes.jsx";
import { AuthProvider } from './providers/AuthenticationProvider.jsx';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
