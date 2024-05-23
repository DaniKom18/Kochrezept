# Verwende ein OpenJDK-Basisimage
FROM openjdk:17-oracle

# Setze Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere die kompilierte Anwendung in den Container
COPY target/Kochrezept-Backend-0.0.1-SNAPSHOT.jar /app/Kochrezept-Backend.jar

EXPOSE 8081

# Befehl, der beim Starten des Containers ausgeführt wird
CMD ["java", "-jar", "Kochrezept-Backend.jar"]
