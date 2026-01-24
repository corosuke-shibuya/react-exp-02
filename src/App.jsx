import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from './components/News'
import ChartBar from './components/ChartBar'
import CalendarItem from './components/CalendarItem'
import Header from "./layout/Header";
import SideBar from "./layout/SideBar";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />

        <div style={{ display: "flex" }}>
          <SideBar />

          <div style={{ flex: 1, padding: "24px" }}>
            <News />
            <CalendarItem />
            <ChartBar />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App