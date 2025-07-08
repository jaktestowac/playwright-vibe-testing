
Copilot
   1. Agent mode  
   2. GPT-4-1  

Ustawienie Projektu
1. [Weryfikacja chatu] Hi!
2. Run playwright test init command:   
   1. npm init playwright@latest  
3. Run tests   
4. Initialise repository  
5. clean up playwright configuration form comments and browsers (leave only chrome)  
6. **Run tests and make commit if pass**  
7. Set test timeout to 10s and traces always on  
8. Remove all example tests and leave only one  
9. Create rules for copilot in .github/[copilot-instructions.md](http://copilot-instructions.md)  
10. Make simple description of rules about using conventional commits  
11. Add rule to run all tests before commit  
12. When I say commit try to run test before it \- add this to rules to never commit without running tests

Pierwsze testy
1. Set base url as [https://eventbugai.onrender.com/](https://eventbugai.onrender.com/)  
2. Przygotuj prosty Smoke test dla aplikacji którą obecnie mamy ustawione w konfiguracji  
3. Dodaj do konfiguracji playwright ustawienie aby raport html nie uruchamiał się gdy testy zakończyły się niepowodzeniem  
4. Psujemy test   
5. Uruchom testy i jeśli nie przechodzą napraw je

Testy z MCP
1. Otwórz testowaną stronę  
2. Otwórz przeglądarkę na testowanej stronie z baseurl  i odszukaj stronę rejestracji  
3. Add to copilot instructions rules where you provide translation for all commands available in Playwright MCP   
   @https://github.com/microsoft/playwright-mcp   
   to make conversation in Polish run those commands in our chat   
4. Otwórz stronę rejestracji i przejdź do poprzedniej strony i najedź kursorem na Tools  
5. Problemy z rejestracją:  
   Zweryfikuj dostępne przyciski \- czy nie ma rejestracji  
   Zrób to przez przeglądarkę  
6. Przeprowadź w przeglądarce operacje rejestracji i na bazie tych informacji przygotuj test  
7. Przygotuj strukturę która usprawni te testy do standardu obiektów stron \- nazwanych w angielskim Page Object  
   1. Popraw importy w PO zgodnie ze standardami  
8. Dodaj do zasad aby commity zawsze były w języku angielskim

Poprawa architektury testów
1. Spróbuj teraz zastosować wzorzec fixtures gdzie obiekty stron są tworzone w pliku z fixtures i wstrzykiwane do testów  
2. Przenieść teraz fixtures do katalogu src i upewnij się że wszystkie testy korzystają z nowego wzorca  
3. Użyj fixture także tutaj  
   1. Przygotuj fixture dla home page  
4. Przenieś katalog pages do src  
   1. usuń nadmiarowe pliki i katalogi

Testy rozszerzone
1. Sprawdź dokumentację a następnie na jej podstawie stwórz pięć kluczowych wymagań dla tej aplikacji w specjalnym pliku w naszym repozytorium (po angielsku)  
2. Otwórz przeglądarkę z naszym base url.   
   Zweryfikuje stronę dokumentacji czyli przejdź pod adres URL naszej testowanej strony i sprawdź dokumentację.   
   Następnie na jej podstawie stwórz pięć kluczowych wymagań dla tej aplikacji specjalnym pliku w naszym repozytorium  
   1. Otwórz przeglądarkę z naszym base url. Odnajdź podstronę z dokumentacją eksplorując aplikację.  
   2. Zweryfikuje stronę dokumentacji czyli przejdź pod adres URL naszej testowanej strony i sprawdź dokumentację.  
   3. Następnie na jej podstawie stwórz pięć kluczowych wymagań dla tej aplikacji specjalnym pliku w naszym repozytorium  
3. Rozpisz test case dla Wymagania nr 2 po angielsku  
4. Zweryfikuj w przeglądarce test case i na podstawie otrzymanych danych utwórz test  
5. Utwórz test automatyczny na podstawie manualnych akcji wykonanych w przeglądarce i kroków z test case  
6. Uruchom test, jeśli nie przechodzi otwórz przeglądarkę i zweryfikuj manualnie problem. Następnie wprowadź poprawki i uruchom ponownie test. Staraj się nie zatrzymywać i samodzielnie progresować aż do sukcesu. Na koniec wykonaj commit zgodnie z instrukcjami.   
7. Dostosuj strukturę testu do architektury frameworka \- zastosuj Page Object i fixture

Poprawa architektury testów
1. Wyciągnij rejestrację i logowanie jako osobny projekt od którego będą niezależne inne projekty w playwright config (wzorzec dependant project) tak aby korzystać z gotowego usera do wszystkich kolejnych testów.  
2. W konfiguracji Playwright utwórz dodatkowy projekt niezależny od setup i wydziel testy w których nie potrzebujemy być zalogowani i dodaj je do tego projektu  
3. Usprawnij projekty i testy tak aby używały playwright tagów \- po to by uniknąć kłopotliwych wyrażeń regularnych

Pomocnicze
1. Zweryfikuj w przeglądarce 2 wymaganie i na podstawie otrzymanych danych utwórz testy  
2. Spróbuj wykonać manualnie te akcje w przeglądarce  
   1. tak \- możesz też wybrać datę manualnie  
3. **Izolacja kontekstu**  
    1. Przejdź manualnie test:  
       user can create a valid event  
       A następnie skup się na poprawieniu tego testu w kodzie  
    2. Uruchom tylko zmieniany test  
    3. Uruchom pojedynczy test nad którym teraz pracujemy  
    4. **Zobaczmy trace**  
4. **Strona gdzie testowane są akcje może mieć inny stan**  
    1. **Zalogowanie**  
    2. Teraz dostosuj test  
    3. Popraw test: user can create a valid event   
       aby po rejestracji użytkownik zalogował się na konto  

Dodatkowe precyzjyne dla wymagania          
1. Rozpisz test case dla Wymagania nr 2 po angielsku  
2. Dodaj unikalne id  
3. Zaimplementuj wymaganie pierwsze   
 
Dodatkowe
1. Wyciągnij rejestracje jako osobny projekt w playwright config tak aby korzystać z gotowego usera do wszystkich kolejnych testów
2.Zrób rejestracje jako projekt zależny który uruchomi kolejny projekt jak to działa w depends projects w konfiguracji playwright
3. And then login in this setup and reuse session in tests
4. W konfiguracji Playwright utwórz dodatkowy projekt niezależny od setup i wydziel testy w których nie potrzebujemy być zalogowani i dodaj je do tego projektu
5. Usprawnij projekty i testy tak aby używały playwright tagów \- po to by uniknąć kłopotliwych wyrażeń regularnych
