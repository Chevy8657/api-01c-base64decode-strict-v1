# api-01c-base64decode-strict-v1
Stateless utility API that decodes Base64-encoded strings into plain UTF-8 text. Deterministic, high-performance, single endpoint. No storage, no state, strict contract.  Endpoint: POST /v1/base64-decode
### Request
```json
{
  "input": "SGVsbG8gd29ybGQ="
}{
  "output": "Hello world"
{
  "status": "ok"
}}
Contract Guarantees
Stateless

Deterministic

No storage

No mutation

No side effects

Strict input/output contract

Non-Expansion Clause
This API performs Base64 decoding only. It will never encode, detect formats, or modify content. If additional functionality is required, it will be implemented as a separate API.
