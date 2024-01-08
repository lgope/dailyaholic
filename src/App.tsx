import "./App.css";
import CalendarPanel from "./components/Calendar/CalendarPanel";
import CalendarHeader from "./components/Header/CalendarHeader";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";

const App = () => {

  return (
    <div className="main-panel">
      <CalendarHeader />
      <div className="calendar-panel">
        <LeftSideBar />
        <CalendarPanel />
        {/* <RightSideBar /> */}
      </div>
    </div>
  );
};

export default App;
