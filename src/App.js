
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllMeetups from './Pages/AllMeetups';
import Favorites from './Pages/Favorites';
import NewMeetups from './Pages/NewMeetups';
import Layout from './Components/Layout/Layout';


function App() {
  return (
    <Layout>

      <Routes>
        <Route path='/' element={<AllMeetups />}>

        </Route>
        <Route path='/new-meetups' element={<NewMeetups />}>

        </Route>
        <Route path='/favorites' element={<Favorites />}>

        </Route>

      </Routes>
    </Layout>
  );
}

export default App;
