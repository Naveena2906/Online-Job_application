package demo.onlinejob.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import demo.onlinejob.Model.Experience;

@Repository
public interface ExperienceRepo extends JpaRepository<Experience,Integer> {
    
}
