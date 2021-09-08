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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "ingredients")
public class Ingredient implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ingredient_id")
	private Integer ingredientId;
	
	@Column(name = "name")
	private String name;
	
	@OneToMany(mappedBy = "ingredient", fetch=FetchType.EAGER, cascade = CascadeType.REMOVE)
	@Fetch(value = FetchMode.SELECT)
	private List<Quantity> quantities;
	
	public Integer getIngredientId() {
		return ingredientId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	@JsonManagedReference(value="ingredient-quantity") //tak by³o
	//@JsonBackReference(value="ingredient-quantity") //moja zmiana
	public List<Quantity> getQuantities() {
		return quantities;
	}

	public void setQuantities(List<Quantity> quantities) {
		this.quantities = quantities;
	}
}
