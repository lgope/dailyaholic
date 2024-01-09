import "./RightSideBar.css";

const RightSideBar = () => {
  const onClick = () => {
    console.log("click");
  };

  return (
    <aside className="calendar-right-sidebar">
      <button
        onClick={onClick}
        className="calender-next-month-btn"
        title="Keep"
      >
        <span className="material-icons-outlined calender-keep-icon">
          emoji_objects
        </span>
      </button>

      <button
        onClick={onClick}
        className="calender-next-month-btn"
        title="Get Add-ons"
      >
        <span className="material-icons-outlined calender-get-add-ons-icon">
          add
        </span>
      </button>
    </aside>
  );
};

export default RightSideBar;
