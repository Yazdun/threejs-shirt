import { CanvasModal } from './canvas'
import { Customizer } from './pages/Customizer'
import { Home } from './pages/Home'

function App() {
  return (
    <main className="app transition-all ease-linear">
      <Home />
      <CanvasModal />
      <Customizer />
    </main>
  )
}

export default App
