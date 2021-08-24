package polsl.take.restaurant.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import polsl.take.restaurant.model.Customer;
import polsl.take.restaurant.model.Meal;
import polsl.take.restaurant.model.Order;

@Stateless
public class OrderService {
	
	@PersistenceContext(name="order")
	EntityManager manager;
	
	// Create
	public void create(Order order) {
		manager.persist(order);
	}
	
	// Read all
	public List<Order> findAll() {
		Query query = manager.createQuery("select o from Order o");
		@SuppressWarnings("unchecked")
		List<Order> list = query.getResultList();
		return list;
	}
	
	// Read
	public Order find(int id) {
		Query query = manager.createQuery("select o from Order o where customer_id=" + String.valueOf(id));
		@SuppressWarnings("unchecked")
		List<Order> list = query.getResultList();
		Order x = list.get(0);
		return x;
	}
	
	// Update
	public void update(Order order) {
		order = manager.merge(order);
	}
	
	// Delete
	public void delete(int id) {
		Order order = manager.find(Order.class, id);
		if (!order.equals(null)) {
			manager.remove(order);
		}
	}
	
	public List<Meal> findOrderMeals(int id_order){
		Order order = manager.find(Order.class, id_order);
		List<Meal> list = order.getMealList();
		return list;
	}
}