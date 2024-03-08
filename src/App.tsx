
import { Routes, Route } from 'react-router-dom';


import './globals.css';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/** Public routes */}
        <Route path='/sign-in' element={<SigninForm />} />
      </Routes>
      {/** private routes */}
      <Route index element={<Home />} />
    </main>
  )
}

export default App