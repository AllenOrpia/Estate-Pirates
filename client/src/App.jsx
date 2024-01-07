
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react';
import Properties from './pages/Properties.jsx';


function App() {


  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/properties' element={<Properties />} />
            
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter >
    </>
  )
}

export default App
