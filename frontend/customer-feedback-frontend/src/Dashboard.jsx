function Dashboard({ onFeedback, onAdmin }) {
  return (
    <div className="dashboard">
      <h1>Customer Feedback Management System</h1>

      <h2>Dashboard</h2>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Feedback</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Pending Feedback</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Resolved Feedback</h3>
          <p>0</p>
        </div>
      </div>

      <button onClick={onFeedback}>
        Give Feedback
      </button>

      <button
        onClick={onAdmin}
        style={{ marginLeft: "10px" }}
      >
        Admin Dashboard
      </button>
    </div>
  );
}

export default Dashboard;