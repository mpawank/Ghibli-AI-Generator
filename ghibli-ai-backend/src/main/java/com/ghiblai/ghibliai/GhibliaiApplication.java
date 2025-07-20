package com.ghiblai.ghibliai;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;


@SpringBootApplication
@EnableFeignClients
public class GhibliaiApplication {

	public static void main(String[] args) {
		SpringApplication.run(GhibliaiApplication.class, args);
	}

}
