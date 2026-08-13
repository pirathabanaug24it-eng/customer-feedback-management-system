package Customer.Feedback.System.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Customer.Feedback.System.entity.Feedback;
import Customer.Feedback.System.service.FeedbackService;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin(origins = "http://localhost:5173")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;

    // Create feedback
    @PostMapping("/create/{userId}")
    public ResponseEntity<?> createFeedback(
            @PathVariable Long userId,
            @RequestBody Feedback feedback) {

        try {
            Feedback savedFeedback =
                    feedbackService.createFeedback(feedback, userId);

            return ResponseEntity.ok(savedFeedback);

        } catch (RuntimeException e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }

    // Get feedback of a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Feedback>> getUserFeedback(
            @PathVariable Long userId) {

        return ResponseEntity.ok(
                feedbackService.getUserFeedback(userId)
        );
    }

    // Get all feedback
    @GetMapping("/all")
    public ResponseEntity<List<Feedback>> getAllFeedback() {

        return ResponseEntity.ok(
                feedbackService.getAllFeedback()
        );
    }

    // Get feedback by status
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Feedback>> getFeedbackByStatus(
            @PathVariable String status) {

        return ResponseEntity.ok(
                feedbackService.getFeedbackByStatus(status)
        );
    }

    // Update feedback status
    @PutMapping("/status/{id}")
    public ResponseEntity<?> updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {

        try {
            return ResponseEntity.ok(
                    feedbackService.updateStatus(id, status)
            );

        } catch (RuntimeException e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }

    // Admin reply
    @PutMapping("/reply/{id}")
    public ResponseEntity<?> adminReply(
            @PathVariable Long id,
            @RequestParam String reply) {

        try {
            return ResponseEntity.ok(
                    feedbackService.adminReply(id, reply)
            );

        } catch (RuntimeException e) {
            return ResponseEntity
                    .badRequest()
                    .body(e.getMessage());
        }
    }
}