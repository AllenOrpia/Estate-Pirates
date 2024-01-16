
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, useEffect } from 'react';
import Properties from './pages/properties/Properties.jsx';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Property from './pages/property/Property.jsx';
import UserDetailContext from './context/userDetailsContext.js';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import { set } from 'lodash';


function App() {

  const queryClient = new QueryClient();

  const { user } = useAuth0();

  const [userDetails, setUserDetails] = useState({
    favorites: [],
    bookings: [],
    token: null,
  });

 

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/properties'  >
                  {/* The index path is basically so that if there is no one property or id then we just 
                render the deafault properties or all properties */}
                  <Route index element={<Properties />} />
                  <Route path=':propertyId' element={<Property />} />

                </Route>

              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter >
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>


  )
}

export default App
