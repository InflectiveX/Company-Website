export default function Mission() {
  return (
    <section
      id="our-mission"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center justify-center">
          {/* Background videos */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            <source
              src="https://framerusercontent.com/images/lfS5V3lb1ImRKGmUShdiVKUM.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#000319]/60 via-[#000319]/40 to-[#000319]/80" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 py-16 max-w-[800px]">
            <h1
              className="text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.2] mb-6"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Our mission is to design websites that attract and engage
              customers.
            </h1>
            <p className="text-[#a7adbe] text-[17px] md:text-[20px] leading-[1.5]">
              However, we approach things a bit differently around here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
