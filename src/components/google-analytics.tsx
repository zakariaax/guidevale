import Script from "next/script";

const MEASUREMENT_ID = "G-H0LZGJ9W17";

export function GoogleAnalytics() {
  if (!/^G-[A-Z0-9]+$/.test(MEASUREMENT_ID)) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
