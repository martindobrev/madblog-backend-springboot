# Alpine Linux with OpenJDK JRE
FROM openjdk:11-jre

COPY target/blog-0.3.7-SNAPSHOT.jar /blog-0.3.7-SNAPSHOT.jar

CMD ["/usr/bin/java", "-jar", "/blog-0.3.7-SNAPSHOT.jar", "--blog.security-disabled=true", "--spring.profiles.active=default"]