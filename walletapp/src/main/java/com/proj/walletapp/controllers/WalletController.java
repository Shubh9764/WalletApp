package com.proj.walletapp.controllers;


import com.proj.walletapp.entity.Wallet;
import com.proj.walletapp.service.WalletService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/wallet")
@CrossOrigin("http://localhost:3000")
@Validated
public class WalletController {
    @Autowired
    WalletService walletService;
    @PostMapping()
    public ResponseEntity<?> createOrUpdate(@Valid @RequestBody Wallet wallet){
        Wallet savedWallet = walletService.createOrUpdate(wallet);
        return new ResponseEntity<>(savedWallet, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id,@Valid @RequestBody Wallet wallet){
        wallet.setId(id);
        Wallet savedWallet = walletService.createOrUpdate(wallet);
        return new ResponseEntity<>(savedWallet, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        return ResponseEntity.ok(walletService.getAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delteWalletById(@PathVariable Long id){
        walletService.deleteById(id);
        return ResponseEntity.ok("wallete delted Succesfully");
    }



}
