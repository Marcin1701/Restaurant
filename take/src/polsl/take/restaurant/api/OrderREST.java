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
import polsl.take.restaurant.model.Order;
import polsl.take.restaurant.service.OrderService;

import polsl.take.restaurant.model.OrderRequest;

@Path("/order")
@Consumes({ "application/json" })
@Produces({ "application/json" })
public class OrderREST {
	// Inject Service
	@EJB
	OrderService orderService;
	
	@GET
	public List<Order> getOrders() {
		return orderService.findAll();
	}
	
	@GET
	@Path("/{id}")
	public Order getOrder(@PathParam("id") int id) {
		return orderService.find(id);
	}
	
	@POST
	public void addOrder(Order order) {
		orderService.create(order);
	}
	
	//test
	@POST()
	@Path("/aaaaa")
	public Order addOrderTest(Order order) {
		return orderService.createAndReturn(order);
	}
	
	@PUT
	public void updateOrder(Order order) {
		orderService.update(order);
	}
	
	@DELETE
	@Path("/{id}")
	public void deleteOrder(@PathParam("id") int id) {
		orderService.delete(id);
	}
	
	@GET
	@Path("/{order_id}/meals")
	public List<Meal> getOrderMeals(@PathParam("order_id") int order_id){
		return orderService.findOrderMeals(order_id);
	}
	
	@POST
	@Path("/newOrder")
	public Order addOrderByRequest(OrderRequest orderRequest){
		return orderService.addOrderByRequest(orderRequest);
	}
}

