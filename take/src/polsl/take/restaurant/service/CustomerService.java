package polsl.take.restaurant.service;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import polsl.take.restaurant.model.Customer;
import polsl.take.restaurant.model.Order;

@Stateless
public class CustomerService {
	
	@PersistenceContext(name="customer")
	EntityManager manager;
	
	// Create
	public void create(Customer customer) {
		customer.setOrderList(new ArrayList<Order>());
		manager.persist(customer);
	}
	
	// Read all
	public List<Customer> findAll() {
		Query query = manager.createQuery("select c from Customer c");
		@SuppressWarnings("unchecked")
		List<Customer> list = query.getResultList();
		return list;
	}
	
	// Read
	public Customer find(int id) {
		Query query = manager.createQuery("select c from Customer c where customer_id=" + String.valueOf(id));
		@SuppressWarnings("unchecked")
		List<Customer> list = query.getResultList();
		Customer x = list.get(0);
		return x;
	}
	
	// Update
	public void update(Customer customer) {
		customer = manager.merge(customer);
	}
	
	// Delete
	public void delete(int id) {
		Customer customer = manager.find(Customer.class, id);
		if (!customer.equals(null)) {
			manager.remove(customer);
		}
	}
	
	public List<Order> findCustomerOrders(int id_customer) {
		Customer customer = manager.find(Customer.class, id_customer);
		List<Order> list = customer.getOrderList();
		return list;
	}
}
