# Audyt Zgodności z Figma Spec (figma-spec.md)

Poniżej znajduje się pełna lista rozbieżności między obecnym stanem kodu a danymi z `figma-spec.md` dla wszystkich 12 podstron, pogrupowana w celu łatwego ustalenia priorytetów.

> [!NOTE]
> Ponieważ nie modyfikowałem kodu w tym kroku, to zestawienie jest punktem wyjścia. Proszę o ustalenie priorytetów (od której podstrony zaczynamy naprawę).

---

## 1. Strona główna (`/page.tsx`)
**Status:** Zbudowana, ale z poważnymi błędami logicznymi i brakami w treści względem Figmy.

### 🔴 Główne rozbieżności
- **Sekcja "Nasze usługi":**
  - **BŁĄD (Fake Terminal):** Karta "Cyberbezpieczeństwo" zawiera animowany terminal ze skryptem `nmap` i listą CVE. Według `figma-spec.md`, ten terminal należy do karty **"Infrastruktura IT"**. Karta "Cyberbezpieczeństwo" powinna być pozbawiona tego elementu na rzecz standardowego opisu.
  - **Brakujące karty usług:** W kodzie pominięto zupełnie usługi wymienione w Figmie: *Strony internetowe*, *Aplikacje mobilne*, *Marketing online i pozycjonowanie*. Obecnie w `Services.tsx` wyrenderowano tylko wybrane z nich.
- **Sekcja "Z jakimi wyzwaniami najczęściej zgłaszają się do nas firmy":** 
  - Wymaga dokładnej weryfikacji punktów 1-6 (niektóre treści w komponencie `Challenges.tsx` mogą być uproszczone).
- **Testimoniale:** Tytuł w kodzie to "Nie wszystko, co przeczytasz w internecie jest prawdą... ale to jest!" – zgadza się, jednak zawartość autorów w Figmie ogranicza się m.in. do profilu "~ Adrian", a kod prawdopodobnie renderuje wielokrotny zbiór testowy (`testimonials.map`).
- **Sekcja "Projekty, z których jesteśmy dumni":** Kod nadal może używać generycznych obrazków, zamiast dokładnych odznak (np. zielone "Stabilny wzrost sprzedaży") i struktury wskazanej w specyfikacji Figmy dla Strony Głównej.

---

## 2. O nas (`/o-nas/page.tsx`)
**Status:** Zbudowana, ze znacznymi różnicami w copywritingu.

### 🔴 Główne rozbieżności
- **Sekcja "Nasze podejście":** 
  - W Figmie wymienione są **4 konkretne bloki** z rozbudowanym tekstem (np. *"Rozwój firmy to strategia, nie losowe działania"*, *"Tworzymy rozwiązania, które nie tylko wyglądają dobrze, ale też działają"*, itd.).
  - Kod renderuje tylko **3 kafelki** ze skróconymi, wymyślonymi tytułami (np. *"Rozwój firmy to strategia na dzisiejsze wyzwania"*). Zupełny brak szczegółowych opisów pod tymi tytułami widniejących w specyfikacji.
- **Sekcja "Poznaj nasz zespół":** 
  - Kod używa tablicy `[1, 2, 3]` dla tego samego kafelka "Michał Cukrowski Co-founder & CEO". W Figmie widnieje specyficzna nazwa zastępcza, jednak brakuje zróżnicowania ról bądź odpowiednich zdjęć zastępczych.
- **Graphic Placeholders:** W sekcji *"Kiedy marketing spotyka technologię"* wstawiony jest tekst `[3D Hand Graphic Image]` – w Figmie znajduje się wyeksportowany obszar `image 1` / grafiki z tłem.

---

## 3. Strony internetowe (`/uslugi/strony-internetowe/page.tsx`)
**Status:** W trakcie poprawek. Poprawiliśmy sekcję *Nasze realizacje* oraz usunęliśmy wycentrowany przycisk. 

### 🔴 Główne rozbieżności
- **Pasek Statystyk pod Hero:** 
  - Kod wyświetla: `<48h Czas realizacji wyceny`.
  - Figma wymaga: `< 48h Czas odpowiedzi`.
  - Kod używa ikonek `<Star />` obok 4.9, co jest okej, ale tekst to "Średnia ocen" a Figma wymaga: "Ocena klientów".
- **Sekcja "Dlaczego warto zbudować z nami stronę?":** 
  - Dolny niebieski pasek "Nasz styl pracy" – kod ma opis: *"Partnerskie podejście — nie tylko wykonawcze"*.
  - Wg specyfikacji Figmy pełen tekst to: *"Partnerskie podejście - nie jesteśmy tylko wykonawcą, wspólnie pracujemy nad rozwojem Twojego biznesu"*.
- **Sekcja "Technologie":** Należy sprawdzić dokładność opisów technologii (WordPress, WooCommerce, Shopify) z nowo pobranego `figma-spec.md`.

---

## 4. Marketing (`/uslugi/marketing/page.tsx`)
**Status:** Zbudowana struktura, wymaga walidacji danych.

### 🔴 Główne rozbieżności
- Wymaga potwierdzenia struktury komponentu analitycznego "Live Dashboard" – Figma wskazuje dokładnie wartości: `+184% Wzrost ruchu organicznego`, `-41% Niższy koszt pozyskania`, `+63% Wyższa konwersja`, `×2.8 Zwrot z inwestycji`. Konieczne usunięcie jakichkolwiek placeholderów zmyślonych w kodzie.

---

## 5. Aplikacje mobilne (`/uslugi/aplikacje-mobilne/page.tsx`)
**Status:** Zbudowana pobieżnie.

### 🔴 Główne rozbieżności
- W Figmie znajduje się precyzyjny podział na dedykowane karty/sekcje funkcjonalne pokazujące na czym polega aplikacja: **"Aplikacje edukacyjne"**, **"Aplikacje lojalnościowe"**, **"Aplikacje do rezerwacji"**, z wyszczególnioną sekcją *"Zacznijmy od prostej aplikacji - Kluczowe funkcje"*. W obecnym kodzie są to często jedynie generyczne siatki cech (gridy), które nie odwzorowują 1:1 tego podziału.

---

## 6. Portfolio (`/portfolio/page.tsx`)
**Status:** Wymaga dokładnej weryfikacji.

### 🔴 Główne rozbieżności
- Do sprawdzenia: tagowanie, kategorie (Figma określa pewne tagi, które trzeba umieścić jako filtry np. E-commerce, B2B, Custom).

---

## 7. Kontakt (`/kontakt/page.tsx`)
**Status:** Zbudowana.

### 🔴 Główne rozbieżności
- Struktura formularza, komunikaty walidacji i dane teleadresowe (`ul. Wejherowska 11/2, Wrocław` / NIP / REGON) do potwierdzenia z danymi wyciągniętymi w `figma-spec.md` (często NIP lub REGON bywały wymyślane przez poprzednie AI – Figma definiuje to wyraźnie w Global Footer i formularzach).

---

## 8 - 12. Brakujące podstrony
**Status:** Pliki całkowicie NIE ISTNIEJĄ w folderze `src/app/uslugi/`.

1. **Outsourcing IT** (`/uslugi/outsourcing-it/page.tsx`) - Do zakodowania m.in. unikalny komponent *"IT Support Monitor Live"*.
2. **Dedykowane systemy** (`/uslugi/dedykowane-systemy/page.tsx`)
3. **Szkolenia** (`/uslugi/szkolenia/page.tsx`)
4. **Cyberbezpieczeństwo** (`/uslugi/cyberbezpieczenstwo/page.tsx`)
5. **Infrastruktura IT** (`/uslugi/infrastruktura-it/page.tsx`)

Brak tych podstron powoduje też puste linkowania 404 z innych zintegrowanych wcześniej miejsc (np. z Global Footer).

---

## Co dalej? Open Questions

Powyższa lista wyłapuje najważniejsze "wymyślone" przez wcześniejsze iteracje elementy oraz kluczowe braki i pomylenia sekcji.

**Proszę o ustalenie priorytetu napraw. Jak chcesz do tego podejść?**
1. Skupiamy się na naprawie **Istniejących Podstron** (naprawiam fałszywy terminal z Home, podmieniam teksty w O Nas, weryfikuję cyfry w Marketing/Strony)?
2. Czy wolisz najpierw zbudować od zera **5 brakujących podstron usług**, żeby mieć szkielet całości?
3. Czy mam po prostu poprawić rażący błąd na Stronie Głównej (Services.tsx - nmap w złej sekcji) już teraz w pierwszej kolejności?
