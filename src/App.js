import router from './Router/Router';
import { RouterProvider } from 'react-router-dom';

function App() {

  return (
    <div className='max-w-screen-xl m-auto d-block'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
