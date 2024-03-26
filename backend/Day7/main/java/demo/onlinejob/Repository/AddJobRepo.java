package demo.onlinejob.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import demo.onlinejob.Model.AddJob;
@Repository
public interface AddJobRepo extends JpaRepository<AddJob,Integer>{
    
}
