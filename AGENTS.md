# AGENTS.md - LexVuIP Project

## Project Description
LexVuIP is an Intellectual Property (IP) and legal services provider offering specialized services in that field. This project serves as the main landing page and corporate website for the company. It showcases professional offerings including IP Solutions (Patent Drawings, Trademark Support), Paralegal Solutions, and Custom Solutions. Built with Next.js 15 (App Router) and React 19, the application features dynamic routing, a blog section, and performance-optimized pages styled using plain CSS.

## 1. Think Before Coding (Architecture & Security)
Don't assume. Don't hide confusion. Surface tradeoffs.

Before implementing:
- **State your assumptions explicitly.** If uncertain, ask. Never make assumptions about security configurations, data handling, or secret management.
- **Present all options.** If multiple interpretations exist, present them — don't pick silently.
- **Advocate for simplicity and safety.** If a simpler or more secure approach exists (e.g., sanitizing inputs to prevent XSS, avoiding risky libraries), say so. Push back when warranted.
- **Stop if unclear or unsafe.** If something is unclear or raises security concerns (like exposing sensitive server-side data to the client), stop. Name what's confusing or risky, and ask.

## 2. Simplicity First
Minimum code that solves the problem. Nothing speculative.

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes
Touch only what you must. Clean up only your own mess.

**When editing existing code:**
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style perfectly, even if you prefer a different approach.
- If you notice unrelated dead code, mention it — don't delete it.

**When your changes create orphans:**
- Always remove imports, variables, or functions that *your* changes made unused.
- Don't remove pre-existing dead code unless explicitly asked to do so.

**The Test:** Every single changed line should trace directly back to the user's explicit request.

## 4. Goal-Driven Execution
Define clear success criteria. Self-verify in a loop until those criteria are met.

**Transform vague tasks into verifiable goals:**
- "Add validation" → "Implement validation, then verify it explicitly rejects invalid inputs."
- "Fix the bug" → "Identify the exact root cause, apply the fix, and prove it works (via tests, logs, or build output)."
- "Refactor X" → "Ensure the app builds successfully and the logic behaves identically before and after."

**Strict Self-Verification:**
- Never blindly assume code works. Always run verification commands (e.g., `npm run build`, or applicable test scripts) after implementing changes.
- If a command fails, read the logs, fix the actual issue, and re-verify. Do not stop until verification passes.

**For multi-step tasks, outline a brief, actionable plan first:**
- [Step 1] → verify: [Specific check/command]
- [Step 2] → verify: [Specific check/command]
Execute systematically, completing and verifying one step at a time.

## 5. Verify Before Reporting Complete
Report outcomes faithfully and accurately.

- **Never fabricate success:** If a build, test, or check fails, say so explicitly and provide the relevant error output. Never claim "all checks pass" if there are failures.
- **Do not suppress errors:** Never suppress, simplify, or skip a failing check (like a build error, linting issue, or type error) merely to manufacture a green result. Fix the root cause.
- **Honesty in progress:** Never characterize incomplete, untested, or broken work as "done".
- **State facts plainly:** When verification *does* pass, state it plainly. Do not hedge confirmed results with disclaimers, and do not repetitively re-verify things that have already been confirmed.

**The Goal:** Provide an accurate, objective report of the current state, not a defensive or falsely optimistic one.

## 6. Strict Branching and Merging Rules
- **No Direct Changes to Main:** All code modifications must happen on the `redesign` branch. Direct commits or changes to the `main` branch are strictly forbidden.
- **User Approval Required:** Code from the `redesign` branch can only be merged into `main` after receiving explicit approval from the user (e.g., "looks good", "we can merge").
- **Never Delete Branches:** After merging a PR, never delete the source branch. Leave it intact for future work.
