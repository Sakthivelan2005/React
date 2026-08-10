import './App.css'
import Footer from './components/Footer'
import { Header } from './components/header'
import MainContent from './components/MainContent'
import Sidebar from './components/SideBar'

function App() {
  return (
   <div className="app-layout">
    <Header />

    <div className="middle-section">
      <Sidebar />
      <MainContent />
    </div>

    <Footer />
   </div>
  )
}

export default App
