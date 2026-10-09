export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2D2D2D] font-sans">
      {/* Header */}
      <header className="bg-[#F2EEE7] py-16 md:pt-50 md:pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#9b8b7e] mb-4">
            Legal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2D2D2D] leading-[1.1] mb-4">
            Cancellations, Returns & Complaints
          </h1>
          <p className="text-[#6B6B6B] text-base md:text-lg">
            Last updated: 13 September 2026
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[#6B6B6B] leading-relaxed mb-12">
            North Expression AB creates custom-made rugs based on specifications agreed individually with each customer. Customers cannot purchase or pay directly through our website. An inquiry is followed by a written quotation and order confirmation.
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2D2D2D] mb-6 pb-2 border-b border-[#d8d4cc]">
              1. Before an order is confirmed
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Submitting an inquiry or requesting a quotation does not create a binding purchase. You may decide not to proceed before the final quotation is accepted and the order is confirmed.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2D2D2D] mb-6 pb-2 border-b border-[#d8d4cc]">
              2. Custom-made products and right of withdrawal
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Our rugs are made according to the customer's chosen measurements, design, colours, materials or other specifications and have a clearly personalised character.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Under Swedish and European consumer rules, the normal right to withdraw from many distance purchases does not generally apply to goods made according to the consumer's instructions or clearly personalised for the consumer.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              For this reason, once a custom order becomes binding, it cannot normally be cancelled or returned simply because the customer has changed their mind.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2D2D2D] mb-6 pb-2 border-b border-[#d8d4cc]">
              3. Requests to change or cancel an order
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Please contact us immediately if you wish to change or cancel an order. We will consider the request based on the production stage, materials already ordered, work completed and commitments already made to our production partners.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              Any change or cancellation must be accepted by North Expression AB in writing. Additional costs or changes to the production and delivery schedule may apply and will be communicated before the change is confirmed.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2D2D2D] mb-6 pb-2 border-b border-[#d8d4cc]">
              4. Faulty, incorrect or damaged products
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              The absence of a general right of withdrawal for a custom-made rug does not remove your legal rights if the rug is faulty, damaged or materially different from the agreed specifications.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              If you believe there is a problem, contact us at inquiry@northexpression.com and provide:
            </p>
            <ul className="space-y-3 text-[#6B6B6B] leading-relaxed mb-6">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#9b8b7e] rounded-full mt-2 flex-shrink-0" />
                <span>your name and order or invoice number;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#9b8b7e] rounded-full mt-2 flex-shrink-0" />
                <span>a clear description of the problem;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#9b8b7e] rounded-full mt-2 flex-shrink-0" />
                <span>photographs showing the rug and the relevant detail; and</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#9b8b7e] rounded-full mt-2 flex-shrink-0" />
                <span>photographs of the packaging where transport damage is involved.</span>
              </li>
            </ul>
            <p className="text-[#6B6B6B] leading-relaxed">
              Please report visible transport damage as soon as reasonably possible. A delay in reporting does not remove any mandatory statutory rights.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2D2D2D] mb-6 pb-2 border-b border-[#d8d4cc]">
              5. Handmade variations
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Because every rug is handmade, small variations in colour, dimensions, texture, weave, pile or surface may occur. Natural variations consistent with the agreed specifications, approved sample and reasonable handmade tolerances are not defects.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              Screen images and photographs can also display colours differently. Where exact colour matching is important, the agreed physical sample and written specifications will be used when assessing the finished rug.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2D2D2D] mb-6 pb-2 border-b border-[#d8d4cc]">
              6. Remedies and refunds
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              When a valid complaint is accepted, the appropriate remedy will depend on the circumstances and applicable law. It may include correction, repair, replacement, price reduction or cancellation of the purchase and refund where legally required.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              We do not promise an automatic refund before we have had a reasonable opportunity to inspect and assess the rug. This does not restrict mandatory consumer rights.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2D2D2D] mb-6 pb-2 border-b border-[#d8d4cc]">
              7. Consumer complaint rights
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-6">
              Consumers in Sweden have statutory rights concerning defects that existed when the product was delivered and became apparent within the period provided by law. These statutory rights are separate from any voluntary guarantee and cannot be limited by this policy.
            </p>
            <p className="text-[#6B6B6B] leading-relaxed">
              If we cannot resolve a dispute together, a Swedish consumer may be entitled to refer the matter to the Swedish National Board for Consumer Disputes, Allmänna reklamationsnämnden (ARN), at <a href="https://www.arn.se" className="text-[#9b8b7e] hover:underline">www.arn.se</a>, subject to ARN's requirements.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2D2D2D] mb-6 pb-2 border-b border-[#d8d4cc]">
              8. Business customers
            </h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              For purchases made by a company, architect, interior designer, hotel, reseller or other professional customer, cancellation, returns and complaints are governed by the individual quotation, order confirmation or other written agreement and applicable law.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2D2D2D] mb-6 pb-2 border-b border-[#d8d4cc]">
              9. Contact us
            </h2>
            <div className="bg-[#F2EEE7] p-6 md:p-8 rounded-sm border border-[#d8d4cc]">
              <div className="space-y-3 text-[#2D2D2D]">
                <p className="font-semibold">North Expression AB</p>
                <p>Skeppargatan 88</p>
                <p>115 30 Stockholm, Sweden</p>
                <p>Email: inquiry@northexpression.com</p>
                <p>Telephone and WhatsApp: +46 70 729 93 90</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
