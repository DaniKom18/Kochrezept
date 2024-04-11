# Online Kochrezepte Projekt

## Technologien

- **Java Spring Boot**: Hauptbackend-Technologie.
  - **Testing**: SoapUI (Wird dann in CI/CD integriert)
- **Angular**: Frontend-Framework.
  - **UI Component Library**: PrimeNg für anspruchsvolle User Interfaces.
  - **Testing**: Unit Tests
  - **Clients durch OpenApi generieren**: Automatische Erstellung von Frontend-Clients basierend auf der OpenAPI-Spezifikation.
- **MySql**: Datenbanksystem für die Speicherung aller Daten.
- **Security**: KeyCloak -> Anmelden/Abmelden + JWT für Kommunikation zwischen Frontend und Backend

## Anmerkung

In Spring Boot sollten 2 Profile vorhanden sein, zum einem ein Test Profil und zum anderen ein Production Profil.
Das Test Profil validiert keine JWT, damit SOAPUI Tests möglich sind ohne JWT.
Das Prod profil sollte hingegen die JWT validieren.


## Funktionale Anforderungen

1. **Anmelden/Abmelden in einen Account**: Nutzer können sich in ihren Account ein- und ausloggen.
2. **Rezepterstellung**: Nutzer können eigene Rezepte erstellen.
3. **Anonymitätsoption für Autoren**: Nutzer können wählen, ob sie als Autor eines Rezeptes anonym bleiben möchten.
4. **Bearbeitung eigener Rezepte**: Nutzer können ihre eigenen Rezepte bearbeiten.
5. **Löschung eigener Rezepte**: Nutzer haben die Möglichkeit, ihre eigenen Rezepte zu löschen.
6. **Privater Rezepte-Bereich**: Jeder Nutzer verfügt über einen privaten Bereich für seine Rezepte.
7. **Öffentlicher Rezepte-Bereich**: Zugang zum öffentlichen Bereich, wo Rezepte mit allen geteilt werden.
8. **Master-Page für jedes Rezept**: Eine umfassende Seite für alle Details eines Rezeptes.
9. **Privatsphäre-Einstellungen für Rezepte**: Nutzer können ihre Rezepte öffentlich machen oder wieder privat setzen.
10. **Suchfunktion**: Rezepte können anhand von Zutaten oder Namen gesucht werden.
11. **Bewertungssystem**: Nutzer können Rezepte bewerten.
12. **Kommentarfunktion**: Nutzer können Rezepte kommentieren.
13. **Favorisieren von Rezepten**: Nutzer können Rezepte, einschließlich ihrer eigenen, als Favoriten speichern.
14. **Teilen von Rezepten**: Rezepte können geteilt werden, sofern sie öffentlich sind.
15. **Account-Löschung**: Nutzer können ihren Account löschen.
16. **Benutzernamen ändern**: Nutzer haben die Möglichkeit, ihren Benutzernamen zu ändern.
17. **XP Balken anzeige basierend auf dem erhaltenen Sternen**:
18. **Anzeige von Levels im User-Profil**: Abhängig von XP
19. **LeaderBoard von den höchsten 10 Level**
20. **Feedback zu Rezeptbewertungen**: Anzeige darüber, wie viele Nutzer ein Rezept bewertet haben und der Durchschnitt der Sternebewertungen.
