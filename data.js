const WHATSAPP_NUMBER = "2349034202223";

// Silk N Siren Femme — product catalog
// Prices already include shipping. All items are pre-order.
// Rebuilt from the full product catalogue (6 batches). Edit freely.

const PRODUCTS = [

  // ---------- ROBES & 3-PIECE SETS ----------
  {
    id: "duskbase-lace-3pc",
    name: "Duskbase Ladies Lace 3-Piece",
    category: "Robes & 3-Piece Sets",
    price: 22000,
    sizes: "S – XL",
    image: "images/61070.jpg",
    desc: "Scalloped lace bra and shorts layered under a flowing sheer robe. Soft, romantic, unmistakably siren."
  },
  {
    id: "silkyspell-lace-3pc",
    name: "Silky Spell Lace 3-Piece",
    category: "Robes & 3-Piece Sets",
    price: 20000,
    sizes: "S – L",
    image: "images/IMG-20260710-WA0146.jpg",
    desc: "Sheer lace cami and satin shorts with a silky contrast robe. A statement set for a statement night."
  },
  {
    id: "dazy-3pc-long-sleeveless",
    name: "Dazy 3-Piece Long Sleeveless",
    category: "Robes & 3-Piece Sets",
    price: 30000,
    sizes: "S – XL",
    image: "images/61067.jpg",
    desc: "Our most luxe set: bow-print cami, wide-leg pants and a long-sleeve cardigan finished in soft taupe."
  },
  {
    id: "sunnyshic-3pc-lounge",
    name: "Sunnyshic 3-Piece Lounge",
    category: "Robes & 3-Piece Sets",
    price: 17000,
    sizes: "0XL – 4XL",
    image: "images/61064.jpg",
    desc: "Plus-size lace bra, shorts and mesh robe for lounging in comfort without giving up glam."
  },
  {
    id: "slumberwrist-2pc",
    name: "Slumberwrist 2-Piece Set",
    category: "Robes & 3-Piece Sets",
    price: 20000,
    sizes: "XS – XL",
    image: "images/IMG-20260710-WA0136.jpg",
    desc: "Sheer lace bustier dress paired with a matching bell-sleeve robe. Effortlessly dramatic. \"Slumberist\" collection."
  },
  {
    id: "fur-scoop-neck-3pc",
    name: "Fur Scoop Neck 3-Piece",
    category: "Robes & 3-Piece Sets",
    price: 25000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0076.jpg",
    desc: "Cosy fuzzy fleece cami, shorts and pants in a playful \"MILK\" cow print — pure winter comfort."
  },
  {
    id: "seduluxe-3pc",
    name: "Seduluxe 3-Piece",
    category: "Robes & 3-Piece Sets",
    price: 25000,
    sizes: "S – XL (other colours available)",
    image: "images/IMG-20260710-WA0088.jpg",
    desc: "Lace bra and shorts under a sheer lace robe. Comes in other colourways — ask what's available."
  },

  // ---------- LINGERIE & BABYDOLLS ----------
  {
    id: "missguided-satin",
    name: "Missguided Satin Lingerie",
    category: "Lingerie & Babydolls",
    price: 17000,
    sizes: "XS – L (black or red)",
    image: "images/61079.jpg",
    desc: "Fluid satin babydoll with delicate lace trim, available in black or red."
  },
  {
    id: "dazy-lace-satin-lingerie",
    name: "Dazy Lace Satin Lingerie",
    category: "Lingerie & Babydolls",
    price: 15000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0135.jpg",
    desc: "Ivory satin slip with contrast black lace neckline — quiet elegance with an edge."
  },
  {
    id: "musera-lace-2pc",
    name: "Musera Lace 2-Piece",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "XXS – XL",
    image: "images/IMG-20260710-WA0141.jpg",
    desc: "Wine-toned lace cami and shorts, sold as a set."
  },
  {
    id: "crystal-vow-lace",
    name: "Crystal Vow Split Lace Lingerie",
    category: "Lingerie & Babydolls",
    price: 16000,
    sizes: "XXS – XL",
    image: "images/61082.jpg",
    desc: "Satin slip dress with a lace bust and a flirty front split."
  },
  {
    id: "cami-bow-lace-2pc",
    name: "Cami Bow Lace 2-Piece Lingerie",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "S – L",
    image: "images/IMG-20260710-WA0122.jpg",
    desc: "Broderie lace cami with a delicate bow tie and matching lace-edge shorts."
  },
  {
    id: "contrast-lace-cami-lingerie",
    name: "Contrast Lace Cami Lingerie",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0082.jpg",
    desc: "Red satin lace slip dress — bold, simple, striking."
  },
  {
    id: "contrast-lace-2pc-multi",
    name: "Contrast Lace 2-Piece Lingerie",
    category: "Lingerie & Babydolls",
    price: 15000,
    sizes: "S – XL (comes in other colours)",
    image: "images/IMG-20260710-WA0132.jpg",
    desc: "Sheer babydoll and robe set with contrast lace trim. \"Slumberist\" collection — comes in other colourways."
  },
  {
    id: "petit-doll-bow-lace",
    name: "Petit Doll Bow Lace 2-Piece",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0121.jpg",
    desc: "Cherry-print lace bra and shorts with a soft bow-tie front."
  },
  {
    id: "petit-doll-floral",
    name: "Petit Doll Floral 2-Piece",
    category: "Lingerie & Babydolls",
    price: 10000,
    sizes: "XS – XXL",
    image: "images/IMG-20260710-WA0089.jpg",
    desc: "Pretty floral-trim mesh cami and shorts. Available in magenta, yellow, purple and blue."
  },
  {
    id: "aloruh-lace-2pc",
    name: "Aloruh Lace 2-Piece",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0090.jpg",
    desc: "Sheer lace romper-style set with a fitted bodice and flowy shorts."
  },
  {
    id: "aloruh-polka-dot",
    name: "Aloruh Polka Dot 2-Piece",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0071.jpg",
    desc: "Playful polka-dot printed cami set — soft, breathable and easy to move in."
  },
  {
    id: "lace-vneck-polka-dot",
    name: "Lace V-Neck Polka Dot 2-Piece Lingerie",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "XS – XXL",
    image: "images/IMG-20260710-WA0113.jpg",
    desc: "V-neck cami with lace trim and a matching cutout short."
  },
  {
    id: "bow-decor-camisole",
    name: "Bow Decor Camisole 2-Piece",
    category: "Lingerie & Babydolls",
    price: 10000,
    sizes: "XS – L",
    image: "images/IMG-20260710-WA0084.jpg",
    desc: "Ribbed cami and shorts finished with a soft bow at the centre front."
  },
  {
    id: "softscence-lace-2pc",
    name: "Softscence Lace 2-Piece",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "XS – XXL",
    image: "images/IMG-20260710-WA0126.jpg",
    desc: "Sheer burgundy mesh cami and shorts with a soft, barely-there drape."
  },
  {
    id: "seduluxe-bow-2pc",
    name: "Seduluxe Bow 2-Piece",
    category: "Lingerie & Babydolls",
    price: 10000,
    sizes: "XXS – L",
    image: "images/IMG-20260710-WA0124.jpg",
    desc: "Blush lace bralette and satin shorts finished with red ribbon ties."
  },

  // ---------- LOUNGEWEAR & PYJAMA SETS ----------
  {
    id: "cherry-2pc-pyjamas",
    name: "Cherry 2-Piece Pyjamas",
    category: "Loungewear & Pyjama Sets",
    price: 12000,
    sizes: "XS – L",
    image: "images/IMG-20260710-WA0086.jpg",
    desc: "Polka-dot cami top with plaid shorts — a playful mix-and-match cotton set."
  },
  {
    id: "cherry-print-2pc",
    name: "Cherry Print 2-Piece Lace",
    category: "Loungewear & Pyjama Sets",
    price: 10000,
    sizes: "XS – XL",
    image: "images/IMG-20260710-WA0117.jpg",
    desc: "Cherry-print satin bra and ruffle shorts, light and breezy."
  },
  {
    id: "daisy-floral-print",
    name: "Daisy Floral Print 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 10000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0087.jpg",
    desc: "Soft floral-print cami and ruffle-hem shorts with a lace-trimmed neckline."
  },
  {
    id: "blue-striped-bow",
    name: "Blue Cute Striped Bow 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 10000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0123.jpg",
    desc: "Seersucker stripe cami and shorts with tiny bow ties down the front."
  },
  {
    id: "cottage-slumber-2pc",
    name: "Cottage Slumber 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 14000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0074.jpg",
    desc: "Cream lemon-print cami and shorts with a lace-trim neckline and drawstring waist."
  },
  {
    id: "comfort-lounge-2pc",
    name: "Comfort Lounge 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 12000,
    sizes: "XS – L",
    image: "images/IMG-20260710-WA0083.jpg",
    desc: "Bear-print ribbed cami and ruffle shorts — an everyday comfort staple. Available in blue, pink and orange."
  },
  {
    id: "vertical-stripe-2pc",
    name: "Vertical Strip 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 10000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0139.jpg",
    desc: "Striped satin cami and shorts with lace trim — light, breezy, everyday pretty."
  },
  {
    id: "lettuce-lounge-2pc",
    name: "Lettuce Lounge 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0138.jpg",
    desc: "Button-front top with a scalloped lettuce hem — easy, breezy comfort."
  },
  {
    id: "easyfave-lounge-2pc",
    name: "Easyfave Lounge 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "XXS – XL",
    image: "images/IMG-20260710-WA0080.jpg",
    desc: "Ribbed cutout cami with a bow-tie front and matching shorts — soft enough to live in."
  },
  {
    id: "sweetina-long-sleeve",
    name: "Sweetina Long Sleeve Lounge",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "XXS – L",
    image: "images/IMG-20260710-WA0147.jpg",
    desc: "Ribbed long-sleeve cardigan and shorts set — soft, cosy, easy to move in."
  },
  {
    id: "dreamivo-long-sleeve",
    name: "Dreamivo Long Sleeve 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 22000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0081.jpg",
    desc: "Ribbed long-sleeve top and wide-leg pants — pyjamas that feel like an outfit. Available in black, pink and red."
  },
  {
    id: "collared-bow-2pc",
    name: "Collared Bow 2-Piece Set",
    category: "Loungewear & Pyjama Sets",
    price: 17000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0134.jpg",
    desc: "Contrast-piped collared top and shorts finished with bow ties down the front. Available in magenta, black, navy and maroon."
  },
  {
    id: "fur-bear-2pc",
    name: "Fur Bear 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0078.jpg",
    desc: "Teddy-fleece crop and shorts in a soft bear print — pure cosy."
  },
  {
    id: "duskbase-ruffled-knit",
    name: "Duskbase Ruffled Knit 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0128.jpg",
    desc: "Waffle-knit button-front crop and shorts in navy — relaxed and elevated."
  },
  {
    id: "zzzcrew-lounge-piece",
    name: "Zzzcrew Lounge Piece",
    category: "Loungewear & Pyjama Sets",
    price: 17000,
    sizes: "XS – XL",
    image: "images/IMG-20260710-WA0127.jpg",
    desc: "Lace-trimmed satin cami and shorts — a little more structured, a little more chic."
  },
  {
    id: "livesso-lounge-2pc",
    name: "Livesso 2-Piece Lounge Wear",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "S – L",
    image: "images/IMG-20260710-WA0079.jpg",
    desc: "Ribbed cami and tie-front shorts. Available in lilac, blue and pink."
  },
  {
    id: "livesso-lace-lounge-2pc",
    name: "Livesso Lace Lounge 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 12000,
    sizes: "S – L",
    image: "images/60906.jpg",
    desc: "Navy ribbed cami and shorts trimmed in soft pink lace — a cosy, feminine everyday set."
  },
  {
    id: "napfluff-2pc",
    name: "Napfluff 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 12000,
    sizes: "XS – XXL",
    image: "images/IMG-20260710-WA0111.jpg",
    desc: "Seersucker stripe cami and shorts with delicate bow ties down the front. Available in lilac/pink and blue."
  },

  // ---------- LOUNGE PANTS ----------
  {
    id: "lounge-pants-plaid",
    name: "Lounge Pants",
    category: "Lounge Pants",
    price: 10000,
    sizes: "S – XL",
    image: "images/IMG-20260710-WA0119.jpg",
    desc: "Soft flannel plaid lounge pants, sold individually in black/grey or red/rust — mix and match with any cami. Priced per pair."
  },
];
