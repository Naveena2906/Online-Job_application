package demo.onlinejob.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import demo.onlinejob.Model.Education;

@Repository
public interface EducationRepo extends JpaRepository<Education, Integer> {

}
