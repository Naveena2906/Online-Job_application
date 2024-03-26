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
@Table(name="skilldata")
public class Skill {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int jid;
    private String skill;
    private String certification;

}
