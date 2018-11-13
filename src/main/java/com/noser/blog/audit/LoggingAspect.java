package com.noser.blog.audit;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import java.security.Principal;

@Aspect
@Component
@Slf4j
public class LoggingAspect {

  @AfterReturning(pointcut = "@annotation(EnableLogging)", returning = "result")
  public void enableLogging(final JoinPoint joinPoint, final Object result) {
    final Long id = (Long) joinPoint.getArgs()[0];
    final Principal principal = (Principal) joinPoint.getArgs()[1];

    log.info("ID: {}, Principal: {}", id, principal);
  }
}
