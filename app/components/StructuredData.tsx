import { SOCIAL_LINKS } from '@/lib/constants';
import { siteMetadata } from '@/lib/metadata';

export function PersonStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Victor Elexpe',
          jobTitle: 'Cloud Architect',
          description: 'Cloud Architect and Founder of Almanzor Cloud. Expert in cloud-native solutions, enterprise data platforms, and AI platforms. Based in Madrid, Spain.',
          url: siteMetadata.siteUrl,
          email: 'projects@elexpe.dev',
          sameAs: [
            SOCIAL_LINKS.TWITTER,
            SOCIAL_LINKS.LINKEDIN,
            SOCIAL_LINKS.SPOTIFY,
            SOCIAL_LINKS.GITHUB
          ],
          knowsAbout: [
            'Cloud Architecture',
            'Cloud & Data Architecture',
            'Data Engineering',
            'Computer Engineering',
            'AI Platforms',
            'Enterprise Data Platforms',
            'Cloud-Native Solutions',
            'Digital Transformation',
            'Google Cloud Platform',
            'Kubernetes',
            'Docker',
            'Terraform',
            'BigQuery',
            'Data Pipelines',
            'ETL',
            'Machine Learning'
          ],
          alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'Technical University of Madrid'
          },
          worksFor: [
            {
              '@type': 'Organization',
              name: 'Seguros Ocaso',
              jobTitle: 'Cloud & Data Architect'
            },
            {
              '@type': 'Organization',
              name: 'Almanzor Cloud',
              jobTitle: 'Founder'
            }
          ],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Madrid',
            addressCountry: 'ES'
          }
        })
      }}
    />
  );
} 