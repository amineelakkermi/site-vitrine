
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; 
export default function Hero({ hero }) {
  if (!hero) return null; // ✅ تأكد أن البيانات موجودة

  const bgImage = hero.backgroundImage ? urlFor(hero.backgroundImage).url() : null;

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-gray-900 text-white overflow-hidden">
      {/* الخلفية */}
      {bgImage && (
        <Image
          src={bgImage}
          alt="Hero background"
          fill
          priority
          className="object-cover opacity-60"
        />
      )}

      {/* المحتوى */}
      <div className="relative z-10 max-w-2xl px-4">
        {hero.title && (
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{hero.title}</h1>
        )}
        {hero.subtitle && (
          <p className="text-lg md:text-xl mb-6">{hero.subtitle}</p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4">
          {hero.buttonText && (
            <a
              href={hero.buttonLink || "#"}
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
            >
              {hero.buttonText}
            </a>
          )}
          {hero.buttonText2 && (
            <a
              href={hero.buttonLink2 || "#"}
              className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition"
            >
              {hero.buttonText2}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
