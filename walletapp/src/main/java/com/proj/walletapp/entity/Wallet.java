package com.proj.walletapp.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name can't be blank")
    @Size(min= 2, max=30)
    private String name;
    @Size(min= 2, max=30,message = "Account Number Need to be between 2-30")
    @Column(unique = true)
    private String accountNumber;

    @Size(max=100,message = "Description should not have more than 100 letters")
    private  String description;

    @Min(1)
    @Max(3)
    private Integer priority;
    private Double currentBalance;

    @PrePersist
    public void setBalance(){
        this.currentBalance = Double.valueOf(0);

    }





}
