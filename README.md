# Product Finder

Tento projekt je jednoduchá webová aplikace pro filtrování, vyhledávání a stránkování produktů. Je postaven pomocí Reactu a JavaScriptu následně převedeného do TypeScriptu.

## 🧰 Použité technologie

- React (s Vite)
- JavaScript (TypeScript)
- Tailwind CSS
- Custom Hooks
- Lokální JSON data (`/public/productsData.json`)

---

## 🚀 Lokální spuštění

### 1. Klonování repozitáře

```bash
git clone https://github.com/gala49/testovaci-zadani-mfg/tree/ts-main
cd testovaci-zadani-mfg
```

### 2. Instalace závislostí

```bash
npm install
```

### 3. Spuštění vývojového serveru

```bash
npm run dev
```

Aplikace poběží na [http://localhost:5173](http://localhost:5173)

### 4. (Volitelné) Spuštění testů

Testy zatím nejsou implementovány.

---

## 📁 Struktura projektu

```
src/
├── api/               # API logika (fetch produktů)
│   └── fetchProducts.ts
├── components/        # UI komponenty
│   ├── Filters.tsx
│   ├── Pagination.tsx
│   ├── ProductCard.tsx
│   └── SearchBar.tsx
├── containers/        # Kontejnery kombinující více komponent
│   ├── ProductsContainer.tsx
│   └── SearchbarContainer.tsx
├── hooks/             # Custom React hook pro produkty
│   └── useProducts.ts
├── pages/             # Stránky (v tomto případě HomePage)
│   └── HomePage.tsx
├── App.tsx            # Hlavní komponenta aplikace
└── main.tsx           # Vstupní bod aplikace
```

---

## 🧠 Klíčová designová rozhodnutí

### 1. **Custom hook `useProducts`**
Logika pro získávání dat a správu loading/error stavu je oddělena pomocí vlastního hooku `useProducts`.

### 2. **Oddělení komponent a kontejnerů**
UI komponenty jako `ProductCard`, `SearchBar`, atd. jsou znovupoužitelné a na logiku nezávislé. Kontejnerové komponenty (`ProductsContainer`, `SearchbarContainer`) kombinují logiku, filtrování a stránkování.

### 3. **Filtrování, hledání a řazení přes `useMemo`**
Pro optimalizaci výkonu používám `useMemo` u všech odvozených dat (search, price filtr, sort), aby se přepočítávaly pouze při změně závislostí.

### 4. **Základní stránkování s UI přizpůsobeným pro velké množství stránek**
Pagination komponenta zobrazuje okolí aktuální stránky, začátek a konec, pro předejítí nekonečného scrollování.

### 5. **Tailwind CSS pro styling**
Pro rychlé stylování a přehlednost jsem použil knihovnu Tailwind CSS.

---

## 🔗 Data

Data jsou uložena lokálně v souboru `public/productsData.json`, který simuluje API.

---

## 📦 Build

Pro vytvoření produkční verze:

```bash
npm run build
```