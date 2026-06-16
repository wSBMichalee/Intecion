# MAPA INTERAKCJI — Intecion (strona główna)

Ten dokument to referencja "co gdzie jest i jak działa" dla każdej sekcji strony.

---

## SEKCJA 1 — Navbar + Hero

**Layout:** sticky navbar (transparentny → glass po scrollu) + pełnoekranowe hero z wideo abstrakcyjnym jako tło.

**Elementy:**
- Logo "intecion" (lewo)
- Menu: STRONA GŁÓWNA / O NAS / USŁUGI / PORTFOLIO / KONTAKT
- Przycisk "DARMOWA KONSULTACJA" (Button primary, z ikoną chevron w osobnym "kafelku")
- H1: "Marketing i technologia, które zwiększają sprzedaż"
- Lista 3 punktów z separatorami (▪ STRONY INTERNETOWE & APLIKACJE / ▪ SEO/GEO & KAMPANIE ADS / ▪ OPROGRAMOWANIE I INFRASTRUKTURA IT)
- Paragraf opisowy + drugi przycisk "DARMOWA KONSULTACJA" (większy wariant, z chevron)

**Animacje/interakcje:**
- Navbar: scroll < 50px → transparentny; scroll > 50px → liquid glass (`backdrop-blur-md`, `bg-navy-900/70`, border-bottom)
- Tło hero: wideo w loop, ciemny overlay (navy/40) dla kontrastu tekstu, subtelny parallax (tło przesuwa się wolniej niż treść przy scrollu)
- H1 i lista punktów: fade-in + slide-up on mount, stagger 0.1s między elementami listy
- Przyciski: hover → tło jaśniejszy odcień blue, ikona chevron przesuwa się x: 0→4px

---

## SEKCJA 2 — Logotypy partnerów (pasek pod hero)

**Layout:** poziomy pasek (bg-white lub bg-gray-50), 4-5 logotypów wycentrowanych: EcoCar, Vanstev, Klimat-IT, One World Solution.

**Animacje/interakcje:**
- Logotypy: domyślnie `grayscale` + `opacity-60`
- Hover na pojedynczym logo: `grayscale-0` + `opacity-100`, transition 0.3s
- Mobile: grid 2 kolumny lub poziomy scroll (overflow-x), bez scrollbara

---

## SEKCJA 3 — "Współpracujemy z firmami, które:" (CAROUSEL)

**Layout:** 4 karty w jednym rzędzie (bez gapów, sąsiadujące), kolory alternujące: blue / black / light-gray / blue. Po prawej stronie, częściowo wystającą poza viewport — **przycisk strzałki `>` w kółku (blue, biały chevron)** — to jest **carousel/slider**, nie statyczny grid.

**Treść kart (1:1):**
1. (blue bg, ikona "promienie/loading") — "chcą oprzeć rozwój sprzedaży o działania online"
2. (black bg, ikona hexagon outline) — "rozwijają nowe produkty lub wchodzą na nowe rynki"
3. (light-gray bg, ikona diamond outline) — "chcą uporządkować sposób pozyskiwania klientów"
4. (blue bg, ikona "wave/tilde") — "chcą aby ich działania marketingowe były spójne z procesem sprzedaży"

Pod kartami: cytat ("Tworzymy system sprzedaży, który łączy strony internetowe, marketing internetowy i rozwiązania IT, aby Twoja firma zdobywała klientów szybciej i skuteczniej") + podpis "Scott Brinker" (prawdopodobnie placeholder — do potwierdzenia z Michałem czy zostaje).

**Animacje/interakcje:**
- Karuzela: strzałka `>` po prawej (i analogicznie `<` po lewej, jeśli jest więcej kart niż 4 — przewiduj możliwość dodania kolejnych slajdów w przyszłości, zbuduj jako Swiper/Embla lub custom Framer Motion drag-carousel)
- Strzałka: kółko `bg-brand-600`, biała ikona ChevronRight, hover → scale 1.05
- Karty: hover → subtelny `scale: 1.01` lub zmiana opacity ikony w tle
- Mobile: karty w pełnej szerokości, swipe horizontal (touch), strzałka chowa się lub przesuwa pod karty

---

## SEKCJA 4 — "Z jakimi wyzwaniami najczęściej..." (lista numerowana)

**Layout:** lista 6 wierszy, każdy: tekst po lewej + wielka cyfra (1-6, kolor brand-500, font bold, text-5xl/6xl) po prawej, separator `border-bottom` między wierszami.

**Treść (1:1):**
1. "firma inwestuje w marketing internetowy, ale liczba klientów nie wzrasta"
2. "firma korzysta z wielu narzędzi, ale nie ma jednego systemu, który łączy marketing i sprzedaż"
3. "marketing wygląda dobrze w prezentacjach, ale nie przekłada się na rozwój firmy"
4. "firma współpracuje z wieloma specjalistami, ale brakuje jednej spójnej strategii"
5. "strona internetowa nie wspiera sprzedaży i nie generuje zapytań"
6. "sprzedaż pojawia się nieregularnie i zależy od pojedynczych działań"

Pod listą: callout box z ikoną `>` (strzałka w lewym górnym rogu, szara) — "Jeśli rozpoznajesz to w swojej firmie - nie jesteś sam." + opis.

**Animacje/interakcje:**
- Scroll-reveal: każdy wiersz fade-in + slide-up, stagger 0.08s
- Cyfry: subtelna animacja scale (0.8→1) z opóźnieniem przy wejściu w viewport
- Tło sekcji: bardzo subtelny SVG pattern (linie/wave w tle, jasno-szary, widoczny na białym tle — dekoracyjny, position absolute, low opacity)
- Callout box: hover → lekkie podświetlenie border lub bg

---

## SEKCJA 5 — "Nasze podejście w praktyce"

**Layout:**
- Duży obraz (abstrakcyjny blue gradient, 16:9-ish) + tekst po prawej ("Analizujemy Twoją branżę i obecne działania" + opis), z małym okrągłym przyciskiem "i" (info) w prawym dolnym rogu obrazu
- Pod tym: grid 4 kart w rzędzie, alternujące kolory (blue / black / light-gray / blue), każda z tytułem + opisem + ikoną "i" w prawym dolnym rogu

**Treść kart (1:1):**
1. (blue) "Tworzymy skuteczną, długofalową strategię" — opis o kampaniach reklamowych, stronach, oprogramowaniu
2. (black) "Projektujemy rozwiązania pod Twoje cele biznesowe" — opis o wyborze rozwiązań przynoszących efekty
3. (light-gray) "Wdrażamy działania reklamowe" — opis o SEO/GEO, kampaniach ads, social media
4. (blue) "Optymalizujemy i skalujemy działania" — opis o analizie kanałów i budżecie

**Animacje/interakcje:**
- Duży obraz: hover → subtelny zoom (scale 1.02), ikona "i" → tooltip z dodatkowymi informacjami (glass panel popup, Framer Motion fade+scale)
- Karty: hover → border highlight + ikona "i" zmienia kolor/scale
- Ikony "i": glass-style (bg-white/10, backdrop-blur, border subtle), okrągłe, klik/hover otwiera tooltip lub modal z dodatkowym opisem
- Scroll-reveal: stagger dla 4 kart (0.1s)

---

## SEKCJA 6 — CTA band (dark navy) "Sprawdź, jak możemy to zrobić..."

**Layout:** pełna szerokość, tło dark navy z abstrakcyjnym wzorem (podobny do hero, ale statyczny obraz/gradient — nie wideo), wycentrowany heading + 1 przycisk "DARMOWA KONSULTACJA".

**Animacje/interakcje:**
- Tło: statyczny gradient/pattern, opcjonalnie bardzo subtelny ruch (Framer Motion infinite, np. gradient position animation, 20s loop)
- Heading: fade-in on scroll
- Przycisk: standardowy Button primary z chevron

---

## SEKCJA 7 — "Projekty, z których jesteśmy dumni" (case study CAROUSEL)

**Layout:** sekcja z heading + opis, pod tym duża karta case study (EcoCar Autodetailing):
- Lewo: logo EcoCar + "EcoCar" zielony tytuł + opis + tagi (badges: "STRONA INTERNETOWA & UX", "BLOG", "SEO LOKALNE") + dots (carousel indicators, 3 kropki — trzecia aktywna/wypełniona)
- Prawo: zrzut ekranu laptopa z projektem (zielone tło/branding EcoCar)
- Daleko prawo: duży kwadratowy przycisk strzałki `>` (zielony, bg-eco-green, biała ikona) — to jest **carousel między projektami**

**Animacje/interakcje:**
- Cała karta: subtelny shadow/glow (radial gradient bg za kartą, jasny)
- Carousel: dots wskazują który projekt aktywny, strzałka `>` (i prawdopodobnie `<` po najechaniu/na innym slajdzie) przełącza projekt z animacją slide/fade (Framer Motion AnimatePresence)
- Badges (tagi): małe, rounded-full, bg odpowiadający branży projektu
- Hover na całej karcie: lekki scale lub shadow intensify

---

## SEKCJA 8 — "Nie wszystko, co przeczytasz..." (testimonials CAROUSEL)

**Layout:** sekcja na czarnym/dark tle (z niebieskim radial gradient w tle, lewy górny róg), wycentrowana:
- Label "ONI JUŻ SPRZEDAJĄ, CZAS NA TWÓJ RUCH!" (font-mono, uppercase, small)
- Heading "Nie wszystko, co przeczytasz w internecie jest prawdą... ale to jest!"
- 5 gwiazdek (blue, wypełnione)
- Cytat klienta (italic, wycentrowany, max-width)
- Avatar + imię ("~ Adrian") w pill/badge (bg-white/10, rounded-full)
- Strzałki `<` i `>` po bokach (blue, kółka) — **carousel testimoniali**

**Animacje/interakcje:**
- Carousel: AnimatePresence fade/slide między testimonialami, sterowane strzałkami `<`/`>` (i opcjonalnie auto-play z interwałem, pauza on hover)
- Gwiazdki: mogą mieć subtelną animację "zapalania się" sekwencyjnie przy wejściu w viewport
- Tło: radial gradient blue (statyczny lub bardzo subtelny ruch)
- Strzałki: hover → scale 1.1, bg-brand-500

---

## SEKCJA 9 — "Darmowa konsultacja" (formularz, dark split)

**Layout:** dark navy bg, split na 2 kolumny:
- Lewo: heading "Darmowa konsultacja" + opis + social proof ("Zaufało nam 200+ firm" + avatary + gwiazdki)
- Prawo: formularz — 3 inputy (IMIĘ, E-MAIL, TELEFON, dark glass style) + przycisk "DARMOWA KONSULTACJA" (pełna szerokość formularza)

**Animacje/interakcje:**
- Inputy: `bg-navy-800/50`, `border border-white/10`, focus → `border-brand-500`, subtelny glow (box-shadow blue/20)
- Liquid glass na inputach: `backdrop-blur-sm`
- Formularz: walidacja inline (opcjonalnie), przycisk submit → loading state (spinner) po kliknięciu
- Social proof: avatary w stack (overlapping, -ml-2), gwiazdki statyczne

---

## SEKCJA 10 — "Dlaczego nasi klienci czują się spokojnie" (lista 01-05)

**Layout:** heading + opis po lewej (sticky na desktopie?), po prawej lista 5 punktów, każdy:
- Ikona chevron (jasno-niebieski, duży, kształt ">>" lub strzałka w prawo z efektem "warstw")
- Tytuł (blue, bold) + opis
- Wielka cyfra outline (01-05, bardzo light gray, text-6xl/7xl, w tle po prawej stronie wiersza)
- Separator `border-bottom` między wierszami

**Treść (1:1):**
1. "Transparentność i kontrola" — "Masz dostęp do danych i widzisz wszystko na bieżąco."
2. "Partnerstwo i wspólny cel" — o wspólnym sukcesie, testowaniu, wspólnym osiąganiu celów
3. "Inicjatywa i konkretne pomysły" — o analizie danych, propozycjach usprawnień
4. "Szybka reakcja" — o błyskawicznym reagowaniu na zmiany/problemy
5. "Minimalizacja ryzyka" — o nieobiecywaniu cudów, otwartości, uzasadnieniu każdego kroku

Na końcu: zamykający tekst "Teraz, kiedy wiesz jak pracujemy i jak dbamy o Twój biznes, zobacz jakie konkretnie działania możemy dla Ciebie wdrożyć"

**Animacje/interakcje:**
- Scroll-reveal: stagger dla 5 wierszy (0.1s)
- Cyfry tła: subtelna animacja fade-in + slide z prawej
- Ikony chevron: mogą mieć hover animację (przesunięcie w prawo, podobnie jak w przyciskach)

---

## SEKCJA 11 — CTA band (blue) + scroll arrow

**Layout:** pełna szerokość, tło `--color-blue-cta-deep` (#064d7b) z subtelnym pattern/gradientem, wycentrowany tekst + okrągły przycisk z chevron-down (scroll indicator).

**Treść:** "Teraz, kiedy wiesz jak pracujemy i jak dbamy o Twój biznes, zobacz jakie konkretnie działania możemy dla Ciebie wdrożyć"

**Animacje/interakcje:**
- Chevron-down w kółku (bg-white, blue icon): animacja `bounce` (Framer Motion, infinite, subtle y: 0→4→0, 1.5s loop) — sygnalizuje scroll dalej
- Klik → smooth scroll do sekcji "Nasze usługi"

---

## SEKCJA 12 — "Nasze usługi" (grid 8 kart)

**Layout:** heading + opis, pod tym grid 2 kolumny (desktop) / 1 kolumna (mobile), 8 kart usług (dark, navy/black, każda z unikalnym dekoracyjnym tłem/ikoną po prawej stronie karty + tytuł/opis po lewej + przycisk `>` w kółku, dolny-lewy róg).

**Treść kart (1:1, kolejność z grid 2x4):**
1. "Strony internetowe" — projektowanie stron dla firm, indywidualne podejście, dekoracja: mockup okna przeglądarki
2. "Aplikacje mobilne" — produkty cyfrowe, aplikacje na smartfony, SaaS, dekoracja: mockup telefonu
3. "Marketing online i pozycjonowanie" — SEO/GEO, kampanie ads, optymalizacja, dekoracja: duże logo "CK" (blue, geometryczne) + radial gradient z punktami
4. "Cyberbezpieczeństwo" — audyty, testy penetracyjne, dekoracja: terminal/konsola z logami security (zielony tekst na czarnym)
5. "Infrastruktura IT" — konfiguracja systemów, sieci, chmura, dekoracja: serwery/abstract tech pattern
6. "Outsourcing IT" — stabilne zaplecze technologiczne, dekoracja: panele/dashboard UI mockup
7. "Dedykowane oprogramowanie" — CRM, automatyzacja sprzedaży, dashboardy, dekoracja: dashboard z wykresami/statystykami

**Animacje/interakcje:**
- Karty: hover → border-glow (subtle blue border highlight), scale 1.005
- Przycisk `>` w kółku (dolny-lewy): bg-white, blue icon, hover → scale 1.1, bg-brand-500 + white icon
- Dekoracje w tle kart: mogą mieć subtelną animację (np. terminal "pisze się" tekst w loop, dashboard wykresy animują wysokość barów, CK logo ma pulsujący radial gradient)
- Scroll-reveal: stagger dla kart w gridzie

---

## SEKCJA 13 — FAQ (accordion)

**Layout:** heading "FAQ" (wycentrowany), pod tym lista 7 pytań, każde w osobnym "card" (bg-white, border subtle, rounded-lg), z ikoną chevron (up/down) po prawej. Pierwsze pytanie jest **otwarte domyślnie** (widoczna odpowiedź, chevron-up).

**Treść pytań (1:1):**
1. "Czy marketing naprawdę przekłada się na sprzedaż?" (OTWARTE — odpowiedź widoczna)
2. "Czy mała firma powinna inwestować w marketing?"
3. "Co jest ważniejsze: SEO czy reklamy?"
4. "Czy projektujecie rozwiązania dedykowane?"
5. "Czy mogę mieć kontrolę nad stroną lub aplikacją?"
6. "Czy tworzycie dedykowane oprogramowania dla firm?"
7. "Czy pomagacie firmom w działaniach IT?"

**Animacje/interakcje:**
- Accordion: klik na pytanie → smooth height animation (Framer Motion `AnimatePresence` + `layout` lub `motion.div` z `animate={{height: auto}}`), chevron rotuje 180° (down→up)
- Tylko jedno pytanie otwarte na raz (opcjonalnie — albo multi-open, do potwierdzenia, ale single-open jest bardziej typowe dla tego stylu)
- Hover na nagłówku pytania: bg lekko się zmienia (bg-gray-50)

---

## SEKCJA 14 — CTA final "Najwyższy czas zrobić coś dobrego!" (dark, formularz)

**Layout:** identyczny split jak sekcja 9 (Darmowa konsultacja) — dark navy bg, lewo: label + heading + opis + social proof, prawo: formularz (IMIĘ, E-MAIL, TELEFON + przycisk).

**Treść:**
- Label: "DOWIEDZ SIĘ JAK ZWIĘKSZYĆ SWOJĄ SPRZEDAŻ. POROZMAWIAJMY!"
- Heading: "Najwyższy czas zrobić coś dobrego!"
- Opis: identyczny jak sekcja 9 ("Opowiedz nam o swoim biznesie — odezwiemy się i zaproponujemy optymalne rozwiązania szyte na miarę.")
- Social proof: "Zaufało nam 200+ firm" + avatary + gwiazdki

**Animacje/interakcje:** identyczne jak sekcja 9 — to jest **ten sam komponent formularza, reużyty**. Zbuduj jako jeden reużywalny komponent `ConsultationForm.tsx`.

---

## SEKCJA 15 — Footer

**Layout:** dark navy bg (z subtelnym abstrakcyjnym wzorem w tle, podobnym do hero), 3 kolumny:
- Lewo: logo Intecion + email (hello@intecion.pl) + adres + dane firmowe (NIP, REGON, KRS) + ikony social (Instagram, LinkedIn)
- Środek: linki "O NAS / NASZE PORTFOLIO / POLITYKA PRYWATNOŚCI"
- Prawo: linki usługowe (TWORZENIE STRON INTERNETOWYCH / TWORZENIE APLIKACJI MOBILNYCH / MARKETING I POZYCJONOWANIE / DEDYKOWANE OPROGRAMOWANIE / INFRASTRUKTURA IT / OUTSOURCING IT / SZKOLENIA Z CYBERBEZPIECZEŃSTWA)

Na samym dole: copyright "© 2026 INTECION. Wszystkie prawa zastrzeżone."

**Animacje/interakcje:**
- Linki: hover → text-brand-500 lub underline
- Ikony social: hover → scale 1.1 + bg highlight
- Tło: statyczny abstrakcyjny wzór (może być ten sam plik graficzny co hero, ale przyciemniony/przyblurowany, position absolute, low opacity)

---

## ZASADY GLOBALNE

1. **Scroll-reveal jako default:** każda sekcja/karta wchodzi z `opacity: 0, y: 24` → `opacity: 1, y: 0`, `viewport={{ once: true, margin: "-100px" }}`, Framer Motion.
2. **Liquid glass** stosowany na: navbar, inputy formularzy (dark sekcje), ikony "i" (tooltips), ewentualnie dropdown/mobile menu.
3. **Wszystkie przyciski primary** używają jednego komponentu `<Button variant="primary">` z chevron-right w osobnym "kafelku" i hover-animacją chevrona (x: 0→4px).
4. **Wszystkie carousele** (sekcja 3, 7, 8) — reużywalny wzorzec: strzałki w kółkach (blue lub kontekstowy kolor), AnimatePresence dla przejść, dots dla case studies.
5. **Teksty — zero zmian.** Każdy nagłówek, opis, label ma być przeniesiony 1:1 ze screena.
6. **Kolory/fonty/spacing** — zawsze z `DESIGN_SYSTEM.md`.
