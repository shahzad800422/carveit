import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "CARVEIT TECH - Web Development & IT Consulting for Small Businesses",
  description = "Professional web development, mobile apps, and IT consulting designed specifically for small businesses. Transparent pricing, on-time delivery, and 6 months free support included.",
  keywords = "small business web development, mobile app development, IT consulting, business websites, e-commerce, custom software, small business technology",
  canonical = "https://tourmaline-axolotl-a38e7a.netlify.app",
  ogImage = "https://tourmaline-axolotl-a38e7a.netlify.app/og-image.jpg"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="CARVEIT TECH" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="CARVEIT TECH" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "CARVEIT TECH",
          "url": "https://tourmaline-axolotl-a38e7a.netlify.app",
          "logo": "https://tourmaline-axolotl-a38e7a.netlify.app/logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tech Street",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94105",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "carveittech@gmail.com"
          },
          "sameAs": [
            "https://linkedin.com/company/carveit-tech",
            "https://twitter.com/carveittech",
            "https://github.com/carveittech"
          ],
          "service": [
            {
              "@type": "Service",
              "name": "Web Development",
              "description": "Custom websites and web applications for small businesses"
            },
            {
              "@type": "Service", 
              "name": "Mobile App Development",
              "description": "iOS and Android mobile applications"
            },
            {
              "@type": "Service",
              "name": "IT Consulting",
              "description": "Strategic technology consulting and cloud migration"
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;