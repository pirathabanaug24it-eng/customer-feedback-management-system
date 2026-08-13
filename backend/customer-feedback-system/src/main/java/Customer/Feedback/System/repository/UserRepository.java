package Customer.Feedback.System.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Customer.Feedback.System.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}