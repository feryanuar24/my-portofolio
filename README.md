# Vue Portfolio Web Project

A modern, responsive portfolio website built with Vue 3, Pinia state management, Tailwind CSS, and integrated with Firebase (Firestore & Hosting). The project features automated CI/CD using GitHub Actions, comprehensive unit testing with Vitest, and end-to-end testing with Playwright.

## Features

- ⚡️ **Vue 3**: Composition API, Single File Components
- 🎨 **Tailwind CSS**: Utility-first, fully responsive design
- 🔥 **Firebase**: Firestore for data, Firebase Hosting for deployment
- 🗂 **Pinia**: State management for profile and theme
- 🧪 **Vitest**: Fast unit testing
- 🤖 **Playwright**: E2E testing for critical user flows
- 🚀 **CI/CD**: Automated build, test, and deploy with GitHub Actions

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Setup

```bash
# Install dependencies
npm install

# Copy and configure your Firebase credentials
cp .env.example .env
# Edit .env with your Firebase config
```

### Development

```bash
npm run dev
```

### Testing

- **Unit tests (Vitest):**
  ```bash
  npm run test:unit
  ```
- **E2E tests (Playwright):**
  ```bash
  npm run test:e2e
  ```

### Linting

```bash
npm run lint
```

### Build

```bash
npm run build
```

### Deploy (Firebase Hosting)

```bash
npm run deploy
```

## CI/CD

- GitHub Actions workflow runs lint, unit tests, E2E tests, and deploys to Firebase Hosting on push to `main`.
- See `.github/workflows/` for details.

## Folder Structure

```
├── src/
│   ├── components/         # Vue components
│   ├── pages/              # Page views (Home, Projects, Contact, etc)
│   ├── stores/             # Pinia stores
│   ├── router/             # Vue Router config
│   └── main.ts             # App entry
├── public/                 # Static assets
├── e2e/                    # Playwright E2E tests
├── __tests__/              # Vitest unit tests
├── firebase.json           # Firebase Hosting config
├── vite.config.ts          # Vite config
├── README.md               # Project docs
```

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [Vitest](https://vitest.dev/)
- [Playwright](https://playwright.dev/)
- [GitHub Actions](https://github.com/features/actions)

## License

MIT
