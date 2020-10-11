package com.aaronhp.warehouse.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aaronhp.warehouse.entity.dao.ISodaDao;
import com.aaronhp.warehouse.entity.models.Soda;

@Service
public class SodaServiceImpl implements ISodaService {

	@Autowired
	ISodaDao sodaDao;
	
	@Override
	public List<Soda> getAll() {
		return (List<Soda>) sodaDao.findAll();
	}

	@Override
	public void addSoda(Soda soda) {
		sodaDao.save(soda);
	}

	@Override
	public void deleteSoda(int id) {
		sodaDao.deleteById(id);
	}

	@Override
	public void updateSoda(int id, Soda soda) {
		Optional<Soda> b = sodaDao.findById(id);
		
		if (b.isPresent()) {
			soda.setProductNumber(id);
			sodaDao.save(soda);
		}
	}
	
	

}