export const guides = [
  {
    slug: 'japan-guided-tour-vs-diy',
    tripId: 'japan',
    flag: '\u{1F1EF}\u{1F1F5}',
    category: 'Japan Travel Guide',
    title: 'Japan: Guided Tour or DIY? How to Decide',
    teaser: 'A fixed-departure guided package folds flights, hotels, transfers, and a local guide into one all-in price. Planning independently takes more research time and gives you total freedom. Here is what each option really costs, and how to pick the one that fits you.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    imageAlt: "Pedestrians crossing a busy intersection in Tokyo's Shibuya district at dusk.",
    sections: [
      { id: 'what-a-package-includes', label: 'What an all-in package can include' },
      { id: 'what-diy-involves', label: 'What DIY Japan planning actually involves' },
      { id: 'the-cost-question', label: 'The cost question: is an all-in package a rip-off?' },
      { id: 'side-by-side', label: 'Guided package vs. DIY: side by side' },
      { id: 'who-benefits-from-guided', label: 'Who benefits from a guided fixed-departure package' },
      { id: 'who-should-plan-diy', label: 'Who should plan Japan independently' },
      { id: 'the-middle-path', label: 'The middle path: guidance without a straitjacket' },
      { id: 'how-maharaja-approaches', label: 'How Maharaja approaches the Japan decision' },
      { id: 'decision-framework', label: 'Your decision framework' },
      { id: 'bottom-line', label: 'Bottom line' },
    ],
  },
];

export function guideBySlug(slug) {
  return guides.find(g => g.slug === slug) || null;
}

export function relatedGuideByTripId(tripId) {
  return guides.find(g => g.tripId === tripId) || null;
}
