import Image from "next/image";
import Link from "next/link";
import HeaderParticles from "./HeaderParticles";

const posts = [
  {
    title: "User-Centric Product Design, A Complete Guide From Scratch",
    category: "Web Design",
    date: "Oct 11, 2024",
    image:
      "https://framerusercontent.com/images/ZcJAlPgAi41q3RtmnhrDwOeQ46A.png",
    link: "/blogs/user-centric-product-design-a-complete-guide-from-scratch",
  },
  {
    title: "The Power of Storytelling and Visual Elements in Branding",
    category: "Branding",
    date: "Sep 13, 2024",
    image: "https://framerusercontent.com/images/0b4stVqJQu59Yov7TwWzzgEwQ.png",
    link: "/blogs/the-power-of-storytelling-and-visual-elements-in-branding",
  },
  {
    title: "Innovative Web Design Techniques for Modern Brands",
    category: "Web Design",
    date: "Aug 22, 2024",
    image: "https://framerusercontent.com/images/guqZsDrgnOQxdkgIj64sM7Fjc.png",
    link: "/blogs/innovative-web-design-techniques-for-modern-brands",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="relative text-center mb-14">
          <HeaderParticles />
          <span className="relative z-10 section-tag mb-4 inline-flex">
            Our Blogs
          </span>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[42px] font-bold leading-[1.2] mt-4 mb-4"
            style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
          >
            News, insights and more
          </h2>
          <p className="text-[#6d7792] text-[17px] max-w-[600px] mx-auto leading-[1.5]">
            Dive into our blog for expert insights, tips, and industry trends to
            elevate your project management journey.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post, i) => (
            <Link
              key={i}
              href={post.link}
              className="group rounded-2xl border border-[#0e122e] bg-[#000529]/50 overflow-hidden card-hover block"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[12px] text-[#3362ff] px-3 py-1 rounded-full border border-[#161c44] bg-[#0e122e]">
                    {post.category}
                  </span>
                  <span className="text-[#6d7792] text-[13px]">
                    {post.date}
                  </span>
                </div>
                <h3
                  className="text-[17px] font-semibold leading-[1.4] mb-4"
                  style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
                >
                  {post.title}
                </h3>
                <div className="flex items-center gap-1 text-[#a7adbe] text-[14px] group-hover:text-white transition-colors">
                  Read Full Blog
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link
            href="/blogs"
            className="btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[15px]"
          >
            View All Blogs
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
