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
import polsl.take.restaurant.model.Meal;
import polsl.take.restaurant.model.Quantity;
import polsl.take.restaurant.service.QuantityService;

@Path("/quantity")
@Consumes({ "application/json" })
@Produces({ "application/json" })
public class QuantityREST {
		// Inject Service
		@EJB
		QuantityService quantityService;
		
		@GET
		public List<Quantity> getQuantities() {
			return quantityService.findAll();
		}
		
		@GET
		@Path("/{id}")
		public Quantity getQuantities(@PathParam("id") int id) {
			return quantityService.find(id);
		}
		
		@POST
		public void addQuantities(Quantity quantity) {
			quantityService.create(quantity);
		}
		
		@PUT
		public void updateQuantity(Quantity quantity) {
			quantityService.update(quantity);
		}
		
		@DELETE
		@Path("/{id}")
		public void deleteQuantity(@PathParam("id") int id) {
			quantityService.delete(id);
		}
		
		@GET
		@Path("/{quantity_id}/ingredient")
		public Ingredient getQuantityIngredient(@PathParam("quantity_id") int quantity_id){
			return quantityService.findQuantityIngredient(quantity_id);
		}
		
		@GET
		@Path("/{quantity_id}/meal")
		public Meal getQuantityMeal(@PathParam("quantity_id") int quantity_id){
			return quantityService.findQuantityMeal(quantity_id);
		}
		
		
}