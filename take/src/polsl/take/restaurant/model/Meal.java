package polsl.take.restaurant.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "meals")
public class Meal implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Integer id;

	private String name;
	
	private Float price;
	
	@ManyToOne
	@JoinColumn(name = "order_id")
	private Order orderId;
	
	private Character vegan;
	
	private Character vegetarian;

	@ManyToMany
	@JoinTable(name = "Relation_3",
				joinColumns = @JoinColumn(name = "meal_id"),
				inverseJoinColumns = @JoinColumn(name = "ingredients_id"))
	private List<Ingredient> ingredientList;
	
	public List<Ingredient> getIngredientList() {
		return ingredientList;
	}

	public void setIngredientList(List<Ingredient> ingredientList) {
		this.ingredientList = ingredientList;
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

	public Character getVegan() {
		return vegan;
	}

	public void setVegan(Character vegan) {
		this.vegan = vegan;
	}

	public Character getVegetarian() {
		return vegetarian;
	}

	public void setVegetarian(Character vegetarian) {
		this.vegetarian = vegetarian;
	}

	public Order getOrderId() {
		return orderId;
	}

	public void setOrderId(Order orderId) {
		this.orderId = orderId;
	}
	
}
