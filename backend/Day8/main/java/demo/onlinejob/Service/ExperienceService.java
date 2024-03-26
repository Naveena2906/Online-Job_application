package demo.onlinejob.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import demo.onlinejob.Model.Experience;
import demo.onlinejob.Repository.ExperienceRepo;

@Service
public class ExperienceService {
    @Autowired
    public ExperienceRepo er;

    public String postexp(Experience e)
    {
        er.save(e);
        return "posted Successfully";
    }

}
