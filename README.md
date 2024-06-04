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
11. **Master-Page für jedes Rezept**: Eine umfassende Seite für alle Details eines Rezeptes.
12. **Master-Page für jedes Rezept zeigt Kommentare von Usern**
13.  **Kommentarfunktion**: Nutzer können Rezepte kommentieren.
14. **Bewertungssystem**: Nutzer können Rezepte bewerten.
15. **Bewertungssystem**: Wenn ein Nutzer ein Rezept bewertet, wird die Bewertung die der Benutzer abgegeben hat angezeigt.
16. **Bewertungssystem**: Berechnung des Durchschnitts Rating für ein Rezept
17. **Favorisieren von Rezepten**: Nutzer können Rezepte, einschließlich ihrer eigenen, als Favoriten speichern.
18. **XP Balken anzeige basierend auf den erstellten Rezepten**:
19. **Anzeige von Levels im User-Profil**: Abhängig von XP
20. **LeaderBoard von den höchsten 10 Level**


# Kochrezept starten

1. Termial: docker compose up
2. Lokal: [localhost:4200](http://localhost:4200/)

