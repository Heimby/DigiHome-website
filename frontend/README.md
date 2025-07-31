# Digihome Frontend

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker build

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

### Kamal deployment

1. Install brew-gem `brew install brew-gem`
2. Install [Kamal](https://kamal.sh/) with `brew gem install kamal`
3. Add `KAMAL_REGISTRY_PASSWORD=<docker access token>` to your `.env` file
4. Ensure you have ssh access to your server
5. `(set -a && . './.env' && set +a; kamal deploy)` to setup and deploy servers
