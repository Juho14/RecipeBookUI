import { SEOWrapper } from '../seo/SEOWrapper'

export function AboutPage() {
  return (
    <SEOWrapper
      title="About Us – My App"
      description="Learn about My App, our mission, and values."
      canonical="https://myapp.com/about"
      lang="en"
    >
      <h1>About Us</h1>
      <p>Here’s all the content for the About page...</p>
      {/* any other components */}
    </SEOWrapper>
  )
}
