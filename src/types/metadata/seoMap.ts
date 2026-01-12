// seoConfig.ts
export interface SEOConfig {
    title: string
    description: string
    canonical?: string
    lang?: string
    ogImage?: string
}

export const seoMap: Record<string, SEOConfig> = {
    '/about': {
        title: 'About Us – My App',
        description: 'Learn about My App, our mission, and values.',
        canonical: 'https://myapp.com/about',
        lang: 'en',
    },
    '/home': {
        title: 'Home – My App',
        description: 'Welcome to My App, your recipe hub!',
        canonical: 'https://myapp.com/home',
        lang: 'en',
    },
    '/instructions': {
        title: 'Instructions – My App',
        description: 'Step by step instructions for your recipes.',
        canonical: 'https://myapp.com/instructions',
        lang: 'en',
    },
    // dynamic routes can be handled separately
}
