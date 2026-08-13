import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Feedback from "./Feedback";
import AdminDashboard from "./AdminDashboard";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");

  if (page === "login") {
    return (
      <Login
        onLogin={() => setPage("dashboard")}
      />
    );
  }

  if (page === "dashboard") {
    return (
      <Dashboard
        onFeedback={() => setPage("feedback")}
        onAdmin={() => setPage("admin")}
      />
    );
  }

  if (page === "feedback") {
    return (
      <Feedback
        onBack={() => setPage("dashboard")}
      />
    );
  }

  if (page === "admin") {
    return <AdminDashboard />;
  }

  return null;
}

export default App;