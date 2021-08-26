package polsl.take.restaurant.service.initializer;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import polsl.take.restaurant.model.Customer;

@Stateless
public class CustomerInitializerService {

	@PersistenceContext(name="customer")
	private EntityManager manager;
	
	List<Customer> customers = new ArrayList<Customer>();
	
	private void createCustomers() {
		this.customers.add(new Customer("Jan", "Kowalski", "546334233"));
	}
	
	@SuppressWarnings("unchecked")
	public List<Customer> init() {
		this.createCustomers();
		for (Customer customer: customers) {
			manager.persist(customer);
		}
		Query query = manager.createQuery("SELECT c FROM Customer c");
		this.customers = query.getResultList();
		return this.customers;
	}
}
