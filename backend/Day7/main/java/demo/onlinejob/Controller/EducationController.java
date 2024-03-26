package demo.onlinejob.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.onlinejob.Model.Education;
import demo.onlinejob.Service.EducationService;
import demo.onlinejob.constant.Api;

@CrossOrigin("*")
@RestController
@RequestMapping(Api.AUTH)
public class EducationController {
    @Autowired
    private EducationService es;

    @PostMapping("/postedujob")
    public ResponseEntity<Education> addEducation(@RequestBody Education education) {
        Education savedEducation = es.saveEducation(education);
        return new ResponseEntity<>(savedEducation, HttpStatus.CREATED);
    }

}
