package com.example.chromeless;

import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;

public class dockerPageAutoLiker {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		for(int i=1;i<100;i++) {
			try {
				Thread t1=new Thread(new Runnable() {
					
					@Override
					public void run() {
						try {
							// TODO Auto-generated method stub
							ChromeOptions capabilities = new ChromeOptions();
							  
							 capabilities.addArguments("--no-sandbox");
							 capabilities.addArguments("--disable-dev-shm-usage");
							 capabilities.addArguments("--incognito");
							 RemoteWebDriver driver = new RemoteWebDriver
									 (new URL("http://localhost:4444/wd/hub"),capabilities);
							 
							 driver.get("https://docs.docker.com/get-started/");
							 
							 WebElement webElement=driver.findElement(By.id("PDRTJS_8453675_nero_1"));
							 webElement.click();
							 
							 driver.close();
						}
						catch (Exception e) {
							e.printStackTrace();
						}
						
					}
				});t1.start();
				
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
		 
	}

}
