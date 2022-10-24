Steam Clone is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It is a copy of the [Hogwarts Legacy's Steam Page](https://store.steampowered.com/app/990080/Hogwarts_Legacy/) as of September, 2022.

Technologies used include:

- Nextjs - [https://nextjs.org/](https://nextjs.org/)

- Axios - [https://axios-http.com/](https://axios-http.com/)

- Recoil - [https://recoiljs.org/](https://recoiljs.org/)

- TailwindCSS -  [https://tailwindcss.com/](https://tailwindcss.com/)

- Postgres - [https://www.postgresql.org/](https://www.postgresql.org/)

## Getting Started

First, create a PostgreSQL database:

```bash
createdb <database_name>
# then, when inside the backend directory input the following:
psql <database_name> -f migration.sql
psql <database_name> -f seed.sql
```

Afterwards, input the relevant information into your local environmental variables, then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Environmental Variables

Some information will be unique to the environent in which this project is deployed or should not be shared publicly such as port numbers, etc.

[Next.js](https://nextjs.org/) uses a file named `.env.local`

Create the `.env.local` file in root directory of your project.

We've included a template (`.env.template`) to help you get started.

<br>

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
