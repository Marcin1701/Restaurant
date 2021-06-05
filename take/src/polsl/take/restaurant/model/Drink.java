package polsl.take.restaurant.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "drinks")
public class Drink implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue
	private Integer id;

	private String name;
	
	private Character alcohol;
	
	@ManyToOne
	@JoinColumn(name = "order_id")
	private Order orderId;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Character getAlcohol() {
		return alcohol;
	}

	public void setAlcohol(Character alcohol) {
		this.alcohol = alcohol;
	}

	public Order getOrderId() {
		return orderId;
	}

	public void setOrderId(Order orderId) {
		this.orderId = orderId;
	}

	public Integer getId() {
		return id;
	}
	
	
}
