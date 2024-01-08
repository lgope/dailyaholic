import "./App.css";
import CalendarPanel from "./components/Calendar/CalendarPanel";
import CalendarHeader from "./components/Header/CalendarHeader";
import SideBar from "./components/SideBar/SideBar";

const App = () => {

  return (
    <div className="main-panel">
      <CalendarHeader />
      <div className="calendar-panel">
        <SideBar />
        <CalendarPanel />
      </div>
    </div>
  );
};

export default App;
