package demo.onlinejob.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@RequiredArgsConstructor
@Table(name = "applydata")
public class ApplyJob {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int jid;
    private String first_name;
    private String last_name;
    private String email;
    private String password;
    private String address;
    private String mobilenum;

}
