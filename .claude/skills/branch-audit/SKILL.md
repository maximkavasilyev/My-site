---
name: branch-audit
description: Audit and clean all local and GitHub branches down to main without losing unique work.
---

# Branch audit

Goal: leave only `main` locally and on GitHub.

## Rules

- First audit only. Get user approval before any push, PR, merge, close, comment, or deletion.
- Compare with `origin/main`.
- Never delete active, unique, uncertain, or worktree-bound branches.
- Recheck PR SHA before merge.
- Re-audit after every merge.

## Audit

```bash
git status --short --branch
git worktree list --porcelain
git fetch --prune --tags origin
git branch -vv
git ls-remote --heads origin
gh repo view --json nameWithOwner,defaultBranchRef
gh pr list --state all --limit 200 \
  --json number,state,isDraft,headRefName,headRefOid,headRepository,mergedAt,url
```

Stop if the default branch is not `main`, the repo is unexpected, or `main` is dirty.

Inspect every local, remote, fork, PR, worktree, cloud-agent, and AI-created branch:

```bash
git merge-base --is-ancestor <ref> origin/main
git log origin/main..<ref> --oneline
git cherry -v origin/main <ref>
git diff origin/main..<ref>
```

For unavailable fork refs:

```bash
gh pr view <n>
gh pr diff <n>
```

Classify each ref:

- `merged`
- `unique`
- `superseded`
- `active`
- `unknown`

Report:

| Ref / PR | SHA | Status | Evidence | Action |
|---|---|---|---|---|

Get explicit approval.

## Apply

Reuse an existing PR or create one for unique work.

Before merge:

```bash
gh pr view <n> \
  --json headRefOid,isDraft,mergeable,mergeStateStatus,statusCheckRollup
gh pr checks <n>
```

Merge only if SHA is unchanged, PR is not draft, checks pass, and it is mergeable:

```bash
gh pr merge <n> --squash --delete-branch
```

After every merge:

```bash
git fetch --prune origin
```

Re-audit remaining refs.

Delete only approved `merged` or proven `superseded` branches:

```bash
git push origin --delete <branch>
git branch -d <merged-branch>
git branch -D <proven-superseded-branch>
```

## Verify

```bash
git fetch --prune origin
git switch main
git pull --ff-only origin main
git status --short --branch
git worktree list --porcelain
git branch
git ls-remote --heads origin
gh pr list --state open --base main
```

Success: clean synchronized `main`, no other local or GitHub branches, no unresolved PRs.