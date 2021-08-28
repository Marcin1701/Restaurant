package polsl.take.restaurant.service.initializer;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import polsl.take.restaurant.model.Meal;

@Stateless
public class MealInitializerService {
	
	@PersistenceContext(name="meal")
	EntityManager manager;
	
	List<Meal> meals = new ArrayList<Meal>();
	
	private void createMeals() {
		this.meals.add(new Meal("schabowy w panierce kukrydzianej", 34.00f, false, false));
		this.meals.add(new Meal("burrito", 21.00f, false, false));
		this.meals.add(new Meal("kotlet de volaille", 26.00f, false, false));
		this.meals.add(new Meal("gyros z kurczaka", 21.00f, false, false));
		this.meals.add(new Meal("stek", 50.00f, false, false));
		this.meals.add(new Meal("pierogi ruskie", 19.00f, true, true));
	}
	
	@SuppressWarnings("unchecked")
	public Boolean checkMealExistance() {
		Query query = manager.createQuery("SELECT m FROM Meal m");
		this.meals = query.getResultList();
		return this.meals.size() > 0;
	}
	
	@SuppressWarnings("unchecked")
	public List<Meal> init() {
		this.createMeals();
		for (Meal meal: meals) {
			manager.persist(meal);
		}
		Query query = manager.createQuery("SELECT m FROM Meal m");
		this.meals = query.getResultList();
		return this.meals;
	}
}
