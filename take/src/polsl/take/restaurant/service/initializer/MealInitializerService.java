package polsl.take.restaurant.service.initializer;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class MealInitializerService {
	
	@PersistenceContext(name="meal")
	EntityManager manager;
	
	public void init() {
		
	}
}
