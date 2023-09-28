package com.noser.blog.config;

import com.hazelcast.config.*;
import org.springframework.context.annotation.Bean;

public class HazelcastCacheConfig {
	
	@Bean
    public Config hazelCastConfig(){
        Config config = new Config();
        config.setInstanceName("thumbnails")
                .addMapConfig(
                        new MapConfig()
                                .setName("configuration")
                                .setEvictionConfig(new EvictionConfig().setMaxSizePolicy(MaxSizePolicy.FREE_HEAP_SIZE))
.setTimeToLiveSeconds(-1));
        return config;
    }
}
