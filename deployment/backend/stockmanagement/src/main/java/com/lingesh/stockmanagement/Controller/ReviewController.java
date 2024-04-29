package com.lingesh.stockmanagement.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lingesh.stockmanagement.Model.Review;
import com.lingesh.stockmanagement.Service.ReviewService;
import com.lingesh.stockmanagement.constant.Api;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@CrossOrigin("*")
public class ReviewController {
    @Autowired
    private ReviewService rs;

    @PostMapping("/addreview")
    public String addreview(@RequestBody Review rev)
    {
        return rs.postrev(rev);
    }

    @GetMapping("/getreview")
    public List<Review> getrev()
    {
        return rs.get();
    }
    @DeleteMapping("/deletereview/{rid}")
    public String delete(@PathVariable int rid)
    {
        return rs.del(rid);
    }
}
