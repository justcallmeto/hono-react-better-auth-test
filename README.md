# Local Development

1. To install dependencies:
```sh
bun install
```
2. Copy `.env.example` to your `.env` file and fill in variables

3. To setup database
```sh
bun run db:up
bun run db:migrate

```
4. To run:
```sh
bun run dev
```

5. open http://localhost:5000 for the frontend, and http://localhost:3000 for the backend
