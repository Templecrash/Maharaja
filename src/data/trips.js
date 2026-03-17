export const trips = [
  {
    id: 'japan',
    continent: 'Asia',
    country: 'Japan',
    flag: '\u{1F1EF}\u{1F1F5}',
    title: 'Tokyo + Kyoto Experience',
    tagline: 'Neon streets, ancient temples, and unforgettable food',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    basePrice: 3900,
    duration: 10,
    departureDate: 'Oct 12',
    departureDateFull: 'Oct 12\u201322, 2026',
    spotsLeft: 12,
    flightFrom: 'LAX',
    flightIncluded: 'Los Angeles \u2192 Tokyo (Round-trip, Economy)',
    flightPrice: 1200,
    flightBusiness: { label: 'Los Angeles \u2192 Tokyo (Round-trip, Business)', price: 4800 },
    hotels: [
      {
        segment: 'Tokyo',
        days: 'Day 1\u20135',
        nights: 4,
        base: { name: 'Boutique hotel in Shinjuku', pricePerNight: 180, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', description: 'Stylish boutique hotel steps from Shinjuku station. Modern rooms, rooftop bar, and 24/7 convenience store next door.' },
        upgrade: { name: 'Park Hyatt Tokyo', pricePerNight: 420, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', description: 'The iconic Lost in Translation hotel. Floor-to-ceiling views of Mt. Fuji, infinity pool, and Michelin-starred dining.' },
      },
      {
        segment: 'Kyoto',
        days: 'Day 6\u201310',
        nights: 4,
        base: { name: 'Traditional ryokan near Gion', pricePerNight: 200, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80', description: 'Authentic Japanese inn with tatami rooms, onsen bath, and kaiseki breakfast. Walking distance to Gion district.' },
        upgrade: { name: 'Aman Kyoto', pricePerNight: 550, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', description: 'Ultra-luxury forest retreat. Private onsen, zen garden suites, and a hidden sanctuary in the hills above Kyoto.' },
      },
    ],
    segments: [
      {
        name: 'Tokyo',
        days: 'Day 1\u20135',
        stay: { name: 'Boutique hotel in Shinjuku', pricePerNight: 180, nights: 4, included: true },
        experiences: [
          {
            id: 'jp-sushi', name: 'Subway sushi stall experience', emoji: '\u{1F363}',
            description: 'Authentic omakase at a 6-seat counter under the Yurakucho tracks. Chef Tanaka has been serving here for 30 years.',
            price: 60, popular: true, popularPercent: 92, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=80', 'https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?w=600&q=80', 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80'],
            duration: '2.5 hours',
            timeOfDay: 'Evening, 6:00 PM',
            whatsIncluded: ['12-piece omakase set', 'Sake pairing (2 cups)', 'English-speaking food guide'],
            host: { name: 'Chef Hiroshi Tanaka', photo: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=200&q=80', role: 'Master Sushi Chef, 30 years experience', contact: 'hiroshi@wayfare.travel' }
          },
          {
            id: 'jp-cars', name: 'Yokohama underground car meet', emoji: '\u{1F697}',
            description: 'Late-night meetup with JDM legends \u2014 Skylines, Supras, and RX-7s under the Daikoku parking area lights.',
            price: 120, popular: false, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80', 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80', 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Night, 10:00 PM',
            whatsIncluded: ['Private transport to Daikoku PA', 'Meet local car crew', 'Ride-along in a tuned R34 GTR', 'Midnight ramen stop'],
            host: { name: 'Kenji Matsuda', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', role: 'JDM car culture guide & collector', contact: 'kenji@wayfare.travel' }
          },
          {
            id: 'jp-akihabara', name: 'Akihabara retro gaming + Pok\u00e9mon hunt', emoji: '\u{1F3AE}',
            description: 'Dive into multi-floor arcades, hunt vintage Pok\u00e9mon cards, and explore the otaku capital of the world.',
            price: 80, popular: true, popularPercent: 87, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80', 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&q=80'],
            duration: '5 hours',
            timeOfDay: 'Afternoon, 1:00 PM',
            whatsIncluded: ['Guided tour of 5 top retro shops', 'Arcade credit (\u00A51,000)', 'Pok\u00e9mon card authentication tips', 'Maid caf\u00e9 visit'],
            host: { name: 'Yuki Nakamura', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', role: 'Otaku culture expert & vintage collector', contact: 'yuki@wayfare.travel' }
          },
          {
            id: 'jp-temple', name: 'Gotokuji (beckoning cat temple) + guide', emoji: '\u{1F431}',
            description: 'The temple that inspired the lucky cat. Thousands of maneki-neko figurines line the grounds. Private guide included.',
            price: 50, popular: false, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80', 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80', 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80'],
            duration: '2 hours',
            timeOfDay: 'Morning, 9:00 AM',
            whatsIncluded: ['Private English-speaking guide', 'Temple history & cultural context', 'Small maneki-neko figurine souvenir'],
            host: { name: 'Aiko Suzuki', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', role: 'Licensed cultural guide, Tokyo', contact: 'aiko@wayfare.travel' }
          },
          {
            id: 'jp-tattoo', name: 'Tattoo session (licensed studio)', emoji: '\u{1F58B}\u{FE0F}',
            description: 'Get inked at a top-rated Shibuya studio specializing in traditional Japanese irezumi and modern styles.',
            price: 450, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1598371839696-5c5bb1c12015?w=600&q=80', 'https://images.unsplash.com/photo-1590246815117-c6a15c7e4719?w=600&q=80', 'https://images.unsplash.com/photo-1612459284970-e8f027596582?w=600&q=80'],
            duration: '3\u20136 hours',
            timeOfDay: 'By appointment',
            whatsIncluded: ['Design consultation', 'Custom artwork', 'All supplies & aftercare kit', 'English-speaking artist'],
            host: { name: 'Takeshi Mori', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Irezumi tattoo artist, 15 years experience', contact: 'takeshi@wayfare.travel' }
          },
          {
            id: 'jp-bar', name: 'Hidden bar night (reservation + guide)', emoji: '\u{1F378}',
            description: 'Speakeasy crawl through Golden Gai \u2014 three secret bars, each seating fewer than 8 people.',
            price: 90, popular: true, popularPercent: 78, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80', 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Night, 8:00 PM',
            whatsIncluded: ['3 bar reservations (Golden Gai)', '1 signature cocktail per bar', 'Local nightlife guide', 'Late-night yakitori stop'],
            host: { name: 'Ryo Kimura', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', role: 'Tokyo nightlife curator', contact: 'ryo@wayfare.travel' }
          },
        ]
      },
      {
        name: 'Kyoto',
        days: 'Day 6\u201310',
        stay: { name: 'Traditional ryokan near Gion', pricePerNight: 200, nights: 4, included: true },
        experiences: [
          {
            id: 'jp-inari', name: 'Fushimi Inari sunrise hike', emoji: '\u26E9\u{FE0F}',
            description: 'Beat the crowds with a 5:30 AM start through thousands of vermillion torii gates. Included with your trip.',
            price: 0, popular: true, popularPercent: 98, defaultOn: true, included: true,
            image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80', 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Sunrise, 5:30 AM',
            whatsIncluded: ['English-speaking hiking guide', 'Quiet route through all gates', 'Tea & snack at summit shrine'],
            host: { name: 'Haruto Yamamoto', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', role: 'Kyoto hiking & temple guide', contact: 'haruto@wayfare.travel' }
          },
          {
            id: 'jp-tea', name: 'Private tea ceremony', emoji: '\u{1F375}',
            description: 'Learn the art of matcha preparation in a 200-year-old tea house with a certified tea master.',
            price: 70, popular: true, popularPercent: 81, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=600&q=80', 'https://images.unsplash.com/photo-1545048702-79362596cdc9?w=600&q=80', 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80'],
            duration: '1.5 hours',
            timeOfDay: 'Afternoon, 2:00 PM',
            whatsIncluded: ['Private ceremony for your group only', 'Matcha & traditional wagashi sweets', 'Tea ceremony etiquette lesson', 'Souvenir matcha bowl'],
            host: { name: 'Masako Fujita', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', role: 'Certified Urasenke tea master', contact: 'masako@wayfare.travel' }
          },
          {
            id: 'jp-zen', name: 'Zen temple overnight stay', emoji: '\u{1F9D8}',
            description: 'Sleep in a working Zen monastery. Morning meditation, vegetarian cuisine, and total digital detox.',
            price: 200, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80', 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80', 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80'],
            duration: 'Overnight (24 hours)',
            timeOfDay: 'Check-in 3:00 PM',
            whatsIncluded: ['Monastery accommodation', 'Shojin ryori (monk\'s vegetarian cuisine)', 'Morning zazen meditation', 'Sutra chanting session', 'Garden tour'],
          },
          {
            id: 'jp-food', name: 'Pontocho night food crawl', emoji: '\u{1F35C}',
            description: 'Guided walk through Kyoto\'s atmospheric alley \u2014 yakitori, sake, and kaiseki small plates.',
            price: 85, popular: true, popularPercent: 88, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80', 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600&q=80', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Evening, 6:30 PM',
            whatsIncluded: ['6 food stops along Pontocho alley', 'Sake tasting (3 varieties)', 'Kaiseki small plate at riverside restaurant', 'Local food history narration'],
            host: { name: 'Sakura Ito', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', role: 'Kyoto food journalist & guide', contact: 'sakura@wayfare.travel' }
          },
        ]
      }
    ],
    personalities: {
      foodie: ['jp-sushi', 'jp-food', 'jp-tea', 'jp-bar'],
      adventure: ['jp-cars', 'jp-akihabara', 'jp-tattoo'],
      culture: ['jp-temple', 'jp-inari', 'jp-tea', 'jp-zen'],
      luxury: ['jp-bar', 'jp-zen', 'jp-tea', 'jp-sushi'],
    }
  },
  {
    id: 'brazil',
    continent: 'South America',
    country: 'Brazil',
    flag: '\u{1F1E7}\u{1F1F7}',
    title: 'Rio de Janeiro Experience',
    tagline: 'Rhythm, views, and adrenaline in the Cidade Maravilhosa',
    heroImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
    basePrice: 2800,
    duration: 8,
    departureDate: 'Nov 5',
    departureDateFull: 'Nov 5\u201313, 2026',
    spotsLeft: 8,
    flightFrom: 'LAX',
    flightIncluded: 'Los Angeles \u2192 Rio de Janeiro (Round-trip, Economy)',
    flightPrice: 1100,
    flightBusiness: { label: 'Los Angeles \u2192 Rio de Janeiro (Round-trip, Business)', price: 4200 },
    hotels: [
      {
        segment: 'Rio de Janeiro',
        days: 'Day 1\u20138',
        nights: 7,
        base: { name: 'Oceanfront hotel in Copacabana', pricePerNight: 160, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', description: 'Beachfront hotel with ocean-view rooms, rooftop pool, and direct access to Copacabana beach.' },
        upgrade: { name: 'Belmond Copacabana Palace', pricePerNight: 380, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', description: 'Rio\'s most iconic luxury hotel since 1923. Olympic-size pool, private beach section, and celebrity-chef restaurant.' },
      },
    ],
    segments: [
      {
        name: 'Rio de Janeiro',
        days: 'Day 1\u20138',
        stay: { name: 'Oceanfront hotel in Copacabana', pricePerNight: 160, nights: 7, included: true },
        experiences: [
          {
            id: 'br-christ', name: 'Christ the Redeemer sunrise visit', emoji: '\u{1F64C}',
            description: 'Skip-the-line access at dawn. Watch the sun rise over Rio from the feet of the iconic statue.',
            price: 45, popular: true, popularPercent: 96, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80', 'https://images.unsplash.com/photo-1544989164-31dc3291c737?w=600&q=80', 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Sunrise, 5:00 AM',
            whatsIncluded: ['Skip-the-line tickets', 'Private van transport', 'Professional photographer (10 edited photos)', 'Breakfast on descent'],
            host: { name: 'Lucas Oliveira', photo: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&q=80', role: 'Rio cultural guide & photographer', contact: 'lucas@wayfare.travel' }
          },
          {
            id: 'br-favela', name: 'Favela community tour (guided)', emoji: '\u{1F3D8}\u{FE0F}',
            description: 'Ethical, community-led tour of Rocinha. Meet local artists, visit community projects, and see Rio from a different perspective.',
            price: 65, popular: true, popularPercent: 74, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1585687343538-2c14a64c1579?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=600&q=80', 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=600&q=80', 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Morning, 9:00 AM',
            whatsIncluded: ['Community-led walking tour', 'Visit to local art studio', 'Lunch at community restaurant', 'All proceeds support local projects'],
            host: { name: 'Ana Santos', photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80', role: 'Rocinha community organizer', contact: 'ana@wayfare.travel' }
          },
          {
            id: 'br-samba', name: 'Samba night in Lapa', emoji: '\u{1F483}',
            description: 'Live samba at a legendary Lapa club. Dance lesson included \u2014 no experience needed.',
            price: 55, popular: true, popularPercent: 89, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1551279076-6cb5072e5b93?w=600&q=80', 'https://images.unsplash.com/photo-1541436069-68abc801c tried: photo-1574169208507-8437677981e6?w=600&q=80', 'https://images.unsplash.com/photo-1565992441121-4367c2967103?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Night, 9:00 PM',
            whatsIncluded: ['1-hour samba dance lesson', 'Entry to live samba club', '2 caipirinhas', 'Local nightlife guide'],
            host: { name: 'Rafael Costa', photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80', role: 'Professional samba dancer & instructor', contact: 'rafael@wayfare.travel' }
          },
          {
            id: 'br-hangglide', name: 'Hang gliding over Tijuca Forest', emoji: '\u{1FA82}',
            description: 'Tandem flight from Pedra Bonita with panoramic views of the coastline, forest, and city below.',
            price: 180, popular: true, popularPercent: 82, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1596401057633-54a8fe8ef346?w=600&q=80', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80'],
            duration: '2 hours (15-min flight)',
            timeOfDay: 'Morning, 10:00 AM',
            whatsIncluded: ['Tandem flight with certified pilot', 'GoPro video of your flight', 'Transport to/from launch site', 'Landing on S\u00e3o Conrado beach'],
            host: { name: 'Carlos Mendes', photo: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&q=80', role: 'Certified tandem pilot, 12 years', contact: 'carlos@wayfare.travel' }
          },
          {
            id: 'br-beach', name: 'Beach club day pass + caipirinha class', emoji: '\u{1F3D6}\u{FE0F}',
            description: 'VIP access to an exclusive Ipanema beach club. Learn to make the perfect caipirinha.',
            price: 95, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=600&q=80', 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80'],
            duration: 'Full day',
            timeOfDay: 'Morning, 10:00 AM',
            whatsIncluded: ['VIP beach club access', 'Sun lounger & umbrella', 'Caipirinha mixology class', 'Lunch & 2 cocktails included'],
          },
          {
            id: 'br-sugarloaf', name: 'Sugarloaf Mountain sunset cable car', emoji: '\u{1F3D4}\u{FE0F}',
            description: 'Ride the cable car as the sun sets. Golden hour over Guanabara Bay is unforgettable.',
            price: 40, popular: true, popularPercent: 91, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&q=80', 'https://images.unsplash.com/photo-1544989164-31dc3291c737?w=600&q=80', 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=600&q=80'],
            duration: '2.5 hours',
            timeOfDay: 'Late afternoon, 4:30 PM',
            whatsIncluded: ['Round-trip cable car tickets', 'Sunset champagne toast at summit', 'Panoramic photo spots guide'],
            host: { name: 'Lucas Oliveira', photo: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&q=80', role: 'Rio cultural guide & photographer', contact: 'lucas@wayfare.travel' }
          },
        ]
      }
    ],
    personalities: {
      foodie: ['br-beach', 'br-samba'],
      adventure: ['br-hangglide', 'br-sugarloaf'],
      culture: ['br-christ', 'br-favela', 'br-samba'],
      luxury: ['br-beach', 'br-hangglide', 'br-sugarloaf'],
    }
  },
  {
    id: 'vietnam',
    continent: 'Asia',
    country: 'Vietnam',
    flag: '\u{1F1FB}\u{1F1F3}',
    title: 'Hanoi to Hoi An Journey',
    tagline: 'Ancient charm, street food heaven, and emerald waters',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
    basePrice: 2200,
    duration: 10,
    departureDate: 'Nov 20',
    departureDateFull: 'Nov 20\u201330, 2026',
    spotsLeft: 15,
    flightFrom: 'LAX',
    flightIncluded: 'Los Angeles \u2192 Hanoi (Round-trip, Economy)',
    flightPrice: 1000,
    flightBusiness: { label: 'Los Angeles \u2192 Hanoi (Round-trip, Business)', price: 3800 },
    hotels: [
      {
        segment: 'Hanoi',
        days: 'Day 1\u20134',
        nights: 3,
        base: { name: 'Boutique hotel in Old Quarter', pricePerNight: 65, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', description: 'Charming colonial-era boutique hotel in the heart of the Old Quarter. Rooftop bar with Hoan Kiem Lake views.' },
        upgrade: { name: 'Sofitel Legend Metropole', pricePerNight: 220, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', description: 'Hanoi\'s most legendary hotel. French colonial grandeur, courtyard pool, and Graham Greene\'s favorite writing spot.' },
      },
      {
        segment: 'Hoi An',
        days: 'Day 5\u201310',
        nights: 5,
        base: { name: 'Riverside boutique resort', pricePerNight: 85, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80', description: 'Peaceful resort on the Thu Bon River with infinity pool, bicycle rentals, and 10-minute walk to the ancient town.' },
        upgrade: { name: 'Four Seasons The Nam Hai', pricePerNight: 350, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', description: 'Beachfront luxury with 3 infinity pools, private villas, and a world-class spa set among tropical gardens.' },
      },
    ],
    segments: [
      {
        name: 'Hanoi',
        days: 'Day 1\u20134',
        stay: { name: 'Boutique hotel in Old Quarter', pricePerNight: 65, nights: 3, included: true },
        experiences: [
          {
            id: 'vn-food', name: 'Old Quarter street food tour', emoji: '\u{1F35C}',
            description: 'Guided walk through 36 streets. Pho, banh mi, egg coffee, bun cha \u2014 10+ tastings over 3 hours.',
            price: 40, popular: true, popularPercent: 95, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80'],
            duration: '3.5 hours',
            timeOfDay: 'Morning, 9:00 AM',
            whatsIncluded: ['10+ food tastings', 'Egg coffee at original caf\u00e9', 'Bun cha at Obama\'s restaurant', 'Market walking tour', 'Cold beer stop'],
            host: { name: 'Minh Tran', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Hanoi food blogger & tour guide', contact: 'minh@wayfare.travel' }
          },
          {
            id: 'vn-halong', name: 'Ha Long Bay overnight cruise', emoji: '\u{1F6F3}\u{FE0F}',
            description: 'Sail through limestone karsts on a traditional junk boat. Kayaking, swimming, and sunset dinner on deck.',
            price: 280, popular: true, popularPercent: 94, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80', 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80', 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80'],
            duration: '2 days / 1 night',
            timeOfDay: 'Departs 8:00 AM',
            whatsIncluded: ['Private cabin on junk boat', 'All meals (lunch, dinner, breakfast)', 'Kayaking through caves', 'Sunrise tai chi on deck', 'Swimming & snorkeling gear'],
          },
          {
            id: 'vn-motorbike', name: 'Countryside motorbike ride', emoji: '\u{1F3CD}\u{FE0F}',
            description: 'Full-day ride through rice paddies, villages, and mountain roads with an experienced local guide.',
            price: 75, popular: true, popularPercent: 86, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=600&q=80', 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80', 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80'],
            duration: '7 hours',
            timeOfDay: 'Morning, 7:30 AM',
            whatsIncluded: ['Honda Wave 110cc (or ride pillion)', 'Helmet & safety gear', 'Local village lunch', 'Rice paddy photo stops', 'Experienced riding guide'],
            host: { name: 'Duc Nguyen', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', role: 'Motorbike tour leader, 8 years', contact: 'duc@wayfare.travel' }
          },
          {
            id: 'vn-cooking', name: 'Vietnamese cooking class', emoji: '\u{1F468}\u200D\u{1F373}',
            description: 'Market tour + hands-on class. Learn to make pho from scratch, roll spring rolls, and brew Vietnamese coffee.',
            price: 45, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Morning, 8:30 AM',
            whatsIncluded: ['Guided market tour', 'Hands-on cooking (3 dishes)', 'Recipe booklet to take home', 'Eat everything you make', 'Vietnamese coffee brewing lesson'],
            host: { name: 'Lan Pham', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', role: 'Chef & cooking school owner', contact: 'lan@wayfare.travel' }
          },
        ]
      },
      {
        name: 'Hoi An',
        days: 'Day 5\u201310',
        stay: { name: 'Riverside boutique resort', pricePerNight: 85, nights: 5, included: true },
        experiences: [
          {
            id: 'vn-lantern', name: 'Hoi An lantern night + boat ride', emoji: '\u{1FA94}',
            description: 'Release lanterns on the Thu Bon River during the monthly full moon festival. Magical and unforgettable.',
            price: 35, popular: true, popularPercent: 93, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80', 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80', 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80'],
            duration: '2.5 hours',
            timeOfDay: 'Evening, 6:00 PM',
            whatsIncluded: ['Lantern-making workshop', 'Boat ride on Thu Bon River', '3 floating lanterns to release', 'Old town walking tour'],
            host: { name: 'Thao Le', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', role: 'Hoi An cultural guide', contact: 'thao@wayfare.travel' }
          },
          {
            id: 'vn-tailor', name: 'Custom tailoring experience', emoji: '\u{1FAA1}',
            description: 'Get a bespoke suit or dress made in 24 hours. Hoi An is famous for its master tailors.',
            price: 120, popular: true, popularPercent: 72, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', 'https://images.unsplash.com/photo-1558171013-2e4a25b40a42?w=600&q=80', 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80'],
            duration: '2 fittings over 24 hours',
            timeOfDay: 'Flexible',
            whatsIncluded: ['Fabric selection consultation', 'Custom measurements', 'Bespoke suit OR dress (1 piece)', 'Alterations fitting next day', 'Delivery to hotel'],
            host: { name: 'Mr. Hai', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', role: 'Master tailor, 3rd generation', contact: 'hai@wayfare.travel' }
          },
          {
            id: 'vn-basket', name: 'Basket boat fishing village', emoji: '\u{1F6F6}',
            description: 'Spin in a traditional Vietnamese basket boat, crab fish, and cook your catch on the beach.',
            price: 30, popular: false, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80', 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80', 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Morning, 8:00 AM',
            whatsIncluded: ['Basket boat ride & spinning', 'Crab fishing with locals', 'Cook your catch on the beach', 'Cold coconut water'],
          },
          {
            id: 'vn-beach', name: 'An Bang Beach day + spa', emoji: '\u{1F3D6}\u{FE0F}',
            description: 'Pristine beach, beachfront seafood lunch, and a traditional Vietnamese spa treatment.',
            price: 55, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80', 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80'],
            duration: 'Full day',
            timeOfDay: 'Morning, 9:00 AM',
            whatsIncluded: ['Beach lounger & umbrella', 'Seafood lunch with beer', '90-minute Vietnamese massage', 'Round-trip bicycle rental'],
          },
        ]
      }
    ],
    personalities: {
      foodie: ['vn-food', 'vn-cooking', 'vn-basket', 'vn-lantern'],
      adventure: ['vn-halong', 'vn-motorbike', 'vn-basket'],
      culture: ['vn-lantern', 'vn-food', 'vn-tailor', 'vn-cooking'],
      luxury: ['vn-halong', 'vn-tailor', 'vn-beach'],
    }
  },
  {
    id: 'ecuador',
    continent: 'South America',
    country: 'Ecuador',
    flag: '\u{1F1EA}\u{1F1E8}',
    title: 'Gal\u00e1pagos Islands Adventure',
    tagline: 'Walk with giants on the most untouched islands on Earth',
    heroImage: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=800&q=80',
    basePrice: 4800,
    duration: 9,
    departureDate: 'Jan 15',
    departureDateFull: 'Jan 15\u201324, 2027',
    spotsLeft: 6,
    flightFrom: 'LAX',
    flightIncluded: 'Los Angeles \u2192 Quito \u2192 Gal\u00e1pagos (Round-trip, Economy)',
    flightPrice: 1700,
    flightBusiness: { label: 'Los Angeles \u2192 Quito \u2192 Gal\u00e1pagos (Round-trip, Business)', price: 5500 },
    hotels: [
      {
        segment: 'Santa Cruz Island',
        days: 'Day 1\u20134',
        nights: 3,
        base: { name: 'Eco-lodge in Puerto Ayora', pricePerNight: 220, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', description: 'Sustainable eco-lodge with ocean views, outdoor showers, and a short walk to the harbor.' },
        upgrade: { name: 'Finch Bay Galapagos Hotel', pricePerNight: 450, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', description: 'The only beachfront hotel on Santa Cruz. Private beach, yacht excursions, and naturalist-guided property tours.' },
      },
      {
        segment: 'Isabela Island',
        days: 'Day 5\u20139',
        nights: 4,
        base: { name: 'Beachfront guesthouse', pricePerNight: 190, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80', description: 'Charming guesthouse steps from the beach. Hammocks, fresh seafood breakfast, and flamingo lagoon next door.' },
        upgrade: { name: 'Isabela Yacht Lodge', pricePerNight: 380, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', description: 'Floating yacht lodge experience. Sleep on the water, wake up to sea lions, and dine under the stars on deck.' },
      },
    ],
    segments: [
      {
        name: 'Santa Cruz Island',
        days: 'Day 1\u20134',
        stay: { name: 'Eco-lodge in Puerto Ayora', pricePerNight: 220, nights: 3, included: true },
        experiences: [
          {
            id: 'ec-snorkel', name: 'Snorkeling with sea lions', emoji: '\u{1F9AD}',
            description: 'Swim alongside playful sea lions, sea turtles, and tropical fish in crystal-clear volcanic waters.',
            price: 95, popular: true, popularPercent: 97, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', 'https://images.unsplash.com/photo-1582967788606-a171c7a1e0b9?w=600&q=80', 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Morning, 8:00 AM',
            whatsIncluded: ['Snorkel gear & wetsuit', 'Boat to snorkel sites', 'Marine naturalist guide', '2 snorkel locations', 'Snacks & water'],
            host: { name: 'Diego Vargas', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', role: 'Certified Gal\u00e1pagos naturalist guide', contact: 'diego@wayfare.travel' }
          },
          {
            id: 'ec-tortoise', name: 'Giant tortoise sanctuary visit', emoji: '\u{1F422}',
            description: 'Walk among the gentle giants at the Charles Darwin Research Station. Some are over 150 years old.',
            price: 0, popular: true, popularPercent: 99, defaultOn: true, included: true,
            image: 'https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1559253219-fbb69e7e5fe9?w=600&q=80', 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f004?w=600&q=80', 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&q=80'],
            duration: '2.5 hours',
            timeOfDay: 'Morning, 9:00 AM',
            whatsIncluded: ['Research station entry', 'Naturalist guide', 'Breeding center tour', 'Conservation briefing'],
            host: { name: 'Diego Vargas', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', role: 'Certified Gal\u00e1pagos naturalist guide', contact: 'diego@wayfare.travel' }
          },
          {
            id: 'ec-kayak', name: 'Mangrove kayaking + sharks', emoji: '\u{1F6F6}',
            description: 'Paddle through mangrove tunnels where white-tip reef sharks rest in the shallows below.',
            price: 70, popular: true, popularPercent: 78, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=600&q=80', 'https://images.unsplash.com/photo-1496545672447-f699b503d270?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Afternoon, 1:00 PM',
            whatsIncluded: ['Tandem kayak', 'Mangrove tunnel route', 'Shark spotting from above', 'Naturalist guide', 'Waterproof phone pouch'],
          },
          {
            id: 'ec-lava', name: 'Lava tunnel exploration', emoji: '\u{1F30B}',
            description: 'Walk through an underground lava tube formed by ancient volcanic eruptions. Headlamps and guide included.',
            price: 45, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'],
            duration: '2 hours',
            timeOfDay: 'Afternoon, 2:00 PM',
            whatsIncluded: ['Headlamp & helmet', 'Geology guide', 'Underground photography tips', 'Transport to/from tunnel'],
          },
        ]
      },
      {
        name: 'Isabela Island',
        days: 'Day 5\u20139',
        stay: { name: 'Beachfront guesthouse', pricePerNight: 190, nights: 4, included: true },
        experiences: [
          {
            id: 'ec-island', name: 'Island hopping day trip', emoji: '\u{1F3DD}\u{FE0F}',
            description: 'Speedboat to Floreana and North Seymour. Blue-footed boobies, marine iguanas, and flamingos.',
            price: 180, popular: true, popularPercent: 91, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1559253219-fbb69e7e5fe9?w=600&q=80', 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f004?w=600&q=80', 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&q=80'],
            duration: 'Full day (8 hours)',
            timeOfDay: 'Morning, 7:00 AM',
            whatsIncluded: ['Speedboat transfers', '2 island visits', 'Lunch on Floreana', 'Snorkeling gear', 'Naturalist guide all day'],
            host: { name: 'Maria Espinoza', photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80', role: 'Marine biologist & island guide', contact: 'maria@wayfare.travel' }
          },
          {
            id: 'ec-volcano', name: 'Sierra Negra volcano hike', emoji: '\u{1F30B}',
            description: 'Trek to the rim of one of the world\'s largest volcanic craters. Surreal Martian landscape.',
            price: 110, popular: true, popularPercent: 84, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80'],
            duration: '6 hours',
            timeOfDay: 'Morning, 6:30 AM',
            whatsIncluded: ['4x4 transport to trailhead', 'Certified hiking guide', 'Packed lunch & water', 'Crater rim viewpoint', 'Lava field walk'],
            host: { name: 'Pablo Reyes', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', role: 'Volcanologist & certified guide', contact: 'pablo@wayfare.travel' }
          },
          {
            id: 'ec-dive', name: 'Scuba diving certification dive', emoji: '\u{1F93F}',
            description: 'Dive with hammerhead sharks, manta rays, and sea turtles. PADI certified instructor.',
            price: 220, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', 'https://images.unsplash.com/photo-1582967788606-a171c7a1e0b9?w=600&q=80', 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&q=80'],
            duration: '5 hours',
            timeOfDay: 'Morning, 7:30 AM',
            whatsIncluded: ['Full scuba gear rental', 'PADI instructor', '2-tank dive', 'Underwater photos', 'Hot chocolate on boat'],
            host: { name: 'Diego Vargas', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', role: 'PADI Divemaster & naturalist', contact: 'diego@wayfare.travel' }
          },
          {
            id: 'ec-yacht', name: 'Private yacht sunset cruise', emoji: '\u{1F6E5}\u{FE0F}',
            description: 'Upgrade to a private yacht for a sunset cruise with champagne, ceviche, and dolphins.',
            price: 350, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', 'https://images.unsplash.com/photo-1496545672447-f699b503d270?w=600&q=80', 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Late afternoon, 4:00 PM',
            whatsIncluded: ['Private yacht (up to 8 guests)', 'Champagne & ceviche', 'Snorkeling stop', 'Sunset viewing', 'Captain & crew'],
          },
        ]
      }
    ],
    personalities: {
      foodie: ['ec-snorkel', 'ec-yacht'],
      adventure: ['ec-snorkel', 'ec-volcano', 'ec-dive', 'ec-kayak', 'ec-island'],
      culture: ['ec-tortoise', 'ec-lava', 'ec-island'],
      luxury: ['ec-yacht', 'ec-dive', 'ec-snorkel'],
    }
  },
  {
    id: 'patagonia',
    continent: 'South America',
    country: 'Patagonia',
    flag: '\u{1F1E6}\u{1F1F7}',
    title: 'Patagonia Wilderness Trek',
    tagline: 'Glaciers, peaks, and the edge of the world',
    heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    basePrice: 4200,
    duration: 8,
    departureDate: 'Feb 8',
    departureDateFull: 'Feb 8\u201316, 2027',
    spotsLeft: 10,
    flightFrom: 'LAX',
    flightIncluded: 'Los Angeles \u2192 Buenos Aires \u2192 El Calafate (Round-trip, Economy)',
    flightPrice: 1600,
    flightBusiness: { label: 'Los Angeles \u2192 Buenos Aires \u2192 El Calafate (Round-trip, Business)', price: 5200 },
    hotels: [
      {
        segment: 'El Calafate',
        days: 'Day 1\u20134',
        nights: 3,
        base: { name: 'Mountain lodge near Lago Argentino', pricePerNight: 195, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', description: 'Cozy mountain lodge with lake views, fireplace lounge, and hearty Patagonian breakfast.' },
        upgrade: { name: 'Eolo Patagonia Spirit', pricePerNight: 480, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80', description: 'All-inclusive luxury estancia on the steppe. Horseback riding, gourmet dining, and endless views in every direction.' },
      },
      {
        segment: 'Torres del Paine',
        days: 'Day 5\u20138',
        nights: 3,
        base: { name: 'Eco-dome glamping', pricePerNight: 175, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80', description: 'Geodesic dome with panoramic views of the Paine massif. Heated, furnished, and surprisingly comfortable.' },
        upgrade: { name: 'Explora Torres del Paine', pricePerNight: 520, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', description: 'Award-winning all-inclusive lodge. Private guides, open bar, spa with mountain views, and 40+ curated explorations.' },
      },
    ],
    segments: [
      {
        name: 'El Calafate',
        days: 'Day 1\u20134',
        stay: { name: 'Mountain lodge near Lago Argentino', pricePerNight: 195, nights: 3, included: true },
        experiences: [
          {
            id: 'pa-glacier', name: 'Perito Moreno glacier trek', emoji: '\u{1F9CA}',
            description: 'Strap on crampons and walk on one of the world\'s few advancing glaciers. Whisky with glacier ice after.',
            price: 160, popular: true, popularPercent: 96, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80'],
            duration: '8 hours',
            timeOfDay: 'Morning, 7:00 AM',
            whatsIncluded: ['Crampons & trekking gear', 'Certified ice guide', 'Glacier walk (1.5 hours on ice)', 'Whisky with 1000-year-old glacier ice', 'Boat transfer across lake', 'Packed lunch'],
            host: { name: 'Mateo Gonzalez', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Certified glacier trekking guide', contact: 'mateo@wayfare.travel' }
          },
          {
            id: 'pa-horse', name: 'Estancia horseback riding', emoji: '\u{1F40E}',
            description: 'Ride through Patagonian steppe on an authentic gaucho ranch. Asado BBQ lunch included.',
            price: 130, popular: true, popularPercent: 82, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=600&q=80', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80'],
            duration: '5 hours',
            timeOfDay: 'Morning, 9:00 AM',
            whatsIncluded: ['Horseback ride (2 hours)', 'Gaucho guide', 'Traditional asado BBQ lunch', 'Malbec wine pairing', 'Ranch tour & sheep shearing demo'],
            host: { name: 'Santiago Ruiz', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80', role: '4th-generation gaucho rancher', contact: 'santiago@wayfare.travel' }
          },
          {
            id: 'pa-boat', name: 'Glacier boat safari', emoji: '\u{1F6A4}',
            description: 'Cruise past icebergs and watch massive ice chunks calve into turquoise water.',
            price: 85, popular: true, popularPercent: 88, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=600&q=80', 'https://images.unsplash.com/photo-1496545672447-f699b503d270?w=600&q=80', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Afternoon, 1:00 PM',
            whatsIncluded: ['Catamaran cruise', 'Hot chocolate & snacks', 'Close-up glacier viewing', 'Iceberg spotting', 'Wildlife narration'],
          },
          {
            id: 'pa-lodge', name: 'Luxury lodge upgrade', emoji: '\u{1F3E8}',
            description: 'Upgrade to a premium lodge with mountain views, hot tub, and gourmet dining.',
            price: 300, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80', 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80'],
            duration: '3 nights',
            timeOfDay: 'Check-in 3:00 PM',
            whatsIncluded: ['Premium room with lake view', 'Private hot tub', 'Gourmet breakfast & dinner', 'Complimentary bar', 'Guided nature walk'],
          },
        ]
      },
      {
        name: 'Torres del Paine',
        days: 'Day 5\u20138',
        stay: { name: 'Eco-dome glamping', pricePerNight: 175, nights: 3, included: true },
        experiences: [
          {
            id: 'pa-torres', name: 'Torres del Paine base hike', emoji: '\u{1F3D4}\u{FE0F}',
            description: 'The iconic 8-hour hike to the base of the granite towers. Sunrise at the viewpoint is life-changing.',
            price: 0, popular: true, popularPercent: 94, defaultOn: true, included: true,
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80'],
            duration: '8\u201310 hours',
            timeOfDay: 'Pre-dawn, 4:00 AM',
            whatsIncluded: ['Certified park guide', 'Packed breakfast & lunch', 'Trekking poles available', 'Sunrise at the towers', 'National park entry'],
            host: { name: 'Camila Herrera', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', role: 'Torres del Paine certified guide', contact: 'camila@wayfare.travel' }
          },
          {
            id: 'pa-grey', name: 'Grey Glacier kayaking', emoji: '\u{1F6F6}',
            description: 'Kayak among icebergs on Grey Lake with the glacier as your backdrop.',
            price: 140, popular: true, popularPercent: 79, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80', 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=600&q=80', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'],
            duration: '5 hours',
            timeOfDay: 'Morning, 8:00 AM',
            whatsIncluded: ['Tandem kayak', 'Dry suit & gear', 'Safety briefing & guide', 'Hot drinks & snack on shore', 'Iceberg close-ups'],
            host: { name: 'Mateo Gonzalez', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Kayak & glacier guide', contact: 'mateo@wayfare.travel' }
          },
          {
            id: 'pa-puma', name: 'Puma tracking expedition', emoji: '\u{1F406}',
            description: 'Dawn expedition with expert trackers. 85% sighting rate. Patagonia\'s apex predator in the wild.',
            price: 250, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&q=80', 'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600&q=80', 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=600&q=80'],
            duration: '6 hours',
            timeOfDay: 'Pre-dawn, 5:00 AM',
            whatsIncluded: ['Expert wildlife tracker', 'Binoculars & spotting scope', '4x4 vehicle', 'Breakfast in the field', 'Photography tips'],
            host: { name: 'Joaquin Torres', photo: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&q=80', role: 'Wildlife tracker & photographer', contact: 'joaquin@wayfare.travel' }
          },
          {
            id: 'pa-wine', name: 'Patagonian wine + asado night', emoji: '\u{1F377}',
            description: 'Traditional lamb asado over open fire paired with Malbec from local Patagonian vineyards.',
            price: 75, popular: true, popularPercent: 90, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80', 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80', 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Evening, 7:00 PM',
            whatsIncluded: ['Whole lamb asado (slow-roasted)', '4 Patagonian wine tastings', 'Empanadas & chimichurri', 'Live folk music', 'Stargazing after dinner'],
          },
        ]
      }
    ],
    personalities: {
      foodie: ['pa-wine', 'pa-horse'],
      adventure: ['pa-glacier', 'pa-grey', 'pa-puma', 'pa-torres'],
      culture: ['pa-horse', 'pa-wine', 'pa-glacier'],
      luxury: ['pa-lodge', 'pa-grey', 'pa-puma', 'pa-wine'],
    }
  },
  {
    id: 'sanfrancisco',
    continent: 'North America',
    country: 'San Francisco',
    flag: '\u{1F1FA}\u{1F1F8}',
    title: 'San Francisco City Break',
    tagline: 'Tech, tacos, and the best bridge on Earth',
    heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
    basePrice: 1400,
    duration: 5,
    departureDate: 'Dec 1',
    departureDateFull: 'Dec 1\u20136, 2026',
    spotsLeft: 20,
    flightFrom: 'NYC',
    flightIncluded: 'New York \u2192 San Francisco (Round-trip, Economy)',
    flightPrice: 800,
    flightBusiness: { label: 'New York \u2192 San Francisco (Round-trip, Business)', price: 2200 },
    hotels: [
      {
        segment: 'San Francisco',
        days: 'Day 1\u20135',
        nights: 4,
        base: { name: 'Design hotel in SOMA', pricePerNight: 180, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', description: 'Modern design hotel in the heart of SOMA. Walking distance to SFMOMA, rooftop bar, and curated mini-bar.' },
        upgrade: { name: 'The Ritz-Carlton San Francisco', pricePerNight: 450, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', description: 'Nob Hill landmark with city views, award-winning restaurant, and the most iconic lobby in San Francisco.' },
      },
    ],
    segments: [
      {
        name: 'San Francisco',
        days: 'Day 1\u20135',
        stay: { name: 'Design hotel in SOMA', pricePerNight: 180, nights: 4, included: true },
        experiences: [
          {
            id: 'sf-alcatraz', name: 'Alcatraz night tour', emoji: '\u{1F3F0}',
            description: 'The infamous island prison at night. Award-winning audio tour and views of the city skyline after dark.',
            price: 55, popular: true, popularPercent: 93, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80', 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80', 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Evening, 5:30 PM',
            whatsIncluded: ['Round-trip ferry', 'Audio tour (award-winning)', 'Night access (limited availability)', 'City skyline views from island'],
          },
          {
            id: 'sf-napa', name: 'Napa Valley wine day trip', emoji: '\u{1F377}',
            description: 'Visit 3 premier wineries with a private driver. Includes tastings, cheese pairings, and lunch.',
            price: 195, popular: true, popularPercent: 88, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80', 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80', 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&q=80'],
            duration: 'Full day (9 hours)',
            timeOfDay: 'Morning, 9:00 AM',
            whatsIncluded: ['Private driver/vehicle', '3 winery visits', 'Tastings at each (12+ wines)', 'Cheese & charcuterie pairing', 'Vineyard lunch', 'Hotel pickup/dropoff'],
            host: { name: 'Sarah Mitchell', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', role: 'Certified sommelier & Napa guide', contact: 'sarah@wayfare.travel' }
          },
          {
            id: 'sf-mission', name: 'Mission District food crawl', emoji: '\u{1F32E}',
            description: 'Tacos, craft beer, and street art through SF\'s most vibrant neighborhood. 8 stops, 3 hours.',
            price: 65, popular: true, popularPercent: 85, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Late morning, 11:00 AM',
            whatsIncluded: ['8 food stops', 'Taco tasting (4 spots)', 'Craft beer flight', 'Street art walking tour', 'Local history narration'],
            host: { name: 'Marcus Chen', photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80', role: 'SF food writer & neighborhood guide', contact: 'marcus@wayfare.travel' }
          },
          {
            id: 'sf-coast', name: 'Highway 1 coastal drive', emoji: '\u{1F3CE}\u{FE0F}',
            description: 'Convertible rental down the Pacific Coast Highway. Stop at Half Moon Bay and Devil\'s Slide.',
            price: 140, popular: true, popularPercent: 80, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80'],
            duration: '6 hours',
            timeOfDay: 'Morning, 8:00 AM',
            whatsIncluded: ['Convertible rental (full day)', 'Curated route guide', 'Half Moon Bay stop', 'Devil\'s Slide trail', 'Coastal caf\u00e9 lunch recommendation'],
          },
          {
            id: 'sf-bike', name: 'Golden Gate Bridge bike ride', emoji: '\u{1F6B4}',
            description: 'Cycle across the Golden Gate and down to Sausalito. Ferry back with waterfront views.',
            price: 45, popular: true, popularPercent: 91, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80', 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80', 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Morning, 9:00 AM',
            whatsIncluded: ['Bike rental (hybrid or e-bike)', 'Helmet & lock', 'Route map', 'Ferry ticket Sausalito \u2192 SF', 'Sausalito lunch recommendation'],
          },
          {
            id: 'sf-tech', name: 'Silicon Valley tech tour', emoji: '\u{1F4BB}',
            description: 'Visit the Apple Park visitor center, Google campus, and the garage where HP started.',
            price: 80, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&q=80', 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'],
            duration: '5 hours',
            timeOfDay: 'Morning, 10:00 AM',
            whatsIncluded: ['Private transport', 'Apple Park Visitor Center', 'Google campus (exterior & store)', 'HP Garage (birthplace of Silicon Valley)', 'Stanford campus walk', 'Tech history narration'],
            host: { name: 'David Park', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', role: 'Former tech founder & Valley historian', contact: 'david@wayfare.travel' }
          },
        ]
      }
    ],
    personalities: {
      foodie: ['sf-mission', 'sf-napa'],
      adventure: ['sf-coast', 'sf-bike', 'sf-alcatraz'],
      culture: ['sf-alcatraz', 'sf-tech', 'sf-mission'],
      luxury: ['sf-napa', 'sf-coast'],
    }
  },
  {
    id: 'egypt',
    continent: 'Africa',
    country: 'Egypt',
    flag: '🇪🇬',
    title: 'Cairo + Luxor + Red Sea',
    tagline: 'Pyramids, pharaohs, and diving the coral reefs of the Red Sea',
    heroImage: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=800&q=80',
    basePrice: 3200,
    duration: 12,
    departureDate: 'Feb 8',
    departureDateFull: 'Feb 8–20, 2027',
    spotsLeft: 10,
    flightFrom: 'JFK',
    flightIncluded: 'New York → Cairo (Round-trip, Economy)',
    flightPrice: 980,
    flightBusiness: { label: 'New York → Cairo (Round-trip, Business)', price: 4500 },
    hotels: [
      {
        segment: 'Cairo',
        days: 'Day 1–4',
        nights: 3,
        base: { name: 'Hotel near Khan el-Khalili', pricePerNight: 120, image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80', description: 'Charming hotel in the heart of Islamic Cairo. Rooftop terrace with views of minarets and the Citadel.' },
        upgrade: { name: 'Marriott Mena House', pricePerNight: 380, image: 'https://images.unsplash.com/photo-1568322503122-d520795fd4b0?w=800&q=80', description: 'Historic palace hotel at the foot of the Great Pyramids. Private balconies face the Sphinx. Former guesthouse of kings.' },
      },
      {
        segment: 'Luxor',
        days: 'Day 5–8',
        nights: 3,
        base: { name: 'Nile-view guesthouse', pricePerNight: 90, image: 'https://images.unsplash.com/photo-1568322445389-f64e1b18eb45?w=800&q=80', description: 'Cozy West Bank guesthouse with sunset views over the Nile. Walking distance to Valley of the Kings ferry.' },
        upgrade: { name: 'Sofitel Winter Palace', pricePerNight: 320, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80', description: 'Victorian-era palace on the Nile where Agatha Christie wrote Death on the Nile. Lush gardens and old-world grandeur.' },
      },
      {
        segment: 'Hurghada (Red Sea)',
        days: 'Day 9–12',
        nights: 3,
        base: { name: 'Beachfront dive resort', pricePerNight: 110, image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80', description: 'Laid-back resort with private beach, on-site dive center, and house reef for snorkeling.' },
        upgrade: { name: 'Oberoi Sahl Hasheesh', pricePerNight: 450, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80', description: 'Ultra-luxury Red Sea resort. Private beach, infinity pool, and world-class spa. Every room has a sea view.' },
      },
    ],
    segments: [
      {
        name: 'Cairo',
        days: 'Day 1–4',
        stay: { name: 'Hotel near Khan el-Khalili', pricePerNight: 120, nights: 3, included: true },
        experiences: [
          {
            id: 'eg-pyramids', name: 'Private Pyramids of Giza + Sphinx tour', emoji: '🏛️',
            description: 'Skip the crowds with a private Egyptologist guide. Enter the Great Pyramid, stand at the Sphinx, and catch the panoramic view from the desert plateau.',
            price: 150, popular: true, popularPercent: 97, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80', 'https://images.unsplash.com/photo-1568322503122-d520795fd4b0?w=600&q=80', 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80'],
            duration: '5 hours',
            timeOfDay: 'Morning, 7:00 AM',
            whatsIncluded: ['Private Egyptologist guide', 'Entry tickets to Great Pyramid interior', 'Panoramic desert viewpoint', 'Bottled water & snacks', 'Air-conditioned transport'],
            host: { name: 'Dr. Ahmed Hassan', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Egyptologist, Cairo University', contact: 'ahmed@maharaja.travel' }
          },
          {
            id: 'eg-khan', name: 'Khan el-Khalili bazaar night walk', emoji: '🏮',
            description: 'Navigate the 14th-century market labyrinth after dark. Haggle for spices, silver, and perfume oils with a local fixer by your side.',
            price: 40, popular: true, popularPercent: 85, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80', 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Evening, 7:00 PM',
            whatsIncluded: ['Local market guide & "fixer"', 'Traditional mint tea at El Fishawi café', 'Spice tasting', 'Haggling crash course'],
            host: { name: 'Fatima El-Sayed', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', role: 'Cairo market guide & cultural historian', contact: 'fatima@maharaja.travel' }
          },
          {
            id: 'eg-museum', name: 'Grand Egyptian Museum VIP access', emoji: '🗿',
            description: 'Early-access tour of the brand-new Grand Egyptian Museum. See Tutankhamun\'s complete treasure collection before the public rush.',
            price: 120, popular: true, popularPercent: 90, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=600&q=80', 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80', 'https://images.unsplash.com/photo-1568322503122-d520795fd4b0?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Morning, 8:00 AM',
            whatsIncluded: ['VIP early entry pass', 'Private Egyptologist guide', 'Tutankhamun gallery deep-dive', 'Audio guide included'],
            host: { name: 'Dr. Ahmed Hassan', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Egyptologist, Cairo University', contact: 'ahmed@maharaja.travel' }
          },
          {
            id: 'eg-camel', name: 'Sunrise camel ride at the Pyramids', emoji: '🐪',
            description: 'Ride across the Giza plateau on camelback as the sun rises behind the pyramids. An unforgettable photo opportunity.',
            price: 70, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80', 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=600&q=80', 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80'],
            duration: '2 hours',
            timeOfDay: 'Sunrise, 5:30 AM',
            whatsIncluded: ['Camel ride (45 min)', 'Desert breakfast (foul & fresh bread)', 'Professional photographer', 'Hotel pickup'],
            host: { name: 'Ibrahim Khalil', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', role: 'Bedouin guide, Giza plateau', contact: 'ibrahim@maharaja.travel' }
          },
          {
            id: 'eg-food', name: 'Cairo street food crawl', emoji: '🧆',
            description: 'Taste your way through downtown Cairo — koshari, foul medames, shawarma, and fresh sugarcane juice from legendary local joints.',
            price: 55, popular: true, popularPercent: 82, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80'],
            duration: '3.5 hours',
            timeOfDay: 'Afternoon, 12:00 PM',
            whatsIncluded: ['6 food stops', 'All food & drinks included', 'Local foodie guide', 'Vegetarian options available'],
            host: { name: 'Nour Abdelrahman', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', role: 'Food blogger & Cairo native', contact: 'nour@maharaja.travel' }
          },
        ]
      },
      {
        name: 'Luxor',
        days: 'Day 5–8',
        stay: { name: 'Nile-view guesthouse', pricePerNight: 90, nights: 3, included: true },
        experiences: [
          {
            id: 'eg-valley', name: 'Valley of the Kings private tour', emoji: '⚱️',
            description: 'Descend into painted royal tombs 3,000 years old. Visit Tutankhamun\'s tomb and the stunning tomb of Seti I with an expert guide.',
            price: 130, popular: true, popularPercent: 95, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600&q=80', 'https://images.unsplash.com/photo-1568322445389-f64e1b18eb45?w=600&q=80', 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80'],
            duration: '5 hours',
            timeOfDay: 'Morning, 6:00 AM',
            whatsIncluded: ['Entry to 3 royal tombs + Tutankhamun', 'Private Egyptologist', 'Hatshepsut Temple visit', 'Air-conditioned transport'],
            host: { name: 'Dr. Layla Mostafa', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', role: 'Senior Egyptologist, Luxor', contact: 'layla@maharaja.travel' }
          },
          {
            id: 'eg-balloon', name: 'Hot air balloon over Luxor at sunrise', emoji: '🎈',
            description: 'Float above the West Bank as the sun rises over the Temple of Karnak. See the Valley of the Kings from 1,000 feet.',
            price: 110, popular: true, popularPercent: 91, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600&q=80', 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=600&q=80', 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80'],
            duration: '1.5 hours',
            timeOfDay: 'Sunrise, 5:00 AM',
            whatsIncluded: ['Hotel pickup', '45-min balloon flight', 'Champagne toast on landing', 'Flight certificate'],
            host: { name: 'Captain Mahmoud', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', role: 'Licensed balloon pilot, 12 years', contact: 'mahmoud@maharaja.travel' }
          },
          {
            id: 'eg-karnak', name: 'Karnak Temple at sunset + sound & light show', emoji: '🌅',
            description: 'Walk the Hypostyle Hall as golden hour light pours through 134 massive columns. Stay for the dramatic sound and light show after dark.',
            price: 75, popular: false, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1568322445389-f64e1b18eb45?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1568322445389-f64e1b18eb45?w=600&q=80', 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80', 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Afternoon, 4:00 PM',
            whatsIncluded: ['Skip-the-line entry', 'Private guide', 'Sound & light show ticket', 'Temple history walkthrough'],
            host: { name: 'Dr. Layla Mostafa', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', role: 'Senior Egyptologist, Luxor', contact: 'layla@maharaja.travel' }
          },
          {
            id: 'eg-felucca', name: 'Felucca sailboat sunset on the Nile', emoji: '⛵',
            description: 'Traditional wooden sailboat ride on the Nile at golden hour. Fresh hibiscus tea, traditional music, and views of Luxor Temple lit up at night.',
            price: 35, popular: false, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1568322503122-d520795fd4b0?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1568322503122-d520795fd4b0?w=600&q=80', 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80', 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80'],
            duration: '2 hours',
            timeOfDay: 'Evening, 5:00 PM',
            whatsIncluded: ['Private felucca boat', 'Captain & crew', 'Hibiscus tea & snacks', 'Blankets provided'],
            host: { name: 'Hassan Ali', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', role: 'Nile boatman, 3rd generation', contact: 'hassan@maharaja.travel' }
          },
        ]
      },
      {
        name: 'Hurghada (Red Sea)',
        days: 'Day 9–12',
        stay: { name: 'Beachfront dive resort', pricePerNight: 110, nights: 3, included: true },
        experiences: [
          {
            id: 'eg-dive', name: 'Red Sea scuba diving (2 dives)', emoji: '🤿',
            description: 'Dive crystal-clear coral reefs teeming with tropical fish, sea turtles, and dolphins. Suitable for beginners and certified divers.',
            price: 140, popular: true, popularPercent: 88, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', 'https://images.unsplash.com/photo-1582967788606-a171c7a1e0b9?w=600&q=80', 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=600&q=80'],
            duration: '6 hours',
            timeOfDay: 'Morning, 8:00 AM',
            whatsIncluded: ['2 guided dives', 'All equipment provided', 'Boat trip to reef site', 'Lunch on board', 'Underwater photos'],
            host: { name: 'Captain Omar', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', role: 'PADI Master Instructor', contact: 'omar@maharaja.travel' }
          },
          {
            id: 'eg-desert', name: 'Eastern Desert quad bike + Bedouin dinner', emoji: '🏜️',
            description: 'Blast through the desert on ATVs as the sun sets, then feast on a traditional Bedouin barbecue under the stars.',
            price: 95, popular: true, popularPercent: 80, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80', 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80'],
            duration: '5 hours',
            timeOfDay: 'Afternoon, 3:00 PM',
            whatsIncluded: ['Quad bike rental & safety gear', 'Desert sunset ride', 'Bedouin camp dinner', 'Stargazing session', 'Traditional tea ceremony'],
            host: { name: 'Youssef Bedouin Camp', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Desert expedition guide', contact: 'youssef@maharaja.travel' }
          },
          {
            id: 'eg-snorkel', name: 'Giftun Island snorkeling day trip', emoji: '🐠',
            description: 'Speedboat to the protected Giftun Island marine park. Snorkel pristine reefs, relax on white sand beaches, and spot dolphins on the way back.',
            price: 80, popular: false, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1582967788606-a171c7a1e0b9?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', 'https://images.unsplash.com/photo-1582967788606-a171c7a1e0b9?w=600&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80'],
            duration: '7 hours',
            timeOfDay: 'Morning, 9:00 AM',
            whatsIncluded: ['Speedboat transfer', '2 snorkeling stops', 'Snorkel gear included', 'Beach lunch buffet', 'Dolphin spotting'],
            host: { name: 'Captain Omar', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', role: 'PADI Master Instructor', contact: 'omar@maharaja.travel' }
          },
        ]
      }
    ],
    personalities: {
      foodie: ['eg-food', 'eg-khan'],
      adventure: ['eg-dive', 'eg-desert', 'eg-balloon', 'eg-camel'],
      culture: ['eg-pyramids', 'eg-valley', 'eg-museum', 'eg-karnak'],
      luxury: ['eg-balloon', 'eg-felucca', 'eg-snorkel'],
    }
  },
  {
    id: 'jordan',
    continent: 'Middle East',
    country: 'Jordan',
    flag: '🇯🇴',
    title: 'Amman + Petra + Wadi Rum',
    tagline: 'Ancient rose-red cities, desert starscapes, and Dead Sea sunsets',
    heroImage: 'https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800&q=80',
    basePrice: 3500,
    duration: 10,
    departureDate: 'Mar 15',
    departureDateFull: 'Mar 15–25, 2027',
    spotsLeft: 8,
    flightFrom: 'JFK',
    flightIncluded: 'New York → Amman (Round-trip, Economy)',
    flightPrice: 920,
    flightBusiness: { label: 'New York → Amman (Round-trip, Business)', price: 4200 },
    hotels: [
      {
        segment: 'Amman',
        days: 'Day 1–3',
        nights: 2,
        base: { name: 'Boutique hotel in Rainbow Street', pricePerNight: 100, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80', description: 'Hip boutique hotel on Amman\'s trendiest street. Rooftop terrace overlooking the Citadel and Roman amphitheatre.' },
        upgrade: { name: 'Four Seasons Amman', pricePerNight: 350, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', description: 'Five-star luxury in the heart of Amman. Panoramic city views, world-class spa, and Levantine fine dining.' },
      },
      {
        segment: 'Petra',
        days: 'Day 4–6',
        nights: 2,
        base: { name: 'Guesthouse near Petra gate', pricePerNight: 85, image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80', description: 'Family-run guesthouse steps from the Petra entrance. Home-cooked Jordanian breakfast and a terrace with mountain views.' },
        upgrade: { name: 'Mövenpick Resort Petra', pricePerNight: 290, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80', description: 'Luxury resort literally at the gates of Petra. Swim in the pool after a day exploring the ancient city.' },
      },
      {
        segment: 'Wadi Rum',
        days: 'Day 7–8',
        nights: 1,
        base: { name: 'Bedouin desert camp', pricePerNight: 75, image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80', description: 'Authentic Bedouin camp deep in Wadi Rum. Sleep in a goat-hair tent under a blanket of stars.' },
        upgrade: { name: 'Memories Aicha Luxury Camp', pricePerNight: 280, image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80', description: 'Transparent geodesic domes with king beds and private bathrooms in the Martian desert. Stargazing from your pillow.' },
      },
      {
        segment: 'Dead Sea',
        days: 'Day 9–10',
        nights: 1,
        base: { name: 'Dead Sea resort', pricePerNight: 130, image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80', description: 'Comfortable resort on the lowest point on Earth. Infinity pools, private beach, and mineral mud baths.' },
        upgrade: { name: 'Kempinski Ishtar Dead Sea', pricePerNight: 400, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', description: 'Palatial resort with cascading pools flowing to the Dead Sea shore. World-renowned Anantara spa and private cabanas.' },
      },
    ],
    segments: [
      {
        name: 'Amman',
        days: 'Day 1–3',
        stay: { name: 'Boutique hotel in Rainbow Street', pricePerNight: 100, nights: 2, included: true },
        experiences: [
          {
            id: 'jo-citadel', name: 'Amman Citadel + Roman Theatre walk', emoji: '🏛️',
            description: 'Explore 7,000 years of history at the hilltop Citadel, then descend to the remarkably preserved 6,000-seat Roman amphitheatre.',
            price: 45, popular: true, popularPercent: 88, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=600&q=80', 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80', 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Morning, 9:00 AM',
            whatsIncluded: ['Private guide', 'Entry tickets', 'Temple of Hercules', 'Umayyad Palace', 'Roman Theatre', 'Archaeological museum'],
            host: { name: 'Rami Khoury', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Historian & licensed Jordan guide', contact: 'rami@maharaja.travel' }
          },
          {
            id: 'jo-food', name: 'Amman street food + mansaf feast', emoji: '🍖',
            description: 'Taste falafel, knafeh, and fresh juice in downtown Amman, then sit for Jordan\'s national dish — mansaf — at a legendary local spot.',
            price: 65, popular: true, popularPercent: 90, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Afternoon, 12:00 PM',
            whatsIncluded: ['7 food stops', 'All food & drinks included', 'Full mansaf dinner', 'Local foodie guide', 'Vegetarian alternatives'],
            host: { name: 'Lina Haddad', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', role: 'Jordanian food writer & guide', contact: 'lina@maharaja.travel' }
          },
          {
            id: 'jo-jerash', name: 'Day trip to Jerash (Roman ruins)', emoji: '🏟️',
            description: 'Visit one of the best-preserved Roman cities outside Italy. Colonnaded streets, temples, and a hippodrome where chariots still race.',
            price: 80, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=600&q=80', 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80', 'https://images.unsplash.com/photo-1568322445389-f64e1b18eb45?w=600&q=80'],
            duration: '6 hours',
            timeOfDay: 'Morning, 8:00 AM',
            whatsIncluded: ['Private transport', 'Entry ticket', 'Expert guide', 'Chariot re-enactment show', 'Lunch at local restaurant'],
            host: { name: 'Rami Khoury', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Historian & licensed Jordan guide', contact: 'rami@maharaja.travel' }
          },
          {
            id: 'jo-cooking', name: 'Jordanian home cooking class', emoji: '🫓',
            description: 'Learn to make maqluba, fattoush, and fresh taboon bread in a local family\'s kitchen. Eat everything you cook together.',
            price: 50, popular: false, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Evening, 5:00 PM',
            whatsIncluded: ['Recipe booklet', 'All ingredients provided', 'Full dinner you cooked', 'Mint tea & dessert', 'Family kitchen experience'],
            host: { name: 'Um Khalil', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', role: 'Home cook & cultural host', contact: 'umkhalil@maharaja.travel' }
          },
        ]
      },
      {
        name: 'Petra',
        days: 'Day 4–6',
        stay: { name: 'Guesthouse near Petra gate', pricePerNight: 85, nights: 2, included: true },
        experiences: [
          {
            id: 'jo-petra', name: 'Full-day Petra with hidden trails', emoji: '🌹',
            description: 'Walk the Siq canyon to the Treasury at sunrise, then go beyond the tourist path — climb to the Monastery, explore royal tombs, and find the hidden "back door" route.',
            price: 90, popular: true, popularPercent: 98, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=600&q=80', 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80', 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600&q=80'],
            duration: '8 hours',
            timeOfDay: 'Morning, 6:30 AM',
            whatsIncluded: ['2-day Petra pass', 'Private Bedouin guide', 'Hidden trail to High Place of Sacrifice', 'Monastery climb', 'Packed lunch & water'],
            host: { name: 'Mohammed Al-Bdoul', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', role: 'Bedouin guide, born in Petra caves', contact: 'mohammed@maharaja.travel' }
          },
          {
            id: 'jo-petranight', name: 'Petra by Night candlelight walk', emoji: '🕯️',
            description: 'Walk the Siq by the glow of 1,500 candles leading to the Treasury. Bedouin music echoes off the canyon walls under a sky full of stars.',
            price: 60, popular: true, popularPercent: 93, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80', 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=600&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80'],
            duration: '2 hours',
            timeOfDay: 'Night, 8:30 PM',
            whatsIncluded: ['Petra by Night entry', 'Candlelit Siq walk', 'Bedouin music performance', 'Traditional tea at the Treasury'],
            host: { name: 'Mohammed Al-Bdoul', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', role: 'Bedouin guide, born in Petra caves', contact: 'mohammed@maharaja.travel' }
          },
          {
            id: 'jo-littlepetra', name: 'Little Petra + wine tasting in ancient caves', emoji: '🍷',
            description: 'Explore the lesser-known Nabataean site of Siq al-Barid, then taste Jordanian wines in a cave once used as a Nabataean dining hall.',
            price: 70, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=600&q=80', 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=600&q=80', 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Afternoon, 2:00 PM',
            whatsIncluded: ['Transport to Little Petra', 'Guided cave exploration', 'Jordan wine tasting (4 wines)', 'Mezze platter', 'Ancient fresco viewing'],
            host: { name: 'Suleiman Bedouin', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', role: 'Local archaeologist & wine enthusiast', contact: 'suleiman@maharaja.travel' }
          },
          {
            id: 'jo-donkey', name: 'Donkey ride to the Monastery summit', emoji: '🫏',
            description: 'Skip the 800 steps — ride a sure-footed donkey up to Petra\'s massive Monastery (Ad Deir) with stunning valley views at the top.',
            price: 30, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=600&q=80', 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80', 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80'],
            duration: '1.5 hours',
            timeOfDay: 'Morning, 10:00 AM',
            whatsIncluded: ['Donkey ride (up)', 'Bedouin handler', 'Tea at the summit café', 'Walk down at your own pace'],
            host: { name: 'Mohammed Al-Bdoul', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80', role: 'Bedouin guide, born in Petra caves', contact: 'mohammed@maharaja.travel' }
          },
        ]
      },
      {
        name: 'Wadi Rum',
        days: 'Day 7–8',
        stay: { name: 'Bedouin desert camp', pricePerNight: 75, nights: 1, included: true },
        experiences: [
          {
            id: 'jo-jeep', name: 'Wadi Rum 4x4 desert safari', emoji: '🚙',
            description: 'Race across Mars-like red sand in an open-top 4x4. Visit Lawrence of Arabia\'s spring, ancient rock inscriptions, and towering sandstone bridges.',
            price: 85, popular: true, popularPercent: 94, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80', 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80'],
            duration: '6 hours',
            timeOfDay: 'Morning, 8:00 AM',
            whatsIncluded: ['Private 4x4 with Bedouin driver', 'Lawrence\'s Spring', 'Khazali Canyon inscriptions', 'Um Frouth rock bridge', 'Bedouin lunch in the desert'],
            host: { name: 'Attallah Zalabih', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Bedouin desert guide, Wadi Rum', contact: 'attallah@maharaja.travel' }
          },
          {
            id: 'jo-stars', name: 'Desert stargazing with telescope', emoji: '🔭',
            description: 'Wadi Rum has some of the clearest skies on Earth. Spot the Milky Way, planets, and deep-sky objects through a professional telescope with a Bedouin astronomer.',
            price: 40, popular: true, popularPercent: 86, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80', 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80', 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?w=600&q=80'],
            duration: '2 hours',
            timeOfDay: 'Night, 9:00 PM',
            whatsIncluded: ['Professional telescope session', 'Constellation identification', 'Bedouin star mythology', 'Hot tea & desert fire', 'Blankets provided'],
            host: { name: 'Attallah Zalabih', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Bedouin desert guide, Wadi Rum', contact: 'attallah@maharaja.travel' }
          },
          {
            id: 'jo-climb', name: 'Jebel Rum scramble (beginner-friendly)', emoji: '🧗',
            description: 'Scramble up sandstone canyons with a Bedouin climbing guide. No ropes needed — just hands, feet, and nerve. Incredible summit views of the entire valley.',
            price: 60, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Morning, 7:00 AM',
            whatsIncluded: ['Bedouin climbing guide', 'Safety briefing', 'Summit photo op', 'Water & trail snacks', 'Transport to trailhead'],
            host: { name: 'Salem Bedouin', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', role: 'Rock climbing instructor, Wadi Rum', contact: 'salem@maharaja.travel' }
          },
          {
            id: 'jo-camel', name: 'Sunset camel trek through Wadi Rum', emoji: '🐫',
            description: 'Ride a camel through the red desert as the sun sets behind sandstone towers. The silence is otherworldly.',
            price: 55, popular: false, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1547234935-80c7145ec969?w=600&q=80', 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80'],
            duration: '2.5 hours',
            timeOfDay: 'Afternoon, 4:00 PM',
            whatsIncluded: ['Camel ride (1.5 hours)', 'Bedouin guide', 'Desert sunset viewpoint', 'Traditional tea stop'],
            host: { name: 'Attallah Zalabih', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Bedouin desert guide, Wadi Rum', contact: 'attallah@maharaja.travel' }
          },
        ]
      },
      {
        name: 'Dead Sea',
        days: 'Day 9–10',
        stay: { name: 'Dead Sea resort', pricePerNight: 130, nights: 1, included: true },
        experiences: [
          {
            id: 'jo-float', name: 'Dead Sea float + mud spa ritual', emoji: '🧖',
            description: 'Float effortlessly in the world\'s saltiest body of water, then slather yourself in mineral-rich black mud for the ultimate natural spa treatment.',
            price: 25, popular: true, popularPercent: 92, defaultOn: true,
            image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80'],
            duration: '3 hours',
            timeOfDay: 'Morning, 10:00 AM',
            whatsIncluded: ['Private beach access', 'Dead Sea mud pack', 'Mineral salt scrub', 'Fresh towels & shower', 'Refreshments'],
            host: { name: 'Samar Wellness', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', role: 'Dead Sea wellness guide', contact: 'samar@maharaja.travel' }
          },
          {
            id: 'jo-baptism', name: 'Baptism Site (Bethany Beyond the Jordan)', emoji: '⛪',
            description: 'Visit the UNESCO World Heritage site where John baptized Jesus. Walk among ancient churches and baptismal pools on the Jordan River bank.',
            price: 40, popular: false, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=600&q=80', 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&q=80', 'https://images.unsplash.com/photo-1568322445389-f64e1b18eb45?w=600&q=80'],
            duration: '2.5 hours',
            timeOfDay: 'Morning, 8:00 AM',
            whatsIncluded: ['Entry ticket', 'Licensed guide', 'Jordan River viewpoint', 'Ancient church ruins tour', 'Air-conditioned transport'],
            host: { name: 'Rami Khoury', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', role: 'Historian & licensed Jordan guide', contact: 'rami@maharaja.travel' }
          },
          {
            id: 'jo-canyon', name: 'Wadi Mujib canyon hike (water trail)', emoji: '🏞️',
            description: 'Wade, swim, and scramble through a dramatic slot canyon with waterfalls. Jordan\'s answer to canyoneering — bring shoes you don\'t mind getting soaked.',
            price: 70, popular: true, popularPercent: 83, defaultOn: false,
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
            gallery: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=600&q=80'],
            duration: '4 hours',
            timeOfDay: 'Morning, 9:00 AM',
            whatsIncluded: ['Park entry & trail fee', 'Safety briefing', 'Waterproof bag for phone', 'Guide through canyon', 'Transport from Dead Sea hotel'],
            host: { name: 'Adventure Jordan', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', role: 'Licensed canyoneering guide', contact: 'adventure@maharaja.travel' }
          },
        ]
      }
    ],
    personalities: {
      foodie: ['jo-food', 'jo-cooking', 'jo-littlepetra'],
      adventure: ['jo-jeep', 'jo-climb', 'jo-canyon', 'jo-camel'],
      culture: ['jo-petra', 'jo-petranight', 'jo-citadel', 'jo-baptism'],
      luxury: ['jo-float', 'jo-stars', 'jo-littlepetra'],
    }
  }
];

export const personalityLabels = {
  foodie: { label: 'Food Lover', emoji: '\u{1F35C}' },
  adventure: { label: 'Adventure', emoji: '\u{1F3D4}\u{FE0F}' },
  culture: { label: 'Culture', emoji: '\u{1F3CE}\u{FE0F}' },
  luxury: { label: 'Luxury', emoji: '\u{1F48E}' },
};
