
import Image from "next/image";

export default function Services({ services }) {
  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Nos Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition duration-300"
          >
            {service.icon && (
              <div className="flex justify-center mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            )}
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
