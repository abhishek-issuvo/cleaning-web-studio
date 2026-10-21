# ClearSite Studio

GitHub repository: `abhishek-issuvo/cleaning-web-studio`.

A buildless, responsive website for a US web-design service focused on residential cleaning companies. Plain HTML, CSS, and JavaScript; no package installation, database, analytics, external fonts, or runtime library dependencies. The only external runtime request is an explicitly submitted inquiry to Web3Forms, as requested. The concept preview is drawn with CSS and is not a customer project.

## Files

- `index.html` — landing page, offers, concept preview, FAQ, and contact form
- `styles.css` — mobile-first responsive layout, focus indicators, reduced-motion support
- `script.js` — form submission and status messages, offer selection, footer year
- `privacy.html` — inquiry privacy notice
- `favicon.svg` — local brand icon
- `social-card.png` — local 1200 × 630 Open Graph image

## Required before launch

1. In `index.html`, replace `YOUR_WEB3FORMS_ACCESS_KEY` in the hidden `access_key` input with your Web3Forms access key. Create a key for your receiving email at https://web3forms.com/. This is a public form identifier, intended to appear in browser source; never put private API credentials in these files.
2. Replace every `hello@example.com` in `index.html` and `privacy.html` with your working business email. Update the placeholder ClearSite Studio brand if needed.
3. Replace `https://example.com` in both HTML files with your final HTTPS origin. Canonical, Open Graph URL, and social image URLs must be absolute and reachable. If hosting under a subpath, include it.
4. Confirm the business offer: starting at $49 USD with final pricing based on agreed scope, up to 6 content sections, one revision round, client-supplied content, and the stated exclusions. Confirm written payment terms, timeline, and tax handling before accepting a project.
5. Review `privacy.html` against your actual host, email provider, retention practices, business identity, and applicable obligations; change the notice and its revision date when practices change. It describes this template’s data flow, not a certification of legal compliance.
6. Upload the HTML, CSS, JS, SVG, and PNG to any static HTTPS host, preserving relative paths. No build step is required. README need not be uploaded. Configure HTTPS and security headers through your host if supported.
7. Submit a real test inquiry from your deployed domain, confirm delivery and reply-to email in your inbox, and check spam folders. No real submission was made during development because the access key is a placeholder.

## Form behavior

The form uses the documented Web3Forms endpoint `https://api.web3forms.com/submit`. Native labels, required fields, email and URL validation support keyboard and assistive-technology use. The optional URL accepts only `http://` or `https://`. Required text fields reject spaces-only input when JavaScript is enabled. A hidden `botcheck` checkbox provides basic honeypot protection; it does not guarantee spam prevention.

With JavaScript, valid submissions send JSON, prevent duplicate concurrent requests, show an accessible pending state, and clear inputs only after a confirmed successful response. Errors and a 20-second timeout preserve the entries and offer an email alternative. A timeout cannot establish whether delivery occurred. Missing/placeholder keys are intercepted without transmitting the inquiry. Without JavaScript, the form uses a normal POST and Web3Forms’ own confirmation/error page; replace the key before launch for either mode.

There is no browser persistence of form content and no tracking. The form sends the entered fields plus a subject, sender label, and reply-to address to Web3Forms. Hosting, form, and email providers can process technical metadata.

Official integration reference: https://docs.web3forms.com/getting-started/examples/ajax-contact-form-using-javascript

## Local preview

From this directory, run `python3 -m http.server 8080` and open http://localhost:8080. This is only a development convenience; deployed files do not require Python. Stop with Ctrl-C.

## Verification checklist

- Check desktop and narrow mobile layouts, visible keyboard focus, skip link, native FAQ disclosure, navigation, and both offer selections.
- Check blank/invalid fields, placeholder-key error, success, server rejection, network failure, and timeout. Use mocks for development; real delivery needs your active key and inbox.
- Confirm privacy links, business email, final metadata, social image, and favicon after deployment.
- No booking, payment, CMS, or ongoing maintenance functionality is implied.

## Checks completed for this handoff

JavaScript syntax validation passed. Structural checks passed for unique IDs, label associations, one H1 per page, internal anchors, and local asset references. Mocked submission checks passed for the placeholder key, honeypot rejection, confirmed success, server rejection, network failure, and timeout; errors preserve entries and success resets them. These mocks do not verify the external service. Browser visual/keyboard checks were not completed: the environment denied binding the local preview server. Real inbox delivery remains unverified until a live key is configured.


## Audit and owner configuration checklist

See [AUDIT.md](AUDIT.md) for fixes, source-check results, browser verification limits, required provider accounts, and the real submission acceptance test. **Live form delivery has not been verified.**
