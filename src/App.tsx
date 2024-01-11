import "./App.css";
import CalendarPanel from "./components/Calendar/CalendarPanel";
import CalendarHeader from "./components/Header/CalendarHeader";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import RightSideBar from "./components/RightSideBar/RightSideBar";
import { CalendarContextProvider } from "./context/CalendarContext";
import { ModalContextProvider } from "./context/ModalContext";

const App = () => {
  return (
    <CalendarContextProvider>
      <ModalContextProvider>
        <div className="main-panel">
          <CalendarHeader />
          <div className="calendar-panel">
            <LeftSideBar />
            <CalendarPanel />
            <RightSideBar />
          </div>
        </div>
      </ModalContextProvider>
    </CalendarContextProvider>
  );
};

export default App;
