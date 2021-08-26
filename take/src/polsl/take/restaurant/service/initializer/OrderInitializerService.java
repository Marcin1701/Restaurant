package polsl.take.restaurant.service.initializer;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import polsl.take.restaurant.model.Customer;
import polsl.take.restaurant.model.Order;

@Stateless
public class OrderInitializerService {
	
	@PersistenceContext(name="order")
	EntityManager manager;
	
	List<Order> orders = new ArrayList<Order>();
	
	private void createOrders() {
		this.orders.add(new Order(0f, LocalDateTime.now().toString(), false, 12, true));
	}
	
	private void addCustomersToOrders(Customer customer) {
		for (Order order: orders) {
			order.setCustomerId(customer);
		}
	}
	
	@SuppressWarnings("unchecked")
	public List<Order> init(List<Customer> customerList) {
		this.createOrders();
		for (Customer customer: customerList) {
			this.addCustomersToOrders(customer);
		}
		for (Order order: orders) {
			manager.persist(order);
		}
		Query query = manager.createQuery("SELECT o FROM Order o");
		this.orders = query.getResultList();
		return this.orders;
	}
}
