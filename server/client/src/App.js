import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { Suspense } from 'react';

import { Toaster } from 'react-hot-toast';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='flex flex-row justify-center mt-[40vh]'><ClipLoader color='#403423' size={30} /></div>}>
        <Router />
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={true} />
    </BrowserRouter>
  );
}

export default App;
