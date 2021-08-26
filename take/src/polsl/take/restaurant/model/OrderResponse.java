package polsl.take.restaurant.model;

import java.sql.Timestamp;
import java.util.List;

public class OrderResponse {
	
	private Integer orderId;
	
	private Float price;
	
	private Customer customerId;
	
	private Boolean cardPayment;
	
	private Timestamp orderDate;
	
	private Integer table;
	
	private Boolean takeAway;
	
	private List<Meal> mealList;

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public Customer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Customer customerId) {
		this.customerId = customerId;
	}

	public Boolean getCardPayment() {
		return cardPayment;
	}

	public void setCardPayment(Boolean cardPayment) {
		this.cardPayment = cardPayment;
	}

	public Timestamp getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Timestamp orderDate) {
		this.orderDate = orderDate;
	}

	public Integer getTable() {
		return table;
	}

	public void setTable(Integer table) {
		this.table = table;
	}

	public Boolean getTakeAway() {
		return takeAway;
	}

	public void setTakeAway(Boolean takeAway) {
		this.takeAway = takeAway;
	}

	public List<Meal> getMealList() {
		return mealList;
	}

	public void setMealList(List<Meal> mealList) {
		this.mealList = mealList;
	}
	
	
}
