import { eachDayOfInterval, format } from "date-fns";
import { useEffect, useId, useState } from "react";

import { useModalContext } from "../../context/ModalContext";
import { useCalendarContext } from "../../context/CalendarContext";
import Button from "../../ui/button/Button";
import CustomModal from "../../ui/CustomModal/CustomModal";
import "./AddEvent.css";

interface IFormData {
  startDate: string;
  endDate: string;
  title: string;
}

const AddEvent = () => {
  const { isOpen, onClose, type, data } = useModalContext();
  const { setEvents, setDaysWithData } = useCalendarContext();

  const [formData, setFormData] = useState<IFormData>({
    startDate: "",
    endDate: "",
    title: "",
  });

  const formId = useId();

  const isModalOpen = isOpen && type === "addEvent";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      startDate: "",
      endDate: "",
      title: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { startDate, endDate, title } = formData;
    const eventDates = eachDayOfInterval({
      start: new Date(startDate),
      end: new Date(endDate),
    });

    const id = Date.now().toString();
    setEvents((prev) => {
      const newEvents = {
        ...prev,
        [id]: {
          title,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
        },
      };

      localStorage.setItem("events", JSON.stringify(newEvents));
      return newEvents;
    });

    setDaysWithData((prev) => {
      const newDaysWithData = { ...prev };
      eventDates.forEach((date) => {
        const dateString = format(date, "yyyy-MM-dd");
        if (newDaysWithData[dateString]) {
          newDaysWithData[dateString] = {
            events: [...newDaysWithData[dateString].events, id],
          };
        } else {
          newDaysWithData[dateString] = {
            events: [id],
          };
        }
      });

      localStorage.setItem("daysWithData", JSON.stringify(newDaysWithData));
      return newDaysWithData;
    });

    handleModalClose();
  };

  const handleModalClose = () => {
    handleReset();
    onClose();
  };

  useEffect(() => {
    if (data) {
      setFormData((prev) => ({
        ...prev,
        startDate: data,
        endDate: data,
      }));
    }
  }, [data]);

  return (
    <CustomModal
      isOpen={isModalOpen}
      onClose={handleModalClose}
      title="Add event"
    >
      <div className="add-event-modal">
        <form className="date-form" id={formId} onSubmit={handleSubmit}>
          <div className="date-inputs">
            <label htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              disabled
              onChange={handleChange}
              required
            />

            <label htmlFor="endDate">End Date</label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="title"
            placeholder="Enter event title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <div className="date-form-action-btn">
            <Button onClick={handleModalClose}>Close</Button>
            <Button form={formId} type="submit" color="primary">
              Add
            </Button>
          </div>
        </form>
      </div>
    </CustomModal>
  );
};

export default AddEvent;
