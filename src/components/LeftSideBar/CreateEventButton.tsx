import plusImg from "../../assets/plus.svg";
export default function CreateEventButton() {
  return (
    <button
      onClick={() => console.log("clicked")}
      className="calendar-event-btn"
    >
      <img src={plusImg} alt="create_event" className="calendar-event-create-logo" />
      <span className="calendar-event-btn-title"> Create</span>
    </button>
  );
}
