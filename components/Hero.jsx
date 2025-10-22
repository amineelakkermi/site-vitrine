
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; 
export default function Hero({ hero }) {
  if (!hero) return null; // ✅ تأكد أن البيانات موجودة

  const bgImage = hero.backgroundImage ? urlFor(hero.backgroundImage).url() : null;

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* الخلفية */}
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt="Hero background"
            fill
            priority
            className="object-cover opacity-40 scale-105 animate-[zoom_20s_ease-in-out_infinite_alternate]"
          />
          {/* Gradient overlay pour plus de profondeur */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-[1]"></div>
        </>
      )}

      {/* المحتوى */}
      <div className="relative z-10 max-w-3xl px-4 animate-[fadeInUp_1s_ease-out]">
        {hero.title && (
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl animate-[fadeInUp_1s_ease-out_0.2s_both]">
            {hero.title}
          </h1>
        )}
        {hero.subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both]">
            {hero.subtitle}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 animate-[fadeInUp_1s_ease-out_0.6s_both]">
          {hero.buttonText && (
            <a
              href={hero.buttonLink || "#"}
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10">{hero.buttonText}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
          {hero.buttonText2 && (
            <a
              href={hero.buttonLink2 || "#"}
              className="group relative px-8 py-4 border-2 border-white text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">{hero.buttonText2}</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-[scroll_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
