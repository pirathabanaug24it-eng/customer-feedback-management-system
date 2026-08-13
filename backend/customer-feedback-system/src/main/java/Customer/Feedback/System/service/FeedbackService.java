package Customer.Feedback.System.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Customer.Feedback.System.entity.Feedback;
import Customer.Feedback.System.entity.User;
import Customer.Feedback.System.repository.FeedbackRepository;
import Customer.Feedback.System.repository.UserRepository;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserRepository userRepository;

    // Create feedback
    public Feedback createFeedback(Feedback feedback, Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        feedback.setUser(user);
        feedback.setStatus("PENDING");

        return feedbackRepository.save(feedback);
    }

    // Get feedback by user
    public List<Feedback> getUserFeedback(Long userId) {

        return feedbackRepository.findByUserId(userId);
    }

    // Get all feedback
    public List<Feedback> getAllFeedback() {

        return feedbackRepository.findAll();
    }

    // Get feedback by status
    public List<Feedback> getFeedbackByStatus(String status) {

        return feedbackRepository.findByStatus(status);
    }

    // Update feedback status
    public Feedback updateStatus(Long id, String status) {

        Feedback feedback = feedbackRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Feedback not found"));

        feedback.setStatus(status);

        return feedbackRepository.save(feedback);
    }

    // Admin reply
    public Feedback adminReply(Long id, String reply) {

        Feedback feedback = feedbackRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Feedback not found"));

        feedback.setAdminReply(reply);
        feedback.setStatus("RESOLVED");

        return feedbackRepository.save(feedback);
    }
}