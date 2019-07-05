package com.noser.blog.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import lombok.extern.slf4j.Slf4j;

/**
 * Just a test controller
 * 
 * Does nothing useful for now
 * 
 * @author martin
 */
@RestController
@RequestMapping("/messages")
@Slf4j
public class SseEmitterController {
	
	private final static List<SseEmitter> emitters = new ArrayList<>();
	
	@GetMapping("/sse")
	public SseEmitter handleSse() {
		
		SseEmitter emitter = new SseEmitter();
		log.info("Listening on sse: {}", emitter);
		
        emitters.add(emitter);
        emitter.onCompletion(() -> emitters.remove(emitter));
        emitter.onError((error) -> {
        	log.info("Something went wrong: {}", error);
        	emitters.remove(emitter);
        });

        return emitter;
	}
	
	@PostMapping("/send")
	public void sendMessage(@RequestBody final String message) {
		List<SseEmitter> sseEmitterListToRemove = new ArrayList<>();
		SseEmitterController.emitters.forEach((SseEmitter emitter) -> {
            try {
            	emitter.send(message);
            } catch (IOException e) {
                emitter.complete();
                sseEmitterListToRemove.add(emitter);
                e.printStackTrace();
            }
        });
		SseEmitterController.emitters.removeAll(sseEmitterListToRemove);
	}
 
}
