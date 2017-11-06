package faceCast;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

public class TestUnit {

	JsonNode body;
	HttpResponse<JsonNode> response;
	HttpResponse<JsonNode> responseExtra;

	@Before
	public void setUp() throws UnirestException {

		response = Unirest.get("http://localhost:3000/rest/candidacy").asJson();
		body = response.getBody();
		responseExtra = Unirest.get("http://localhost:3000/rest/extra").asJson();
		
	}
	
	@Test
	public void testIdExtraAndIdOffer() {

		// Test IdExtra
		assertEquals("59f1dbd830e2ea92834cc568", body.getArray().getJSONObject(0).getString("idExtra"));
		// Test IdOffer
		assertEquals("59fed81b069a78003b0bc631", body.getArray().getJSONObject(0).getString("idOffer"));

		

	}
	@Test
	public void testEtat() {

		assertNotNull(response);
		assertEquals("Waiting", body.getArray().getJSONObject(0).getString("etat"));
	}

	@Test
	public void myApplications() {
		try {
			HttpResponse<JsonNode> responseCandidacy = Unirest
					.get("http://localhost:3000/rest/candidacy/59f1dbd830e2ea92834cc568").asJson();
			assertEquals(2, responseCandidacy.getBody().getArray().length());
		} catch (UnirestException e) {
			// TODO Auto-generated catch block
			fail("Error : number of objects in the json");
			e.printStackTrace();
		}

	}
	

	
	
}
