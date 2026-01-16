# OneCard - Credit Card Rewards Optimizer

## Overview
OneCard is a sophisticated credit card rewards optimization platform that helps users maximize their credit card rewards by recommending the best card to use for each purchase. The platform includes:
- **Web App**: Next.js application with dashboard, card management, and recommendation engine
- **Chrome Extension**: Shows best card recommendations while shopping online  
- **Mobile App**: React Native app for on-the-go card recommendations

## Project Structure
```
/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── dashboard/         # User dashboard
│   ├── cards/             # Credit cards listing
│   ├── categories/        # Spending categories
│   ├── recommend/         # Recommendation form
│   └── api/recommend/     # API endpoint
├── lib/
│   └── db/                # Database schema and client
├── apps/
│   ├── extension/         # Chrome extension (MV3)
│   └── mobile/            # React Native app (Expo)
├── scripts/
│   └── seed.ts            # Database seeding script
└── public/images/         # OneCard branding assets
```

## Tech Stack
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Drizzle ORM
- **Database**: PostgreSQL (Neon)
- **Mobile**: React Native with Expo
- **Extension**: Chrome MV3

## Running the Project
```bash
npm run dev          # Start development server on port 5000
npm run db:push      # Push schema to database
npm run db:seed      # Seed database with credit cards
```

## Database Schema
- **cardIssuers**: Card issuer companies (Chase, Amex, etc.)
- **creditCards**: Credit card details (name, network, fee, color)
- **categories**: Spending categories (Dining, Travel, etc.)
- **merchants**: Known merchants with category mapping
- **rewardRules**: Card reward rates per category
- **users**: User accounts
- **userCards**: Cards in user's wallet

## Key Features
1. **Smart Recommendations**: Enter merchant or category to find best card
2. **Card Browser**: View all credit cards with reward structures
3. **Category Analysis**: See top cards for each spending category
4. **Chrome Extension**: Auto-detects shopping sites and shows best card
5. **API Endpoint**: `/api/recommend?merchant=X&category=Y&amount=Z`

## Chrome Extension
Located in `apps/extension/`. To install:
1. Go to chrome://extensions/
2. Enable Developer mode
3. Click "Load unpacked"
4. Select the apps/extension folder

## Recent Changes
- January 2026: Built full web app, Chrome extension, and mobile app structure
- Database seeded with 12 popular credit cards and 24 reward rules
