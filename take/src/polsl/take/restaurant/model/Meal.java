package polsl.take.restaurant.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;



@Entity
@Table(name = "meals")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Meal implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;

	@Column(name = "name")
	private String name;
	
	@Column(name = "price")
	private Float price;
	
	@ManyToOne(fetch= FetchType.EAGER)
	@JoinColumn(name = "order_id")
	private Order orderId;
	
	@Column(name = "vegan")
	private Boolean vegan;
	
	@Column(name = "vegetarian")
	private Boolean vegetarian;
	
	@OneToMany(mappedBy = "meal", fetch = FetchType.EAGER,cascade = CascadeType.REMOVE)
    @Fetch(value = FetchMode.SELECT)
	private List<Quantity> quantities;

	public Meal() {}
	
	public Meal(String name, Float price, Boolean vegan, Boolean vegetarian) {
		this.name = name;
		this.price = price;
		this.vegan = vegan;
		this.vegetarian = vegetarian;
	}
	
	public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public Boolean getVegan() {
		return vegan;
	}

	public void setVegan(Boolean vegan) {
		this.vegan = vegan;
	}

	public Boolean getVegetarian() {
		return vegetarian;
	}

	public void setVegetarian(Boolean vegetarian) {
		this.vegetarian = vegetarian;
	}
	@JsonBackReference(value = "order-meal")
	public Order getOrderId() {
		return orderId;
	}

	public void setOrderId(Order orderId) {
		this.orderId = orderId;
	}
	@JsonManagedReference(value="meal-quantity")
	public List<Quantity> getQuantities() {
		return quantities;
	}

	public void setQuantities(List<Quantity> quantities) {
		this.quantities = quantities;
	}
}
