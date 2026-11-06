# agent-ci-guardrail sandbox

Test bed for [agent-ci-guardrail](https://github.com/laclemen92/agent-ci-guardrail). The `CI`
workflow runs a quick `lint` job that asks the guard whether to run the full test matrix.

Expected:

| Run | Full matrix |
| --- | --- |
| Push to an agent branch (`codex/…`, `copilot/…`) with no PR | skipped |
| Agent's draft PR | skipped |
| Agent's PR marked ready for review | runs |
| A person's PR | runs |
| `main` | runs |
