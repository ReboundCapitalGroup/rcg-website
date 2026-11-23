import Link from 'next/link'
import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Foreclosure Help & Options Before the Auction | RCG',
  description: 'Facing foreclosure? Options before the auction to keep your home or protect your equity: time extensions, cash offers, mortgage assumptions and more. Free review, call or text 24/7.',
}

export default function ForeclosureSolutionsPage() {
  return (
    <ServicePage
      slug="foreclosure-solutions"
      image="/img/front-door.webp"
      imagePos="50% 60%"
      band={{ src: "/img/aerial-gulf-coast.webp", title: "Your equity is worth protecting.", text: "As long as the home has not sold at auction, there is usually still room to act." }}
      serviceName="Foreclosure Help & Options"
      badge="Before the auction · Protect your equity"
      h1Lead="Foreclosure Help"
      h1Accent="Before the Auction."
      answer="If your home is in foreclosure but has not sold yet, you likely have more options than you think. Depending on your timeline, an attorney may be able to postpone the sale, a buyer may take over your mortgage, or you can sell first and keep your equity. The first review is free, and the sooner you reach out, the more options are open."
      ctaHref="/free-review?type=pre_foreclosure"
      ctaLabel="Get my options, free"
      sections={[
        {
          tag: 'Before the auction',
          title: 'Options that protect your equity.',
          points: ['Pre-sale plan', 'Equity protection', 'More time', 'Free review'],
          body: (
            <>
              <p>Most homeowners in foreclosure think their only choices are to fight a losing battle or walk away with nothing. That is rarely the whole picture. As long as the home has not sold at auction, there is usually room to act, and the equity you built is worth protecting.</p>
              <p>Depending on your timeline, we may be able to arrange a cash offer before the sale, connect you with a qualified buyer to take over your mortgage, or connect you with an attorney who can ask for more time. The goal is the same every time: keep more of what is yours.</p>
              <p>And if the sale already happened, the story is not over. When a home sells for more than what was owed, the extra belongs to the former owner. See <Link href="/services/foreclosure-surplus">foreclosure surplus funds</Link>.</p>
            </>
          ),
        },
      ]}
      cards={{
        tag: 'Your options',
        title: 'Paths before the sale.',
        items: [
          { tag: 'More time', title: 'Time Extensions', desc: 'An attorney from our network may be able to postpone the sale while you work on a loan modification, a sale, a mortgage takeover and more.', href: '/services/time-extensions', linkLabel: 'Explore time extensions' },
          { tag: 'Sell first', title: 'Cash Offer', desc: 'Sell the home as-is before the auction and walk away with your equity instead of losing it at the sale.', href: '/services/cash-offer', linkLabel: 'Explore a cash offer' },
          { tag: 'Hand it off', title: 'Mortgage Assumption', desc: 'In some cases a qualified buyer can take over your existing mortgage, so the home never goes to auction.', href: '/services/mortgage-assumptions', linkLabel: 'Explore mortgage assumptions' },
          { tag: 'Already sold?', title: 'Claim the Surplus', desc: 'If the auction already happened and the home sold for more than you owed, the extra is still yours.', href: '/services/foreclosure-surplus', linkLabel: 'Check for surplus funds' },
        ],
      }}
      faqs={[
        { q: 'I have not lost the home yet. Can you still help?', a: 'Yes. Before the sale is when the most options exist. We may be able to arrange a cash offer, a mortgage assumption, or connect you with an attorney who can ask for more time.' },
        { q: 'What does it cost to explore my options?', a: 'Nothing. We review your situation and lay out the realistic paths for free. You decide what to do from there.' },
        { q: 'How fast do I need to act?', a: 'As soon as you can. Once a sale date is set, the window narrows quickly. The earlier you reach out, the more options remain.' },
        { q: 'What if none of the options work?', a: 'If the sale goes ahead and the home sells for more than what was owed, the surplus belongs to you, and we help you recover it.' },
      ]}
      related={[
        { href: '/services/time-extensions', label: 'Time Extensions', desc: 'Postpone the sale or get more time before eviction.' },
        { href: '/services/cash-offer', label: 'Cash Offer Before the Sale', desc: 'Sell before the auction and keep your equity.' },
        { href: '/services/foreclosure-surplus', label: 'Already Sold? Claim the Surplus', desc: 'The extra from the sale may be yours.' },
      ]}
      ctaTitle="Still in the foreclosure process?"
      ctaText="The sooner we talk, the more options you have. Tell us where things stand and we will lay out every realistic path, for free."
    />
  )
}
