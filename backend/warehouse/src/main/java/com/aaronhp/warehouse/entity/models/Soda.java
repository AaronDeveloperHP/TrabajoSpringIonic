package com.aaronhp.warehouse.entity.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity(name = "sodas")

public class Soda implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int productNumber;
	
	@Column
	private String productName;
	
	@Column
	private int productQuantity;

	@Column
	private String productFormat;
	
	@Column
	private int productPack;
	
	public Soda() {}

	public Soda(int productNumber, String productName, int productQuantity) {
		super();
		this.productNumber = productNumber;
		this.productName = productName;
		this.productQuantity = productQuantity;
	}

	public int getProductNumber() {
		return productNumber;
	}

	public void setProductNumber(int productNumber) {
		this.productNumber = productNumber;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getProductQuantity() {
		return productQuantity;
	}

	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}

	
	public String getProductFormat() {
		return productFormat;
	}

	public void setProductFormat(String productFormat) {
		this.productFormat = productFormat;
	}

	public int getProductPack() {
		return productPack;
	}

	public void setProductPack(int productPack) {
		this.productPack = productPack;
	}
}
