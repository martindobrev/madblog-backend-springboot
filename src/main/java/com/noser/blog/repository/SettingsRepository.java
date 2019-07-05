package com.noser.blog.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.noser.blog.domain.Settings;

@Repository
public interface SettingsRepository extends CrudRepository<Settings, String> {
	
	Settings findOneByName(final String name);
	
}
