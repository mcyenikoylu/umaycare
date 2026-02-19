# UmayCare Mobile App

Anne-Bebek Sağlık Uygulaması - React Native Expo projesi.

## Kurulum

```bash
cd mobile
npm install
```

## Geliştirme

```bash
npm start
```

## Proje Yapısı

```
mobile/
├── src/
│   ├── components/     # Yeniden kullanılabilir UI componentleri
│   ├── constants/      # Sabitler ve konfigürasyon
│   ├── hooks/          # Custom React hooks
│   ├── navigation/     # React Navigation yapılandırması
│   ├── screens/        # Ekran componentleri
│   ├── services/       # API ve harici servisler
│   ├── types/          # TypeScript tip tanımları
│   └── utils/          # Yardımcı fonksiyonlar
├── assets/             # Görseller, fontlar vb.
├── App.tsx             # Ana uygulama componenti
└── index.ts            # Giriş noktası
```

## Teknolojiler

- Expo SDK 54
- React Native 0.81.5
- React Navigation 7
- NativeWind (Tailwind CSS)
- TypeScript
- Axios
- React Hook Form + Zod
