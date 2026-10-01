# Chibs & Co.

A beautiful showcase website for Chibs & Co. hand-painted wooden dolls.

## How to run

1. Install dependencies:
   `npm install`
2. Run the development server:
   `npm run dev`
3. Build for production:
   `npm run build`

## Content Editing

All text content and configuration lives in `src/data/`:
- `site.js`: Brand name, Instagram links, nav items.
- `dolls.js`: The gallery items.
- `occasions.js`: The occasions list.
- `steps.js`: The "How it works" process.
- `testimonials.js`: Customer quotes.
- `faqs.js`: FAQ accordion items.

## Images

Replace the placeholder images in `src/assets/images/` with your real photos. Keep the same filenames or update the imports in `src/data/dolls.js` and the React components.
For best performance, use optimized JPEGs or WebPs.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. The build command (`npm run build`) and output directory (`dist`) will be automatically detected.
