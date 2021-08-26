package polsl.take.restaurant;

import java.io.File;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/file")
public class FileService {
	
	// Change path to wildfly
	//private static final String basePath = "c:/Users/Marcin Rogo¿/Documents/TAKE/take/wildfly-10.1.0.Final";
	private static final String basePath = "C:/take/wildfly-10.1.0.Final";
	@GET
	@Path("{filepath: .*}")
	@Produces("text/plain")
	public File getFile(@PathParam("filepath") String path) {
		return new File(basePath + path);
	}
}