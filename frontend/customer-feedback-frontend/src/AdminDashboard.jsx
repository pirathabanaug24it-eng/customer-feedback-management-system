import { useEffect, useState } from "react";

function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  const loadFeedback = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/feedback/all"
      );

      const data = await response.json();
      setFeedbacks(data);
    } catch (error) {
      console.error(error);
      alert("Unable to load feedback");
    }
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/feedback/status/${id}?status=${status}`,
        {
          method: "PUT"
        }
      );

      if (response.ok) {
        alert("Status updated!");
        loadFeedback();
      } else {
        alert("Failed to update status");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const adminReply = async (id) => {
    const reply = prompt("Enter admin reply:");

    if (!reply) return;

    try {
      const response = await fetch(
        `http://localhost:8080/api/feedback/reply/${id}?reply=${encodeURIComponent(reply)}`,
        {
          method: "PUT"
        }
      );

      if (response.ok) {
        alert("Reply added!");
        loadFeedback();
      } else {
        alert("Failed to add reply");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-container">

      <h1>Admin Dashboard</h1>

      <h2>Customer Feedback</h2>

      {feedbacks.length === 0 ? (
        <p>No feedback available</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback.id}>

                <td>{feedback.id}</td>

                <td>{feedback.subject}</td>

                <td>{feedback.message}</td>

                <td>{feedback.rating} ⭐</td>

                <td>{feedback.status}</td>

                <td>
                  <button
                    onClick={() =>
                      updateStatus(feedback.id, "RESOLVED")
                    }
                  >
                    Mark Resolved
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(feedback.id, "PENDING")
                    }
                  >
                    Pending
                  </button>

                  <button
                    onClick={() =>
                      adminReply(feedback.id)
                    }
                  >
                    Reply
                  </button>

                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminDashboard;