import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import NavigationOptimized from '@/components/NavigationOptimized'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dumpster Rental Terms and Conditions | Higgs Hauling',
  description:
    'Dumpster rental terms and conditions for Higgs Hauling LLC, including rental periods, fees, cancellations, weight limits, and customer responsibilities in Lawton, OK.',
  alternates: {
    canonical: '/terms-and-conditions',
  },
  openGraph: {
    title: 'Dumpster Rental Terms and Conditions | Higgs Hauling',
    description:
      'Read the dumpster rental terms and conditions for Higgs Hauling LLC before booking.',
    url: '/terms-and-conditions',
    type: 'website',
    siteName: 'Higgs Hauling',
  },
  robots: {
    index: true,
    follow: true,
  },
}

function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-gold mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-gray-200 leading-relaxed">{children}</div>
    </section>
  )
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen">
      <NavigationOptimized />

      <article className="section-padding bg-matte-black relative overflow-hidden pt-32 md:pt-36">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-construction-orange/[0.08] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-gold/[0.05] rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 max-w-4xl">
          <header className="mb-12 text-center md:text-left">
            <p className="text-sm text-gray-400 mb-4">
              <Link href="/" className="text-gold-amber hover:text-gold transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Terms and Conditions</span>
            </p>
            <h1 className="heading-secondary text-white mb-4">
              Dumpster Rental <span className="text-gold">Terms and Conditions</span>
            </h1>
            <div className="flex gap-2 justify-center md:justify-start mb-6">
              <div className="w-12 h-1 bg-gold" />
              <div className="w-12 h-1 bg-construction-orange" />
            </div>
          </header>

          <Section title="Welcome">
            <p>
              We&apos;re here to make your dumpster rental experience smooth and hassle-free,
              whether you&apos;re placing your order online, by phone, or via text. By
              partnering with us, you agree to these friendly guidelines to keep everything
              running smoothly.
            </p>
          </Section>

          <Section title="Rental Period">
            <p>
              Your rental starts when the dumpster is delivered and ends on the scheduled
              pickup date we&apos;ve agreed on. Subject to availability, drop-off times are
              between 9:00 AM and 5:00 PM unless a specific delivery time has been scheduled
              during booking. The rental period begins immediately upon delivery, regardless
              of whether the customer is present at the time of delivery.
            </p>
            <p>
              <strong className="text-white">Short Rental—Up to 3 Days:</strong> Charged at
              the short-rental price. If your rental is kept longer than 3 days, it will
              automatically convert to the current weekly rental rate.
            </p>
            <p>
              <strong className="text-white">Weekly Rental—Up to 7 Days:</strong> Charged at
              the weekly rental price.
            </p>
            <p>
              <strong className="text-white">Days 8–10:</strong> Any additional days beyond
              the 7th day are charged at $20 per additional day up to 3 additional days
              (days 8–10), subject to availability and prior approval.
            </p>
            <p>
              <strong className="text-white">Day 11 onward:</strong> Any additional time
              beyond the 3-day extension period will begin a new Short Rental—Up to 3 Days
              or Weekly Rental—Up to 7 Days period, depending on the length of the requested
              extension.
            </p>
            <p>
              Extensions are subject to availability and must be arranged before the scheduled
              pickup day.
            </p>
            <p>
              Extension requests must be made before the scheduled pickup date and are not
              guaranteed. Extensions are subject to equipment availability.
            </p>
            <p>
              <strong className="text-white">Long-Term Rentals (Over 14 Days):</strong>{' '}
              Rentals exceeding 14 days may be subject to adjusted pricing or require
              scheduled dump-and-return service(s). Higgs Hauling LLC reserves the right to
              require a minimum number of hauls for extended rentals based on availability and
              demand.
            </p>
          </Section>

          <Section title="Delivery and Pickup">
            <p>
              We will deliver and pick up the dumpster from the location you choose, as long
              as the area is safe for our equipment. Higgs Hauling is not liable for damage to
              pavement, driveways, lawns, sidewalks, or surfaces resulting from placement or
              removal of the dumpster.
            </p>
            <p>
              The area must be clear of vehicles, debris, and obstacles. If the dumpster
              cannot be delivered or removed due to blocked access, unsafe conditions, or
              overfilling above the rim, additional trip or standby fees may apply.
              Return-trip fee: $150
            </p>
            <p>
              Please do not move the dumpster once it has been placed—contact us if it needs
              to be relocated. Relocation Fee: $50. If the requested location is unsafe for
              equipment, we may refuse to move or relocate the dumpster until a safe
              alternative location is provided.
            </p>
          </Section>

          <Section title="Hazardous Weather / Unsafe Conditions">
            <p>
              <strong className="text-white">Weather &amp; Unsafe Conditions:</strong>{' '}
              Deliveries or pickups may be delayed due to severe weather, unsafe ground
              conditions, flooding, soft yards, or high winds. Safety comes first for our
              drivers and equipment. We will reschedule as soon as it is safe to do so. If the
              area is too soft or unsafe for equipment, the customer may be responsible for
              providing an alternate drop location.
            </p>
          </Section>

          <Section title="Scheduling Access">
            <p>
              Please ensure the dumpster is accessible on your scheduled pickup day.
              Driveways, gates, alleys, and surrounding areas must be free of vehicles,
              debris, and obstacles.
            </p>
            <p>
              If we cannot deliver or pick up the dumpster due to blocked or unsafe access, a
              return-trip fee of $150 will apply.
            </p>
            <p>
              If pickup must be delayed due to access issues, additional daily rental charges
              may also apply according to the standard daily rate.
            </p>
            <p>
              If you need to change your pickup date, please notify us as soon as possible so
              we can keep your project on schedule.
            </p>
          </Section>

          <Section title="Using Your Dumpster">
            <p>
              The dumpster is for standard household, construction, and cleanup debris (see
              restricted items below). Please do not move the dumpster once it has been
              placed—contact us if it needs to be relocated. Relocation Fee: $50
            </p>
            <p>
              All materials must remain below the fill line and within the posted weight
              limit. Overfilled or overweight dumpsters may incur additional fees and may
              delay pickup.
            </p>
          </Section>

          <Section title="Containers, Drums & Liquids">
            <p>
              All drums, barrels, pails, buckets, and other containers placed in the dumpster
              must be completely empty and free of liquids with lids cut off and removed.
            </p>
            <p>
              Containers with unknown contents, liquid materials, or partially full products
              will not be transported.
            </p>
            <p>
              Roofing coatings, silicone coatings, primers, adhesives, mastics, sealants,
              paints, solvents, fuels, oils, and other liquid products must be completely
              used, empty, and properly disposed of by the customer before pickup.
            </p>
            <p>
              Higgs Hauling LLC reserves the right, but is under no obligation, to inspect the
              contents of any dumpster prior to transport. The customer remains solely
              responsible for the contents of the dumpster regardless of whether an inspection
              is performed.
            </p>
            <p>
              If prohibited materials or partially full containers are discovered before
              pickup, Higgs Hauling LLC may refuse pickup until the materials are removed.
              Daily rental charges, return-trip fees, and any additional disposal or handling
              costs will remain the responsibility of the customer.
            </p>
            <p>
              If prohibited materials are discovered after transport, the customer is
              responsible for all landfill rejection fees, return transportation costs,
              cleanup expenses, special handling charges, and any fines or penalties assessed
              by the disposal facility.
            </p>
          </Section>

          <Section title="Loading & Haul-Off Service">
            <p>
              If Higgs Hauling LLC provides labor to load debris, junk, or materials into the
              dumpster, pricing is based on the estimated volume, labor time, accessibility,
              and disposal weight. The quoted price includes loading of agreed-upon items
              only.
            </p>
            <p>
              Customer must clearly identify all items to be removed before loading begins.
              Higgs Hauling LLC is not responsible for selecting which items stay or go unless
              specifically directed by the customer.
            </p>
            <p>
              Pricing does not include demolition, disassembly, cutting, moving built-in
              fixtures, disconnecting utilities, or moving items from unsafe, hazardous, or
              inaccessible areas unless specifically agreed in writing.
            </p>
            <p>
              Additional labor, excessive carry distance, stairs, disassembly, blocked access,
              or items requiring extra handling may result in additional charges.
            </p>
            <p>
              Any prohibited materials, hazardous waste, liquids, chemicals, paint, fuel,
              batteries, asbestos, tires, or restricted disposal items found during loading or
              disposal may result in added landfill, handling, or restricted-item fees.
            </p>
          </Section>

          <Section title="Safety Practices">
            <p>
              For everyone&apos;s safety, all debris must remain level with the top of the
              dumpster—nothing should stick out or hang over the sides. Overfilled dumpsters
              may require unloading or adjustment before pickup, and additional fees may apply
              if the load is unsafe or requires extra handling.
            </p>
            <p>
              Do not let children on or near dumpster. Do not play on or in dumpster. Do not
              modify or alter the dumpster in any way.
            </p>
          </Section>

          <Section title="Weight Limits">
            <p>
              Each dumpster includes a set weight allowance. If the load goes over that
              amount, an overage fee of $60 per additional ton (or portion of a ton) will be
              charged based on the landfill/transfer station scale ticket.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>13-yard dumpster: 1 ton included; $60/ton overage</li>
              <li>15-yard dumpster: 1 ton included; $60/ton overage</li>
              <li>20-yard dumpster: 2 tons included; $60/ton overage</li>
            </ul>
            <p>
              Overweight loads may delay pickup or require material to be removed to meet safe
              transport guidelines, and any overage fees will be billed to the card on file.
            </p>
          </Section>

          <Section title="What to Toss (and What to Skip)">
            <p>
              You can load the dumpster with general household junk, construction debris, yard
              waste, and cleanup materials. However, the following items cannot be placed in
              the dumpster due to landfill and safety regulations. The following items are
              strictly prohibited and may result in additional fees if disposed of in the
              dumpster:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hazardous stuff (like chemicals, asbestos, or medical waste)</li>
              <li>
                Flammable items: Paints, solvents, gas, diesel, or flammable liquids, etc.
              </li>
              <li>
                Liquid roofing products, roofing coatings (including silicone coatings),
                mastics, adhesives, primers, sealants, or containers that are not completely
                empty.
              </li>
              <li>Propane tanks or pressurized cylinders</li>
              <li>Electronics and batteries</li>
              <li>Tires (unless approved)</li>
              <li>Appliances (unless approved)</li>
              <li>
                Heavy materials like Dirt, concrete, rock, or brick loads (must be approved)
              </li>
            </ul>
            <p>
              Any prohibited items may result in landfill fines, handling fees, or rejection of
              the load.
            </p>
            <p>
              If you&apos;re unsure about an item, just send us a quick message—we&apos;re
              happy to confirm before you toss it.
            </p>
          </Section>

          <Section title="Restricted Item Fees">
            <p>
              Disposal of restricted items may result in landfill fines, handling fees,
              contamination fees, or a rejected load. Fees for prohibited items range from $10
              to $250+ per item depending on landfill charges.
            </p>
          </Section>

          <Section title="Fees and Payment">
            <p>
              By providing your credit or debit card, you authorize Higgs Hauling LLC to
              charge it for the rental cost, delivery, pickup, and any additional fees that
              may apply. These may include fees for overweight loads, overfilled dumpsters,
              return trips due to blocked access, extended rental days, or restricted items
              found in the load.
            </p>
            <p>
              If the dumpster exceeds the weight limit, contains prohibited materials,
              partially full containers, unknown substances, liquids, is overfilled past the
              rim, or cannot be safely picked up, additional charges will be applied based on
              posted rates.
            </p>
            <p>
              <strong className="text-white">Extended Rental Service:</strong> For rentals
              exceeding 14 days, additional dump-and-return services may be required. Each
              dump-and-return is billed at the current haul rate. Long-term rental pricing may
              be quoted separately from standard daily rates.
            </p>
            <p>
              Loading labor estimates are based on normal access and agreed item volume. If
              the actual load size, labor time, or disposal weight exceeds the quoted amount,
              additional charges may apply.
            </p>
          </Section>

          <Section title="Handling & Violation Fees">
            <ul className="list-disc pl-6 space-y-3">
              <li>Overfilled dumpster (above the top rail): $75</li>
              <li>
                Unsafe or severely overloaded load requiring hand removal: $150 minimum, or
                pickup may be refused until the load is corrected. Any additional labor,
                disposal, or transportation costs will be the customer&apos;s responsibility.
              </li>
              <li>
                Blocked access preventing pickup: $50 plus the applicable dry-run fee if the
                dumpster cannot be serviced.
              </li>
              <li>Failed pickup attempt (dry run): $150</li>
              <li>
                Order cancellation: $75–$150, depending on when the cancellation occurs.
              </li>
              <li>Overweight loads: $60 per ton over the included weight allowance.</li>
              <li>
                Prohibited Material Handling Fee: $150 minimum per trip, plus all landfill,
                recycling, environmental, disposal, and transportation charges.
              </li>
            </ul>
            <p>
              <strong className="text-white">Prohibited materials:</strong> If prohibited
              materials are found in the dumpster, the customer is responsible for all costs
              incurred by Higgs Hauling LLC, including but not limited to transportation,
              disposal, landfill, recycling, environmental, cleanup, labor, and any applicable
              fines. These charges will be billed at Higgs Hauling LLC&apos;s actual costs
              plus a 30% handling and administrative fee. The customer is also responsible for
              any fines, government penalties, legal costs, damages, or expenses resulting
              from prohibited materials placed in the dumpster.
            </p>
            <p>
              <strong className="text-white">
                Additional Rental Charges Following a Failed Pickup:
              </strong>{' '}
              If Higgs Hauling LLC is unable to retrieve the dumpster on the scheduled pickup
              date due to any customer-caused condition, including but not limited to blocked
              access, locked gates, unsafe or overloaded loads, prohibited materials, or any
              other condition preventing safe pickup, the rental period will continue until
              the dumpster is successfully retrieved. The customer remains responsible for all
              applicable daily rental charges, extension fees, and/or new rental periods in
              accordance with the current rental terms.
            </p>
          </Section>

          <Section title="Payment Made Easy">
            <p>
              The full rental fee is charged at the time of booking. Your card will remain
              securely on file and will be used to process any additional charges such as
              overweight fees, restricted-item fees, return-trip fees, damages or other
              applicable costs once the dumpster is hauled to the landfill and the final
              weight is confirmed.
            </p>
            <p>
              <strong className="text-white">Cancellation Policy:</strong> Cancellations made
              more than 24 hours before delivery will receive a full refund. Cancellations
              made within 24 hours of the scheduled delivery are subject to a $75 cancellation
              fee. If the dumpster is already loaded for delivery, dispatched, or the driver
              is en route, the cancellation fee may increase to $100–$150 depending on travel
              distance and scheduling impact.
            </p>
            <p>
              Long-term rentals, custom quoted rentals, and loading/haul-off services may
              require full payment upfront at the time of booking. Any overweight charges,
              additional dump-and-return services, or added labor fees will be charged
              separately as they occur or at the completion of the service period.
            </p>
          </Section>

          <Section title="Permits and Permissions">
            <p>
              Customers are responsible for obtaining any required permits or approvals—whether
              from the city, county, or a homeowners&apos; association (HOA)—for the placement
              of the dumpster. We will place the dumpster where you request as long as it is
              safe and accessible, but it is the customer&apos;s responsibility to ensure that
              all permissions are secured before delivery.
            </p>
          </Section>

          <Section title="Taking Care of Things">
            <p>
              We do our best to place and remove the dumpster carefully. Because of the weight
              of the equipment and contents, we are not liable for damage to driveways,
              asphalt, concrete, lawns, landscaping, or any surface where the dumpster is
              placed. If you&apos;re concerned about surface damage, please lay down plywood
              or another protective barrier before delivery.
            </p>
          </Section>

          <Section title="Liability Release">
            <p>
              By ordering a dumpster, the customer agrees to hold Higgs Hauling LLC harmless
              from any damage to pavement, grass, driveways, underground utilities, septic
              systems, landscaping, or other surfaces caused by the weight of the dumpster,
              truck, or equipment at the location requested by the customer.
            </p>
          </Section>

          <Section title="Damage Care">
            <p>
              You are responsible for any damage to the dumpster or equipment that occurs
              during your rental period, including damage caused by overloading, improper use,
              restricted or hazardous materials, fire, vandalism, or placement conditions. Any
              repair or replacement costs will be billed to the card on file. Please notify us
              immediately if any damage occurs.
            </p>
          </Section>

          <Section title="Looking Ahead">
            <p>
              These terms apply to all your orders with us, whether by price, payment method,
              or address—keeping it consistent and easy!
            </p>
          </Section>

          <Section title="Local Rules">
            <p>
              Everything&apos;s guided by the state laws and whatever local guidelines apply.
              Pretty standard stuff to keep us all on the same page.
            </p>
          </Section>

          <p className="text-sm text-gray-400 pt-4 border-t border-gold/20">
            Questions about these terms?{' '}
            <a href="tel:+15802844717" className="text-gold hover:underline">
              Call (580) 284-4717
            </a>{' '}
            or{' '}
            <Link href="/#contact" className="text-gold hover:underline">
              request a free estimate
            </Link>
            .
          </p>
        </div>
      </article>

      <Footer />
    </main>
  )
}
