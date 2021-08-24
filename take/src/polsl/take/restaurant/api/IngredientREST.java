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

import polsl.take.restaurant.model.Ingredient;
import polsl.take.restaurant.service.IngredientService;

//url: localhost:8080/take/ingredient


@Path("/ingredient")
@Consumes({ "application/json" })
@Produces({ "application/json" })
public class IngredientREST {
	// Inject Service
	@EJB
	IngredientService ingredientService;
	
	@GET
	public List<Ingredient> getIngredients() {
		return ingredientService.findAll();
	}
	
	@GET
	@Path("/{id}")
	public Ingredient getIngredients(@PathParam("id") int id) {
		return ingredientService.find(id);
	}
	
	@POST
	public void addIngredients(Ingredient ingredient) {
		ingredientService.create(ingredient);
	}
	
	@PUT
	public void updateIngredient(Ingredient ingredient) {
		ingredientService.update(ingredient);
	}
	
	@DELETE
	@Path("/{id}")
	public void deleteIngredient(@PathParam("id") int id) {
		ingredientService.delete(id);
	}
	
	
}