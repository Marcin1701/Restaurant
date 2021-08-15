package polsl.take.restaurant.model;

import java.util.List;

public class OrderRequest {

	private Boolean cardPayment;
	
	private Integer table;
	
	private Boolean takeAway;
	
	private Customer customerId;
	
	private List<String> mealNames;

	public Boolean getCardPayment() {
		return cardPayment;
	}

	public void setCardPayment(Boolean cardPayment) {
		this.cardPayment = cardPayment;
	}

	public Customer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Customer customerId) {
		this.customerId = customerId;
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

	public List<String> getMealNames() {
		return mealNames;
	}

	public void setMealNames(List<String> mealNames) {
		this.mealNames = mealNames;
	}
	
	
}
