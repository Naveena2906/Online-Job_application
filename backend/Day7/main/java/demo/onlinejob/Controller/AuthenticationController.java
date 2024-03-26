package demo.onlinejob.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import demo.onlinejob.Service.UserService;
import demo.onlinejob.constant.Api;
import demo.onlinejob.dto.request.AuthenticationRequest;
import demo.onlinejob.dto.request.RegisterRequest;
import demo.onlinejob.dto.response.AuthenticationResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {
    private final UserService userservice;

    @PostMapping("/signup")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        boolean isRegistered = userservice.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registeration completed")
                : ResponseEntity.badRequest().body("Something went wrong!");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(userservice.userAuthentication(request));
    }
}
