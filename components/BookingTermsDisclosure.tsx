import Link from 'next/link'

type BookingTermsDisclosureProps = {
  className?: string
  align?: 'left' | 'center' | 'right'
}

/**
 * Concise acceptance notice for first-party CTAs that open the external
 * iCANS paid booking flow. This site does not collect a checkbox acceptance;
 * final reservation acceptance occurs on the external booking platform.
 */
export default function BookingTermsDisclosure({
  className = '',
  align = 'center',
}: BookingTermsDisclosureProps) {
  const alignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

  return (
    <p
      className={`text-xs text-gray-400 leading-relaxed ${alignClass} ${className}`}
    >
      Completing a reservation constitutes agreement to our{' '}
      <Link
        href="/terms-and-conditions"
        className="text-gold underline underline-offset-2 hover:text-gold-bright"
      >
        Terms and Conditions
      </Link>
      .
    </p>
  )
}
