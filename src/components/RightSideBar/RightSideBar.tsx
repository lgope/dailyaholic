import "./RightSideBar.css";
// import GoogleKeepIcon from '../../assets/Google_Keep_icon.svg'
// import GoogleKeepIcon from '../../assets/google_keep_icon.png'

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
      

      {/* <button
        onClick={onClick}
        className="calender-next-month-btn"
        title="Next month"
      >
        <span className="material-icons-outlined calender-prev-month-icon">
        <img src={GoogleKeepIcon} alt="" />
        </span>

      </button> */}
    </aside>
  );
};

export default RightSideBar;
