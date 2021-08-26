package polsl.take.restaurant.service.initializer;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Stateless;

import polsl.take.restaurant.model.Customer;
import polsl.take.restaurant.model.Meal;
import polsl.take.restaurant.model.Order;

@Stateless
public class Config {

	@EJB
	CustomerInitializerService customerInitializerService;
	
	@EJB
	IngredientInitializerService ingredientInitializerService;
	
	@EJB
	MealInitializerService mealInitializerService;
	
	@EJB
	OrderInitializerService orderInitializerService;
	
	List<Customer> customerList = new ArrayList<Customer>();
	
	List<Order> orderList = new ArrayList<Order>();
	
	List<Meal> mealList = new ArrayList<Meal>();
	
	public String initializeData() {
		try { 
			this.customerList = this.customerInitializerService.init();
			this.orderList = this.orderInitializerService.init(this.customerList);
			this.mealList = this.mealInitializerService.init();
			return "Data initialized";
		} catch (Exception e) {
			return e.getMessage();
		}
	}
}
