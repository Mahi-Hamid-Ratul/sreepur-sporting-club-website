"use client"

import Image from "next/image"

export function TrustedBy() {
  const partners = [
    {
      id: 1,
      name: "As Sunnah Foundation",
      image: "/Seal_of_As-Sunnah_Foundation.webp",
    },
    {
      id: 2,
      name: "Priyo Noakhali",
      image: "/priyo-noakhali-logo.webp",
    },
    {
      id: 3,
      name: "Ash Shifa",
      image: "/ash-shifa-roktodan-kendro.webp",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trusted By
          </h2>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee">
            <div className="marquee__group">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="logo-card"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={110}
                    height={55}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Second identical group for perfect loop */}
            <div className="marquee__group">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`dup-${partner.id}-${index}`}
                  className="logo-card"
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={110}
                    height={55}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .marquee {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        .marquee__group {
          display: flex;
        }

        .logo-card {
          min-width: 150px; 
          height: 72px;  
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px; 
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-radius: 10px;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
