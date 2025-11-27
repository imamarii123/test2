Kreiranje repozitorija na GitHubu s README.md.

Kloniranje repozitorija na lokalno računalo. – git clone [link]

cd [naziv repozitorija]

code .

Izmjena i Slanje README.md – dodam url u njega  i ctrl  s 

git add . -> git commit -m "docs: Inicijalni README" -> git push

npm init quasar  u C:\Projekti\naziv repozitorija>

Instalacija svih Node paketa - cd [naziv repozitorija] -> npm install

Pokretanje razvojnog servera - quasar dev - C:\Projekti\naziv repozitorija\naziv quasar projekta>

Faza 3: Izrada Stranice i Logika Rutiranja

Stvaranje nove stranice. - src/pages/PlanPutovanjePage.vue

Dodavanje slike(opcionalno) – prvo stavi sliku u src/assets

Postavljanje Rute (Kritično) - src/router/routes.js

Dodavanje Linkova - src/layouts/MainLayout.vue

Git Finalizacija

Ctrl + C

cd .. C:\Projekti\ime repozitorija>

git add .

git commit -m "Kompletiran Quasar projekat Odmor sa PlanPutovanjePage"

git push


Ako prof da projekt vec napravljen n

1.Preuzimanje Projekta (ako ga niste klonirali).

2. Ulazak u Projekt cd naziv projekta

3.code .

4. npm install

5. quasar dev

6. Čitanje Greške: Gledajte terminal (Quasar greške) i preglednik (F12 Console).

7. Popravite sintaksu, zareze, putanje (~assets/slika.jpg), ili kod rute u routes.js.

8. git status

9. git add .

10. git commit -m "fix: Popravljena greska u ruti i navigaciji prema zahtjevu."

11.git push

