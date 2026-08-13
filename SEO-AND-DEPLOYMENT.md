# Power Electrode Ltd: deployment and Google indexing

## Deploy

1. Replace the old project files with this optimized version.
2. Run `npm install` and `npm run build`.
3. Commit and push the changes to the GitHub repository connected to Vercel.
4. In Vercel, add `NEXT_PUBLIC_SITE_URL` with the final public website address. Do not add a trailing slash. For example: `https://powerelectrode.net`.
5. Redeploy after adding the environment variable.

## Submit the website to Google

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add and verify the final website domain.
3. Open **Sitemaps** and submit `sitemap.xml`.
4. Open **URL inspection**, enter the homepage URL, and select **Request indexing**.
5. Repeat URL inspection for `/about`, `/products`, `/manufacturing`, and `/contact`.

The website now provides page titles, descriptions, canonical URLs, organization structured data, `robots.txt`, and `sitemap.xml`. Google controls when pages are crawled and ranked, so indexing is not instant or guaranteed.

## Improve local visibility

Create or verify a Google Business Profile using the exact company name, phone number, email, address, and website used on this site. Keeping those details consistent helps Google connect the website with the business.
