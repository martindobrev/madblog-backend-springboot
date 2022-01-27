# Alpine Linux with OpenJDK JRE
FROM openjdk:11-jre
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
CMD ["java", "-jar", "/app.jar"]