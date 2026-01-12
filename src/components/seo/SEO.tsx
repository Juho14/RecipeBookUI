interface SEOProps {
  title: string
  description: string
  canonical?: string
  lang?: string
  ogImage?: string
}

export function SEO({
  title,
  description,
  canonical,
  lang = 'en',
  ogImage,
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <html lang={lang} />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter card */}
      <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
    </>
  )
}
