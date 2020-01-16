package com.noser.blog.security;

import com.noser.blog.config.BlogProperties;
import com.noser.blog.repository.ArticleRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.fail;

@ExtendWith({MockitoExtension.class, SpringExtension.class})
@ContextConfiguration
class SecurityAspectTest {

   @Mock
   BlogProperties blogProperties;

   @Mock
   ArticleRepository articleRepository;

   @InjectMocks
   SecurityAspect aspectUnderTest;

   @Test
   @WithMockUser(username = "test", authorities = {"user", "admin"})
   void testCheckGetAllFilesPermissionWorks() {

      // when(articleRepository)


      try {
         aspectUnderTest.checkGetAllFilesPermission(null, null);
      } catch (UnauthorizedException e) {
         fail("Unauthorized USER ACCESS");
      }
   }
}