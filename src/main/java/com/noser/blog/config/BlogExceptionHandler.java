package com.noser.blog.config;

    import org.springframework.http.HttpHeaders;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.ControllerAdvice;
    import org.springframework.web.bind.annotation.ExceptionHandler;

    import com.noser.blog.security.UnauthorizedException;

@ControllerAdvice
public class BlogExceptionHandler {

   @ExceptionHandler(value = { UnauthorizedException.class })
   public ResponseEntity<Object> handleException(UnauthorizedException ex) {
      return new ResponseEntity<Object>(
          ex.getMessage(), new HttpHeaders(), HttpStatus.FORBIDDEN);
   }
}
