package demo.onlinejob.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import demo.onlinejob.Model.Skill;
import demo.onlinejob.Repository.SkillRepo;

@Service
public class SkillService {
    @Autowired
    public SkillRepo sr;

    public String postskill(Skill s)
    {
        sr.save(s);
        return "posted Successfully";
    }
}
