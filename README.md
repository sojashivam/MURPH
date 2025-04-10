# Murph AI

A Next.js SaaS platform providing Instagram automation tools, built with TypeScript, Clerk for authentication, Prisma for database interactions, and Lemon Squeezy for subscription management.

## Features

* **User Authentication:** Secure sign-up, sign-in, and user management handled by Clerk.
* **User Onboarding:** Initial setup process for new users.
* **Instagram Integration:** Connects with Instagram accounts, potentially refreshes tokens, and fetches media posts 
* **Automation Management:** Allows users to create, view, and manage automations (e.g., based on triggers like DMs/comments, keywords, specific posts).
* **Subscription Management:** Integrates with Lemon Squeezy for handling paid subscriptions (e.g., "PRO" plan).
    * Generates unique checkout links via the backend.
    * Handles subscription status updates via Lemon Squeezy webhooks.
* **Protected Routes:** Middleware ensures certain routes/APIs require authentication.
* **API Endpoints:** Backend API routes handle user actions, automation logic, payment processing, and webhooks.

## Screenshots

*(Add your screenshots here using Markdown syntax. It's recommended to create a folder like `screenshots` or `docs/images` in your repository to store the image files.)*

**Example:**

**Dashboard:**
![Dashboard Screenshot](C:\Users\SHIVAM\Desktop\MURPH\murph-ai\screenshots)

**Automation Setup:**
![Automation Setup Screenshot](./screenshots/automation-setup.png)

**Subscription Page:**
![Subscription Page Screenshot](./screenshots/subscription-page.png)



## Tech Stack

* **Framework:** Next.js (App Router likely)
* **Language:** TypeScript
* **Authentication:** Clerk
* **Database ORM:** Prisma [cite: uploaded:src/lib/prisma.ts]
* **Database:** PostgreSQL (implied by Prisma usage)
* **Styling:** Tailwind CSS [cite: uploaded:src/app/globals.css]
* **State Management:** Redux Toolkit [cite: uploaded:src/redux/store.ts, uploaded:src/redux/slices/automation.ts] (Potentially others like Zustand if used elsewhere)
* **Data Fetching/Caching:** React Query (@tanstack/react-query) [cite: uploaded:src/hooks/user-queries.ts, uploaded:src/hooks/use-mutation-data.ts]
* **Payment Gateway:** Lemon Squeezy [cite: Based on conversation history]
* **HTTP Client:** Axios (used in payment/webhook logic)

## Getting Started

### Prerequisites

* Node.js (Version X.X or later - specify version)
* npm or yarn
* PostgreSQL Database instance
* Accounts with Clerk and Lemon Squeezy

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Set up the database:**
    * Ensure your PostgreSQL server is running.
    * Create a database for the project.
4.  **Configure Environment Variables:**
    * Copy the `.env.example` file (if you have one) to `.env`.
    * Fill in the required environment variables (see Environment Variables section below).
5.  **Run Database Migrations:**
    ```bash
    npx prisma migrate dev
    ```
6.  **Generate Prisma Client:** (Usually done automatically after migration, but can be run manually)
    ```bash
    npx prisma generate
    ```

### Running the App

```bash
npm run dev
# or
yarn dev
