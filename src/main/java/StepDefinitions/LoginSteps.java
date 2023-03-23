package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.apache.commons.collections.bag.SynchronizedSortedBag;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObjects.LoginPage;
import cucumber.api.java.en.*;

public class LoginSteps {

	WebDriver driver;
	LoginPage loginPage;

//	public LoginSteps(){
//		loginPage=new LoginPage(driver);
//	}
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page() {
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS );
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		driver.get("https://example.testproject.io/web/");

	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) {		
		loginPage =new LoginPage(driver);
		
		//loginPage.enterUserNameAndPassword(username, password);
		loginPage.enterUsername(username);
	    loginPage.enterPassword(password);
	}

	@When("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		loginPage.clickLogin();
	}

	@Then("^user navigate to  home page$")
	public void user_navigate_to_home_page() {

	
			driver.findElement(By.xpath("//button[@id='logout']")).isDisplayed();
			System.out.println("Udhay changed for push operatiion on 23.03.23 on  login application sucessfully code");
		
	}
	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.close();
		driver.quit();
	}
	
}
