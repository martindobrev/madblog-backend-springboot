package com.noser.blog.config;

import org.springframework.context.annotation.Bean;

import com.hazelcast.config.Config;
import com.hazelcast.config.EvictionPolicy;
import com.hazelcast.config.MapConfig;
import com.hazelcast.config.MaxSizeConfig;

public class HazelcastCacheConfig {
	
	@Bean
    public Config hazelCastConfig(){
        Config config = new Config();
        config.setInstanceName("thumbnails")
                .addMapConfig(
                        new MapConfig()
                                .setName("configuration")
                                .setMaxSizeConfig(new MaxSizeConfig(200, MaxSizeConfig.MaxSizePolicy.FREE_HEAP_SIZE))
                                .setEvictionPolicy(EvictionPolicy.LRU)
.setTimeToLiveSeconds(-1));
        return config;
    }
}
