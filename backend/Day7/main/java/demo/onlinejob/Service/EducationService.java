package demo.onlinejob.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import demo.onlinejob.Model.Education;
import demo.onlinejob.Repository.EducationRepo;

@Service
public class EducationService {
    @Autowired
    private EducationRepo er;

    public Education saveEducation(Education education) {
        return er.save(education);
    }
    public String postedu(Education education) {
        er.save(education);
        return "posted successfully";
    }
   
}
