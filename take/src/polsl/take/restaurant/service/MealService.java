package polsl.take.restaurant.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import polsl.take.restaurant.model.Meal;
import polsl.take.restaurant.model.Quantity;

@Stateless
public class MealService {
	
	@PersistenceContext(name="meal")
	EntityManager manager;
	
	// Create
	public void create(Meal meal) {
		manager.persist(meal);
	}
	
	// Read all
	public List<Meal> findAll() {
		Query query = manager.createQuery("select m from Meal m");
		@SuppressWarnings("unchecked")
		List<Meal> list = query.getResultList();
		return list;
	}
	
	// Read
	public Meal find(int id) {
		return manager.find(Meal.class, id);
	}
	
	public Meal findMealByName(String name){
		Query query = manager.createQuery("select m from Meal m where m.name like :custName")
				.setParameter("custName", name);
		@SuppressWarnings("unchecked")
		Meal meal = (Meal) query.getSingleResult();
		return meal;
	}
	
	// Update
	public void update(Meal meal) {
		meal = manager.merge(meal);
	}
	
	// Delete
	public void delete(int id) {
		Meal meal = manager.find(Meal.class, id);
		if (!meal.equals(null)) {
			manager.remove(meal);
		}
	}
	
	public List<Quantity> findMealQuantities(int id_meal){
		Meal meal = manager.find(Meal.class, id_meal);
		List<Quantity> list = meal.getQuantities();
		return list;
	}
}
