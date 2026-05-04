const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const translations = {
  en: {
    meta: {
      home: {
        title: 'Edmundo`s TCG BID — Premium Pokémon Card Auctions in Macau',
        description: 'Premium Pokémon card auctions, marketplace listings, and consignment services for collectors in Macau and Hong Kong.'
      },
      auctions: {
        title: 'Auctions — Edmundo`s TCG BID',
        description: 'Explore live, upcoming, and closed Pokémon card auctions from Edmundo`s TCG BID.'
      },
      'auction-detail': {
        title: 'Lot Detail — Edmundo`s TCG BID',
        description: 'Featured lot detail for a premium Pokémon card auction at Edmundo`s TCG BID.'
      },
      marketplace: {
        title: 'Marketplace — Edmundo`s TCG BID',
        description: 'Browse marketplace listings for singles, slabs, sealed products, and collector bundles.'
      },
      consign: {
        title: 'Consign & Sell — Edmundo`s TCG BID',
        description: 'Learn how to consign Pokémon cards and collections with clear review and payout expectations.'
      },
      faq: {
        title: 'FAQ & How It Works — Edmundo`s TCG BID',
        description: 'Frequently asked questions about bidding, payment, pickup, shipping, and consignments.'
      }
    },
    countdown: { day: 'd', hour: 'h', minute: 'm', closed: 'Closed' },
    brand: { tagline: 'Macau Pokémon card auctions, done properly' },
    nav: { home: 'Home', auctions: 'Auctions', marketplace: 'Marketplace', consign: 'Consign', faq: 'FAQ', sampleLot: 'Featured Lot', openMenu: 'Open menu' },
    status: { liveNow: 'Live now', open: 'Open', upcoming: 'Upcoming', closed: 'Archived' },
    filters: { all: 'All', live: 'Live', upcoming: 'Upcoming', closed: 'Closed' },
    common: { closesIn: 'Closes in', sealed: 'Sealed', rawNm: 'Raw NM' },
    footer: {
      blurb: 'Premium Pokémon card auctions, marketplace listings, and consignment services for collectors in Macau and Hong Kong.',
      pages: 'Pages', explore: 'Explore', navigate: 'Navigate', serviceTitle: 'Collector service',
      serviceText: 'Auction examples, prices, and timelines are presented as sample content for preview purposes.'
    },
    home: {
      hero: {
        eyebrow: 'Macau · Hong Kong · Curated TCG Events',
        title: 'Premium Pokémon card auctions with a cleaner collector experience.',
        lede: 'Discover weekly auctions, carefully presented featured lots, a buy-now marketplace, and seller consignments designed around trust, clarity, and local service.',
        primary: 'Browse live auctions', secondary: 'Consign your cards',
        point1: 'Weekly auction drops with countdowns, reserve notes, and featured estimates',
        point2: 'Buy-now marketplace listings for singles, slabs, sealed products, and collection lots',
        point3: 'Manual payment confirmation and local pickup support for a smooth collector journey'
      },
      heroCard: {
        kicker: 'Weekly Signature Auction', title: 'Gold Star Showcase', text: '38 curated lots · Pokémon only · seller verification required',
        startingFrom: 'Starting from', topEstimate: 'Top estimated lot', button: 'View featured lot'
      },
      stats: { 1: 'Verified collector accounts ready to bid', 2: 'Payment window after an auction closes', 3: 'Primary service region for pickup and delivery', '4strong': 'Manual review', 4: 'Every high-value consignment is checked by staff' },
      experience: { eyebrow: 'Featured experience', title: 'Built around how collectors actually browse and buy', link: 'See how it works →' },
      features: {
        '1title': 'Live auctions', '1text': 'Timed lots, current bid visibility, reserve labels, and seller notes presented with clarity.',
        '2title': 'Marketplace browsing', '2text': 'Shop sealed product, raw singles, graded cards, and curated collection bundles.',
        '3title': 'Consignment intake', '3text': 'Onboard sellers with photo guidance, pricing review, and clear payout expectations.',
        '4title': 'Trust-first service', '4text': 'Manual payment verification, pickup scheduling, dispute windows, and careful lot review.'
      },
      slate: {
        eyebrow: 'Current auction slate', title: 'Curated weekly drops', link: 'View all auctions →',
        card1time: 'Ends Sun 9:00 PM', card1title: 'Gold Star Showcase', card1text: 'High-grade grails, trophy-era singles, and standout Japanese promos.', card1li1: '38 lots', card1li2: 'Buyer premium from 8%', card1li3: 'Invoice issued after close', card1btn: 'Open lots',
        card2time: 'Starts Wed 8:00 PM', card2title: 'Modern Alt Art Night', card2text: 'Chase cards from Sword & Shield through Scarlet & Violet eras.', card2li1: '52 lots', card2li2: 'Macau local handoff supported', card2li3: 'Seller identity verified', card2btn: 'Preview schedule',
        card3time: 'Closed last week', card3title: 'PSA Vault Select', card3text: 'Competitive slabs, vintage holos, and low-pop collector pieces.', card3li1: 'Sell-through: 84%', card3li2: 'Average close: MOP 1,960', card3li3: 'Disputes pending review: 0', card3btn: 'See results'
      },
      payments: {
        eyebrow: 'Payment flow', title: 'Simple, clear, and easy to trust', text: 'When an auction ends, the buyer receives a clear invoice summary, completes payment by local transfer, and receives pickup or shipping instructions after confirmation.',
        step1title: '1. Win the lot', step1text: 'The invoice shows the lot total, buyer premium, shipping or pickup option, and payment deadline.',
        step2title: '2. Complete payment', step2text: 'The buyer uploads a bank transfer slip or shares a transfer reference for confirmation.',
        step3title: '3. Receive release details', step3text: 'Once payment is confirmed, staff arranges pickup details or shipping fulfilment.'
      },
      trust: { title: 'Trust & service controls', 1: 'Seller review before lots go live', 2: 'Extra identity checks for high-value lots when needed', 3: 'Manual review for suspicious bidding patterns', 4: 'Pickup or delivery only after payment confirmation', 5: 'Clear issue reporting window on each order' },
      market: {
        eyebrow: 'Marketplace snapshot', title: 'Highlights from the buy-now catalog', link: 'Open marketplace →',
        card1text: 'Japanese · graded · low-pop appeal', card2text: 'Japanese shrink-wrapped stock', card3text: 'Verified condition photos included'
      }
    },
    auctions: {
      hero: { eyebrow: 'Auction schedule', title: 'Weekly auctions with a clear overview.', text: 'Browse live, upcoming, and completed events with the details collectors actually want to see at a glance.' },
      filterNote: 'Preview the current schedule and featured sale highlights.',
      row1: { time: 'Ends 10 May · 9:00 PM', title: 'Gold Star Showcase', text: 'Vintage grails, low-pop slabs, Crystal-era highlights, and standout Japanese collector pieces.', tag1: '38 lots', tag2: 'Reserve on select lots', tag3: 'Invoice confirmation after close', side: 'Featured estimate: MOP 42,000', btn: 'View lot' },
      row2: { time: 'Ends 11 May · 8:30 PM', title: 'Modern Alt Art Night', text: 'A strong modern chase-card mix for collectors who like premium hits, clean presentation, and a little self-control.', tag1: '52 lots', tag2: 'No buyer account fee', tag3: 'Macau pickup available', side: 'Top live bid: MOP 6,200', btn: 'Featured lots' },
      row3: { time: 'Starts 14 May · 8:00 PM', title: 'Pokémon 151 Sealed Drop', text: 'Booster boxes, promo packs, accessory bundles, and a handful of sealed cases for serious sealed collectors.', tag1: '24 lots', tag2: 'Seller vetted', tag3: 'Condition disclosure required', sideTitle: 'Preview open', side: 'Expected range: MOP 320 – 9,500', btn: 'Compare prices' },
      row4: { time: 'Starts 18 May · 7:30 PM', title: 'PSA Vault Select', text: 'A premium slab-focused event with extra review for high-value lots and carefully managed consignor onboarding.', tag1: '31 lots', tag2: 'Identity check for high bids', tag3: 'Insured delivery option', sideTitle: 'Catalog pending', side: 'Seller intake closes in 3 days', btn: 'Submit cards' },
      row5: { time: 'Ended 03 May', title: 'Trainer Gallery Sprint', text: 'A fast midweek event centred on affordable chase cards, textured full arts, and sealed accessories.', tag1: '44 lots', tag2: 'Sell-through 81%', tag3: '0 disputes', side: 'Average close: MOP 1,316', btn: 'View results' },
      ops: { eyebrow: 'Auction operations', title: 'Clear processes support confident bidding', text: 'Great auctions are not just about the cards. They also depend on clear timing, visible buyer expectations, payment follow-up, and reliable handoff after a sale closes.', listTitle: 'Service checklist', 1: 'Flag reserve lots clearly', 2: 'Review suspicious buyer activity before invoice release', 3: 'Store proof-of-payment references', 4: 'Log pickup and shipping handoff times' }
    },
    detail: {
      breadcrumbLot: 'Lot 07', mock: { label: 'Featured slab preview', sub: 'Collector presentation sample visual' }, live: 'Live bidding', meta: 'Lot 07 · Gold Star Showcase',
      title: '2016 Pokémon Center Promo — Pikachu Poncho-Wearing Rayquaza PSA 10', lede: 'A centrepiece lot presented with cleaner hierarchy, trust notes, and the information serious buyers want immediately.',
      bid: { current: 'Current bid', next: 'Next minimum', estimate: 'Estimate' }, cta: { primary: 'How winning works', secondary: 'Read buyer FAQ' }, fine: 'Auction activity shown here is sample content for preview.',
      info: { lotTitle: 'Lot details', 1: 'Category: Slabbed single', 2: 'Language: Japanese', 3: 'Certification displayed with the final listing package', 4: 'Reserve: Not disclosed publicly', trustTitle: 'Trust notes' },
      trust: { 1: 'Seller identity checked before listing', 2: 'Photos reviewed by staff', 3: 'Manual review for large bid jumps', 4: 'Payment must clear before release' },
      desc: { eyebrow: 'Description', title: 'Collector-facing presentation that feels premium', text1: 'Important signals are surfaced quickly: current bid, next step, auction timing, trust controls, and what happens after a winning bid.', text2: 'This style of listing leaves room for provenance, certification checks, detailed imaging, and shipping origin without overwhelming the buyer.' },
      history: { title: 'Bid history', '1name': 'Bidder A12', '2name': 'Bidder H03', '3name': 'Bidder K77', '4name': 'Bidder A12' },
      payment: { eyebrow: 'Payment flow', title: 'What happens after you win', '1title': 'Invoice issued', '1text': 'The buyer receives a summary with the lot amount, buyer premium, and shipping or pickup option.', '2title': 'Bank transfer made', '2text': 'The buyer completes a Macau or Hong Kong bank transfer and submits proof within 48 hours.', '3title': 'Confirmation completed', '3text': 'After staff confirms payment, pickup scheduling or dispatch can proceed.' },
      ops: { title: 'Service notes', 1: 'Local pickup can be offered for Macau buyers', 2: 'Shipping fees are confirmed before dispatch', 3: 'Orders stay on hold until staff confirmation', 4: 'Issue reporting periods should remain visible' }
    },
    market: {
      hero: { eyebrow: 'Buy-now catalog', title: 'Marketplace search without the clutter.', text: 'Explore singles, slabs, sealed products, and collection lots in a cleaner browsing experience designed for collectors.' },
      filters: { title: 'Search filters', keyword: 'Keyword', keywordPlaceholder: 'Pikachu, Umbreon, 151...', category: 'Category', categoryAll: 'All categories', categorySingles: 'Singles', categoryGraded: 'Graded', categorySealed: 'Sealed', categoryAccessories: 'Accessories', condition: 'Condition', conditionAny: 'Any condition', conditionRaw: 'Raw NM', price: 'Price range', pricePlaceholder: 'MOP 500 - 5,000', button: 'Apply filters', note: 'Search controls are shown here as a browsing preview.' },
      results: { count: '24 results', note: 'Best match for premium Pokémon inventory in Macau', sort: 'Sort by', sortFeatured: 'Featured', sortPrice: 'Price: Low to high', sortNewest: 'Newest listed' },
      card1: { text: 'Japanese promo · certification verified manually', small: 'Local pickup or insured shipping' },
      card2: { text: 'Detailed front and back condition photos included', small: 'Seller approved for marketplace listing' },
      card3: { text: 'Japanese sealed stock · shrink verified on intake', small: 'Quantity available: 6' },
      card4: { pill: 'Collection lot', title: 'EX Era binder starter bundle', text: 'Mixed holo and raw pages aimed at nostalgia buyers', small: 'Additional review before checkout release' },
      card5: { text: 'A modern staple slab with strong eye appeal', small: 'Bank transfer accepted after invoice' },
      card6: { pill: 'Accessory', title: 'Pokémon Center deck sleeves set', text: 'Sealed accessories for casual add-on orders', small: 'Can be added to marketplace invoices' },
      ops: { eyebrow: 'Marketplace operations', title: 'A steady catalog complements the auction calendar', text: 'Auctions create excitement. Marketplace listings create consistency. Together they support repeat buying, better price discovery, and a more complete collector experience.', listTitle: 'Trust cues shown here', 1: 'Condition disclosure callouts', 2: 'Seller approval messaging', 3: 'Manual payment confirmation expectations', 4: 'Pickup and insured shipping availability' }
    },
    consign: {
      hero: { eyebrow: 'Seller onboarding', title: 'Consign cards with clear expectations.', text: 'Show sellers how submissions are reviewed, how listings are prepared, and how payouts are handled in a way that feels dependable from the start.' },
      form: { title: 'Consignment interest form', name: 'Name', namePlaceholder: 'Your name', contact: 'Email / WhatsApp', contactPlaceholder: 'Best contact', type: 'Card types', typeSingles: 'Singles', typeSlabs: 'Slabs', typeSealed: 'Sealed products', typeMixed: 'Mixed collection', value: 'Estimated value', valuePlaceholder: 'MOP 5,000+', description: 'Short description', descriptionPlaceholder: 'Examples: PSA 10 promos, Japanese sealed, vintage binder pages...', button: 'Submit enquiry', note: 'This form is shown as a preview of the seller intake experience.' },
      side: { title: 'What sellers want to know', 1: 'Review before approval to auction or marketplace', 2: 'High-value items may need extra identity proof', 3: 'Clear reserve discussion before listing goes live', 4: 'Payout after buyer payment is confirmed', 5: 'Unsold items can move into marketplace inventory' },
      how: { eyebrow: 'How it works', title: 'A seller flow that feels orderly and professional', '1title': '1. Intake', '1text': 'The seller shares photos, estimates, and preferred sale method. Staff then recommends auction or marketplace placement.', '2title': '2. Review', '2text': 'Authenticity, condition, and pricing are reviewed manually before publication.', '3title': '3. Listing', '3text': 'Approved cards are presented in a scheduled auction or a buy-now catalog.', '4title': '4. Payout', '4text': 'After buyer payment is confirmed and the order is released, seller payout follows the agreed schedule.', listTitle: 'Suggested service policies', 5: 'Consignor agreement completed before go-live', 6: 'Basic anti-shill review for linked bidder accounts', 7: 'Photo standards for sealed and raw cards', 8: 'Pickup logging for in-person drop-off and collection' },
      pay: { eyebrow: 'Payout flow', title: 'Simple payment rails keep launch operations practical', text: 'Seller payouts can be handled by bank transfer after buyer funds are confirmed. It is straightforward, cost-efficient, and easy for staff to track.', listTitle: 'Admin control points', 1: 'Hold payout until payment clears', 2: 'Track proof-of-payment references', 3: 'Flag risky sellers or disputed lots', 4: 'Record release and payout timestamps' }
    },
    faq: {
      hero: { eyebrow: 'FAQ & service guide', title: 'How the experience works', text: 'Clear answers for buyers and sellers — because confusion is not a service strategy.' },
      q1: { title: 'How do I bid?', text: 'Buyers create an account, complete any required verification, and place bids on eligible lots during the auction window.' },
      q2: { title: 'How do I pay if I win?', text: 'Winners receive an invoice and complete payment by bank transfer within 48 hours. Staff then confirms payment before release, pickup, or shipping.' },
      q3: { title: 'Can Macau buyers collect in person?', text: 'Yes. Local pickup is available for eligible orders and helps make payment confirmation and handoff simpler.' },
      q4: { title: 'What happens when a seller submits expensive cards?', text: 'High-value cards may require additional identity checks, photo review, reserve discussion, and supporting provenance details.' },
      q5: { title: 'Is the marketplace separate from auctions?', text: 'They serve different buyer journeys, but they work well together. Unsold auction lots can move into marketplace inventory, while marketplace pricing helps guide auction expectations.' },
      side: { title: 'Service playbook', '1title': 'Accounts', '1text': 'Early users can be reviewed carefully before bidding access is granted.', '2title': 'Payments', '2text': 'Bank transfer with manual confirmation keeps the process clear.', '3title': 'Fulfilment', '3text': 'Pickup and tracked shipping can both be supported.', '4title': 'Trust', '4text': 'Review status and operational policies should stay visible.' },
      next: { eyebrow: 'Recommended next step', title: 'The right foundation for a full launch', text: 'A complete launch should pair this polished front end with account management, bid tracking, invoice handling, moderation tools, and payment status controls behind the scenes.', listTitle: 'Core service modules', 1: 'Bidder eligibility and account controls', 2: 'Bid validation and event tracking', 3: 'Order and invoice management', 4: 'Payment status handling', 5: 'Seller payout records' }
    }
  },
  'zh-HK': {
    meta: {
      home: { title: 'Edmundo`s TCG BID — 澳門高端 Pokémon 卡拍賣平台', description: '為澳門及香港收藏家提供高端 Pokémon 卡拍賣、現貨市場與寄賣服務。' },
      auctions: { title: '拍賣活動 — Edmundo`s TCG BID', description: '瀏覽 Edmundo`s TCG BID 的進行中、即將開始及已結束 Pokémon 卡拍賣。' },
      'auction-detail': { title: '拍品詳情 — Edmundo`s TCG BID', description: '查看 Edmundo`s TCG BID 精選 Pokémon 卡拍品的詳情。' },
      marketplace: { title: '現貨市場 — Edmundo`s TCG BID', description: '瀏覽單卡、評級卡、密封產品及收藏組合。' },
      consign: { title: '寄賣與出售 — Edmundo`s TCG BID', description: '了解 Pokémon 卡與收藏品的寄賣流程、審核方式及付款安排。' },
      faq: { title: '常見問題與服務說明 — Edmundo`s TCG BID', description: '關於出價、付款、自取、寄送及寄賣的常見問題。' }
    },
    countdown: { day: '日', hour: '時', minute: '分', closed: '已結束' },
    brand: { tagline: '澳門 Pokémon 卡拍賣，做得更到位' },
    nav: { home: '首頁', auctions: '拍賣', marketplace: '現貨市場', consign: '寄賣', faq: 'FAQ', sampleLot: '精選拍品', openMenu: '開啟選單' },
    status: { liveNow: '現正進行', open: '開放中', upcoming: '即將開始', closed: '已存檔' },
    filters: { all: '全部', live: '進行中', upcoming: '即將開始', closed: '已結束' },
    common: { closesIn: '距離結束', sealed: '密封', rawNm: '原卡 NM' },
    footer: { blurb: '為澳門及香港收藏家提供高端 Pokémon 卡拍賣、現貨市場與寄賣服務。', pages: '頁面', explore: '瀏覽', navigate: '導覽', serviceTitle: '收藏家服務', serviceText: '拍賣示例、價格與時間僅作展示預覽用途。' },
    home: {
      hero: { eyebrow: '澳門 · 香港 · 精選 TCG 活動', title: '高端 Pokémon 卡拍賣，帶來更清爽的收藏體驗。', lede: '探索每週拍賣、重點拍品、現貨市場與寄賣服務，整體設計以信任、清晰度與本地化服務為核心。', primary: '瀏覽進行中拍賣', secondary: '寄賣你的卡', point1: '每週拍賣上架，附倒數、底價提示與估價焦點', point2: '現貨市場涵蓋單卡、評級卡、密封產品與收藏組合', point3: '支援人工付款確認與本地交收，流程更順手' },
      heroCard: { kicker: '每週精選拍賣', title: 'Gold Star Showcase', text: '38 件精選拍品 · 只限 Pokémon · 賣家需通過驗證', startingFrom: '起拍價', topEstimate: '最高估價拍品', button: '查看精選拍品' },
      stats: { 1: '已驗證收藏家帳戶可參與競投', 2: '拍賣結束後付款時限', 3: '主要服務區域涵蓋澳門 / 香港', '4strong': '人工審核', 4: '所有高價寄賣拍品均由團隊檢查' },
      experience: { eyebrow: '重點體驗', title: '圍繞收藏家真實瀏覽與購買習慣而設', link: '查看運作方式 →' },
      features: { '1title': '即時拍賣', '1text': '拍品倒數、目前出價、底價標示與賣家備註清晰呈現。', '2title': '現貨瀏覽', '2text': '選購密封產品、原卡、評級卡與精選收藏組合。', '3title': '寄賣提交', '3text': '提供相片指引、定價審核與清晰的派款安排。', '4title': '以信任為先的服務', '4text': '人工付款確認、自取安排、爭議時限及拍品審核更周全。' },
      slate: { eyebrow: '目前拍賣檔期', title: '每週精選上架', link: '查看所有拍賣 →', card1time: '週日晚上 9:00 結束', card1title: 'Gold Star Showcase', card1text: '高分珍品、獎盃年代單卡與亮眼日版宣傳卡。', card1li1: '38 件拍品', card1li2: '買家佣金由 8% 起', card1li3: '結拍後發出帳單', card1btn: '查看拍品', card2time: '週三晚上 8:00 開始', card2title: 'Modern Alt Art Night', card2text: '收錄 Sword & Shield 至 Scarlet & Violet 時代熱門卡。', card2li1: '52 件拍品', card2li2: '支援澳門本地交收', card2li3: '賣家身份已驗證', card2btn: '預覽檔期', card3time: '上週已結束', card3title: 'PSA Vault Select', card3text: '競爭力評級卡、復古閃卡與低人口收藏精品。', card3li1: '成交率：84%', card3li2: '平均成交：MOP 1,960', card3li3: '待審爭議：0', card3btn: '查看結果' },
      payments: { eyebrow: '付款流程', title: '簡單、清楚、值得信賴', text: '拍賣結束後，買家會收到清晰帳單摘要，完成本地轉帳後，再安排自取或寄送。', step1title: '1. 贏得拍品', step1text: '帳單會列明拍品總額、買家佣金、寄送或自取選項，以及付款期限。', step2title: '2. 完成付款', step2text: '買家上傳轉帳憑證或提供轉帳參考編號以便確認。', step3title: '3. 收取交付安排', step3text: '確認付款後，團隊會安排自取詳情或寄送。' },
      trust: { title: '信任與服務機制', 1: '拍品上架前先審核賣家', 2: '高價拍品可按需要進一步核實身份', 3: '可疑競投行為會進行人工檢查', 4: '確認付款後才安排交收或寄送', 5: '每張訂單清楚列明問題申報時限' },
      market: { eyebrow: '現貨市場精選', title: '即買目錄精選', link: '進入現貨市場 →', card1text: '日版 · 評級卡 · 低人口吸引力', card2text: '日版原封存貨', card3text: '附已驗證品相相片' }
    },
    auctions: {
      hero: { eyebrow: '拍賣時間表', title: '每週拍賣，一眼看清。', text: '快速瀏覽進行中、即將開始及已結束的活動，重點資訊一目了然。' },
      filterNote: '預覽目前檔期與精選拍賣焦點。',
      row1: { time: '5 月 10 日晚上 9:00 結束', title: 'Gold Star Showcase', text: '復古珍品、低人口評級卡、Crystal 年代亮點與日版收藏好貨。', tag1: '38 件拍品', tag2: '部分拍品設底價', tag3: '結拍後確認帳單', side: '焦點估價：MOP 42,000', btn: '查看拍品' },
      row2: { time: '5 月 11 日晚上 8:30 結束', title: 'Modern Alt Art Night', text: '精選現代熱門卡，適合追求高質感與乾淨展示的收藏家。', tag1: '52 件拍品', tag2: '買家帳戶免登記費', tag3: '可於澳門自取', side: '目前最高出價：MOP 6,200', btn: '精選拍品' },
      row3: { time: '5 月 14 日晚上 8:00 開始', title: 'Pokémon 151 Sealed Drop', text: '補充包盒、宣傳包、配件組與少量密封箱，適合密封收藏玩家。', tag1: '24 件拍品', tag2: '賣家已審核', tag3: '須提供品相說明', sideTitle: '可預覽', side: '預計區間：MOP 320 – 9,500', btn: '比較價格' },
      row4: { time: '5 月 18 日晚上 7:30 開始', title: 'PSA Vault Select', text: '以高端評級卡為主的專場，高價拍品審核更嚴謹。', tag1: '31 件拍品', tag2: '高額出價需核實身份', tag3: '可選保價寄送', sideTitle: '目錄待公布', side: '寄賣收件 3 日後截止', btn: '提交卡片' },
      row5: { time: '5 月 3 日已結束', title: 'Trainer Gallery Sprint', text: '中段快速專場，主打親民追卡、紋理全圖與密封配件。', tag1: '44 件拍品', tag2: '成交率 81%', tag3: '0 宗爭議', side: '平均成交：MOP 1,316', btn: '查看結果' },
      ops: { eyebrow: '拍賣運作', title: '清晰流程讓競投更安心', text: '好拍賣不只靠好卡，還需要明確時間、清楚買家預期、付款跟進與可靠交收安排。', listTitle: '服務檢查清單', 1: '清楚標示設底價拍品', 2: '帳單發出前檢查可疑買家活動', 3: '保存付款證明參考資料', 4: '記錄自取與寄送交接時間' }
    },
    detail: {
      breadcrumbLot: '拍品 07', mock: { label: '精選評級卡預覽', sub: '收藏展示示意圖' }, live: '競投中', meta: '拍品 07 · Gold Star Showcase', title: '2016 Pokémon Center Promo — Pikachu Poncho-Wearing Rayquaza PSA 10', lede: '重點拍品以更清晰層級、信任資訊與買家最在意的內容呈現。', bid: { current: '目前出價', next: '下口最低出價', estimate: '估價' }, cta: { primary: '了解中標流程', secondary: '閱讀買家 FAQ' }, fine: '此頁所示拍賣活動內容僅作展示預覽。', info: { lotTitle: '拍品資料', 1: '類別：評級單卡', 2: '語言：日文', 3: '認證資料會隨正式拍品頁面展示', 4: '底價：不公開顯示', trustTitle: '信任說明' }, trust: { 1: '上架前已核實賣家身份', 2: '相片已由團隊審閱', 3: '大幅跳價會作人工檢查', 4: '確認付款後才可放行' }, desc: { eyebrow: '拍品說明', title: '面向收藏家的高質感展示方式', text1: '目前出價、下一口、拍賣時間、信任機制與中標後流程都會優先顯示。', text2: '這種頁面風格亦保留空間放置來源說明、認證查核、細節相片與出貨地資訊。' }, history: { title: '出價紀錄', '1name': '買家 A12', '2name': '買家 H03', '3name': '買家 K77', '4name': '買家 A12' }, payment: { eyebrow: '付款流程', title: '中標後會發生什麼', '1title': '發出帳單', '1text': '買家會收到拍品金額、買家佣金與寄送／自取選項摘要。', '2title': '完成轉帳', '2text': '買家需於 48 小時內完成澳門或香港銀行轉帳並提交證明。', '3title': '完成確認', '3text': '團隊確認付款後，方可安排自取或寄送。' }, ops: { title: '服務備註', 1: '澳門買家可安排本地自取', 2: '寄送費用會於出貨前確認', 3: '訂單會於確認前維持保留狀態', 4: '問題申報時限應清楚展示' }
    },
    market: {
      hero: { eyebrow: '即買目錄', title: '現貨搜尋，更清爽。', text: '以更乾淨的瀏覽體驗探索單卡、評級卡、密封產品與收藏組合。' },
      filters: { title: '搜尋篩選', keyword: '關鍵字', keywordPlaceholder: 'Pikachu、Umbreon、151...', category: '分類', categoryAll: '全部分類', categorySingles: '單卡', categoryGraded: '評級卡', categorySealed: '密封產品', categoryAccessories: '配件', condition: '品相', conditionAny: '任何品相', conditionRaw: '原卡 NM', price: '價格範圍', pricePlaceholder: 'MOP 500 - 5,000', button: '套用篩選', note: '此處展示搜尋操作介面預覽。' },
      results: { count: '24 個結果', note: '澳門高端 Pokémon 庫存的最佳匹配', sort: '排序', sortFeatured: '精選', sortPrice: '價格：由低至高', sortNewest: '最新上架' },
      card1: { text: '日版宣傳卡 · 認證資料已人工核實', small: '可本地自取或保價寄送' }, card2: { text: '附正背面詳細品相相片', small: '賣家已獲現貨市場上架批准' }, card3: { text: '日版密封存貨 · 入庫時已確認封膜', small: '可供數量：6' }, card4: { pill: '收藏組合', title: 'EX Era 相簿入門組合', text: '混合閃卡與原卡頁面，適合懷舊收藏家', small: '結帳前會作額外審核' }, card5: { text: '現代熱門評級卡，觀感出色', small: '發出帳單後可接受銀行轉帳' }, card6: { pill: '配件', title: 'Pokémon Center 卡套套裝', text: '適合加購的密封配件', small: '可加入現貨市場帳單' },
      ops: { eyebrow: '現貨市場運作', title: '穩定目錄能補足拍賣節奏', text: '拍賣帶來話題與熱度，現貨市場帶來穩定成交，兩者結合可改善價格判斷與回購體驗。', listTitle: '此頁展示的信任提示', 1: '品相說明提示', 2: '賣家審核標示', 3: '人工付款確認預期', 4: '自取與保價寄送選項' }
    },
    consign: {
      hero: { eyebrow: '賣家入駐', title: '寄賣卡片，期望更清楚。', text: '讓賣家清楚知道如何提交、如何審核、如何上架，以及何時收款，整體感覺更可靠。' },
      form: { title: '寄賣意向表格', name: '姓名', namePlaceholder: '你的姓名', contact: 'Email / WhatsApp', contactPlaceholder: '最佳聯絡方式', type: '卡片類型', typeSingles: '單卡', typeSlabs: '評級卡', typeSealed: '密封產品', typeMixed: '混合收藏', value: '估計價值', valuePlaceholder: 'MOP 5,000+', description: '簡短描述', descriptionPlaceholder: '例如：PSA 10 宣傳卡、日版密封、復古相簿頁面...', button: '提交查詢', note: '此表格用作展示賣家提交體驗預覽。' },
      side: { title: '賣家最關心的事', 1: '上拍賣或現貨前先審核', 2: '高價物品可能需要額外身份證明', 3: '上架前先清楚確認底價安排', 4: '確認買家付款後再安排派款', 5: '未售出物品可轉入現貨市場' },
      how: { eyebrow: '流程說明', title: '有條理又專業的賣家流程', '1title': '1. 收件', '1text': '賣家提供相片、估值與偏好的出售方式，團隊建議上拍賣或現貨。', '2title': '2. 審核', '2text': '上架前會人工檢查真偽、品相與定價。', '3title': '3. 上架', '3text': '核准後的卡片會加入排程拍賣或即買目錄。', '4title': '4. 派款', '4text': '待買家付款確認及訂單放行後，按約定時間安排派款。', listTitle: '建議服務政策', 5: '上架前完成寄賣協議', 6: '對關聯競投帳戶做基本防托價檢查', 7: '原卡與密封產品的拍攝標準', 8: '記錄面交收件與取回流程' },
      pay: { eyebrow: '派款流程', title: '簡單付款方式更適合起步營運', text: '待買家資金確認後，以銀行轉帳向賣家派款，流程直接、成本可控，亦方便團隊追蹤。', listTitle: '後台控制要點', 1: '款項到賬前暫緩派款', 2: '記錄付款證明資料', 3: '標記高風險賣家或爭議拍品', 4: '記錄放行與派款時間' }
    },
    faq: {
      hero: { eyebrow: 'FAQ 與服務指引', title: '整體流程如何運作', text: '為買家與賣家提供清楚答案，因為混亂從來不是服務策略。' },
      q1: { title: '如何出價？', text: '買家建立帳戶、完成所需驗證後，即可在拍賣期間對合資格拍品出價。' }, q2: { title: '中標後如何付款？', text: '中標者會收到帳單，並需於 48 小時內完成銀行轉帳。團隊確認付款後才安排放行、自取或寄送。' }, q3: { title: '澳門買家可以面交自取嗎？', text: '可以。合資格訂單可安排本地自取，亦有助於付款確認與交收。' }, q4: { title: '若賣家提交高價卡會怎樣處理？', text: '高價卡可能需要額外身份核實、相片審閱、底價討論及來源資料補充。' }, q5: { title: '現貨市場是否與拍賣分開？', text: '兩者服務不同購買路徑，但配合得很好。未售出的拍品可轉入現貨市場，而現貨價格亦可作為拍賣參考。' },
      side: { title: '服務操作指引', '1title': '帳戶', '1text': '早期用戶可先經審核後開放競投權限。', '2title': '付款', '2text': '以銀行轉帳配合人工確認，流程清楚易明。', '3title': '交付', '3text': '可同時支援自取與有追蹤寄送。', '4title': '信任', '4text': '應清楚展示審核狀態與營運政策。' },
      next: { eyebrow: '建議下一步', title: '完整上線所需的穩固基礎', text: '正式上線時，可在這個前端基礎上加入帳戶管理、出價紀錄、帳單處理、審核工具與付款狀態管理。', listTitle: '核心服務模組', 1: '競投資格與帳戶控制', 2: '出價驗證與事件追蹤', 3: '訂單與帳單管理', 4: '付款狀態處理', 5: '賣家派款紀錄' }
    }
  },
  'zh-CN': {
    meta: {
      home: { title: 'Edmundo`s TCG BID — 澳门高端 Pokémon 卡拍卖平台', description: '为澳门及香港收藏家提供高端 Pokémon 卡拍卖、现货市场与寄卖服务。' },
      auctions: { title: '拍卖活动 — Edmundo`s TCG BID', description: '浏览 Edmundo`s TCG BID 的进行中、即将开始及已结束 Pokémon 卡拍卖。' },
      'auction-detail': { title: '拍品详情 — Edmundo`s TCG BID', description: '查看 Edmundo`s TCG BID 精选 Pokémon 卡拍品详情。' },
      marketplace: { title: '现货市场 — Edmundo`s TCG BID', description: '浏览单卡、评级卡、密封产品与收藏组合。' },
      consign: { title: '寄卖与出售 — Edmundo`s TCG BID', description: '了解 Pokémon 卡与收藏品的寄卖流程、审核方式及付款安排。' },
      faq: { title: '常见问题与服务说明 — Edmundo`s TCG BID', description: '关于出价、付款、自提、寄送及寄卖的常见问题。' }
    },
    countdown: { day: '天', hour: '时', minute: '分', closed: '已结束' },
    brand: { tagline: '澳门 Pokémon 卡拍卖，做得更到位' },
    nav: { home: '首页', auctions: '拍卖', marketplace: '现货市场', consign: '寄卖', faq: 'FAQ', sampleLot: '精选拍品', openMenu: '打开菜单' },
    status: { liveNow: '正在进行', open: '开放中', upcoming: '即将开始', closed: '已归档' },
    filters: { all: '全部', live: '进行中', upcoming: '即将开始', closed: '已结束' },
    common: { closesIn: '距离结束', sealed: '密封', rawNm: '原卡 NM' },
    footer: { blurb: '为澳门及香港收藏家提供高端 Pokémon 卡拍卖、现货市场与寄卖服务。', pages: '页面', explore: '浏览', navigate: '导航', serviceTitle: '收藏家服务', serviceText: '拍卖示例、价格与时间仅供展示预览。' },
    home: {
      hero: { eyebrow: '澳门 · 香港 · 精选 TCG 活动', title: '高端 Pokémon 卡拍卖，带来更清爽的收藏体验。', lede: '探索每周拍卖、重点拍品、现货市场与寄卖服务，整体围绕信任、清晰度与本地化服务而设计。', primary: '浏览进行中拍卖', secondary: '寄卖你的卡', point1: '每周拍卖上架，附带倒计时、底价提示与估价焦点', point2: '现货市场涵盖单卡、评级卡、密封产品与收藏组合', point3: '支持人工付款确认与本地交收，流程更顺畅' },
      heroCard: { kicker: '每周精选拍卖', title: 'Gold Star Showcase', text: '38 件精选拍品 · 仅限 Pokémon · 卖家需通过验证', startingFrom: '起拍价', topEstimate: '最高估价拍品', button: '查看精选拍品' },
      stats: { 1: '已验证收藏家账号可参与竞投', 2: '拍卖结束后的付款时限', 3: '主要服务区域覆盖澳门 / 香港', '4strong': '人工审核', 4: '所有高价寄卖拍品均由团队检查' },
      experience: { eyebrow: '重点体验', title: '围绕收藏家真实浏览与购买习惯打造', link: '查看运作方式 →' },
      features: { '1title': '实时拍卖', '1text': '拍品倒计时、当前出价、底价标示与卖家备注清晰呈现。', '2title': '现货浏览', '2text': '选购密封产品、原卡、评级卡与精选收藏组合。', '3title': '寄卖提交', '3text': '提供照片指引、定价审核与清晰的打款安排。', '4title': '以信任为先的服务', '4text': '人工付款确认、自提安排、争议时限及拍品审核更加周全。' },
      slate: { eyebrow: '当前拍卖档期', title: '每周精选上架', link: '查看所有拍卖 →', card1time: '周日晚上 9:00 结束', card1title: 'Gold Star Showcase', card1text: '高分珍品、奖杯年代单卡与亮眼日版宣传卡。', card1li1: '38 件拍品', card1li2: '买家佣金 8% 起', card1li3: '结拍后发出账单', card1btn: '查看拍品', card2time: '周三晚上 8:00 开始', card2title: 'Modern Alt Art Night', card2text: '收录 Sword & Shield 至 Scarlet & Violet 时代热门卡。', card2li1: '52 件拍品', card2li2: '支持澳门本地交收', card2li3: '卖家身份已验证', card2btn: '预览档期', card3time: '上周已结束', card3title: 'PSA Vault Select', card3text: '竞争力评级卡、复古闪卡与低人口收藏精品。', card3li1: '成交率：84%', card3li2: '平均成交：MOP 1,960', card3li3: '待审争议：0', card3btn: '查看结果' },
      payments: { eyebrow: '付款流程', title: '简单、清楚、值得信赖', text: '拍卖结束后，买家会收到清晰的账单摘要，完成本地转账后，再安排自提或寄送。', step1title: '1. 赢得拍品', step1text: '账单会列明拍品总额、买家佣金、寄送或自提选项，以及付款期限。', step2title: '2. 完成付款', step2text: '买家上传转账凭证或提供转账参考编号以便确认。', step3title: '3. 获取交付安排', step3text: '确认付款后，团队会安排自提详情或寄送。' },
      trust: { title: '信任与服务机制', 1: '拍品上架前先审核卖家', 2: '高价拍品可按需要进一步核实身份', 3: '可疑竞投行为会进行人工检查', 4: '确认付款后才安排交收或寄送', 5: '每笔订单清楚列明问题申报时限' },
      market: { eyebrow: '现货市场精选', title: '即买目录亮点', link: '进入现货市场 →', card1text: '日版 · 评级卡 · 低人口吸引力', card2text: '日版原封库存', card3text: '附已验证品相照片' }
    },
    auctions: {
      hero: { eyebrow: '拍卖时间表', title: '每周拍卖，一眼看清。', text: '快速浏览进行中、即将开始及已结束的活动，重点信息一目了然。' }, filterNote: '预览当前档期与精选拍卖亮点。',
      row1: { time: '5 月 10 日晚上 9:00 结束', title: 'Gold Star Showcase', text: '复古珍品、低人口评级卡、Crystal 年代亮点与日版收藏好货。', tag1: '38 件拍品', tag2: '部分拍品设底价', tag3: '结拍后确认账单', side: '焦点估价：MOP 42,000', btn: '查看拍品' },
      row2: { time: '5 月 11 日晚上 8:30 结束', title: 'Modern Alt Art Night', text: '精选现代热门卡，适合追求高质感与干净展示的收藏家。', tag1: '52 件拍品', tag2: '买家账号免登记费', tag3: '可在澳门自提', side: '当前最高出价：MOP 6,200', btn: '精选拍品' },
      row3: { time: '5 月 14 日晚上 8:00 开始', title: 'Pokémon 151 Sealed Drop', text: '补充包盒、宣传包、配件组与少量密封箱，适合密封收藏玩家。', tag1: '24 件拍品', tag2: '卖家已审核', tag3: '需提供品相说明', sideTitle: '可预览', side: '预计区间：MOP 320 – 9,500', btn: '比较价格' },
      row4: { time: '5 月 18 日晚上 7:30 开始', title: 'PSA Vault Select', text: '以高端评级卡为主的专场，高价拍品审核更严格。', tag1: '31 件拍品', tag2: '高额出价需核实身份', tag3: '可选保价寄送', sideTitle: '目录待公布', side: '寄卖收件 3 天后截止', btn: '提交卡片' },
      row5: { time: '5 月 3 日已结束', title: 'Trainer Gallery Sprint', text: '中段快速专场，主打亲民追卡、纹理全图与密封配件。', tag1: '44 件拍品', tag2: '成交率 81%', tag3: '0 起争议', side: '平均成交：MOP 1,316', btn: '查看结果' },
      ops: { eyebrow: '拍卖运营', title: '清晰流程让竞投更安心', text: '好拍卖不只靠好卡，还需要明确时间、清楚买家预期、付款跟进与可靠交收安排。', listTitle: '服务检查清单', 1: '清楚标示设底价拍品', 2: '账单发出前检查可疑买家活动', 3: '保存付款证明参考资料', 4: '记录自提与寄送交接时间' }
    },
    detail: {
      breadcrumbLot: '拍品 07', mock: { label: '精选评级卡预览', sub: '收藏展示示意图' }, live: '竞投中', meta: '拍品 07 · Gold Star Showcase', title: '2016 Pokémon Center Promo — Pikachu Poncho-Wearing Rayquaza PSA 10', lede: '重点拍品以更清晰的层级、信任信息与买家最关心的内容呈现。', bid: { current: '当前出价', next: '下一口最低出价', estimate: '估价' }, cta: { primary: '了解中标流程', secondary: '阅读买家 FAQ' }, fine: '此页所示拍卖活动内容仅作展示预览。', info: { lotTitle: '拍品资料', 1: '类别：评级单卡', 2: '语言：日文', 3: '认证资料会随正式拍品页面展示', 4: '底价：不公开显示', trustTitle: '信任说明' }, trust: { 1: '上架前已核实卖家身份', 2: '照片已由团队审阅', 3: '大幅跳价会作人工检查', 4: '确认付款后才可放行' }, desc: { eyebrow: '拍品说明', title: '面向收藏家的高质感展示方式', text1: '当前出价、下一口、拍卖时间、信任机制与中标后流程都会优先展示。', text2: '这种页面风格也保留空间放置来源说明、认证查核、细节照片与发货地信息。' }, history: { title: '出价记录', '1name': '买家 A12', '2name': '买家 H03', '3name': '买家 K77', '4name': '买家 A12' }, payment: { eyebrow: '付款流程', title: '中标后会发生什么', '1title': '发出账单', '1text': '买家会收到拍品金额、买家佣金与寄送／自提选项摘要。', '2title': '完成转账', '2text': '买家需在 48 小时内完成澳门或香港银行转账并提交证明。', '3title': '完成确认', '3text': '团队确认付款后，方可安排自提或寄送。' }, ops: { title: '服务备注', 1: '澳门买家可安排本地自提', 2: '寄送费用会在发货前确认', 3: '订单会在确认前维持保留状态', 4: '问题申报时限应清楚展示' }
    },
    market: {
      hero: { eyebrow: '即买目录', title: '现货搜索，更清爽。', text: '以更干净的浏览体验探索单卡、评级卡、密封产品与收藏组合。' },
      filters: { title: '搜索筛选', keyword: '关键词', keywordPlaceholder: 'Pikachu、Umbreon、151...', category: '分类', categoryAll: '全部分类', categorySingles: '单卡', categoryGraded: '评级卡', categorySealed: '密封产品', categoryAccessories: '配件', condition: '品相', conditionAny: '任何品相', conditionRaw: '原卡 NM', price: '价格范围', pricePlaceholder: 'MOP 500 - 5,000', button: '应用筛选', note: '此处展示搜索操作界面预览。' },
      results: { count: '24 个结果', note: '澳门高端 Pokémon 库存的最佳匹配', sort: '排序', sortFeatured: '精选', sortPrice: '价格：从低到高', sortNewest: '最新上架' },
      card1: { text: '日版宣传卡 · 认证资料已人工核实', small: '可本地自提或保价寄送' }, card2: { text: '附正反面详细品相照片', small: '卖家已获现货市场上架批准' }, card3: { text: '日版密封库存 · 入库时已确认封膜', small: '可供数量：6' }, card4: { pill: '收藏组合', title: 'EX Era 相册入门组合', text: '混合闪卡与原卡页面，适合怀旧收藏家', small: '结账前会做额外审核' }, card5: { text: '现代热门评级卡，观感出色', small: '发出账单后可接受银行转账' }, card6: { pill: '配件', title: 'Pokémon Center 卡套套装', text: '适合加购的密封配件', small: '可加入现货市场账单' },
      ops: { eyebrow: '现货市场运营', title: '稳定目录能补足拍卖节奏', text: '拍卖带来话题与热度，现货市场带来稳定成交，两者结合可改善价格判断与回购体验。', listTitle: '此页展示的信任提示', 1: '品相说明提示', 2: '卖家审核标示', 3: '人工付款确认预期', 4: '自提与保价寄送选项' }
    },
    consign: {
      hero: { eyebrow: '卖家入驻', title: '寄卖卡片，预期更清楚。', text: '让卖家清楚知道如何提交、如何审核、如何上架，以及何时收款，整体感觉更可靠。' },
      form: { title: '寄卖意向表单', name: '姓名', namePlaceholder: '你的姓名', contact: 'Email / WhatsApp', contactPlaceholder: '最佳联系方式', type: '卡片类型', typeSingles: '单卡', typeSlabs: '评级卡', typeSealed: '密封产品', typeMixed: '混合收藏', value: '估计价值', valuePlaceholder: 'MOP 5,000+', description: '简短描述', descriptionPlaceholder: '例如：PSA 10 宣传卡、日版密封、复古相册页面...', button: '提交咨询', note: '此表单用于展示卖家提交体验预览。' },
      side: { title: '卖家最关心的事', 1: '上拍卖或现货前先审核', 2: '高价物品可能需要额外身份证明', 3: '上架前先清楚确认底价安排', 4: '确认买家付款后再安排打款', 5: '未售出物品可转入现货市场' },
      how: { eyebrow: '流程说明', title: '有条理又专业的卖家流程', '1title': '1. 收件', '1text': '卖家提供照片、估值与偏好的出售方式，团队建议上拍卖或现货。', '2title': '2. 审核', '2text': '上架前会人工检查真伪、品相与定价。', '3title': '3. 上架', '3text': '核准后的卡片会加入排程拍卖或即买目录。', '4title': '4. 打款', '4text': '待买家付款确认及订单放行后，按约定时间安排打款。', listTitle: '建议服务政策', 5: '上架前完成寄卖协议', 6: '对关联竞投账号做基本防抬价检查', 7: '原卡与密封产品的拍摄标准', 8: '记录面交收件与取回流程' },
      pay: { eyebrow: '打款流程', title: '简单付款方式更适合起步运营', text: '待买家资金确认后，以银行转账向卖家打款，流程直接、成本可控，也方便团队追踪。', listTitle: '后台控制要点', 1: '款项到账前暂缓打款', 2: '记录付款证明资料', 3: '标记高风险卖家或争议拍品', 4: '记录放行与打款时间' }
    },
    faq: {
      hero: { eyebrow: 'FAQ 与服务指引', title: '整体流程如何运作', text: '为买家与卖家提供清楚答案，因为混乱从来不是服务策略。' },
      q1: { title: '如何出价？', text: '买家建立账号、完成所需验证后，即可在拍卖期间对合资格拍品出价。' }, q2: { title: '中标后如何付款？', text: '中标者会收到账单，并需在 48 小时内完成银行转账。团队确认付款后才安排放行、自提或寄送。' }, q3: { title: '澳门买家可以面交自提吗？', text: '可以。合资格订单可安排本地自提，也有助于付款确认与交收。' }, q4: { title: '如果卖家提交高价卡会怎样处理？', text: '高价卡可能需要额外身份核实、照片审阅、底价讨论及来源资料补充。' }, q5: { title: '现货市场是否与拍卖分开？', text: '两者服务不同购买路径，但配合得很好。未售出的拍品可转入现货市场，而现货价格也可作为拍卖参考。' },
      side: { title: '服务操作指引', '1title': '账号', '1text': '早期用户可先经审核后开放竞投权限。', '2title': '付款', '2text': '以银行转账配合人工确认，流程清楚易懂。', '3title': '交付', '3text': '可同时支持自提与有追踪寄送。', '4title': '信任', '4text': '应清楚展示审核状态与运营政策。' },
      next: { eyebrow: '建议下一步', title: '完整上线所需的稳固基础', text: '正式上线时，可在这个前端基础上加入账号管理、出价记录、账单处理、审核工具与付款状态管理。', listTitle: '核心服务模块', 1: '竞投资格与账号控制', 2: '出价验证与事件追踪', 3: '订单与账单管理', 4: '付款状态处理', 5: '卖家打款记录' }
    }
  }
};

function getValue(obj, path) {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

const html = document.documentElement;
const page = document.body.dataset.page;
const storedLang = localStorage.getItem('siteLanguage');
const defaultLang = translations[storedLang] ? storedLang : 'en';

function updateMeta(lang) {
  const meta = translations[lang]?.meta?.[page];
  if (!meta) return;
  document.title = meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', meta.description);
  html.setAttribute('lang', lang);
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = getValue(dict, key);
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = getValue(dict, key);
    if (value !== undefined) el.setAttribute('placeholder', value);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    const value = getValue(dict, key);
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  updateMeta(lang);
  localStorage.setItem('siteLanguage', lang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach((button) => {
  button.addEventListener('click', () => applyTranslations(button.dataset.lang));
});

const countdowns = document.querySelectorAll('[data-countdown]');
const formatCountdown = (targetDate, lang) => {
  const labels = translations[lang]?.countdown || translations.en.countdown;
  const diff = targetDate - new Date();
  if (diff <= 0) return labels.closed;
  const totalMinutes = Math.floor(diff / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;
  return `${String(days).padStart(2, '0')}${labels.day} ${String(hours).padStart(2, '0')}${labels.hour} ${String(minutes).padStart(2, '0')}${labels.minute}`;
};

const tickCountdowns = () => {
  const lang = localStorage.getItem('siteLanguage') || defaultLang;
  countdowns.forEach((element) => {
    const target = element.getAttribute('data-countdown');
    if (!target) return;
    element.textContent = formatCountdown(new Date(target), lang);
  });
};

if (countdowns.length) {
  tickCountdowns();
  setInterval(tickCountdowns, 60000);
}

const filterButtons = document.querySelectorAll('[data-filter]');
const auctionRows = document.querySelectorAll('#auctionList .auction-row');
if (filterButtons.length && auctionRows.length) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      auctionRows.forEach((row) => {
        const category = row.getAttribute('data-category');
        row.classList.toggle('hidden', !(filter === 'all' || category === filter));
      });
    });
  });
}

applyTranslations(defaultLang);
tickCountdowns();
