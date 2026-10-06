import { useState } from "react";
import "./App.css";

const initialEvents = [
  {
    id: 1,
    date: "18",
    month: "OCT",
    name: "Tech Fest 2026",
    time: "10:00 AM",
    venue: "Main Auditorium",
    status: "Active",
  },
  {
    id: 2,
    date: "21",
    month: "OCT",
    name: "Cultural Night",
    time: "5:00 PM",
    venue: "Open Ground",
    status: "Upcoming",
  },
  {
    id: 3,
    date: "25",
    month: "OCT",
    name: "Sports Meet",
    time: "8:00 AM",
    venue: "College Ground",
    status: "Upcoming",
  },
];

const initialParticipants = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul@college.edu",
    event: "Tech Fest 2026",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@college.edu",
    event: "Cultural Night",
    status: "Confirmed",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    email: "arjun@college.edu",
    event: "Sports Meet",
    status: "Pending",
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha@college.edu",
    event: "Tech Fest 2026",
    status: "Confirmed",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram@college.edu",
    event: "Tech Fest 2026",
    status: "Confirmed",
  },
];

const initialVolunteers = [
  {
    id: 1,
    name: "Akhil",
    role: "Registration",
    event: "Tech Fest 2026",
    status: "Active",
  },
  {
    id: 2,
    name: "Divya",
    role: "Stage Management",
    event: "Cultural Night",
    status: "Active",
  },
  {
    id: 3,
    name: "Kiran",
    role: "Hospitality",
    event: "Sports Meet",
    status: "Active",
  },
  {
    id: 4,
    name: "Meena",
    role: "Technical Support",
    event: "Tech Fest 2026",
    status: "Available",
  },
];

const initialTasks = [
  {
    id: 1,
    title: "Finalize participant list",
    assignedTo: "Admin",
    priority: "High",
    status: "Pending",
    event: "Tech Fest 2026",
    due: "Today",
  },
  {
    id: 2,
    title: "Arrange sound system",
    assignedTo: "Technical Team",
    priority: "High",
    status: "In Progress",
    event: "Tech Fest 2026",
    due: "Tomorrow",
  },
  {
    id: 3,
    title: "Prepare welcome kits",
    assignedTo: "Hospitality",
    priority: "Medium",
    status: "Pending",
    event: "Cultural Night",
    due: "Oct 20",
  },
  {
    id: 4,
    title: "Print event badges",
    assignedTo: "Registration",
    priority: "Low",
    status: "Completed",
    event: "Tech Fest 2026",
    due: "Completed",
  },
];

const initialSchedule = [
  {
    id: 1,
    time: "09:00 AM",
    title: "Registration Opens",
    venue: "Main Entrance",
    event: "Tech Fest 2026",
    status: "Ready",
    type: "Registration",
  },
  {
    id: 2,
    time: "10:00 AM",
    title: "Opening Ceremony",
    venue: "Main Auditorium",
    event: "Tech Fest 2026",
    status: "Ready",
    type: "Ceremony",
  },
  {
    id: 3,
    time: "12:00 PM",
    title: "Technical Workshops",
    venue: "Block A Labs",
    event: "Tech Fest 2026",
    status: "Upcoming",
    type: "Workshop",
  },
  {
    id: 4,
    time: "02:00 PM",
    title: "Lunch Break",
    venue: "Food Court",
    event: "Tech Fest 2026",
    status: "Upcoming",
    type: "Break",
  },
  {
    id: 5,
    time: "04:00 PM",
    title: "Prize Distribution",
    venue: "Main Auditorium",
    event: "Tech Fest 2026",
    status: "Upcoming",
    type: "Ceremony",
  },
];

const initialAnnouncements = [
  {
    id: 1,
    title: "Tech Fest registration closes Friday",
    text: "All students must complete their registration before Friday evening.",
    time: "2 hours ago",
    author: "Admin",
    audience: "Everyone",
    priority: "Important",
  },
  {
    id: 2,
    title: "Volunteer briefing at 4 PM today",
    text: "All assigned volunteers should report to the seminar hall.",
    time: "5 hours ago",
    author: "Event Coordinator",
    audience: "Volunteers",
    priority: "Important",
  },
  {
    id: 3,
    title: "Cultural Night auditions announced",
    text: "Auditions will take place in the open ground this weekend.",
    time: "Yesterday",
    author: "Cultural Team",
    audience: "Participants",
    priority: "Normal",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const [events, setEvents] = useState(initialEvents);
  const [participants, setParticipants] = useState(initialParticipants);
  const [volunteers, setVolunteers] = useState(initialVolunteers);
  const [tasks, setTasks] = useState(initialTasks);
  const [schedule, setSchedule] = useState(initialSchedule);
  const [announcements, setAnnouncements] = useState(initialAnnouncements);

  const [modalType, setModalType] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editingSchedule, setEditingSchedule] = useState(null);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  const [toast, setToast] = useState("");

  const [participantForm, setParticipantForm] = useState({
    name: "",
    email: "",
    event: "",
    status: "Confirmed",
  });

  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    role: "Registration",
    event: "",
    status: "Active",
  });

  const [eventForm, setEventForm] = useState({
    name: "",
    date: "",
    time: "",
    venue: "",
  });

  const [taskForm, setTaskForm] = useState({
    title: "",
    assignedTo: "Admin",
    priority: "Medium",
    status: "Pending",
    event: "",
    due: "Today",
  });

  const [scheduleForm, setScheduleForm] = useState({
    time: "",
    title: "",
    venue: "",
    event: "",
    status: "Upcoming",
    type: "Activity",
  });

  const [announcementForm, setAnnouncementForm] = useState({
    title: "",
    text: "",
    audience: "Everyone",
    priority: "Normal",
  });

  const showMessage = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  const closeModal = () => {
    setModalType(null);
    setEditingEvent(null);
    setEditingSchedule(null);
    setEditingAnnouncement(null);
  };

  /* =========================
     EVENTS
  ========================= */

  const openCreateEvent = () => {
    setEditingEvent(null);

    setEventForm({
      name: "",
      date: "",
      time: "",
      venue: "",
    });

    setModalType("event");
  };

  const openEditEvent = (event) => {
    setEditingEvent(event);

    setEventForm({
      name: event.name,
      date: `${event.date} ${event.month}`,
      time: event.time,
      venue: event.venue,
    });

    setModalType("event");
  };

  const saveEvent = () => {
    if (
      !eventForm.name.trim() ||
      !eventForm.date.trim() ||
      !eventForm.time.trim() ||
      !eventForm.venue.trim()
    ) {
      showMessage("Please fill all event fields");
      return;
    }

    const dateParts = eventForm.date.trim().split(" ");

    const date = dateParts[0];
    const month = dateParts[1] || "OCT";

    if (editingEvent) {
      setEvents((previous) =>
        previous.map((event) =>
          event.id === editingEvent.id
            ? {
              ...event,
              name: eventForm.name.trim(),
              date,
              month: month.toUpperCase(),
              time: eventForm.time.trim(),
              venue: eventForm.venue.trim(),
            }
            : event
        )
      );

      showMessage("Event updated successfully!");
    } else {
      const newEvent = {
        id: Date.now(),
        date,
        month: month.toUpperCase(),
        name: eventForm.name.trim(),
        time: eventForm.time.trim(),
        venue: eventForm.venue.trim(),
        status: "Upcoming",
      };

      setEvents((previous) => [newEvent, ...previous]);

      showMessage("Event created successfully!");
    }

    closeModal();
  };

  const deleteEvent = (id) => {
    const event = events.find((item) => item.id === id);

    if (!event) return;

    const confirmed = window.confirm(`Delete ${event.name}?`);

    if (!confirmed) return;

    setEvents((previous) =>
      previous.filter((item) => item.id !== id)
    );

    showMessage("Event deleted");
  };

  /* =========================
     PARTICIPANTS
  ========================= */

  const openParticipantModal = () => {
    setParticipantForm({
      name: "",
      email: "",
      event: events[0]?.name || "",
      status: "Confirmed",
    });

    setModalType("participant");
  };

  const saveParticipant = () => {
    if (
      !participantForm.name.trim() ||
      !participantForm.email.trim() ||
      !participantForm.event
    ) {
      showMessage("Please fill all participant fields");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(participantForm.email)) {
      showMessage("Enter a valid email address");
      return;
    }

    const duplicate = participants.some(
      (participant) =>
        participant.email.toLowerCase() ===
        participantForm.email.toLowerCase()
    );

    if (duplicate) {
      showMessage("A participant with this email already exists");
      return;
    }

    const newParticipant = {
      id: Date.now(),
      name: participantForm.name.trim(),
      email: participantForm.email.trim(),
      event: participantForm.event,
      status: participantForm.status,
    };

    setParticipants((previous) => [
      newParticipant,
      ...previous,
    ]);

    closeModal();

    showMessage(
      `${participantForm.name} registered successfully!`
    );
  };

  const deleteParticipant = (id) => {
    const participant = participants.find(
      (item) => item.id === id
    );

    if (!participant) return;

    const confirmed = window.confirm(
      `Remove ${participant.name} from participants?`
    );

    if (!confirmed) return;

    setParticipants((previous) =>
      previous.filter((item) => item.id !== id)
    );

    showMessage("Participant removed");
  };

  const toggleParticipantStatus = (id) => {
    setParticipants((previous) =>
      previous.map((participant) =>
        participant.id === id
          ? {
            ...participant,
            status:
              participant.status === "Confirmed"
                ? "Pending"
                : "Confirmed",
          }
          : participant
      )
    );

    showMessage("Registration status updated");
  };

  /* =========================
     VOLUNTEERS
  ========================= */

  const openVolunteerModal = () => {
    setVolunteerForm({
      name: "",
      role: "Registration",
      event: events[0]?.name || "",
      status: "Active",
    });

    setModalType("volunteer");
  };

  const saveVolunteer = () => {
    if (
      !volunteerForm.name.trim() ||
      !volunteerForm.role ||
      !volunteerForm.event
    ) {
      showMessage("Please fill all volunteer fields");
      return;
    }

    const newVolunteer = {
      id: Date.now(),
      name: volunteerForm.name.trim(),
      role: volunteerForm.role,
      event: volunteerForm.event,
      status: volunteerForm.status,
    };

    setVolunteers((previous) => [
      newVolunteer,
      ...previous,
    ]);

    closeModal();

    showMessage(
      `${volunteerForm.name} added as a volunteer!`
    );
  };

  const deleteVolunteer = (id) => {
    const volunteer = volunteers.find(
      (item) => item.id === id
    );

    if (!volunteer) return;

    const confirmed = window.confirm(
      `Remove ${volunteer.name} from volunteers?`
    );

    if (!confirmed) return;

    setVolunteers((previous) =>
      previous.filter((item) => item.id !== id)
    );

    showMessage("Volunteer removed");
  };

  const toggleVolunteerStatus = (id) => {
    setVolunteers((previous) =>
      previous.map((volunteer) =>
        volunteer.id === id
          ? {
            ...volunteer,
            status:
              volunteer.status === "Active"
                ? "Available"
                : "Active",
          }
          : volunteer
      )
    );

    showMessage("Volunteer status updated");
  };

  /* =========================
     TASKS
  ========================= */

  const openTaskModal = () => {
    setTaskForm({
      title: "",
      assignedTo: "Admin",
      priority: "Medium",
      status: "Pending",
      event: events[0]?.name || "",
      due: "Today",
    });

    setModalType("task");
  };

  const saveTask = () => {
    if (
      !taskForm.title.trim() ||
      !taskForm.event
    ) {
      showMessage("Please fill all task fields");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: taskForm.title.trim(),
      assignedTo: taskForm.assignedTo,
      priority: taskForm.priority,
      status: taskForm.status,
      event: taskForm.event,
      due: taskForm.due,
    };

    setTasks((previous) => [
      newTask,
      ...previous,
    ]);

    closeModal();

    showMessage("Task added successfully!");
  };

  const deleteTask = (id) => {
    const task = tasks.find(
      (item) => item.id === id
    );

    if (!task) return;

    const confirmed = window.confirm(
      `Delete task "${task.title}"?`
    );

    if (!confirmed) return;

    setTasks((previous) =>
      previous.filter((item) => item.id !== id)
    );

    showMessage("Task deleted");
  };

  const cycleTaskStatus = (id) => {
    setTasks((previous) =>
      previous.map((task) => {
        if (task.id !== id) return task;

        let nextStatus = "Pending";

        if (task.status === "Pending") {
          nextStatus = "In Progress";
        } else if (task.status === "In Progress") {
          nextStatus = "Completed";
        }

        return {
          ...task,
          status: nextStatus,
        };
      })
    );

    showMessage("Task status updated");
  };
  /* =========================
       SCHEDULE
    ========================= */

  const openScheduleModal = () => {
    setEditingSchedule(null);

    setScheduleForm({
      time: "",
      title: "",
      venue: "",
      event: events[0]?.name || "",
      status: "Upcoming",
      type: "Activity",
    });

    setModalType("schedule");
  };

  const openEditSchedule = (item) => {
    setEditingSchedule(item);

    setScheduleForm({
      time: item.time,
      title: item.title,
      venue: item.venue,
      event: item.event,
      status: item.status,
      type: item.type,
    });

    setModalType("schedule");
  };

  const saveSchedule = () => {
    if (
      !scheduleForm.time.trim() ||
      !scheduleForm.title.trim() ||
      !scheduleForm.venue.trim() ||
      !scheduleForm.event
    ) {
      showMessage("Please fill all schedule fields");
      return;
    }

    if (editingSchedule) {
      setSchedule((previous) =>
        previous.map((item) =>
          item.id === editingSchedule.id
            ? {
              ...item,
              time: scheduleForm.time.trim(),
              title: scheduleForm.title.trim(),
              venue: scheduleForm.venue.trim(),
              event: scheduleForm.event,
              status: scheduleForm.status,
              type: scheduleForm.type,
            }
            : item
        )
      );

      showMessage("Schedule updated successfully!");
    } else {
      const newSchedule = {
        id: Date.now(),
        time: scheduleForm.time.trim(),
        title: scheduleForm.title.trim(),
        venue: scheduleForm.venue.trim(),
        event: scheduleForm.event,
        status: scheduleForm.status,
        type: scheduleForm.type,
      };

      setSchedule((previous) => [
        ...previous,
        newSchedule,
      ]);

      showMessage("Schedule item added successfully!");
    }

    closeModal();
  };

  const deleteSchedule = (id) => {
    const item = schedule.find(
      (entry) => entry.id === id
    );

    if (!item) return;

    const confirmed = window.confirm(
      `Delete "${item.title}" from the schedule?`
    );

    if (!confirmed) return;

    setSchedule((previous) =>
      previous.filter(
        (entry) => entry.id !== id
      )
    );

    showMessage("Schedule item deleted");
  };

  /* =========================
     ANNOUNCEMENTS
  ========================= */

  const openAnnouncementModal = () => {
    setEditingAnnouncement(null);

    setAnnouncementForm({
      title: "",
      text: "",
      audience: "Everyone",
      priority: "Normal",
    });

    setModalType("announcement");
  };

  const openEditAnnouncement = (announcement) => {
    setEditingAnnouncement(announcement);

    setAnnouncementForm({
      title: announcement.title,
      text: announcement.text,
      audience: announcement.audience,
      priority: announcement.priority,
    });

    setModalType("announcement");
  };

  const saveAnnouncement = () => {
    if (
      !announcementForm.title.trim() ||
      !announcementForm.text.trim()
    ) {
      showMessage("Please fill all announcement fields");
      return;
    }

    if (editingAnnouncement) {
      setAnnouncements((previous) =>
        previous.map((announcement) =>
          announcement.id === editingAnnouncement.id
            ? {
              ...announcement,
              title:
                announcementForm.title.trim(),
              text:
                announcementForm.text.trim(),
              audience:
                announcementForm.audience,
              priority:
                announcementForm.priority,
              time: "Just now",
            }
            : announcement
        )
      );

      showMessage("Announcement updated successfully!");
    } else {
      const newAnnouncement = {
        id: Date.now(),
        title: announcementForm.title.trim(),
        text: announcementForm.text.trim(),
        time: "Just now",
        author: "Admin",
        audience: announcementForm.audience,
        priority: announcementForm.priority,
      };

      setAnnouncements((previous) => [
        newAnnouncement,
        ...previous,
      ]);

      showMessage("Announcement published successfully!");
    }

    closeModal();
  };

  const deleteAnnouncement = (id) => {
    const announcement = announcements.find(
      (item) => item.id === id
    );

    if (!announcement) return;

    const confirmed = window.confirm(
      `Delete "${announcement.title}"?`
    );

    if (!confirmed) return;

    setAnnouncements((previous) =>
      previous.filter(
        (item) => item.id !== id
      )
    );

    showMessage("Announcement deleted");
  };

  /* =========================
     PAGE HEADER
  ========================= */

  const PageHeader = ({
    title,
    text,
    button,
    action,
  }) => (
    <header className="topbar">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      {button && (
        <button
          className="primary-btn"
          onClick={action}
        >
          {button}
        </button>
      )}
    </header>
  );

  /* =========================
     DASHBOARD
  ========================= */

  const Dashboard = () => {
    const pendingTasks = tasks.filter(
      (task) => task.status !== "Completed"
    ).length;

    const completedTasks = tasks.filter(
      (task) => task.status === "Completed"
    ).length;

    const healthTotal =
      participants.length +
      volunteers.length +
      completedTasks;

    const healthPercent =
      healthTotal > 0
        ? Math.min(
          100,
          Math.round(
            (participants.length +
              volunteers.length +
              completedTasks) /
            (participants.length +
              volunteers.length +
              tasks.length) *
            100
          )
        )
        : 0;

    return (
      <>
        <header className="topbar">
          <div>
            <h2>
              Good morning, Admin 👋
            </h2>

            <p>
              Here's what's happening with
              your events today.
            </p>
          </div>

          <button
            className="notification"
            onClick={() =>
              showMessage(
                "You have 3 new notifications"
              )
            }
          >
            🔔
            <span className="notification-dot"></span>
          </button>
        </header>

        <section className="stats">
          <div className="stat-card">
            <span>👥 Participants</span>
            <strong>
              {participants.length}
            </strong>
            <small>
              Live registrations
            </small>
          </div>

          <div className="stat-card">
            <span>🙋 Volunteers</span>
            <strong>
              {volunteers.length}
            </strong>
            <small>
              Team members
            </small>
          </div>

          <div className="stat-card">
            <span>✓ Pending Tasks</span>
            <strong>
              {pendingTasks}
            </strong>
            <small>
              Needs attention
            </small>
          </div>

          <div className="stat-card">
            <span>📅 Events</span>
            <strong>
              {events.length}
            </strong>
            <small>
              Managed events
            </small>
          </div>
        </section>

        <section className="content-grid">
          <div className="card">
            <div className="card-header">
              <div>
                <h3>Event Health</h3>
                <p>
                  Overall event readiness
                </p>
              </div>

              <strong>
                {healthPercent}%
              </strong>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                style={{
                  width: `${healthPercent}%`,
                }}
              ></div>
            </div>

            <div className="health-items">
              <div>
                <span>Participants</span>
                <b>
                  {participants.length}
                </b>
              </div>

              <div>
                <span>Volunteers</span>
                <b>
                  {volunteers.length}
                </b>
              </div>

              <div>
                <span>Tasks Done</span>
                <b>
                  {completedTasks}
                </b>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <div>
                <h3>Upcoming Events</h3>
                <p>
                  Events currently in the system
                </p>
              </div>

              <button
                className="secondary-btn"
                onClick={() =>
                  setActiveTab("Events")
                }
              >
                View all
              </button>
            </div>

            {events.slice(0, 3).map((event) => (
              <div
                className="event"
                key={event.id}
              >
                <div className="date-box">
                  <strong>
                    {event.date}
                  </strong>

                  <small>
                    {event.month}
                  </small>
                </div>

                <div className="event-info">
                  <h4>{event.name}</h4>
                  <p>
                    {event.time} •{" "}
                    {event.venue}
                  </p>
                </div>

                <span
                  className={
                    event.status === "Active"
                      ? "status"
                      : "status upcoming"
                  }
                >
                  {event.status}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <div>
              <h3>Recent Announcements</h3>
              <p>
                Latest communication
              </p>
            </div>

            <button
              className="secondary-btn"
              onClick={() =>
                setActiveTab("Announcements")
              }
            >
              View all
            </button>
          </div>

          {announcements
            .slice(0, 3)
            .map((announcement) => (
              <div
                className="announcement"
                key={announcement.id}
              >
                <b>
                  📢 {announcement.title}
                </b>

                <p>
                  {announcement.text}
                </p>

                <small>
                  {announcement.time} •{" "}
                  {announcement.author}
                </small>
              </div>
            ))}
        </section>
      </>
    );
  };

  /* =========================
     EVENTS
  ========================= */

  const Events = () => (
    <>
      <PageHeader
        title="📅 Events"
        text="Create and manage all college events."
        button="+ Create Event"
        action={openCreateEvent}
      />

      <section className="stats">
        <div className="stat-card">
          <span>Total Events</span>
          <strong>{events.length}</strong>
          <small>
            Events in system
          </small>
        </div>

        <div className="stat-card">
          <span>Active</span>
          <strong>
            {
              events.filter(
                (event) =>
                  event.status === "Active"
              ).length
            }
          </strong>
          <small>
            Currently running
          </small>
        </div>

        <div className="stat-card">
          <span>Upcoming</span>
          <strong>
            {
              events.filter(
                (event) =>
                  event.status === "Upcoming"
              ).length
            }
          </strong>
          <small>
            Coming soon
          </small>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <div>
            <h3>All Events</h3>
            <p>
              {events.length} events currently
              in the system
            </p>
          </div>
        </div>

        {events.length === 0 ? (
          <div className="empty-state">
            <h3>No events yet</h3>

            <p>
              Create your first event
              to get started.
            </p>

            <button
              className="primary-btn"
              onClick={openCreateEvent}
            >
              + Create Event
            </button>
          </div>
        ) : (
          events.map((event) => (
            <div
              className="event"
              key={event.id}
            >
              <div className="date-box">
                <strong>
                  {event.date}
                </strong>

                <small>
                  {event.month}
                </small>
              </div>

              <div className="event-info">
                <h4>{event.name}</h4>

                <p>
                  {event.time} •{" "}
                  {event.venue}
                </p>
              </div>

              <span
                className={
                  event.status === "Active"
                    ? "status"
                    : "status upcoming"
                }
              >
                {event.status}
              </span>

              <button
                className="secondary-btn"
                onClick={() =>
                  openEditEvent(event)
                }
              >
                Edit
              </button>

              <button
                className="danger-btn"
                onClick={() =>
                  deleteEvent(event.id)
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </section>
    </>
  );

  /* =========================
     PARTICIPANTS
  ========================= */

  const Participants = () => (
    <>
      <PageHeader
        title="👥 Participants"
        text="Manage student registrations."
        button="+ Register Participant"
        action={openParticipantModal}
      />

      <section className="stats">
        <div className="stat-card">
          <span>Total</span>
          <strong>
            {participants.length}
          </strong>
          <small>
            Registered students
          </small>
        </div>

        <div className="stat-card">
          <span>Confirmed</span>
          <strong>
            {
              participants.filter(
                (item) =>
                  item.status === "Confirmed"
              ).length
            }
          </strong>
          <small>
            Confirmed registrations
          </small>
        </div>

        <div className="stat-card">
          <span>Pending</span>
          <strong>
            {
              participants.filter(
                (item) =>
                  item.status === "Pending"
              ).length
            }
          </strong>
          <small>
            Need confirmation
          </small>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <div>
            <h3>Registered Participants</h3>
            <p>
              Manage event registrations
            </p>
          </div>
        </div>

        {participants.length === 0 ? (
          <div className="empty-state">
            <h3>No participants</h3>
            <p>
              No students have registered yet.
            </p>
          </div>
        ) : (
          participants.map((participant) => (
            <div
              className="task-row"
              key={participant.id}
            >
              <div>
                <strong>
                  {participant.name}
                </strong>

                <small>
                  {participant.email}
                </small>
              </div>

              <div>
                <small>
                  {participant.event}
                </small>
              </div>

              <span
                className={
                  participant.status ===
                    "Confirmed"
                    ? "status"
                    : "status upcoming"
                }
              >
                {participant.status}
              </span>

              <button
                className="secondary-btn"
                onClick={() =>
                  toggleParticipantStatus(
                    participant.id
                  )
                }
              >
                Toggle
              </button>

              <button
                className="danger-btn"
                onClick={() =>
                  deleteParticipant(
                    participant.id
                  )
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </section>
    </>
  );

  /* =========================
     VOLUNTEERS
  ========================= */

  const Volunteers = () => (
    <>
      <PageHeader
        title="🙋 Volunteers"
        text="Coordinate your event volunteer team."
        button="+ Add Volunteer"
        action={openVolunteerModal}
      />

      <section className="stats">
        <div className="stat-card">
          <span>Total Volunteers</span>
          <strong>
            {volunteers.length}
          </strong>
          <small>
            Team members
          </small>
        </div>

        <div className="stat-card">
          <span>Active</span>
          <strong>
            {
              volunteers.filter(
                (item) =>
                  item.status === "Active"
              ).length
            }
          </strong>
          <small>
            Currently assigned
          </small>
        </div>

        <div className="stat-card">
          <span>Available</span>
          <strong>
            {
              volunteers.filter(
                (item) =>
                  item.status === "Available"
              ).length
            }
          </strong>
          <small>
            Ready for assignment
          </small>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <div>
            <h3>Volunteer Team</h3>
            <p>
              Manage roles and assignments
            </p>
          </div>
        </div>

        {volunteers.map((volunteer) => (
          <div
            className="task-row"
            key={volunteer.id}
          >
            <div>
              <strong>
                {volunteer.name}
              </strong>

              <small>
                {volunteer.role}
              </small>
            </div>

            <div>
              <small>
                {volunteer.event}
              </small>
            </div>

            <span
              className={
                volunteer.status === "Active"
                  ? "status"
                  : "status upcoming"
              }
            >
              {volunteer.status}
            </span>

            <button
              className="secondary-btn"
              onClick={() =>
                toggleVolunteerStatus(
                  volunteer.id
                )
              }
            >
              Toggle
            </button>

            <button
              className="danger-btn"
              onClick={() =>
                deleteVolunteer(
                  volunteer.id
                )
              }
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </>
  );

  /* =========================
     TASKS
  ========================= */

  const Tasks = () => (
    <>
      <PageHeader
        title="✓ Tasks"
        text="Track work and responsibilities."
        button="+ Add Task"
        action={openTaskModal}
      />

      <section className="stats">
        <div className="stat-card">
          <span>Total Tasks</span>
          <strong>{tasks.length}</strong>
          <small>
            All event tasks
          </small>
        </div>

        <div className="stat-card">
          <span>Pending</span>
          <strong>
            {
              tasks.filter(
                (task) =>
                  task.status === "Pending"
              ).length
            }
          </strong>
          <small>
            Waiting to start
          </small>
        </div>

        <div className="stat-card">
          <span>In Progress</span>
          <strong>
            {
              tasks.filter(
                (task) =>
                  task.status === "In Progress"
              ).length
            }
          </strong>
          <small>
            Currently working
          </small>
        </div>

        <div className="stat-card">
          <span>Completed</span>
          <strong>
            {
              tasks.filter(
                (task) =>
                  task.status === "Completed"
              ).length
            }
          </strong>
          <small>
            Finished tasks
          </small>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <div>
            <h3>Task Board</h3>
            <p>
              Click status to move a task forward.
            </p>
          </div>
        </div>

        {tasks.length === 0 ? (
          <div className="empty-state">
            <h3>No tasks yet</h3>
            <p>
              Add a task to start managing work.
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              className="task-row"
              key={task.id}
            >
              <div>
                <strong>
                  {task.title}
                </strong>

                <small>
                  {task.event} • Due{" "}
                  {task.due}
                </small>
              </div>

              <div>
                <small>
                  Assigned to:{" "}
                  {task.assignedTo}
                </small>

                <small>
                  Priority:{" "}
                  {task.priority}
                </small>
              </div>

              <button
                className="secondary-btn"
                onClick={() =>
                  cycleTaskStatus(task.id)
                }
              >
                {task.status}
              </button>

              <button
                className="danger-btn"
                onClick={() =>
                  deleteTask(task.id)
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </section>
    </>
  );

  /* =========================
     SCHEDULE PAGE
  ========================= */

  const Schedule = () => (
    <>
      <PageHeader
        title="🗓️ Schedule"
        text="Plan the timeline for your events."
        button="+ Add Schedule Item"
        action={openScheduleModal}
      />

      <section className="card">
        <div className="card-header">
          <div>
            <h3>Event Timeline</h3>
            <p>
              Manage activities and timings.
            </p>
          </div>
        </div>

        {schedule.length === 0 ? (
          <div className="empty-state">
            <h3>No schedule items</h3>
            <p>
              Add the first activity to your
              event timeline.
            </p>
          </div>
        ) : (
          schedule.map((item) => (
            <div
              className="schedule-item"
              key={item.id}
            >
              <div className="schedule-time">
                <strong>
                  {item.time}
                </strong>
              </div>

              <div className="schedule-info">
                <h4>
                  {item.title}
                </h4>

                <p>
                  📍 {item.venue} •{" "}
                  {item.event}
                </p>

                <small>
                  {item.type}
                </small>
              </div>

              <span
                className={
                  item.status === "Ready"
                    ? "status"
                    : "status upcoming"
                }
              >
                {item.status}
              </span>

              <button
                className="secondary-btn"
                onClick={() =>
                  openEditSchedule(item)
                }
              >
                Edit
              </button>

              <button
                className="danger-btn"
                onClick={() =>
                  deleteSchedule(item.id)
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </section>
    </>
  );

  /* =========================
     ANNOUNCEMENTS PAGE
  ========================= */

  const Announcements = () => (
    <>
      <PageHeader
        title="📢 Announcements"
        text="Keep participants and volunteers informed."
        button="+ New Announcement"
        action={openAnnouncementModal}
      />

      <section className="card">
        <div className="card-header">
          <div>
            <h3>Recent Announcements</h3>
            <p>
              Latest event communication
            </p>
          </div>
        </div>

        {announcements.length === 0 ? (
          <div className="empty-state">
            <h3>No announcements</h3>
            <p>
              Publish an announcement to keep
              everyone informed.
            </p>
          </div>
        ) : (
          announcements.map((announcement) => (
            <div
              className="announcement large"
              key={announcement.id}
            >
              <div className="announcement-top">
                <div>
                  <b>
                    📢{" "}
                    {announcement.title}
                  </b>

                  <small>
                    {announcement.time} •{" "}
                    {announcement.author}
                  </small>
                </div>

                <span
                  className={
                    announcement.priority ===
                      "Important"
                      ? "status"
                      : "status upcoming"
                  }
                >
                  {announcement.priority}
                </span>
              </div>

              <p>
                {announcement.text}
              </p>

              <small>
                Audience:{" "}
                {announcement.audience}
              </small>

              <div className="announcement-actions">
                <button
                  className="secondary-btn"
                  onClick={() =>
                    openEditAnnouncement(
                      announcement
                    )
                  }
                >
                  Edit
                </button>

                <button
                  className="danger-btn"
                  onClick={() =>
                    deleteAnnouncement(
                      announcement.id
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );

  /* =========================
     ROUTING
  ========================= */

  const pages = {
    Dashboard,
    Events,
    Participants,
    Volunteers,
    Tasks,
    Schedule,
    Announcements,
  };

  /* =========================
     MAIN APP UI
  ========================= */

  return (
    <div className="app">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="brand">
          <div className="logo">
            E
          </div>

          <div>
            <h1>EventSync</h1>

            <span>
              College Event Hub
            </span>
          </div>
        </div>

        <nav>

          <p className="nav-label">
            MAIN MENU
          </p>

          {[
            ["📊", "Dashboard"],
            ["📅", "Events"],
            ["👥", "Participants"],
            ["🙋", "Volunteers"],
            ["✓", "Tasks"],
            ["🗓️", "Schedule"],
            ["📢", "Announcements"],
          ].map(([icon, name]) => (
            <button
              key={name}
              className={
                activeTab === name
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab(name)
              }
            >
              <span>{icon}</span>
              {name}
            </button>
          ))}

        </nav>

        <div className="sidebar-bottom">

          <div className="admin">

            <div className="avatar">
              A
            </div>

            <div>
              <b>Admin</b>

              <small>
                Event Organizer
              </small>
            </div>

          </div>

        </div>

      </aside>

      {/* MAIN CONTENT */}

      <main className="main">
        {pages[activeTab]()}
      </main>

      {/* =========================
         EVENT MODAL
      ========================= */}

      {modalType === "event" && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="modal-icon">
              📅
            </div>

            <h2>
              {editingEvent
                ? "Edit Event"
                : "Create New Event"}
            </h2>

            <p>
              Enter the event details below.
            </p>

            <input
              value={eventForm.name}
              onChange={(event) =>
                setEventForm({
                  ...eventForm,
                  name: event.target.value,
                })
              }
              placeholder="Event name"
            />

            <input
              value={eventForm.date}
              onChange={(event) =>
                setEventForm({
                  ...eventForm,
                  date: event.target.value,
                })
              }
              placeholder="Date e.g. 18 OCT"
            />

            <input
              value={eventForm.time}
              onChange={(event) =>
                setEventForm({
                  ...eventForm,
                  time: event.target.value,
                })
              }
              placeholder="Time e.g. 10:00 AM"
            />

            <input
              value={eventForm.venue}
              onChange={(event) =>
                setEventForm({
                  ...eventForm,
                  venue: event.target.value,
                })
              }
              placeholder="Venue"
            />

            <div className="modal-actions">

              <button
                className="secondary-btn"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button
                className="primary-btn"
                onClick={saveEvent}
              >
                {editingEvent
                  ? "Save Changes"
                  : "Create Event"}
              </button>

            </div>

          </div>
        </div>
      )}

      {/* =========================
         PARTICIPANT MODAL
      ========================= */}

      {modalType === "participant" && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="modal-icon">
              👥
            </div>

            <h2>
              Register Participant
            </h2>

            <p>
              Add a student to an event.
            </p>

            <input
              value={participantForm.name}
              onChange={(event) =>
                setParticipantForm({
                  ...participantForm,
                  name: event.target.value,
                })
              }
              placeholder="Student name"
            />

            <input
              type="email"
              value={participantForm.email}
              onChange={(event) =>
                setParticipantForm({
                  ...participantForm,
                  email: event.target.value,
                })
              }
              placeholder="Email address"
            />

            <select
              value={participantForm.event}
              onChange={(event) =>
                setParticipantForm({
                  ...participantForm,
                  event: event.target.value,
                })
              }
            >
              {events.map((event) => (
                <option
                  key={event.id}
                  value={event.name}
                >
                  {event.name}
                </option>
              ))}
            </select>

            <select
              value={participantForm.status}
              onChange={(event) =>
                setParticipantForm({
                  ...participantForm,
                  status: event.target.value,
                })
              }
            >
              <option value="Confirmed">
                Confirmed
              </option>

              <option value="Pending">
                Pending
              </option>
            </select>

            <div className="modal-actions">

              <button
                className="secondary-btn"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button
                className="primary-btn"
                onClick={saveParticipant}
              >
                Register
              </button>

            </div>

          </div>
        </div>
      )}

      {/* =========================
         VOLUNTEER MODAL
      ========================= */}

      {modalType === "volunteer" && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="modal-icon">
              🙋
            </div>

            <h2>
              Add Volunteer
            </h2>

            <p>
              Assign a volunteer to an event.
            </p>

            <input
              value={volunteerForm.name}
              onChange={(event) =>
                setVolunteerForm({
                  ...volunteerForm,
                  name: event.target.value,
                })
              }
              placeholder="Volunteer name"
            />

            <select
              value={volunteerForm.role}
              onChange={(event) =>
                setVolunteerForm({
                  ...volunteerForm,
                  role: event.target.value,
                })
              }
            >
              <option value="Registration">
                Registration
              </option>

              <option value="Stage Management">
                Stage Management
              </option>

              <option value="Hospitality">
                Hospitality
              </option>

              <option value="Technical Support">
                Technical Support
              </option>

              <option value="General Support">
                General Support
              </option>
            </select>

            <select
              value={volunteerForm.event}
              onChange={(event) =>
                setVolunteerForm({
                  ...volunteerForm,
                  event: event.target.value,
                })
              }
            >
              {events.map((event) => (
                <option
                  key={event.id}
                  value={event.name}
                >
                  {event.name}
                </option>
              ))}
            </select>

            <select
              value={volunteerForm.status}
              onChange={(event) =>
                setVolunteerForm({
                  ...volunteerForm,
                  status: event.target.value,
                })
              }
            >
              <option value="Active">
                Active
              </option>

              <option value="Available">
                Available
              </option>
            </select>

            <div className="modal-actions">

              <button
                className="secondary-btn"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button
                className="primary-btn"
                onClick={saveVolunteer}
              >
                Add Volunteer
              </button>

            </div>

          </div>
        </div>
      )}

      {/* =========================
         TASK MODAL
      ========================= */}

      {modalType === "task" && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="modal-icon">
              ✓
            </div>

            <h2>
              Add Task
            </h2>

            <p>
              Create a task for your event team.
            </p>

            <input
              value={taskForm.title}
              onChange={(event) =>
                setTaskForm({
                  ...taskForm,
                  title: event.target.value,
                })
              }
              placeholder="Task title"
            />

            <input
              value={taskForm.assignedTo}
              onChange={(event) =>
                setTaskForm({
                  ...taskForm,
                  assignedTo:
                    event.target.value,
                })
              }
              placeholder="Assigned to"
            />

            <select
              value={taskForm.priority}
              onChange={(event) =>
                setTaskForm({
                  ...taskForm,
                  priority:
                    event.target.value,
                })
              }
            >
              <option value="High">
                High Priority
              </option>

              <option value="Medium">
                Medium Priority
              </option>

              <option value="Low">
                Low Priority
              </option>
            </select>

            <select
              value={taskForm.status}
              onChange={(event) =>
                setTaskForm({
                  ...taskForm,
                  status: event.target.value,
                })
              }
            >
              <option value="Pending">
                Pending
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Completed">
                Completed
              </option>
            </select>

            <select
              value={taskForm.event}
              onChange={(event) =>
                setTaskForm({
                  ...taskForm,
                  event: event.target.value,
                })
              }
            >
              {events.map((event) => (
                <option
                  key={event.id}
                  value={event.name}
                >
                  {event.name}
                </option>
              ))}
            </select>

            <input
              value={taskForm.due}
              onChange={(event) =>
                setTaskForm({
                  ...taskForm,
                  due: event.target.value,
                })
              }
              placeholder="Due date e.g. Today"
            />

            <div className="modal-actions">

              <button
                className="secondary-btn"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button
                className="primary-btn"
                onClick={saveTask}
              >
                Add Task
              </button>

            </div>

          </div>
        </div>
      )}

      {/* =========================
         SCHEDULE MODAL
      ========================= */}

      {modalType === "schedule" && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="modal-icon">
              🗓️
            </div>

            <h2>
              {editingSchedule
                ? "Edit Schedule Item"
                : "Add Schedule Item"}
            </h2>

            <p>
              Add an activity to the event timeline.
            </p>

            <input
              value={scheduleForm.time}
              onChange={(event) =>
                setScheduleForm({
                  ...scheduleForm,
                  time: event.target.value,
                })
              }
              placeholder="Time e.g. 10:00 AM"
            />

            <input
              value={scheduleForm.title}
              onChange={(event) =>
                setScheduleForm({
                  ...scheduleForm,
                  title: event.target.value,
                })
              }
              placeholder="Activity title"
            />

            <input
              value={scheduleForm.venue}
              onChange={(event) =>
                setScheduleForm({
                  ...scheduleForm,
                  venue: event.target.value,
                })
              }
              placeholder="Venue"
            />

            <select
              value={scheduleForm.event}
              onChange={(event) =>
                setScheduleForm({
                  ...scheduleForm,
                  event: event.target.value,
                })
              }
            >
              {events.map((event) => (
                <option
                  key={event.id}
                  value={event.name}
                >
                  {event.name}
                </option>
              ))}
            </select>

            <select
              value={scheduleForm.type}
              onChange={(event) =>
                setScheduleForm({
                  ...scheduleForm,
                  type: event.target.value,
                })
              }
            >
              <option value="Activity">
                Activity
              </option>

              <option value="Registration">
                Registration
              </option>

              <option value="Ceremony">
                Ceremony
              </option>

              <option value="Workshop">
                Workshop
              </option>

              <option value="Break">
                Break
              </option>
            </select>

            <select
              value={scheduleForm.status}
              onChange={(event) =>
                setScheduleForm({
                  ...scheduleForm,
                  status: event.target.value,
                })
              }
            >
              <option value="Upcoming">
                Upcoming
              </option>

              <option value="Ready">
                Ready
              </option>
            </select>

            <div className="modal-actions">

              <button
                className="secondary-btn"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button
                className="primary-btn"
                onClick={saveSchedule}
              >
                {editingSchedule
                  ? "Save Changes"
                  : "Add Schedule"}
              </button>

            </div>

          </div>
        </div>
      )}

      {/* =========================
         ANNOUNCEMENT MODAL
      ========================= */}

      {modalType === "announcement" && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="modal-icon">
              📢
            </div>

            <h2>
              {editingAnnouncement
                ? "Edit Announcement"
                : "New Announcement"}
            </h2>

            <p>
              Send an update to your event community.
            </p>

            <input
              value={announcementForm.title}
              onChange={(event) =>
                setAnnouncementForm({
                  ...announcementForm,
                  title: event.target.value,
                })
              }
              placeholder="Announcement title"
            />

            <textarea
              value={announcementForm.text}
              onChange={(event) =>
                setAnnouncementForm({
                  ...announcementForm,
                  text: event.target.value,
                })
              }
              placeholder="Write your announcement..."
              rows="5"
            />

            <select
              value={announcementForm.audience}
              onChange={(event) =>
                setAnnouncementForm({
                  ...announcementForm,
                  audience:
                    event.target.value,
                })
              }
            >
              <option value="Everyone">
                Everyone
              </option>

              <option value="Participants">
                Participants
              </option>

              <option value="Volunteers">
                Volunteers
              </option>
            </select>

            <select
              value={announcementForm.priority}
              onChange={(event) =>
                setAnnouncementForm({
                  ...announcementForm,
                  priority:
                    event.target.value,
                })
              }
            >
              <option value="Normal">
                Normal
              </option>

              <option value="Important">
                Important
              </option>
            </select>

            <div className="modal-actions">

              <button
                className="secondary-btn"
                onClick={closeModal}
              >
                Cancel
              </button>

              <button
                className="primary-btn"
                onClick={saveAnnouncement}
              >
                {editingAnnouncement
                  ? "Save Changes"
                  : "Publish"}
              </button>

            </div>

          </div>
        </div>
      )}

      {/* =========================
         TOAST
      ========================= */}

      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}

    </div>
  );
}

export default App;
