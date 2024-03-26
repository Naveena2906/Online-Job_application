package demo.onlinejob.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import demo.onlinejob.Model.Skill;

@Repository
public interface SkillRepo extends JpaRepository<Skill,Integer>{
    
}
