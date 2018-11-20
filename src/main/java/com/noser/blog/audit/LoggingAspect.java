package com.noser.blog.audit;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;


@Aspect
@Component
@Slf4j
public class LoggingAspect {

  @Before("@annotation(EnableLogging)")
  public void enableLogging(final JoinPoint joinPoint) {
    log.warn("ENABLE LOGGING");
  }
  
  @Before("@annotation(EnableLogging2)")
  public void enableLogging2(final JoinPoint joinPoint) {
    log.warn("ENABLE LOGGING 2");
  }
  
}
