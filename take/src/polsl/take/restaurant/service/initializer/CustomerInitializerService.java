package polsl.take.restaurant.service.initializer;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import polsl.take.restaurant.model.Customer;

@Stateless
public class CustomerInitializerService {

	@PersistenceContext(name="customer")
	private EntityManager manager;
	
	List<Customer> customers = new ArrayList<Customer>();
	
	private void createCustomers() {
		this.customers.add(new Customer("Jan", "Kowalski", "546334233"));
	}
	
	public void init() {
		this.createCustomers();
		for (Customer customer: customers) {
			manager.persist(customer);
		}
	}
}
