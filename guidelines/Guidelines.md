# Guidelines

Add project-specific rules here to guide future development.

## General

- Use flexbox and grid for layout; avoid absolute positioning unless necessary
- Keep components small — one responsibility per file
- All content goes in `src/data/`, not hardcoded in components

## Styling

- Use design tokens from `src/styles/theme.css` — never hardcode colour hex values
- Follow the existing Tailwind class patterns (eyebrow, heading, container) in `src/app/components/shared/`
- Mobile-first: write base styles for small screens, add `lg:` prefixes for desktop
