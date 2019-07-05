package com.noser.blog.service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.ArgumentMatchers;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.noser.blog.domain.Settings;
import com.noser.blog.repository.SettingsRepository;

public class DBSettingsServiceTest {
	
	private static final String TEST_LOGO_URL = "TEST_LOGO_URL";
	private static final String TEST_WEBSITE_NAME = "TEST_WEBSITE_NAME";
	private static final String TEST_WEBSITE_TITLE = "TEST_WEBSITE_TITLE";
	
	@Mock
	private SettingsRepository mockSettingsRepository;
	
	@Captor 
	ArgumentCaptor<Settings> settingsCaptor;
	
	@Captor
	ArgumentCaptor<String> stringCaptor; 
	
	private DBSettingsService serviceUnderTest;
	
	@Before
	public void setUp() {
		MockitoAnnotations.initMocks(this);
		
		when(mockSettingsRepository.existsById(
				ArgumentMatchers.any(String.class))
		).thenReturn(true);
		
		when(mockSettingsRepository.findOneByName(
				ArgumentMatchers.any(String.class))
		).thenReturn(Settings.builder().name("TEST").value("TEST").build());
		
		serviceUnderTest = new DBSettingsService(mockSettingsRepository);
	}
	
	@Test
	public void testSaveNameCallsRepository() {
		serviceUnderTest.setWebsiteName(TEST_WEBSITE_NAME);
		verify(mockSettingsRepository, times(1)).save(settingsCaptor.capture());
		assertEquals(SettingsService.WEBSITE_NAME, settingsCaptor.getValue().getName());
		assertEquals(TEST_WEBSITE_NAME, settingsCaptor.getValue().getValue());
	}
	
	@Test
	public void testGetNameCallsRepository() {
		serviceUnderTest.getWebsiteName();
		verify(mockSettingsRepository, times(1)).findOneByName(stringCaptor.capture());
		assertEquals(SettingsService.WEBSITE_NAME, stringCaptor.getValue());
	}
	
	@Test
	public void testSaveTitleCallsRepository() {
		serviceUnderTest.setWebsiteTitle(TEST_WEBSITE_TITLE);
		verify(mockSettingsRepository, times(1)).save(settingsCaptor.capture());
		assertEquals(SettingsService.WEBSITE_TITLE, settingsCaptor.getValue().getName());
		assertEquals(TEST_WEBSITE_TITLE, settingsCaptor.getValue().getValue());
	}
	
	@Test
	public void testGetTitleCallsRepository() {
		serviceUnderTest.getWebsiteTitle();
		verify(mockSettingsRepository, times(1)).findOneByName(stringCaptor.capture());
		assertEquals(SettingsService.WEBSITE_TITLE, stringCaptor.getValue());
	}
	
	@Test
	public void testSaveLogoCallsRepository() {
		serviceUnderTest.setLogoUrl(TEST_LOGO_URL);
		verify(mockSettingsRepository, times(1)).save(settingsCaptor.capture());
		assertEquals(SettingsService.LOGO_URL, settingsCaptor.getValue().getName());
		assertEquals(TEST_LOGO_URL, settingsCaptor.getValue().getValue());
	}
	
	@Test
	public void testGetLogoUrlCallsRepository() {
		serviceUnderTest.getLogoUrl();
		verify(mockSettingsRepository, times(1)).findOneByName(stringCaptor.capture());
		assertEquals(SettingsService.LOGO_URL, stringCaptor.getValue());
	}
	
	
}
