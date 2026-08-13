package Customer.Feedback.System.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import Customer.Feedback.System.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

    List<Feedback> findByUserId(Long userId);

    List<Feedback> findByStatus(String status);
}