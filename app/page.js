import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const hero = await client.fetch(`
    *[_type == "hero"][0]{
      title,
      subtitle,
      "backgroundImage": backgroundImage.asset->url,
      buttonText,
      buttonLink,
      buttonText2,
      buttonLink2
    }

  `);

   const services = await client.fetch(`*[_type == "service"]{
    _id, title, description, "icon": icon.asset->url
  }`);

  return (
    <main>
      <Hero hero={hero} />
      <Services services={services} />

    </main>
  );
}
