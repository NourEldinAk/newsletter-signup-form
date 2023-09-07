import { Route,Routes} from 'react-router-dom'
import './index.css'
import { Form, Success } from './components'
function App() {

  return (
    <>
    <main className='w-full h-full flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/success' element={<Success/>}/>

      </Routes>
    </main>
    </>
  )
}

export default App
