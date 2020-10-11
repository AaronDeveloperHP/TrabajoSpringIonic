
	package com.aaronhp.warehouse.entity.services;

	import java.util.List;

	import com.aaronhp.warehouse.entity.models.Soda;

	public interface ISodaService {
		public List<Soda> getAll();

		public void addSoda(Soda soda);

		public void deleteSoda(int id);

		public void updateSoda(int id, Soda soda);
	}


