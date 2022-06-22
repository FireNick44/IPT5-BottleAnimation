# Journal
## Eintrag #1

Mein Ziel war es, eine Animation für meine Flaschen zu machen. Ich dachte, dass ich mithilfe von Berechnungen und einem OOP-Konzept das Ganze umsetzten könnte. Ich wollte mit Hilfe der absoluten Position die Koordinaten abfangen und dann manipulieren. Leider ist es nicht so einfach, wenn man eine responsive Website macht, hilft "`Position: absolute;`" nicht wirklich weiter. Man könnte die Position der Flasche ermitteln und dann berechnen, wo welches Objekt ist. Jedoch ist diese Methode aus meiner Sicht eher für ein einzelnes Objekt gedacht. Da ich vor habe viele Fläschchen zu benutzen, ist diese Methode aus meiner Sicht unpassend. Deswegen habe ich die Objekte direkt im `viewpoint` der SVGs bearbeitet. So werden die Pfade des SVGs selbst bearbeitet und nicht das Objekt. Man kann somit viele Flaschen auf der Seite haben, die dazu responsiv bleiben.

## Eintrag #2

Die SVGs habe ich im `Adobe XD` erstellt und bearbeitet. `Adobe XD` bietet eine benutzerfreundliche Umgebung. Jedoch würde ich für ein "professionelles" SVG `Adobe Illustrator` empfehlen. Besonders mit den Koordinaten und den Gruppierungen gibt es in `Adobe XD` des Öfteren Probleme.

Um die Flasche zu bewegen, habe ich auf der Flasche zwei Flächen erstellt. _(links und rechts)_ Auf beiden Flächen wird ein Event im JavaScript aufgerufen, das dann die Position ändert. Als Erweiterung könnte man noch die Mausgeschwindigkeit abfangen und die Stärke der Bewegung definieren, leider hat mir für diese Erweiterung die Zeit und das Wissen gefehlt. Eine weitere Idee von mir war es ein Kreis um die Maus zu machen, der dann mit der Flasche interagiert. Das Umsetzen ist mir gelungen, jedoch interagiert der Kreis nicht mit der Flasche. Ich habe für die meisten Events die `mouseover` Funktion benutzt, welche nur für die Maus selbst verfügbar ist. Mein Kreis hat kein Kollusion-Event, weswegen ich mit meinen aktuellen Kenntnissen in JavaScript, nicht weiterkam. Weil das Resultat jedoch nicht ganz zufriedenstellend war, überlegte ich mir noch eine Alternative.

## Eintrag #3

Die Alternative war in meinem Fall die `Three.Js` und `Ammo.Js` Bibliotheken. Ich selbst kannte mich mit keiner dieser Bibliotheken aus, aber zum Glück gab es reichlich Informationen im Internet dazu. `Ammo.Js` ist eine Bibliothek, die mithilfe von `WebGL` ein dreidimensionales Interface erstellt. Mithilfe von `Ammo.Js` kann man diesem Raum dann auch noch Physik hinzufügen, `Ammo.Js` ist nämlich eine Art Add-on, dass für `Three.Js` eine weitere Bibliothek in JavaScript kompiliert.

 - Lustige Information von der Dokumentation:
 
   - `'ammo' stands for "Avoided Making My Own js physics engine by compiling bullet from C++" ;)`

 

## Eintrag #4

Als ich mit der 3D-Umgebung angefangen habe, wusste ich nicht wirklich worauf ich mich einlasse. Da ich auch schon in Virtual-Reality dreidimensionale Websiten gesehen habe dachte ich das es nicht so schwer sein könnte, wie sich herausstellte habe ich mich ein wenig getäuscht. Denn im Gegenteil zu der SVG Technologie ist `OpenGL` etwas komplizierter. In gewissen Browsern kann es zu sehr grossen Problemen kommen... Ich persönlich hatte in `Google Chrome` nicht besonders grosse Probleme, wobei sich die Performance etwas schlecht bei einem älteren PC verhielt. In `Mozilla Firefox` war die Leistung besser dafür gab es aber Objekte, die nicht erstellt werden konnten. Ich kenne mich mit `Three.Js` nicht besonders gut aus, aber ich vermute das es besonders bei älteren Computern mit einem schlechten Prozessor oder einer fehlenden Grafikkarte zu Problemen kommen kann. Wenn man Glück hat, kann ein top Smartphone die Seite rendern. Ob das jedoch bei jedem Mobiltelefon funktioniert, bezweifle ich.

## Eintrag #5 - Fazit

In meinem letzten Eintrag geht es um einen generellen Rückblick über mein Projekt. Zu Beginn wollte ich eine SVG-Animation machen und am Ende bin ich bei einer dreidimensionalen Engine gelandet. In meiner Projektarbeit habe ich eine grosse Menge an Informationen gesammelt und viele Bereiche der "JavaScript-Welt" entdeckt. Von normalen zweidimensionalen Animationen bis hin zu sehr neuartigen dreidimensionalen VR Welten. Ich habe einen grossen Einblick in die Welt des heutigen, aber auch zukünftigen Webbrowsers bekommen. Es ist kaum zu fassen, dass man heutzutage schon komplette Welten ganz einfach in einem Webbrowser aufrufen kann. Vor nicht ungefähr zehn Jahren hatte man über eine solche Entwicklungsrichtung wohl gelacht. Aber es funktioniert, wenn auch teilweise mit gewissen Problemen. Die Dokumentation der [Mozilla Foundation](https://developer.mozilla.org/de/docs/MDN) hat mir in vielen Punkten weitergeholfen. Ich konnte mich unter anderem in spannende und komplexe Themen einlesen.

_( `Viewpoint`, `mouseover`, `Dom-Events` )_


Kommen wir nun endlich zu meinem Fazit. Ich muss gestehen, dass ich mich mal wieder etwas überschätzt habe. Obwohl unsere Klasse sehr viele Abgaben hatte, wollte ich unbedingt die Tiefen von `HTML`, `CSS` und `JavaScript` erkunden. Ich interessiere mich sehr für diese Themen, weswegen ich mir auch ein klares Ziel gesetzt habe. Das nächste Mal müsste ich mich aber etwas besser über die Themenwahl informieren. Im Endeffekt hatte meine "Flaschen-Animation" eigentlich nicht viel mit einem objektorientierten Programm zu tun, trotzdem bin ich mit meinem Ergebnis zufrieden. Aus meiner Sicht habe ich in der verfügbaren Zeit sehr viel gelernt und entdeckt. Was unter dem Umstand des Semesterendes mehr als ausreichend ist. Mit dem gesammelten Wissen sehe ich mich imstande dazu ein professionelles Webportfolio zu erstellen. Zusammenfassend habe ich in diesem Projekt viel gelernt, das ich auch in Zukunft verwenden werde. Es gab einige Probleme, aber am Ende habe ich aus jedem Problem gelernt.
