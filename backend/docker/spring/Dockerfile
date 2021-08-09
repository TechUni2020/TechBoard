FROM adoptopenjdk/openjdk11:latest
VOLUME /tmp
WORKDIR /app
COPY . .
RUN ./mvnw install && cp target/*.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
