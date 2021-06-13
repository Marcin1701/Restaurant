package polsl.take.restaurant.api;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import polsl.take.restaurant.model.Meal;
import polsl.take.restaurant.model.Quantity;
import polsl.take.restaurant.service.MealService;

@Path("/meal")
@Consumes({ "application/json" })
@Produces({ "application/json" })
public class MealREST {
		// Inject Service
		@EJB
		MealService mealService;
		
		@GET
		public List<Meal> getMeals() {
			return mealService.findAll();
		}
		
		@GET
		@Path("/{id}")
		public Meal getMeal(@PathParam("id") int id) {
			return mealService.find(id);
		}
		
		@POST
		public void addMeal(Meal meal) {
			mealService.create(meal);
		}
		
		@PUT
		public void updateMeal(Meal meal) {
			mealService.update(meal);
		}
		
		@DELETE
		@Path("/{id}")
		public void deleteMeal(@PathParam("id") int id) {
			mealService.delete(id);
		}
		
		@GET
		@Path("/{id_meal}/quantities")
		public List<Quantity> getMealsQuantities(@PathParam("meal_id") int meal_id){
			return mealService.findMealQuantities(meal_id);
		}
		
}
