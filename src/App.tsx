
import { Routes, Route } from 'react-router-dom';

import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import Home from './_root/Pages/Home';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/** Public routes */}
        <Route path='/sign-in' element={<SigninForm />} />
        <Route path='/sign-up' element={<SigninForm />} />
      </Routes>
      {/** private routes */}
      
      <Route index element={<Home />} />
    </main>
  )
}

export default App