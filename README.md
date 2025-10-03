# 🎉 EventKonnect

EventKonnect is an **open-source Event Management Platform** built with [Next.js](https://nextjs.org/).  
It allows organizers to create, manage, and promote events while providing attendees with seamless booking and notifications.

This repository is part of **Hacktoberfest** 🍂 – contributions are welcome!

---

## ✨ Features

- 🔐 User Authentication (Sign In / Sign Up with Firebase & NextAuth)
- 🎟️ Create & Manage Events
- 📅 Event Booking System
- 🔔 Notifications & Reminders
- 📊 Admin Dashboard with Analytics (Recharts)
- 🎨 Modern UI with Tailwind + shadcn/ui + Radix UI
- 📱 Responsive Design + PWA support

---

## 🛠️ Technologies Used

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Frontend**: React 18, TailwindCSS, shadcn/ui, Radix UI, Framer Motion
- **Backend / APIs**: Next.js API routes, Firebase, Axios
- **Auth**: [NextAuth.js](https://next-auth.js.org/) + Firebase
- **State Management**: Redux Toolkit
- **Forms & Validation**: React Hook Form + Zod
- **Charts & Analytics**: Recharts
- **UI Enhancements**: React Icons, Lucide, Toastify, SweetAlert2
- **Other Utilities**: date-fns, uuid, dotenv
- **PWA Support**: next-pwa + workbox

---

## 📂 Folder Structure

```
eventkonnect/
│
├── app/                     # Next.js App Router
│   ├── admin/               # Admin pages
│   ├── api/                 # API routes
│   ├── create-event/        # Event creation pages
│   ├── events/              # Event listing & details
│   ├── notifications/       # User notifications
│   ├── profile/             # User profile
│   ├── signIn/              # Login page
│   ├── signup/              # Register page
│   ├── Eventdetails.jsx     # Single event details
│   ├── layout.js            # Main layout
│   └── page.js              # Homepage
│
├── components/              # Shared UI components
│   ├── ui/                  # UI widgets (cards, forms, modals)
│   └── dashboard/           # Dashboard-specific components
│
├── public/                  # Static assets
├── styles/                  # Global styles (Tailwind, globals.css)
├── data/                    # Mock or static data
├── package.json
└── README.md
```

## 💡 About Hacktoberfest

[Hacktoberfest](https://hacktoberfest.digitalocean.com/) is an annual event encouraging open-source contributions.  
You can earn cool swag by contributing pull requests to open-source projects. EventKonnect is beginner-friendly, so feel free to contribute! 🎉

```
## 🚀 How to Run the Project

Follow these steps to run EventKonnect locally on your machine.

### 1. Clone the Repository
First, fork the repository on GitHub to your account, then clone your fork locally:

git clone https://github.com/<your-username>/EVENTKONNECT---Hacktoberfest-2025.git
cd EVENTKONNECT---Hacktoberfest-2025

### 2. Install Dependencies
Install all the required packages using your preferred package manager:

npm install
# or
yarn install
# or
pnpm install

### 3. Run the Development Server
Start the development server with the following command:

npm run dev

Your app will be running at http://localhost:3000. Open this URL in your browser to see the project live.

---

## 📝 Basic Git & GitHub Commands

If you are new to GitHub, follow these steps to contribute:

1. Fork the Repository
Click the Fork button on the top-right of the repository page on GitHub. This will create a copy under your account.

2. Clone Your Fork

git clone https://github.com/<your-username>/eventkonnect.git
cd eventkonnect

3. Create a New Branch
Always make changes in a separate branch instead of the main branch:

git checkout -b feature/your-feature-name

4. Make Changes
Edit the code, add new features, or fix bugs in your branch.

5. Commit Changes

git add .
git commit -m "Add short description of your changes"

6. Push to Your Branch

git push origin feature/your-feature-name

7. Open a Pull Request (PR)
Go to your fork on GitHub, click Compare & pull request, review your changes, and submit the PR.
Your changes will then be reviewed and merged into the main project.

---

🎉 Congratulations! You are now ready to contribute to EventKonnect and be part of Hacktoberfest!
```
