package pl.kurs;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.Reader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;

public class HttpHelper {

	public static String doGet(String url) {
		return send("GET",url, null, null);
	}
	public static String doPost(String url,String message,String contentType) {
		return send("POST",url, message, contentType);
	}

	public static String send(String method,String url,String message,String contentType) {
		
		try{
			HttpURLConnection connection = (HttpURLConnection)new URL(url).openConnection();
			connection.setDoOutput(message!=null);
			connection.setRequestMethod(method);
			String userPassword = "prac:prac";
			String encoded = Base64Coder.encodeString(userPassword);
			connection.setRequestProperty ("Authorization", "Basic "+encoded);
			String charset = "UTF-8";
			connection.setRequestProperty("Accept-Charset", charset);
			
			if(message!=null) {
			connection.setRequestProperty("Content-Type", contentType);
			OutputStream output = null;
			try {
				output = connection.getOutputStream();
				output.write(message.getBytes(charset));
			} finally {
				if (output != null) try { output.close(); } catch (IOException ex) {ex.printStackTrace();}
			}
			}
			return getResponse(connection);
		}catch(Exception ex) {ex.printStackTrace();}
		return null;
	}

	private static String getResponse(URLConnection connection) throws IOException{
		InputStream response = connection.getInputStream();
		final char[] buffer = new char[0x10000];
		StringBuilder out = new StringBuilder();
		Reader in = new InputStreamReader(response, "UTF-8");
		int read;
		do {
			read = in.read(buffer, 0, buffer.length);
			if (read>0) {
				out.append(buffer, 0, read);
			}
		} while (read>=0);

		return out.toString();
	}


}
