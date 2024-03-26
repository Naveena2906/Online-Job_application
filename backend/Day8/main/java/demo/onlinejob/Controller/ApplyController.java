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

import demo.onlinejob.Model.ApplyJob;
import demo.onlinejob.Service.ApplyService;
import demo.onlinejob.constant.Api;

@CrossOrigin("*")
@RestController
@RequestMapping(Api.AUTH)
public class ApplyController {
    @Autowired
    public ApplyService as;

    @GetMapping("/getjob")
    public List<ApplyJob> get() {
        return as.getJob();
    }

    @PostMapping("/postjob")
    public String add(@RequestBody ApplyJob aj) {
        return as.postjob(aj);
    }

    @PutMapping("/update/{id}")
    public String update(@RequestBody ApplyJob aj, @PathVariable int jid) {
        aj.setJid(jid);
        return as.updatejob(aj);
    }

    @DeleteMapping("/delete/{jid}")
    public String delete(@PathVariable int jid) {
        return as.deletejob(jid);
    }

}
