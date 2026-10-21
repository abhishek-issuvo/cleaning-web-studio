# ClearSite Studio audit

Date: October 21, 2026

**Status: not verified for launch. No real form submission or inbox-delivery test has been performed.** The Web3Forms key, contact email, and domain are still placeholders. A simulated success response is not evidence of delivery.

## Results and fixes

| Area | Result and limits |
| --- | --- |
| 360px mobile | Source-level review only. At 360px the wrapper is 328px wide and the contact fields use one column. Added intrinsic-size constraints to grid children and controls, wrapping for price labels and long contact/status text, 16px form control text to avoid mobile focus zoom, larger supporting text, and larger standalone link targets. Actual rendering, horizontal overflow, and touch behavior remain unverified. |
| Links | Automated checks passed for local files and cross-page fragment targets in both HTML pages, including form/footer privacy links and return links. Email links still target `hello@example.com` and must be configured. Canonical/social URLs still target `example.com`; they are launch blockers, not valid production destinations. |
| Keyboard access | Source has native links, buttons, labels, required fields, select controls, and FAQ disclosures. Added a focusable main landmark for skip links and a visible focus indicator for submission status. Removed the busy attribute from the form so it does not suppress its own live announcements. Status focus now scrolls into view. Actual Tab/Shift+Tab, Enter/Space, screen-reader behavior, and focus visibility require browser testing. |
| Loading speed | Landing HTML + CSS + JS + favicon: 33,367 bytes uncompressed, approximately 10,908 bytes with gzip. These are file-size calculations, not network measurements. Social image is metadata and is not loaded as a visible page image. No external fonts, libraries, analytics, or render-time network integrations. Hosting latency, cache headers, compression, LCP, CLS, and INP remain unmeasured. |
| SEO | Shortened title to “Cleaning Company Websites from $49 \| ClearSite Studio”. One H1 per page, descriptions, canonical tags, Open Graph tags, favicon, language, and viewport metadata are present. Configure the real domain before indexing. No invented ratings or structured-data claims were added. |
| Validation | Added trimming and rejection of spaces-only name, business, and message fields. Restricted optional website URLs to HTTP/HTTPS and added visible format guidance. Native email/URL/required/length constraints remain. Client validation improves usability and is not server-side security. |
| Form tests | Syntax check and 10 mocked cases passed: placeholder key, honeypot, invalid input, whitespace-only input, success response, server rejection, network failure, timeout, malformed response, and duplicate submission. Native browser validation and real service delivery remain untested. |
| Spelling and copy | Reviewed site copy; no spelling defects identified. Prices consistently say from/starting at $49, with final scope quoted in writing. |
| Privacy | Local links resolve. External Web3Forms privacy page was reachable through the web tool. Clarified that the provider can retain submissions and use delivery/spam-prevention providers. Business-specific host, email, retention, identity, and privacy contact details still need owner review. |

Web3Forms policy reference checked during this audit: https://web3forms.com/privacy

## Accounts and credentials you configure yourself

- [ ] **Receiving email inbox:** choose a monitored address, confirm you can receive and reply, and replace every `hello@example.com` in `index.html` and `privacy.html`. Use your email provider’s account; no mailbox password belongs in these files.
- [ ] **Web3Forms:** create/verify your form for that recipient at https://web3forms.com/ and copy its public access key into the hidden `access_key` input in `index.html`, replacing `YOUR_WEB3FORMS_ACCESS_KEY`. Confirm any domain restrictions in your form settings match the deployed domain. Keep account passwords and private credentials out of the site and Git.
- [ ] **Static hosting:** configure an account or existing hosting space, upload public assets, enable HTTPS, and configure text compression and caching where supported. Do not upload `.git`, scratch files, or private credentials. No database or build account is required.
- [ ] **Domain/DNS, if using a custom domain:** manage registration and DNS through your own provider, point the domain to your host, and confirm its HTTPS certificate. A host-provided HTTPS URL can also be used. Replace `https://example.com` in both HTML files with the final origin (including any deployment subpath).
- [ ] **Business/privacy configuration:** confirm the displayed business name, contact address, actual data practices and retention, offer scope, payment terms, and any taxes. Update privacy text to match your providers and practices.
- [ ] **Optional search tools:** search-console verification may help monitor indexing after launch; it is not required to run the website and no tracking script is necessary.

Only the Web3Forms public access key belongs in the HTML. Hosting, registrar, and email credentials stay in their respective provider accounts.

## Required acceptance test after configuration

1. Open the deployed HTTPS page at exactly 360px viewport width. Inspect every section and the privacy page for overflow, cropped controls, and unreadable text; repeat with increased text size.
2. Use only Tab, Shift+Tab, Enter, and Space: activate the skip link, both quote links, FAQ items, privacy/return links, and every form control. Verify visible focus and no traps.
3. Submit empty/invalid fields, a spaces-only message, and an invalid website URL. Correct each field and confirm the form can proceed.
4. Submit one clearly labeled real test inquiry using an email address you control. Record the deployed URL, timestamp, and displayed status.
5. Confirm the exact inquiry arrives in the configured inbox (check spam), with all submitted fields. Confirm Reply targets the test sender. Only then mark end-to-end form delivery verified.
6. Test offline/error behavior and a repeat attempt; entries should remain on failure. If a request times out, check the inbox before retrying because delivery may already have happened.
7. Measure loading on the deployed site using browser performance tools. Check the real canonical/social URLs, favicon, email destination, and privacy links.

## Verification limitation

The browser tool refused access to the open `file://` page because its URL security policy permits only HTTP/HTTPS and explicitly forbids bypassing that denial. No alternate browser-control path was attempted. Consequently this audit does not claim visual, keyboard, or mobile browser verification. Earlier local preview server binding was also denied by the environment. The source and simulated checks above are the evidence available in this session.
