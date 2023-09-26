package com.proj.walletapp.service;

import com.proj.walletapp.entity.Wallet;
import com.proj.walletapp.repo.WalletRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WalletService {

    @Autowired
    WalletRepo walletRepo;

    public Wallet createOrUpdate(Wallet wallet){
        return  walletRepo.save(wallet);
    }
    public List<Wallet> getAll(){
        return  walletRepo.findAll(Sort.by(Sort.Direction.ASC,"priority"));
    }

    public void deleteById(Long id){
         walletRepo.deleteById(id);


    }
}
