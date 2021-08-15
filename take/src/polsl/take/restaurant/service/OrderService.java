package polsl.take.restaurant.service;


import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import polsl.take.restaurant.model.Meal;
import polsl.take.restaurant.model.Order;
import polsl.take.restaurant.model.OrderRequest;
import polsl.take.restaurant.model.Quantity;
import polsl.take.restaurant.service.*;

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
		return manager.find(Order.class, id);
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
			MealService mealService = new MealService();
			Meal foundMeal = mealService.findMealByName(mealName);
			mealList.add(foundMeal);
			orderPrice += foundMeal.getPrice();
		}
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		Order order = new Order();
		order.setPrice(orderPrice);
		if(orderRequest.getTakeAway()){
			order.setCustomerId(orderRequest.getCustomerId());
		}
		else{
			order.setCustomerId(null);
		}
		order.setOrderDate(timestamp);
		order.setCardPayment(orderRequest.getCardPayment());
		order.setTable(orderRequest.getTable());
		order.setTakeAway(orderRequest.getTakeAway());
		order.setMealList(mealList);
		manager.persist(order);
		return order;
	}
}