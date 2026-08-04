# ADR 0001: Notion Canon v2 and gated website evolution

- Status: accepted as documentation direction; not implemented
- Date: 2026-08-04
- Supersedes: conflicting v1 statements in the documentation, which remain historical context

## Current

The website is a Next.js App Router static export with repository Markdown. It has no database, authentication, payments, account, comments, CMS, API, backend application runtime, workers, or queues. Pro-leads and Tender Audit are separate products with separate runtime, data, authentication, deployment, logic, and journeys.

## Decision

The website is Maxim's personal authority hub, canonical source of content and research, and a possible independent commercial branch through paid materials, ideas, research, and later proven tools. It must not become a generic store, agency website, universal SaaS platform, or all-in-one dashboard.

Notion is the approved strategic source while GitHub documents the implemented technical reality and, after this pull request is merged, its synchronized technical canon. This one-time Notion-to-GitHub synchronization is documentation-only. Future strategic change follows the same pattern: approved strategy, GitHub documentation/ADR review, then a separately authorized implementation task.

If backend state is justified, the target is a modular monolith with public and authenticated boundaries—not microservices first. Shared infrastructure is considered only after the same need is proven in at least two products.

## Future / Gate

- Gate 0: expert core.
- Gate 1: interest signal and manual paid-material test.
- Gate 2: about 5–10 target-user payments outside Maxim's immediate circle, with clear purchase reasons.
- Gate 3: minimal commercial layer—free registration, one-time purchases, access management, and an account limited to purchases, available materials, and access state.
- Gate 4: retention functions only from observed demand.
- Gate 5: community only after repeated discussion, manual moderation, and a returning core.
- Gate 6: marketplace discovery only after demand, supply, trust, and monetization evidence.
- Gate 7: native apps only after regular Web App use proves a mobile-specific need.

Every Gate requires evidence, success criteria, allowed next scope, explicit exclusions, and a stop or rollback condition. Telegram Mini App is not a priority and may later be only a lightweight entry point, notification surface, or narrow isolated scenario.

## Out of scope

Before the relevant Gate and a separate owner authorization, do not implement backend, account, payments, auth, database, comments, community, marketplace, seller tooling, native apps, PWA, or Telegram Mini App. This ADR does not change code, production, deployment, dependencies, routes, configuration, content, or the boundaries of Pro-leads and Tender Audit.

## Consequences

Commercial validation occurs through a public teaser, manual sale, manual delivery, and evidence capture before the technical commercial layer. The first account exists only to give access to purchased materials. Subscription waits for proven recurring value and repeat demand.
