package demo.onlinejob.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import demo.onlinejob.Model.ApplyJob;

@Repository
public interface ApplyRepo extends JpaRepository<ApplyJob, Integer> {

}
