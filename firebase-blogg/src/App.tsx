
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import NewBloggPost from './components/NewBloggPost'
import SeeAllBloggPosts from './components/SeeAllBloggPosts'
import StartingPageComponent from './components/StartingPageComponent'

function App() {

  return (

    <Router>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<StartingPageComponent />} />
        <Route path='/newpost' element={<NewBloggPost />} />
        <Route path='/allposts' element={<SeeAllBloggPosts />} />
      </Routes>
      <FooterComponent />
    </Router>

  )
}

export default App
