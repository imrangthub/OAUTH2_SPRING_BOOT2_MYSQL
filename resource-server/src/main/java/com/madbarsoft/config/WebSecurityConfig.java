package com.madbarsoft.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
 		http.authorizeRequests()
 				.antMatchers("/").permitAll()
 			    .antMatchers("/home").permitAll()
 				//.antMatchers("/home").hasRole("ADMIN")
	     		.antMatchers("/admin/**").hasRole("ADMIN")
 				.antMatchers("/user/**").hasAnyAuthority("USER","ADMIN")
 				.anyRequest()
 				.authenticated().and().csrf().disable();			
	}


}
