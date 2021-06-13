package polsl.take.restaurant;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import polsl.take.restaurant.entities.*;

public class TestRestaurant {
public static void main(String[] args) {
	EntityManagerFactory managerFactory = Persistence.createEntityManagerFactory("restaurant");
	EntityManager manager = managerFactory.createEntityManager(); 
	manager.getTransaction().begin();
	
	Customer customer = new Customer();
	customer.setFirstName("Jan");
	customer.setLastName("Kowalski");
	customer.setPhoneNumber("555555555");
	manager.persist(customer);
	
	Order order = new Order();
	order.setPrice(40.0f);
	order.setCardPayment(true);
	order.setTakeAway(true);
	order.setCustomerId(customer);
	manager.persist(order);
	
	Meal meal1 = new Meal();
	meal1.setName("Chef's Pork Chops");
	meal1.setPrice(20.0f);
	meal1.setVegetarian(false);
	meal1.setOrderId(order);
	manager.persist(meal1);
	
	Meal meal2 = new Meal();
	meal2.setName("Water");
	meal2.setPrice(20.0f);
	meal2.setVegetarian(true);
	meal2.setOrderId(order);
	manager.persist(meal2);
	
	Ingredient ingredient1 = new Ingredient();
	ingredient1.setName("Pork Chop");
	manager.persist(ingredient1);
	
	Ingredient ingredient2 = new Ingredient();
	ingredient2.setName("Potato");
	manager.persist(ingredient2);
	
	Ingredient ingredient3 = new Ingredient();
	ingredient3.setName("Tomato");
	manager.persist(ingredient3);
	
	Ingredient ingredient4 = new Ingredient();
	ingredient4.setName("Water");
	manager.persist(ingredient4);
	
	Quantity quantity1 = new Quantity();
	quantity1.setQuantity(300);
	quantity1.setUnit("Grams");
	quantity1.setMeal(meal1);
	quantity1.setIngredient(ingredient1);
	manager.persist(quantity1);
	
	Quantity quantity2 = new Quantity();
	quantity2.setQuantity(200);
	quantity2.setUnit("Grams");
	quantity2.setMeal(meal1);
	quantity2.setIngredient(ingredient2);
	manager.persist(quantity2);

	Quantity quantity3 = new Quantity();
	quantity3.setQuantity(2);
	quantity3.setUnit("Pieces");
	quantity3.setMeal(meal1);
	quantity3.setIngredient(ingredient3);
	manager.persist(quantity3);
	
	Quantity quantity4 = new Quantity();
	quantity4.setQuantity(1);
	quantity4.setUnit("Bottle 500 ml");
	quantity4.setMeal(meal2);
	quantity4.setIngredient(ingredient4);
	manager.persist(quantity4);
	
	manager.getTransaction().commit();
	manager.close();
	managerFactory.close();
	
}
}
