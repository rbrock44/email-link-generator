# EmailLinkGenerator

> This project helps create email mail to links with parameters <br/>
> [Live - EmailLinkGenerator Website](https://email-link-generator.ryan-brock.com/)

Screenshots:
![preview](/screenshots/main.png)
![generated](/screenshots/generated.png)

---

## 📚 Table of Contents

- [What's My Purpose?](#-whats-my-purpose)
- [How to Use](#-how-to-use)
- [Technologies](#-technologies)
- [Getting Started (Local Setup)](#-getting-started-local-setup)
  - [Run Locally](#run-locally)
  - [Test](#test)
  - [GitHub Hooks](#github-hooks)
  - [Build](#build)
  - [Deploy](#deploy)

---

## 🧠 What's My Purpose?

This is a server side single-page angular frontend created to assist in creating mail to email links that I needed for another application

---

## 🚦 How to Use

Fill out fields and hit the generate link button, a link below with a copy button will appear <br/><br/>

- `To` - The to (email) of the email
- `Subject` - The subject line of the email
- `Body` - The body of the email

Screenshots:
![preview](/screenshots/main.png)
![generated](/screenshots/generated.png)

---

## 🛠 Technologies

- Framework: `Angular 18`
- Testing: `Karma`
- Deployment: `GitHub Pages`

---

## 🚀 Getting Started (Local Setup)

* Install [node](https://nodejs.org/en) - v18 is needed (v20 also works)
* Clone [repo](https://github.com/rbrock44/email-link-generator)

---

### Run Locally

```
npm install
npm start
```

---

### Test

- Unit
    - `ng test` || `npm run test`
- Integration
    - `ng e2e` || `npm run e2e`

---

### Github Hooks

- Build
    - Trigger: On Push to Main
    - Action(s): Builds application then kicks off gh page action to deploy build output

---

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

### Deploy

Run `npm run prod` to build and deploy the project. Make sure to be on `master` and that it is up to date before running the command. It's really meant to be a CI/CD action

---
