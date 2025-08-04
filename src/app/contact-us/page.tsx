import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-br from-[#e31b25]/10 via-white to-[#7e141c]/10 py-10 px-4">
      <div className="container flex items-center">
        {/* Page Header */}
        <div className="text-center mb-12 w-2/4 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#7e141c] via-[#e31b25] to-black bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to take the next step? We&apos;re here to help you succeed. Reach
            out and let&apos;s discuss how we can work together.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm
          className="w-2/4"
          title="Ready to Connect?"
          description=""
        />
      </div>
    </div>
  );
}
