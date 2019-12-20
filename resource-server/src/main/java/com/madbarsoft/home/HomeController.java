package com.madbarsoft.home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class HomeController {

	@GetMapping({ "/list" })
	public String testMsg() {

		return "This is form Home Congroller";
		
		
	}
	
	

}
