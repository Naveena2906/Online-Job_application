package demo.onlinejob.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.onlinejob.Model.AddJob;
import demo.onlinejob.Service.AddJobService;
import demo.onlinejob.constant.Api;

import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
public class AddJobController {
    @Autowired
    private AddJobService as;

    @PostMapping("/addadminjobs")
    public String post(@RequestBody AddJob aj) {
        as.addjob(aj);
        return "job posted successfully";
    }

    @GetMapping("/getadminjob")
    public List<AddJob> get() {
        return as.getjob();
    }

    @GetMapping("/getadminjob/{id}")
    public AddJob getById(@PathVariable int id) {
        return as.getjobById(id);
    }

    @PutMapping("/updateadminjob/{id}")
    public String update(@PathVariable long id, @RequestBody AddJob aj) {
        aj.setId(id);
        return as.update(aj);
    }

    @DeleteMapping("/deleteadminjob/{id}")
    public String del(@PathVariable int id) {
        return as.delete(id);
    }
}
