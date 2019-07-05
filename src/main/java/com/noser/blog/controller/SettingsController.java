package com.noser.blog.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.noser.blog.api.WebsitePropertiesDTO;
import com.noser.blog.service.SettingsService;

@RestController
@RequestMapping("/api/v1")
public class SettingsController {

	private final SettingsService settingsService;

	public SettingsController(SettingsService settingsService) {
		this.settingsService = settingsService;
	}
	
	@GetMapping("settings")
	public WebsitePropertiesDTO getProperties() {
		return WebsitePropertiesDTO.builder()
				.name(settingsService.getWebsiteName())
				.title(settingsService.getWebsiteTitle())
				.version(settingsService.getVersion())
				.logoUrl(settingsService.getLogoUrl())
				.build();
	}
	
	
	
}
