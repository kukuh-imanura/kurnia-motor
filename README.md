# Massive Project
<!-- Copyright (c) 2023, Kuda Terbang Team -->
<!-- All rights reserved. -->

Repository ini diperuntukkan untuk pengembangan `Website Admin` berbasis `React`.
Dibuat menggunakan `Vite + TypeScript` dengan framework `Tailwind` dan reusable component dari [`Shadcn UI`](https://ui.shadcn.com/).

## Daftar Isi

- [About Us](#about-us)
- [Persiapan](#persiapan)
- [More](#more)

## About Us
### Kelompok Kuda Terbang

#### Web Developer
| Role | Nama |
| ---- | ---- |
| Hacker/Programmer | [`Kukuh Imanura`](https://www.instagram.com/kukuh-imanura) |
| Hacker/Programmer | Ahmad Ainul Yaqin |
| Hacker/Programmer | Nur Lailatul Hidayah |
| Hipster/Designer | Andre Putra Agustian |
| Hipster/Designer | Fransiska Jesika |
| Hustler/PM + Scrum | Hary Putra Wardhana |


#### Mobile Developer
| Role | Nama |
| ---- | ---- |
| Hacker/Programmer | Galung Wendi Wijaya |
| Hacker/Programmer | Messy Wirdianti |
| Hacker/Programmer + Scrum | Reza Yahya P. |
| Hipster/Designer | Ellria Elda Servanda N. |
| Hipster/Designer | Oktariza Dwi Putri |


## Persiapan
1. Instalasi [`Shadcn UI`](https://ui.shadcn.com/docs/installation/vite)
2. Clone/Pull Repository
```git
   git clone https://github.com/kukuh-imanura/kurnia-motor.git
```
Atau _untuk collaborator_
```git
   git init
   git branch -M main
   git remote add origin https://github.com/kukuh-imanura/kurnia-motor.git
   
   del -Recurse .eslintrc.cjs, .gitignore, README.md, components.json, index.html, package-lock.json, package.json, postcss.config.js, src/App.tsx, src/index.css, src/lib/utils.ts, src/main.tsx, src/vite-env.d.ts, tailwind.config.js, tsconfig.json, tsconfig.node.json, vite.config.ts, public/, src/App.css, src/assets

   git pull origin main
```

3. Instalasi Tambahan

List Komponen yang digunakan dalam Project
| Name | CLI | 
| --------- | --- |
| React Router | `npm install react-router-dom` |
| React Icon | `npm install react-icons --save` |
| React Paginate | `npm install react-paginate` |
| React Hook Form | `npm install react-hook-form` |
| Axios | `npm install axios` |
| Node Mailer | `npm install nodemailer` |

4. Instalasi Component dari [`Shadcn UI`](https://ui.shadcn.com/docs/components)

List Komponen yang digunakan dalam Project
| Component | CLI | 
| --------- | --- |
| Button | `npx shadcn-ui@latest add button` |

## More
### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
