import { useState } from "react";

function Feedback({ onBack }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Temporary user ID
    const userId = 1;

    const feedbackData = {
      subject: subject,
      message: message,
      rating: Number(rating)
    };

    try {
      const response = await fetch(
        `http://localhost:8080/api/feedback/create/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(feedbackData)
        }
      );

      if (response.ok) {
        alert("Feedback submitted successfully!");

        setSubject("");
        setMessage("");
        setRating("");
      } else {
        const error = await response.text();
        alert("Failed: " + error);
      }
    } catch (error) {
      alert("Backend server is not running!");
      console.error(error);
    }
  };

  return (
    <div className="feedback-container">
      <div className="feedback-box">

        <h1>Customer Feedback</h1>

        <p>We value your feedback</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">★★★★★ - Excellent</option>
            <option value="4">★★★★ - Very Good</option>
            <option value="3">★★★ - Good</option>
            <option value="2">★★ - Fair</option>
            <option value="1">★ - Poor</option>
          </select>

          <textarea
            placeholder="Enter your feedback"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">
            Submit Feedback
          </button>

        </form>

        <button
          type="button"
          onClick={onBack}
          className="back-button"
        >
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default Feedback;