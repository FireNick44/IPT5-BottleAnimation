<p align="right"> [ <a href="./README.md"> EN </a> ] </p>

# IPT5-BottleAnimation

```
In Arbeit, keine Vorschau verfügbar
```

## Einleitung
In mein [Webportfolio](https://github.com/FireNick44/webportfolio) wollte ich eine Animation an meine Fläschchen binden. Um Verwirrung zu vermeiden und damit mein IPT5 Projekt getrennt von meinem Portfolio ist, habe ich dieses Repository erstellt.
Viele Informationen, die es hier gibt, sind nur wichtig für meine IPT5 Arbeit.

_(An meiner Schule gibt es integrierte Praxisteile, sogenannte IPTs.)_

## Mockup
Eine statische Version meiner Designidee gibt es in einem anderen [Repository](https://github.com/FireNick44/webportfolio). <br> Meine Idee liegt darin, dass man auf der Desktopversion, mithilfe einer Mausbewegung die Fläschchen bewegen kann.

## Wie es gemacht ist
Die Animation wird selbstverständlich mit JavaScript gemacht. Zuerst wollte ich die [Matter.js](https://brm.io/matter-js/) Bibliothek benutzen, jedoch bietet diese Bibliothek viel zu viele Features an. Deswegen habe ich mich dazu entschieden, alles selbst in JavaScript zu schreiben.


## Unterstützte Browser
Einen guten Browser Support ist mir sehr wichtig, weswegen ich es auf allen Geräten gut umsetzen möchte. Auf jeglichen Desktop PCs sollte das kein Problem sein. Auf einem Mobilen Browser werde ich wahrscheinlich eine statische Animation benutzen. Alternativ vielleicht einen Schütteleffekt, der aktiviert wird, sobald man mit dem Finger auf eine Flasche klickt.

Für mehr Informationen können Sie gerne mein [Webportfolio](https://github.com/FireNick44/webportfolio) Repository besuchen.

## User Storys

| Nr |         Titel         |                                                     Story                                                      |                                    Abnahmekriterium                                      |
|----|-----------------------|----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| 1. | Flüssige Animation    | Als Website Ersteller möchte ich allen Benutzer eine schöne Animation bieten, die nicht ruckeln soll.          | Die Animationen sind auf allen Geräten flüssig und funktionieren.                        |
| 2. | Kurze Ladezeit        | Als Besucher möchte ich die Seite schnell sehen, ohne darüber nachzudenken, was sich auf der Seite befindet.   | Die Animation braucht nicht viel Speicherplatz und kann schnell heruntergeladen werden.  |
| 3. | Benutzererfahrung     | Als Website Besucher möchte ich eine überraschende Erfahrung erleben, wenn ich auf ein Portfolio komme.        | Das Portfolio ist einzigartig und bietet ein beeindruckendes Erlebnis.                    |

## Priorisierung

1. Ein Ergebnis, das funktioniert
2. Aussehen der Animation
3. Guter Code
4. Makelloses Ergebnis für einen Perfektionisten
5. Schlaf ;)

## Journal
[Zum Journal [DE] ](./JOURNAL_DE.md)

## Bekannte Probleme

```
Immernoch im Bau ;)
```

## Installation

Klonen Sie das Projekt oder laden Sie es herunter, danach öffnen Sie das Projekt in Visual Studio Code. Für die 2D-Animation im Ordner [BottleAnimation](./BottleAnimation) werden keine externen Bibliotheken benötigt.
Für die 3D-Animation in den Ordnern [Three](./Three) und [WorkingThreeBase](./WorkingThreeBase) benötigen Sie jedoch einige Module.  Aus Speicher- und Datenschutzgründen gibt es keinen node-modules-Ordner. Daher muss man die folgenden Module manuell installieren.


### Abhängigkeiten:

 - vite
 - three


### Projekt Installation

Installation: _(fügen Sie den folgenden Code in ein Bash- oder Git-Terminal ein.)_

```
npm install vite three
```

### Projekt Ausführung 

```
npm run dev
```

### Seite auf Port 8000 aufrufen
```
http://localhost:8000/
```

## Lizenz
Projekt ist [MIT lizenziert](./LICENSE)
