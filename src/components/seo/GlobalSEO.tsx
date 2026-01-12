import { useSEO } from "../../hooks/useSeo"

export function GlobalSEO(dynamicMeta?: any) {
    const { title, description, canonical, ogImage } = useSEO(dynamicMeta)

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            {ogImage && <meta property="og:image" content={ogImage} />}
            <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
        </>
    )
}
