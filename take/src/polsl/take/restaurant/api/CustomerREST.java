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

import polsl.take.restaurant.model.Customer;
import polsl.take.restaurant.model.Order;
import polsl.take.restaurant.service.CustomerService;

// url: localhost:8080/take/customer

@Path("/customer")
@Consumes({ "application/json" })
@Produces({ "application/json" })
public class CustomerREST {
	
	// Inject Service
	@EJB
	CustomerService customerService;
	
	@GET
	public List<Customer> getCustomers() {
		return customerService.findAll();
	}
	
	@GET
	@Path("/{id}")
	public Customer getCustomer(@PathParam("id") int id) {
		return customerService.find(id);
	}
	
	@POST
	public void addCustomer(Customer customer) {
		customerService.create(customer);
	}
	
	@PUT
	public void updateCustomer(Customer customer) {
		customerService.update(customer);
	}
	
	@DELETE
	@Path("/{id}")
	public void deleteCustomer(@PathParam("id") int id) {
		customerService.delete(id);
	}
	
	@GET
	@Path("/{customer_id}/orders")
	public List<Order> getCustomerOrders(@PathParam("customer_id") int customer_id){
		return customerService.findCustomerOrders(customer_id);
	}
}
