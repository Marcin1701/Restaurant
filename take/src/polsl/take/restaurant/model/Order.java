package polsl.take.restaurant.model;

import java.io.Serializable;
import java.sql.Timestamp;
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
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

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
	private Timestamp orderDate;
	
	@Column(name = "card_payment")
	private Boolean cardPayment;
	
	@Column(name = "order_table")
	private Integer table;
	
	@Column(name = "take_away")
	private Boolean takeAway;
	
	@OneToMany(mappedBy = "orderId", fetch= FetchType.EAGER)
	@Fetch(value = FetchMode.SELECT)
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
	
	@JsonBackReference(value="order-customer")
	public Customer getCustomerrr() {
		return customerrr;
	}

	public void setCustomerId(Customer customerrr) {
		this.customerrr = customerrr;
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

	@JsonManagedReference(value = "order-meal")
	public List<Meal> getMealList() {
		return mealList;
	}

	public void setMealList(List<Meal> mealList) {
		this.mealList = mealList;
	}
/*	
	@Override
    public String toString() {
        return "xd";
    }*/
}
