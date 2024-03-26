package demo.onlinejob.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.onlinejob.Model.ApplyJob;
import demo.onlinejob.Model.Skill;
import demo.onlinejob.Service.SkillService;
import demo.onlinejob.constant.Api;

@CrossOrigin("*")
@RestController
@RequestMapping(Api.AUTH)
public class SkillController {
    @Autowired
    public SkillService ss;

    @PostMapping("/postskill")
    public String add(@RequestBody Skill s) {
        return ss.postskill(s);
    }
}
