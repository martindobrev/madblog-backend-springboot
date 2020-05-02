# Alpine Linux with OpenJDK JRE
FROM openjdk:11-jre

COPY target/blog-0.3.8-SNAPSHOT.jar /blog-0.3.8-SNAPSHOT.jar

CMD ["java", "-jar", "/blog-0.3.8-SNAPSHOT.jar"]