package polsl.take.restaurant.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "orders")
public class Order implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "order_id")
	private Integer orderId;

	@Column(name = "prices")
	private Float price;
	
	@ManyToOne(fetch= FetchType.EAGER)
	@JoinColumn(name = "customer_id")
	private Customer customerrr;
	
	@Column(name = "order_date")
	private String orderDate;
	
	@Column(name = "card_payment")
	private Boolean cardPayment;
	
	@Column(name = "order_table")
	private Integer table;
	
	@Column(name = "take_away")
	private Boolean takeAway;
	
	@OneToMany(mappedBy = "orderId", fetch= FetchType.EAGER)
	@Fetch(value = FetchMode.SELECT)
	private List<Meal> mealList;
	
	@Column(name = "meal_names")
	private String mealNames;

	public Order() {}
	
	public Order(Float price, String orderDate, Boolean cardPayment, Integer table, Boolean takeAway) {
		this.price = price;
		this.orderDate = orderDate;
		this.cardPayment = cardPayment;
		this.table = table;
		this.takeAway = takeAway;
	}
	
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
	
	@JsonBackReference(value="order-customer")
	public Customer getCustomerrr() {
		return customerrr;
	}

	public void setCustomerId(Customer customerrr) {
		this.customerrr = customerrr;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
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

	@JsonManagedReference(value = "order-meal")
	public List<Meal> getMealList() {
		return mealList;
	}

	public void setMealList(List<Meal> mealList) {
		this.mealList = mealList;
	}
	
	public String getMealNames() {
		return this.mealNames;
	}
	
	public void setMealNames(String mealNames) {
		this.mealNames = mealNames;
	}
	
/*	
	@Override
    public String toString() {
        return "xd";
    }*/
}
