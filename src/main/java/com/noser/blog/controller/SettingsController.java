package com.noser.blog.controller;

import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.noser.blog.api.WebsitePropertiesDTO;
import com.noser.blog.service.SettingsService;

@RestController
@RequestMapping("/api/v1")
@Api(tags = "Settings")
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