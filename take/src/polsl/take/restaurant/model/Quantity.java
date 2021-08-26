package polsl.take.restaurant.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.JoinColumn;

@Entity
@Table(name = "quantities")
public class Quantity implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "quantity_id")
	private Integer quantityId;

	@Column(name = "quantity")
	private Integer quantity;
	
	@Column(name = "unit")
	private String unit;
	
	@ManyToOne()
	@JoinColumn(name = "ingredient_id", nullable = false)
	private Ingredient ingredient;
	
	@ManyToOne(cascade={CascadeType.MERGE, CascadeType.REMOVE})
	@JoinColumn(name = "id", nullable = false)
	private Meal meal;
	
	public Integer getQuantityId() {
		return quantityId;
	}
	
	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	@JsonBackReference(value="ingredient-quantity")//tak by³o
	//@JsonManagedReference(value="ingredient-quantity") //moja zmiana
	public Ingredient getIngredient() {
		return ingredient;
	}

	public void setIngredient(Ingredient ingredient) {
		this.ingredient = ingredient;
	}
	@JsonBackReference(value="meal-quantity")
	public Meal getMeal() {
		return meal;
	}

	public void setMeal(Meal meal) {
		this.meal = meal;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}
}
