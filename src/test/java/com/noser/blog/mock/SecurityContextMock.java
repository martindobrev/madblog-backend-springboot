package com.noser.blog.mock;


import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;

public class SecurityContextMock {
	
	public static SecurityContext createAnonymousContext() {
		return new MockSecurityContext(new AnonymousAuthentication());
	}
	
	static class MockSecurityContext implements SecurityContext {

		private static final long serialVersionUID = 1L;
		
		private final Authentication authentication;
		
		public MockSecurityContext(final Authentication authentication) {
			this.authentication = authentication;
		}
		
		@Override
		public Authentication getAuthentication() {
			return this.authentication;
		}

		@Override
		public void setAuthentication(Authentication authentication) {
		}
	}
	
	

}
