package polsl.take.restaurant.service.initializer;

import javax.ejb.EJB;
import javax.ejb.Stateless;

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
	
	public String initializeData() {
		this.customerInitializerService.init();
		return "Data initialized";
	}
}
