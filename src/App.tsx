import 'react-calendar-heatmap/dist/styles.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Header } from './components/Header'
import { Profile } from './pages/Profile'
import { Repository } from './pages/Reporsitory'
import Global from './styles/global'

export function App() {

  return (
    <BrowserRouter>
      <Global/>
    
      <Header/>

      <Routes>

        <Route path='/' element={<Profile/>}/>
        <Route path='/:username' element={<Profile/>}/>

        <Route path='/:username/:reponame' element={<Repository/>}/>

      </Routes>
      

      {/* <Footer/> */}
    </BrowserRouter>
  )
}


