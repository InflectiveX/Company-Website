import Link from "next/link";

export default function IndustryInsight() {
  return (
    <section
      id="industry-insight"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden border border-[#0e122e] bg-[#000529]/80 px-8 py-16 md:py-24 text-center">
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "url(https://framerusercontent.com/images/6hp4XCjXHDtpkGmVBUA1lWMW4U.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Decorative blurs */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#003bff]/20 rounded-full blur-[100px]" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#003bff]/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <span className="section-tag mb-6 inline-flex">
              Industry Insights
            </span>
            <p
              className="text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.2] mt-6 mb-6 max-w-[700px] mx-auto"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Website Design Impacts Customer Retention
            </p>
            <p className="text-[#a7adbe] text-[17px] md:text-[20px] leading-[1.5] mb-8 max-w-[500px] mx-auto">
              Capture and retain more customers by optimizing your
              website&apos;s design for engagement.
            </p>
            <Link
              href="#pricing"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-[16px]"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
