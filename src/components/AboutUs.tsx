import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="section-tag mb-4 inline-flex">About Us</span>
            <h2
              className="text-[28px] md:text-[32px] lg:text-[42px] font-bold leading-[1.2] mt-4 mb-6"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Discover Who We Are and Our Mission
            </h2>
            <p className="text-[#6d7792] text-[17px] leading-[1.6] mb-8">
              Discover who we are and our mission at InflectiveX. We are a
              passionate team of software development specialists dedicated to
              crafting exceptional digital solutions. Our mission is to empower
              businesses with innovative software that not only captivates but
              also drives results.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact"
                className="btn-primary px-7 py-3 text-[15px]"
              >
                Contact Us
              </Link>
              <Link
                href="#work"
                className="btn-secondary px-7 py-3 text-[15px]"
              >
                View Projects
              </Link>
            </div>

            {/* Team */}
            <div className="flex gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="https://framerusercontent.com/images/M3X2ktGKGEjzjKkOfnZGSbkZN4c.png"
                  alt="Ryan Matthews"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p
                    className="text-[15px] font-semibold"
                    style={{
                      fontFamily: "var(--font-rethink-sans), sans-serif",
                    }}
                  >
                    Ryan Matthews
                  </p>
                  <p className="text-[#6d7792] text-[13px]">Co Founder</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="https://framerusercontent.com/images/gF9H8D7b4FTYz9lRLp75RsXJPo.png"
                  alt="David Parker"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p
                    className="text-[15px] font-semibold"
                    style={{
                      fontFamily: "var(--font-rethink-sans), sans-serif",
                    }}
                  >
                    David Parker
                  </p>
                  <p className="text-[#6d7792] text-[13px]">Co Founder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://framerusercontent.com/images/fv5yPBmjikTk2Jc47v6BFoFyxg.png"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
