import Image from "next/image";
import HeaderParticles from "./HeaderParticles";

const testimonials = [
  {
    name: "David Brown",
    title: "CEO - Lenux",
    quote:
      "We are thrilled with the results from InflectiveX. Their team's expertise and dedication to our project made the entire process smooth and rewarding.",
    avatar:
      "https://framerusercontent.com/images/i5l6FhMdZLHMcCTq0RYErPNJS4Q.png",
  },
  {
    name: "Sarah Adams",
    title: "CEO - Apex",
    quote:
      "Choosing InflectiveX was the best decision we made for our digital strategy. They listened to our needs and delivered a solution that surpassed all our goals.",
    avatar:
      "https://framerusercontent.com/images/djQdcQ7V7Yb40ldTfdwkyTKbJo.png",
  },
  {
    name: "Michael Smith",
    title: "CEO - Zenith",
    quote:
      "Working with InflectiveX was a game-changer for us. They delivered software that not only performs great but also drives significant traffic and conversions. Highly recommended!",
    avatar: "https://framerusercontent.com/images/5PRoaDZ6Ya5l4bezYKlU1wqw.png",
  },
  {
    name: "Emily Johnson",
    title: "Marketing Director",
    quote:
      "InflectiveX transformed our online presence with a stunning digital product that reflects our brand perfectly. Their attention to detail and commitment to excellence exceeded our expectations.",
    avatar:
      "https://framerusercontent.com/images/sU5BCJqH3O6WVdeIItL7Ad601o.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="relative text-center mb-14">
          <HeaderParticles />
          <span className="relative z-10 section-tag mb-4 inline-flex">
            Testimonials
          </span>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[42px] font-bold leading-[1.2] mt-4 mb-4"
            style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
          >
            Client Success Stories
          </h2>
          <p className="text-[#6d7792] text-[17px] max-w-[600px] mx-auto leading-[1.5]">
            Discover what our clients say about their experiences and success
            working with us.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#0e122e] bg-[#000529]/50 p-8 card-hover relative overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#3362ff">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, si) => (
                  <svg
                    key={si}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#ccd7ff] text-[15px] leading-[1.7] mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div>
                  <p
                    className="text-[15px] font-semibold"
                    style={{
                      fontFamily: "var(--font-rethink-sans), sans-serif",
                    }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[#6d7792] text-[13px]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
