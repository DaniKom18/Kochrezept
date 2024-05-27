# Online Kochrezepte Projekt

## Technologien

- **Java Spring Boot**: Hauptbackend-Technologie.
  - **Testing**: Unit Tests
- **Angular**: Frontend-Framework.
  - **UI Component Library**: PrimeNg
  - **Testing**: Unit Tests
- **H2 Database**: integriert in Spring Boot
- **Security**: KeyCloak -> Anmelden/Abmelden


## Funktionale Anforderungen

1. **Anmelden/Abmelden in einen Account**: Nutzer können sich in ihren Account ein- und ausloggen.
2. **Rezepterstellung**: Nutzer können eigene Rezepte erstellen.
3. **Bearbeitung eigener Rezepte**: Nutzer können ihre eigenen Rezepte bearbeiten.
4. **Löschung eigener Rezepte**: Nutzer haben die Möglichkeit, ihre eigenen Rezepte zu löschen.
5. **Anonymitätsoption für Autoren**: Nutzer können wählen, ob sie als Autor eines Rezeptes anonym bleiben möchten.
6. **Privatsphäre-Einstellungen für Rezepte**: Nutzer können ihre Rezepte öffentlich machen oder wieder privat setzen.
7. **Privater Rezepte-Bereich**: Jeder Nutzer verfügt über einen privaten Bereich für seine Rezepte wo er seine Rezepte verwalten kann.
8. **Öffentlicher Rezepte-Bereich**: Hier werden nur Rezepte gezeigt die auf Öffentlich gestellt wurden.
9. **Master-Page für jedes Rezept**: Eine umfassende Seite für alle Details eines Rezeptes.
10. **Suchfunktion**: Rezepte können anhand von Namen gesucht werden.
11. **Bewertungssystem**: Nutzer können Rezepte bewerten.
12. **Rating eines Rezeptes**: Berechnung des Durchschnitts der vorhandenen User Ratings
13. **Kommentarfunktion**: Nutzer können Rezepte kommentieren.
14. **Favorisieren von Rezepten**: Nutzer können Rezepte, einschließlich ihrer eigenen, als Favoriten speichern.
15. **XP Balken anzeige basierend auf den erstellten Rezepten**:
16. **Anzeige von Levels im User-Profil**: Abhängig von XP
17. **LeaderBoard von den höchsten 10 Level**


# Kochrezept starten

1. Termial: docker compose up
2. Lokal: [localhost:4200](http://localhost:4200/)

