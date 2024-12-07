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
          jobTitle: 'Computer Engineer',
          description: 'Data Engineer based in Madrid, Spain. Sim racing enthusiast and music producer.',
          url: siteMetadata.siteUrl,
          sameAs: [
            SOCIAL_LINKS.TWITTER,
            SOCIAL_LINKS.LINKEDIN,
            SOCIAL_LINKS.SPOTIFY
          ],
          knowsAbout: [
            'Data Engineering',
            'Computer Engineering',
            'Sim Racing',
            'Music Production'
          ],
          location: {
            '@type': 'Place',
            name: 'Madrid, Spain'
          }
        })
      }}
    />
  );
} 