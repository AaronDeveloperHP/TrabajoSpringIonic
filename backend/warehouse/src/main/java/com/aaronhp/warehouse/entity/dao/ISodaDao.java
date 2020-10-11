package com.aaronhp.warehouse.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.aaronhp.warehouse.entity.models.Soda;

public interface ISodaDao extends CrudRepository<Soda, Integer> {
	
}
