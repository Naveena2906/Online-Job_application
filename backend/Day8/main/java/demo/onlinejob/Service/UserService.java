package demo.onlinejob.Service;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import demo.onlinejob.Model.User;
import demo.onlinejob.Model.enumerate.Role;
import demo.onlinejob.Repository.UserRepo;
import demo.onlinejob.dto.request.AuthenticationRequest;
import demo.onlinejob.dto.request.RegisterRequest;
import demo.onlinejob.dto.response.AuthenticationResponse;
import demo.onlinejob.util.JwtUtil;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByUsername(request.getUsername());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .username(request.getUsername())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .mobilenum(request.getMobilenum())
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        var user = userRepository.findByUsername(request.getUsername()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .build();
    }
}
