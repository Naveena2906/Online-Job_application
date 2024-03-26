package demo.onlinejob.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.onlinejob.Model.Experience;
import demo.onlinejob.Service.ExperienceService;
import demo.onlinejob.constant.Api;

@CrossOrigin("*")
@RestController
@RequestMapping(Api.AUTH)
public class ExperienceController {
    @Autowired
    public ExperienceService es;

    @PostMapping("postexperience")
    public String addexp(@RequestBody Experience e)
    {
      return es.postexp(e);
    }
}
