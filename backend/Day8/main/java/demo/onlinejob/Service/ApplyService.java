package demo.onlinejob.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import demo.onlinejob.Model.ApplyJob;
import demo.onlinejob.Repository.ApplyRepo;

@Service
public class ApplyService {
    @Autowired
    public ApplyRepo ar;

    public List<ApplyJob> getJob() {
        return ar.findAll();
    }

    public String postjob(ApplyJob aj) {
        ar.save(aj);
        return "posted successfully";
    }

    public String updatejob(ApplyJob aj) {
        ar.save(aj);
        return "updated successfully";
    }

    public String deletejob(int id)
    {
        ar.deleteById(id);
        return "deleted";
    }

}
