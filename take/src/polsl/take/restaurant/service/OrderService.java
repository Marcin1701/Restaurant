package polsl.take.restaurant.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import polsl.take.restaurant.model.Meal;
import polsl.take.restaurant.model.Order;
import polsl.take.restaurant.model.OrderRequest;

@Stateless
public class OrderService {
	
	@PersistenceContext(name="order")
	EntityManager manager;
	
	@PersistenceContext(name="meal")
	EntityManager managerMeal;
		
	public Meal findMealByName(String name){
		Query query = managerMeal.createQuery("select m from Meal m where m.name like :custName")
				.setParameter("custName", name);
		Meal meal = (Meal) query.getSingleResult();
		return meal;
	}
	
	MealService mealService = new MealService();
	// Create
	public void create(Order order) {
		manager.persist(order);
	}
	
	//test
	public Order createAndReturn(Order order) {
		manager.persist(order);
		return order;
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
	
	public Order addOrderByRequest(OrderRequest orderRequest){
		if(orderRequest.getMealNames() == null){
			return null;
		}
		List<Meal> mealList = new ArrayList<Meal>();
		Float orderPrice = 0F;
		for(String mealName : orderRequest.getMealNames()){
			Meal foundMeal = findMealByName(mealName);
			mealList.add(foundMeal);
			orderPrice += foundMeal.getPrice();
		}
		LocalDateTime orderDate = LocalDateTime.now();
		Order order = new Order();
		order.setPrice(orderPrice);
		if(orderRequest.getTakeAway()){
			order.setCustomerId(orderRequest.getCustomerId());
		}
		else{
			order.setCustomerId(null);
		}
		order.setOrderDate(orderDate.toString());
		order.setCardPayment(orderRequest.getCardPayment());
		order.setTable(orderRequest.getTable());
		order.setTakeAway(orderRequest.getTakeAway());
		order.setMealList(mealList);
		manager.persist(order);
		return order;
	}
}