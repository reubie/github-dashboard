# GitHub Dashboard

A modern, responsive web application for searching and exploring GitHub repositories by username. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🔍 **User Search**: Search for any GitHub user by username
- 📚 **Repository Display**: View user repositories with detailed information
- ⭐ **Star Counts**: See repository popularity at a glance

- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel
- **API**: GitHub REST API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd github-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to Vercel

## Project Structure

```
github-dashboard/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── UserSearch.tsx  # Search input component
│   └── RepoList.tsx    # Repository list display
├── lib/                 # Utility functions
│   ├── githubApi.ts    # GitHub API integration
│   └── types.ts        # TypeScript type definitions
├── src/app/            # Next.js app directory
│   ├── page.tsx        # Home page
│   ├── dashboard/      # Dashboard route
│   └── layout.tsx      # Root layout
└── public/             # Static assets
```

## API Usage

The application uses the GitHub REST API to fetch repository data. No authentication is required for public repositories.

## Deployment

The application is automatically deployed to Vercel and available at:
**https://github-dashboard-imhndzprq-reubies-projects.vercel.app**

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
