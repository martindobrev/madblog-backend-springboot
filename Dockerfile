# Alpine Linux with OpenJDK JRE
FROM openjdk:17-buster
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
EXPOSE 8000
CMD ["java", "-jar", "/app.jar"]