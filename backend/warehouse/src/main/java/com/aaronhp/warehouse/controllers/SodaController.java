package com.aaronhp.warehouse.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aaronhp.warehouse.entity.models.Soda;
import com.aaronhp.warehouse.entity.services.ISodaService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class SodaController {
	
	@Autowired
	ISodaService sodaService;
	// Here are the end-points

	@GetMapping("/api/sodas")
	private List<Soda> getAll(){
		return sodaService.getAll();
	}
	
	@GetMapping("/api/sodas/{id}")
	private Soda findById(@PathVariable(value = "id") int id) {
		return null;
	}
	
	@PostMapping("/api/sodas")
	private void addSoda(Soda soda) {
		sodaService.addSoda(soda);
	}
	
	@DeleteMapping("/api/sodas/{id}")
	private void deleteBicycle(@PathVariable(value = "id") int id) {
		sodaService.deleteSoda(id);
	}
	
	@PutMapping("/api/sodas/{id}")
	private void updateBicycle(@PathVariable(value = "id") int id, Soda soda) {
		sodaService.updateSoda(id, soda);
	}
}
