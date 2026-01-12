// components/PageLayout.tsx
import { SEO } from './SEO'

interface PageLayoutProps {
    title: string
    description: string
    canonical?: string
    lang?: string
    ogImage?: string
    children: React.ReactNode
}

export function SEOWrapper({
    title,
    description,
    canonical,
    lang,
    ogImage,
    children,
}: PageLayoutProps) {
    return (
        <>
            {/* SEO meta */}
            <SEO
                title={title}
                description={description}
                canonical={canonical}
                lang={lang}
                ogImage={ogImage}
            />

            {/* Page content */}
            <main>{children}</main>
        </>
    )
}
