# Open Jira - T3 Stack

This is an old project that I built from scratch using [T3 Stack](https://create.t3.gg/).

## Technologies

- [Next.js](https://nextjs.org)
- [Clerk Auth](https://clerk.com/)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [Docker](https://www.docker.com/)

## How to start dev server?

1. Clone repo.
2. run `pnpm install`.
3. Copy `.env.example` to `.env` and fill in the required values.
4. run `docker run -d -e POSTGRES_DB="DB NAME" -e POSTGRES_PASSWORD="PASSWORD" -e POSTGRES_USER="USER" -p 5432:5432 postgres`.
5. run `pnpm dev`.
