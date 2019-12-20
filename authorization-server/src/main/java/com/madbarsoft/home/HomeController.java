package com.madbarsoft.home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/home")
public class HomeController {
	
	@GetMapping("/list")
	public String index(){
		
		System.out.println("From Home Controller");
		
		return  "From Home Controller";
				
	}
	
	

}
