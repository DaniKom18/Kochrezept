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
2. **Security** Nur Angemeldete Nutzer können die Seite betreten
3. **Rezepterstellung**: Nutzer können eigene Rezepte erstellen.
4. **Bearbeitung eigener Rezepte**: Nutzer können ihre eigenen Rezepte bearbeiten.
5. **Löschung eigener Rezepte**: Nutzer haben die Möglichkeit, ihre eigenen Rezepte zu löschen.
6. **Anonymitätsoption für Autoren**: Nutzer können wählen, ob sie als Autor eines Rezeptes anonym bleiben möchten.
7. **Privatsphäre-Einstellungen für Rezepte**: Nutzer können ihre Rezepte öffentlich machen oder wieder privat setzen.
8. **Privater Rezepte-Bereich**: Jeder Nutzer verfügt über einen privaten Bereich für seine Rezepte wo er seine Rezepte verwalten kann.
9. **Öffentlicher Rezepte-Bereich**: Hier werden nur Rezepte gezeigt die auf Öffentlich gestellt wurden.
10.  **Suchfunktion**: Rezepte können anhand von Namen gesucht werden.
11. **Master-Page für jedes Rezept**: Eine umfassende Seite für alle Details eines Rezeptes sowie auch die Kommentare von Benutzern. 
12.  **Kommentarfunktion**: Nutzer können Rezepte kommentieren.
13. **Bewertungssystem**: Nutzer können Rezepte bewerten.
14. **Bewertungssystem**: Wenn ein Nutzer ein Rezept bewertet, wird die Bewertung die der Benutzer abgegeben hat angezeigt selbst wenn er zu einem späteren Zeitpunkt das Rezept wieder öffnet.
15. **Bewertungssystem**: Jedes Rezept zeigt den Durchschnitt aller Bewertungen
16. **Favorisieren von Rezepten**: Nutzer können Rezepte, einschließlich ihrer eigenen, als Favoriten speichern.
17. **Jedes erstellte Rezept gibt 10xp, die XP werden im UserProfil angezeigt**:
18. **Level Anzeige**: Nachdem ein User 100xp erreicht, wird sein Level erhöht und die Xp wieder auf 0 gesetzt
19. **LeaderBoard** Hier werden die Top 10 User angezeigt mit dem höchsten Level


# Kochrezept starten

1. Termial: docker compose up
2. Lokal: [localhost:4200](http://localhost:4200/)

