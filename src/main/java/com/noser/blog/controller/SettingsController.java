package com.noser.blog.controller;

import com.noser.blog.api.WebsitePropertiesDTO;
import com.noser.blog.service.SettingsService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@Tag(name = "Settings")
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
	
	@PostMapping("settings")
	public WebsitePropertiesDTO saveProperties(@RequestBody WebsitePropertiesDTO websiteProperties) {
		this.settingsService.setWebsiteName(websiteProperties.getName());
		this.settingsService.setWebsiteTitle(websiteProperties.getTitle());
		this.settingsService.setLogoUrl(websiteProperties.getLogoUrl());
		return websiteProperties;
	}
}