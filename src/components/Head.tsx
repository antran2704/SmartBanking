import { ColorSchemeScript } from "@mantine/core";

const titleContent: string = "Smart Banking";
const description: string =
  "This is Smart Banking website was created by Antran. Website have 4 part: Home, Feature, Pricing, FAQ. So, why you don't review it once???";

const image: string = "/images/imageHeadTag.png";
const urlWebsite: string = "https://smart-banking-nine.vercel.app";

const Head = () => {
  return (
    <head>
      {/* Primary Meta Tags */}
      <title>{titleContent}</title>
      <link rel="icon" href="/images/logo.png" />
      <link rel="canonical" href={urlWebsite} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content={titleContent} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlWebsite} />
      <meta property="og:title" content={titleContent} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlWebsite} />
      <meta property="twitter:title" content={titleContent} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* google site verification */}
      <meta name="google-site-verification" content="LbX2O1wn_arb_DSJ-CzEDjeE4eS9sC2wqPNUjs4MdUQ" />
      <ColorSchemeScript />
    </head>
  );
};

export default Head;
