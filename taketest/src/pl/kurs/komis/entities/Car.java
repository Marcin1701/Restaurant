package pl.kurs.komis.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Car {
	@Id
	@GeneratedValue(strategy=GenerationType.TABLE)
	int idc;
	String make;
	String model;
	String regNum;
	double price;
	@ManyToOne(fetch=FetchType.EAGER)
	Owner owner;
	
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.EAGER,orphanRemoval=true)
	List<Equipment> eqs = new ArrayList<Equipment>();

	public int getIdc() {
		return idc;
	}
	public void setIdc(int idc) {
		this.idc = idc;
	}
	public String getMake() {
		return make;
	}
	public void setMake(String make) {
		this.make = make;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getRegNum() {
		return regNum;
	}
	public void setRegNum(String regNum) {
		this.regNum = regNum;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Owner getOwner() {
		return owner;
	}
	public void setOwner(Owner owner) {
		this.owner = owner;
	}
	public List<Equipment> getEqs() {
		return eqs;
	}
	public void setEqs(List<Equipment> eqs) {
		this.eqs = eqs;
	}
	
	@Override
	public String toString() {
		return getIdc()+" "+getMake();
	}
	
}
