package polsl.take.restaurant.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import polsl.take.restaurant.model.Ingredient;
import polsl.take.restaurant.model.Meal;
import polsl.take.restaurant.model.Quantity;

@Stateless
public class QuantityService {
	
	@PersistenceContext(name="quantity")
	EntityManager manager;
	
	// Create
	public void create(Quantity quantity) {
		manager.persist(quantity);
	}
	
	// Read all
	public List<Quantity> findAll() {
		Query query = manager.createQuery("select q from Quantity q");
		@SuppressWarnings("unchecked")
		List<Quantity> list = query.getResultList();
		return list;
	}
	
	// Read
	public Quantity find(int id) {
		Query query = manager.createQuery("select q from Quantity q where quantity_id=" + String.valueOf(id));
		@SuppressWarnings("unchecked")
		List<Quantity> list = query.getResultList();
		Quantity x = list.get(0);
		return x;
	}
	
	// Update
	public void update(Quantity quantity) {
		quantity = manager.merge(quantity);
	}
	
	// Delete
	public void delete(int id) {
		Quantity quantity = manager.find(Quantity.class, id);
		if (!quantity.equals(null)) {
			manager.remove(quantity);
		}
	}
	
	public Ingredient findQuantityIngredient(int id_quantity){
		Quantity quantity = manager.find(Quantity.class, id_quantity);
		Ingredient ingredient = quantity.getIngredient();
		return ingredient;
	}
	
	public Meal findQuantityMeal(int id_quantity){
		Quantity quantity = manager.find(Quantity.class, id_quantity);
		Meal meal = quantity.getMeal();
		return meal;
	}
}
