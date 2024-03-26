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
@Table(name = "experiencedata")
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int jid;
    private String company_name;
    private String position;
    private String duration;
    private String skill_develop;

}
