package com.noser.blog.service;

import org.springframework.stereotype.Service;

import com.noser.blog.domain.Settings;
import com.noser.blog.repository.SettingsRepository;

@Service
public class DBSettingsService implements SettingsService {
	
	private final SettingsRepository settingsRepository;
	
	
	public DBSettingsService(SettingsRepository settingsRepository) {
		this.settingsRepository = settingsRepository;
	}

	@Override
	public String getWebsiteName() {
		if (!this.settingsRepository.existsById(SettingsService.WEBSITE_NAME)) { 
			return null;
		}
		
		return this.settingsRepository
				.findOneByName(SettingsService.WEBSITE_NAME).getValue();
	}

	@Override
	public void setWebsiteName(String name) {
		Settings settings = Settings.builder()
			.name(SettingsService.WEBSITE_NAME)
			.value(name).build();
		this.settingsRepository.save(settings);
	}

	@Override
	public String getWebsiteTitle() {
		if (!this.settingsRepository.existsById(SettingsService.WEBSITE_TITLE)) {
			return null;
		}
		
		return this.settingsRepository
				.findOneByName(SettingsService.WEBSITE_TITLE).getValue();
	}

	@Override
	public void setWebsiteTitle(String title) {
		Settings settings = Settings.builder()
				.name(SettingsService.WEBSITE_TITLE)
				.value(title)
				.build();
		this.settingsRepository.save(settings);
	}

	@Override
	public String getVersion() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getLogoUrl() {
		if (!this.settingsRepository.existsById(SettingsService.LOGO_URL)) {
			return null;
		}
		
		return this.settingsRepository
				.findOneByName(SettingsService.LOGO_URL).getValue();
	}

	@Override
	public void setLogoUrl(String url) {
		Settings settings = Settings.builder()
				.name(SettingsService.LOGO_URL)
				.value(url)
				.build();
		this.settingsRepository.save(settings);
	}

}
