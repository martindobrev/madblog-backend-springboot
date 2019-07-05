package com.noser.blog.service;

public interface SettingsService {
	
	String WEBSITE_NAME = "WEBSITE_NAME";
	String WEBSITE_TITLE = "WEBSITE_TITLE";
	String VERSION = "VERSION";
	String LOGO_URL = "LOGO_URL";
	
	String getWebsiteName();
	void setWebsiteName(final String name);
	
	String getWebsiteTitle();
	void setWebsiteTitle(final String name);
	
	String getVersion();
	
	String getLogoUrl();
	void setLogoUrl(final String url);

}
