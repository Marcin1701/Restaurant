package polsl.take.restaurant.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "ingredients")
public class Ingredient implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String name;
	
	private Integer quantity;

	@ManyToMany(mappedBy = "ingredientList")
	private List<Meal> mealList;
	
	@ManyToMany
	@JoinTable(name = "Relation_5",
				joinColumns = @JoinColumn(name = "ingredients_id"),
				inverseJoinColumns = @JoinColumn(name = "allergens_id"))
	private List<Allergen> allergenList;

	
	public List<Allergen> getAllergenList() {
		return allergenList;
	}

	public void setAllergenList(List<Allergen> allergenList) {
		this.allergenList = allergenList;
	}

	public List<Meal> getMealList() {
		return mealList;
	}

	public void setMealList(List<Meal> mealList) {
		this.mealList = mealList;
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

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	
}
