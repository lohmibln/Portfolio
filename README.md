# Lucas Lohmann — Portfolio

Personal portfolio for Lucas Lohmann (Fachinformatiker für Anwendungsentwicklung).  
Built with **Angular 19**, TypeScript, and SCSS. Design based on Figma Design 3.

**Live:** [https://lucas-lohmann.de](https://lucas-lohmann.de)

## Features

- Responsive Design 3 layout (hero, about, skills, projects, testimonials, contact)
- German / English language toggle
- Project detail pages with live and GitHub links
- Contact form with validation and PHP mail endpoint
- Impressum and privacy policy pages
- Custom LL favicon and HTTPS on a personal domain

## Projects featured

| Project | Live | GitHub |
| ------- | ---- | ------ |
| Sharkie | [sharkie.lucas-lohmann.de](https://sharkie.lucas-lohmann.de) | [lohmibln/Sharky](https://github.com/lohmibln/Sharky) |
| Pokédex | [pokedex.lucas-lohmann.de](https://pokedex.lucas-lohmann.de) | [lohmibln/Pokedex](https://github.com/lohmibln/Pokedex) |
| Join | Coming soon | Coming soon |

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

```bash
npm run build
```

Production output: `dist/portfolio/browser/`.

## Contact mail

`public/sendMail.php` handles the contact form POST. On the VPS it is served by nginx + PHP-FPM and sends mail via Postfix (Gmail SMTP relay).

## Stack

- Angular 19
- TypeScript / SCSS
- nginx, PHP (contact), Postfix on [lucas-lohmann.de](https://lucas-lohmann.de)
