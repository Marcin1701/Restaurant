package polsl.take.restaurant.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import polsl.take.restaurant.model.Customer;
import polsl.take.restaurant.model.Ingredient;

@Stateless
public class IngredientService {
	
	@PersistenceContext(name="ingredient")
	EntityManager manager;
	
	// Create
	public void create(Ingredient ingredient) {
		manager.persist(ingredient);
	}
	
	// Read all
	public List<Ingredient> findAll() {
		Query query = manager.createQuery("select i from Ingredient i");
		@SuppressWarnings("unchecked")
		List<Ingredient> list = query.getResultList();
		return list;
	}
	
	// Read
	public Ingredient find(int id) {
		Query query = manager.createQuery("select i from Ingredient i where ingredient_id=" + String.valueOf(id));
		@SuppressWarnings("unchecked")
		List<Ingredient> list = query.getResultList();
		Ingredient x = list.get(0);
		return x;
	}
	
	// Update
	public void update(Ingredient ingredient) {
		ingredient = manager.merge(ingredient);
	}
	
	// Delete
	public void delete(int id) {
		Ingredient ingredient = manager.find(Ingredient.class, id);
		if (!ingredient.equals(null)) {
			manager.remove(ingredient);
		}
	}
	

}