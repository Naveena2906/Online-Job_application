package demo.onlinejob.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "adminaddjob")
public class AddJob {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String orgname;
    private String jobtitle;
    private String joblocation;
    private String jobtype;
    private String jobpackage;
    private String jobexperience;
    private String jobdeadline;
    private int jobopenings;
    private String jobdescription;
    private String[] educationalrequirements;
    private String[] skills;

}
