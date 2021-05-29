package pl.kurs;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement
public class Car implements Serializable{
	private static final long serialVersionUID = 1L;
	int idc;
	String make;
	String model;
	String regNum;
	Double price;

	
	@XmlAttribute
	public int getIdc() {
		return idc;
	}
	
	//dalsze gettery i settery
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
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public void setIdc(int idc) {
		this.idc = idc;
	}

	
	
	
}
