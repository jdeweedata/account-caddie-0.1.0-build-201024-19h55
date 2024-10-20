# Account Caddie

Account Caddie is a comprehensive financial services website built with Next.js, offering expert accounting, tax, and financial planning solutions for businesses.

## Features

- Modern, responsive design using Tailwind CSS
- Server-side rendering with Next.js for improved performance and SEO
- Interactive UI components built with shadcn/ui
- Comprehensive service pages for Accounting & Reporting, Tax Services, Financial Planning, Strategic Services, and Risk & Compliance
- About page showcasing company values and team
- Pricing page with detailed service plans
- FAQ page for quick answers to common questions

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit

## File Structure

```
account-caddie/
├── app/
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── legal/
│   ├── pricing/
│   ├── services/
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── ClientLayout.tsx
│   ├── CTASection.tsx
│   ├── CTAWrapper.tsx
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── OnboardingWizard.tsx
│   ├── ResizeObserverFix.tsx
│   ├── ServiceSection.tsx
│   ├── Testimonials.tsx
│   └── WhyChooseUs.tsx
├── lib/
│   ├── useResizeObserver.ts
│   └── utils.ts
├── public/
│   ├── favicon.ico
│   ├── next.svg
│   └── vercel.svg
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - learn React.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - learn TypeScript.
- [Tailwind CSS](https://tailwindcss.com/docs) - a utility-first CSS framework.
- [shadcn/ui](https://ui.shadcn.com/) - beautifully designed components built with Radix UI and Tailwind CSS.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.