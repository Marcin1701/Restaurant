package polsl.take.restaurant.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Integer id;

	private Float price;
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customerId;
	
	@Column(name = "order_date")
	private Timestamp orderDate;
	
	@Column(name = "card_payment")
	private Boolean cardPayment;
	
	private Integer table;
	
	@Column(name = "take_away")
	private Boolean takeAway;
	
	@OneToMany(mappedBy = "orderId")
	private List<Meal> mealList;

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

	public Timestamp getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Timestamp orderDate) {
		this.orderDate = orderDate;
	}

	public Boolean getCardPayment() {
		return cardPayment;
	}

	public void setCardPayment(Boolean cardPayment) {
		this.cardPayment = cardPayment;
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

	public Integer getId() {
		return id;
	}
	
	
}
