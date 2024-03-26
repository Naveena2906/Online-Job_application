package demo.onlinejob.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import demo.onlinejob.Model.AddJob;
import demo.onlinejob.Repository.AddJobRepo;

@Service
public class AddJobService {
    @Autowired
    private AddJobRepo ar;

    public void addjob(AddJob aj)
    {
        ar.save(aj);
    }
    public List<AddJob> getjob()
    {
        return ar.findAll();
    }
    public AddJob getjobById(int id)
    {
        return ar.findById(id).get();
    }
    public String update(AddJob aj)
    {
        ar.save(aj);
        return "updated Successfully";
    }
    public String delete(int id)
    {
        ar.deleteById(id);
        return "deleted successfully";
    }
}
