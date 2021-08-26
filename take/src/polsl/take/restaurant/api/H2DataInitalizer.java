package polsl.take.restaurant.api;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import polsl.take.restaurant.service.initializer.Config;

@Path("/h2")
@Consumes({ "application/json" })
@Produces({ "application/json" })
public class H2DataInitalizer {
	
	
	@EJB
	Config config;
	
	@GET
	public String setData() {
		return config.initializeData();
	}
}
