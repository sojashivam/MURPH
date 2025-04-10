This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
