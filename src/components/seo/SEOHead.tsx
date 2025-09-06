import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  image = '/logo_mini.png',
  url = 'https://kenroz.com',
  type = 'website',
  noindex = false
}: SEOHeadProps) {
  const fullTitle = title.includes('Kenroz') ? title : `${title} | Kenroz`;
  const fullImageUrl = image.startsWith('http') ? image : `https://kenroz.com${image}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content="Kenroz" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Kenroz" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@kenroz" />
      <meta name="twitter:creator" content="@kenroz" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#df2a33" />
      <meta name="msapplication-TileColor" content="#df2a33" />
      <meta name="application-name" content="Kenroz" />
      <meta name="apple-mobile-web-app-title" content="Kenroz" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo_mini.png" />
    </Head>
  );
}