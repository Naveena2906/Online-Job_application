package demo.onlinejob.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "Educationdata")
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int jid;
    private String qualificationType;
    private int cgpa;
    private boolean hasArrears;
    private String resumelink;
    public int getJid() {
        return jid;
    }

    public void setJid(int jid) {
        this.jid = jid;
    }

    public String getQualificationType() {
        return qualificationType;
    }

    public void setQualificationType(String qualificationType) {
        this.qualificationType = qualificationType;
    }

    public int getCgpa() {
        return cgpa;
    }

    public void setCgpa(int cgpa) {
        this.cgpa = cgpa;
    }

    public Boolean getHasArrears() {
        return hasArrears;
    }

    public void setHasArrears(Boolean hasArrears) {
        this.hasArrears = hasArrears;
    }

    public String getResumelink() {
        return resumelink;
    }

    public void setResumelink(String resumelink) {
        this.resumelink = resumelink;
    }
}
    
