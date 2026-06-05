# Website content materials for Codex

These Markdown files are source materials for updating the personal academic website.

## Files

- `research.md` → content for the Research page.
- `publications.md` → publications and manuscripts for the Publications page.
- `teaching.md` → teaching content for the Teaching page; the course description should be rendered as a collapsible dropdown if possible.
- `updates.md` → homepage Updates/News section.

## Implementation guidance

Please convert these Markdown materials into sustainable structured website content. Preferred approach:

- Store structured content in `src/data/` files, such as `research.ts`, `publications.ts`, `teaching.ts`, and `updates.ts`.
- Keep page layout/design in `src/pages/` and components.
- Do not hardcode long content directly into layout components when it can be imported from `src/data/`.
- Do not invent additional publications, dates, awards, talks, courses, or links.
- Preserve unpublished manuscript statuses such as “in prep” and “submitted.”
- Run `npm run build` after updating the site.

## Privacy note

Only include content from these Markdown files in the public website. Do not include drafts, comments, or private notes from outside these files.
