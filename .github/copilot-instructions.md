# Conventional Commits

All commit messages in this repository should follow the Conventional Commits specification. This means:

- Use a type like `feat`, `fix`, `chore`, `docs`, `refactor`, etc., at the start of the commit message.
- Optionally include a scope in parentheses after the type, e.g., `feat(auth): ...`.
- Write a short, clear description after a colon and space.
- Example: `fix(tests): ensure test timeout is set to 10s`

This helps keep commit history readable and automates changelog generation.

# Copilot Instructions

These are the rules for using GitHub Copilot in this repository:

1. Only generate Playwright tests for Chromium (Chrome) browser.
2. Use TypeScript for all test and configuration files.
3. Keep Playwright configuration clean: no comments or unused code.
4. Always set test timeout to 10 seconds and enable traces for all tests.
5. Only one example test file should exist in the `tests` directory.
6. Do not generate or keep any other example or demo test files.
7. All code should follow best practices for readability and maintainability.
8. Do not include unnecessary comments or boilerplate in generated code.
9. Use the latest Playwright APIs and features.
10. Ensure all tests are idempotent and do not depend on external state.
11. Always run all Playwright tests and ensure they pass before making any commit.
12. When you are instructed to commit, always run all Playwright tests first and only commit if all tests pass. Never commit without running the tests.
13. All code and comments must be written in English.
14. When using Playwright MCP commands (https://github.com/microsoft/playwright-mcp), always provide a Polish translation for each command and its effect, so that all interactions and explanations in the chat are available in Polish.

Refer to this file before generating or updating any code with Copilot.

# Playwright MCP Commands – Komendy Playwright MCP

Poniżej znajdziesz listę przykładowych komend dostępnych w Playwright MCP wraz z tłumaczeniem na język polski:

- mcp_playwright_browser_navigate – Przejdź do podanego adresu URL
- mcp_playwright_browser_click – Kliknij wskazany element na stronie
- mcp_playwright_browser_type – Wpisz tekst do wskazanego pola
- mcp_playwright_browser_select_option – Wybierz opcję z listy rozwijanej
- mcp_playwright_browser_wait_for – Poczekaj na pojawienie się lub zniknięcie tekstu/elementu
- mcp_playwright_browser_take_screenshot – Zrób zrzut ekranu strony lub elementu
- mcp_playwright_browser_pdf_save – Zapisz stronę jako PDF
- mcp_playwright_browser_tab_new – Otwórz nową kartę w przeglądarce
- mcp_playwright_browser_tab_close – Zamknij kartę przeglądarki
- mcp_playwright_browser_tab_list – Wyświetl listę otwartych kart
- mcp_playwright_browser_tab_select – Przełącz się na wybraną kartę
- mcp_playwright_browser_handle_dialog – Obsłuż okno dialogowe (alert, confirm, prompt)
- mcp_playwright_browser_resize – Zmień rozmiar okna przeglądarki
- mcp_playwright_browser_snapshot – Wykonaj dostępnościowy snapshot strony
- mcp_playwright_browser_network_requests – Wyświetl żądania sieciowe
- mcp_playwright_browser_console_messages – Wyświetl wiadomości z konsoli

Każda komenda powinna być opisana w czacie po polsku wraz z jej efektem.

# Instrukcja odnalezienia strony rejestracji

Aby odnaleźć stronę rejestracji w aplikacji EventBugAI:

1. Otwórz stronę główną aplikacji (https://eventbugai.onrender.com/).
2. W górnej nawigacji (banner) znajdź link o nazwie „Register”.
3. Kliknij w link „Register”, aby przejść do strony rejestracji (adres: /register.html).

Jeśli strona rejestracji nie istnieje lub pojawia się błąd 404, oznacza to, że funkcjonalność rejestracji nie została zaimplementowana lub jest tymczasowo niedostępna.

---
