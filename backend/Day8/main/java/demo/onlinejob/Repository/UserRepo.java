package demo.onlinejob.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import demo.onlinejob.Model.User;

public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}
