const WHATSAPP_NUMBER = "2349034202223";

// Silk N Siren Femme — product catalog
// Prices already include shipping. All items are pre-order.
// Images are linked to files in the /images folder by filename.

const PRODUCTS = [

  // ---------- ROBES & 3-PIECE SETS ----------
  {
    id: "duskbase-lace-3pc",
    name: "Duskbase Ladies Lace 3-Piece",
    category: "Robes & 3-Piece Sets",
    price: 22000,
    sizes: "S – XL",
    image: "images/duskbase_ladies_lace_3_piece__22000__1_.jpg",
    desc: "Scalloped lace bra and shorts layered under a flowing sheer robe. Available in black or magenta."
  },
  {
    id: "silkyspell-lace-3pc",
    name: "Silky Spell Lace 3-Piece",
    category: "Robes & 3-Piece Sets",
    price: 20000,
    sizes: "S – L",
    image: "images/silky_spell_lace_3_piece__20000.jpg",
    desc: "Sheer lace cami and satin shorts with a silky contrast robe. A statement set for a statement night."
  },
  {
    id: "dazy-3pc-long-sleeveless",
    name: "Dazy 3-Piece Long Sleeveless",
    category: "Robes & 3-Piece Sets",
    price: 30000,
    sizes: "S – XL",
    image: "images/dazy_3_piece_long_sleveless__price_30_000.jpg",
    desc: "Our most luxe set: bow-print cami, wide-leg pants and a long-sleeve cardigan finished in soft taupe."
  },
  {
    id: "sunnyshic-3pc-lounge",
    name: "Sunnyshic 3-Piece Lounge",
    category: "Robes & 3-Piece Sets",
    price: 17000,
    sizes: "0XL – 4XL",
    image: "images/sunnyshic_3_poece_lounge__price_17_000.jpg",
    desc: "Plus-size lace bra, shorts and mesh robe for lounging in comfort without giving up glam."
  },
  {
    id: "slumberwrist-2pc",
    name: "Slumberwrist 2-Piece Set",
    category: "Robes & 3-Piece Sets",
    price: 20000,
    sizes: "XS – XL",
    image: "images/slumberwrist_2_piece_se__20000__1_.jpg",
    desc: "Sheer lace bustier dress paired with a matching bell-sleeve robe. Available in olive green or maroon. \"Slumberist\" collection."
  },
  {
    id: "fur-scoop-neck-3pc",
    name: "Fur Scoop Neck 3-Piece",
    category: "Robes & 3-Piece Sets",
    price: 25000,
    sizes: "S – XL",
    image: "images/fur_scoop_neck_3_piece__25000.jpg",
    desc: "Cosy fuzzy fleece cami, shorts and pants in a playful \"MILK\" cow print — pure winter comfort."
  },
  {
    id: "seduluxe-3pc",
    name: "Seduluxe 3-Piece",
    category: "Robes & 3-Piece Sets",
    price: 25000,
    sizes: "S – XL (other colours available)",
    image: "images/seduluxe_3_piece__comes_in_other_multi_color__25000.jpg",
    desc: "Lace bra and shorts under a sheer lace robe. Comes in other colourways — ask what's available."
  },

  // ---------- LINGERIE & BABYDOLLS ----------
  {
    id: "missguided-satin",
    name: "Missguided Satin Lingerie",
    category: "Lingerie & Babydolls",
    price: 17000,
    sizes: "XS – L (black or red)",
    image: "images/missguided_satin_lingerie__17000__1_.jpg",
    desc: "Fluid satin babydoll with delicate lace trim, available in black or red."
  },
  {
    id: "dazy-lace-satin-lingerie",
    name: "Dazy Lace Satin Lingerie",
    category: "Lingerie & Babydolls",
    price: 15000,
    sizes: "S – XL",
    image: "images/dazy_lace_satin_lingerie__15000.jpg",
    desc: "Ivory satin slip with contrast black lace neckline — quiet elegance with an edge."
  },
  {
    id: "musera-lace-2pc",
    name: "Musera Lace 2-Piece",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "XXS – XL",
    image: "images/musera_lace_2_piece__12000.jpg",
    desc: "Wine-toned lace cami and shorts, sold as a set."
  },
  {
    id: "crystal-vow-lace",
    name: "Crystal Vow Split Lace Lingerie",
    category: "Lingerie & Babydolls",
    price: 16000,
    sizes: "XXS – XL",
    image: "images/crystal_vow_split_lacelingerie__16000.jpg",
    desc: "Satin slip dress with a lace bust and a flirty front split."
  },
  {
    id: "cami-bow-lace-2pc",
    name: "Cami Bow Lace 2-Piece Lingerie",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "S – L",
    image: "images/cami_bow_lace_2_pirce_lingerie_12000.jpg",
    desc: "Broderie lace cami with a delicate bow tie and matching lace-edge shorts."
  },
  {
    id: "contrast-lace-cami-lingerie",
    name: "Contrast Lace Cami Lingerie",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "S – XL",
    image: "images/contrast_lace_cami_lingerie__12000.jpg",
    desc: "Red satin lace slip dress — bold, simple, striking."
  },
  {
    id: "contrast-lace-2pc-multi",
    name: "Contrast Lace 2-Piece Lingerie",
    category: "Lingerie & Babydolls",
    price: 15000,
    sizes: "S – XL (comes in other colours)",
    image: "images/contrast_lace_2_piece_lingerie__comes_in_multi_colours__15000.jpg",
    desc: "Sheer babydoll and robe set with contrast lace trim. \"Slumberist\" collection — comes in other colourways."
  },
  {
    id: "petit-doll-bow-lace",
    name: "Petit Doll Bow Lace 2-Piece",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "S – XL",
    image: "images/petit_doll_bow_lace_2_piece__12000.jpg",
    desc: "Cherry-print lace bra and shorts with a soft bow-tie front."
  },
  {
    id: "petit-doll-floral",
    name: "Petit Doll Floral 2-Piece",
    category: "Lingerie & Babydolls",
    price: 10000,
    sizes: "XS – XXL",
    image: "images/petit_doll_floral_2_piece__price_10_000__1_.jpg",
    desc: "Pretty floral-trim mesh cami and shorts. Available in magenta, yellow, purple and blue."
  },
  {
    id: "aloruh-lace-2pc",
    name: "Aloruh Lace 2-Piece",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "S – XL",
    image: "images/aloruh_lace_2_piece__1_.jpg",
    desc: "Sheer lace romper-style set with a fitted bodice and flowy shorts."
  },
  {
    id: "aloruh-polka-dot",
    name: "Aloruh Polka Dot 2-Piece",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "S – XL",
    image: "images/aloruh_polka_dot_2_piece__12000.jpg",
    desc: "Playful polka-dot printed cami set — soft, breathable and easy to move in."
  },
  {
    id: "lace-vneck-polka-dot",
    name: "Lace V-Neck Polka Dot 2-Piece Lingerie",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "XS – XXL",
    image: "images/lace_v_neck_polka_dot_2_piece_lingeri__12000.jpg",
    desc: "V-neck cami with lace trim and a matching cutout short."
  },
  {
    id: "bow-decor-camisole",
    name: "Bow Decor Camisole 2-Piece",
    category: "Lingerie & Babydolls",
    price: 10000,
    sizes: "XS – L",
    image: "images/bow_decor_camisole_2_piece__10000__1_.jpg",
    desc: "Ribbed cami and shorts finished with a soft bow at the centre front."
  },
  {
    id: "softscence-lace-2pc",
    name: "Softscence Lace 2-Piece",
    category: "Lingerie & Babydolls",
    price: 12000,
    sizes: "XS – XXL",
    image: "images/softscence_lace_2_piece__12000.jpg",
    desc: "Sheer burgundy mesh cami and shorts with a soft, barely-there drape."
  },
  {
    id: "seduluxe-bow-2pc",
    name: "Seduluxe Bow 2-Piece",
    category: "Lingerie & Babydolls",
    price: 10000,
    sizes: "XXS – L",
    image: "images/seduluxe_bow_2_piece__10000.jpg",
    desc: "Blush lace bralette and satin shorts finished with red ribbon ties."
  },

  // ---------- LOUNGEWEAR & PYJAMA SETS ----------
  {
    id: "cherry-2pc-pyjamas",
    name: "Cherry 2-Piece Pyjamas",
    category: "Loungewear & Pyjama Sets",
    price: 12000,
    sizes: "XS – L",
    image: "images/cherry_2_piece_pyjamas_12000.jpg",
    desc: "Polka-dot cami top with plaid shorts — a playful mix-and-match cotton set."
  },
  {
    id: "cherry-print-2pc",
    name: "Cherry Print 2-Piece Lace",
    category: "Loungewear & Pyjama Sets",
    price: 10000,
    sizes: "XS – XL",
    image: "images/cherry_print_2_piece_lace__10000.jpg",
    desc: "Cherry-print satin bra and ruffle shorts, light and breezy."
  },
  {
    id: "daisy-floral-print",
    name: "Daisy Floral Print 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 10000,
    sizes: "S – XL",
    image: "images/daisy_floral_print__10000.jpg",
    desc: "Soft floral-print cami and ruffle-hem shorts with a lace-trimmed neckline."
  },
  {
    id: "blue-striped-bow",
    name: "Blue Cute Striped Bow 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 10000,
    sizes: "S – XL",
    image: "images/blue_cute_stripped_bow_2_piece__10000.jpg",
    desc: "Seersucker stripe cami and shorts with tiny bow ties down the front."
  },
  {
    id: "cottage-slumber-2pc",
    name: "Cottage Slumber 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 14000,
    sizes: "S – XL",
    image: "images/cottage_slumber_2_piece_14000.jpg",
    desc: "Cream lemon-print cami and shorts with a lace-trim neckline and drawstring waist."
  },
  {
    id: "comfort-lounge-2pc",
    name: "Comfort Lounge 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 12000,
    sizes: "XS – L",
    image: "images/confort_lounge_2_piece__12000__1_.jpg",
    desc: "Bear-print ribbed cami and ruffle shorts — an everyday comfort staple. Available in blue, pink and orange."
  },
  {
    id: "vertical-stripe-2pc",
    name: "Vertical Strip 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 10000,
    sizes: "S – XL",
    image: "images/vertival_strip_2_piece__10000.jpg",
    desc: "Striped satin cami and shorts with lace trim — light, breezy, everyday pretty."
  },
  {
    id: "lettuce-lounge-2pc",
    name: "Lettuce Lounge 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "S – XL",
    image: "images/lettuce_lounge_2_piece__price_15_000.jpg",
    desc: "Button-front top with a scalloped lettuce hem — easy, breezy comfort."
  },
  {
    id: "easyfave-lounge-2pc",
    name: "Easyfave Lounge 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "XXS – XL",
    image: "images/easyfave_lounge_2_piece__price_15_000.jpg",
    desc: "Ribbed cutout cami with a bow-tie front and matching shorts — soft enough to live in."
  },
  {
    id: "sweetina-long-sleeve",
    name: "Sweetina Long Sleeve Lounge",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "XXS – L",
    image: "images/sweetina_long_sleve_lounge__15000.jpg",
    desc: "Ribbed long-sleeve cardigan and shorts set — soft, cosy, easy to move in."
  },
  {
    id: "dreamivo-long-sleeve",
    name: "Dreamivo Long Sleeve 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 22000,
    sizes: "S – XL",
    image: "images/dreamivo_long_dleve_2_piece__price_22_000__1_.jpg",
    desc: "Ribbed long-sleeve top and wide-leg pants — pyjamas that feel like an outfit. Available in black, pink and red."
  },
  {
    id: "collared-bow-2pc",
    name: "Collared Bow 2-Piece Set",
    category: "Loungewear & Pyjama Sets",
    price: 17000,
    sizes: "S – XL",
    image: "images/collared_bow_2_piece_set__17000__1_.jpg",
    desc: "Contrast-piped collared top and shorts finished with bow ties down the front. Available in magenta, black, navy and maroon."
  },
  {
    id: "fur-bear-2pc",
    name: "Fur Bear 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "S – XL",
    image: "images/fur_bear_2_piece__15000.jpg",
    desc: "Teddy-fleece crop and shorts in a soft bear print — pure cosy."
  },
  {
    id: "duskbase-ruffled-knit",
    name: "Duskbase Ruffled Knit 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "S – XL",
    image: "images/duskbase_ruffled_knit_2_piece__15_000.jpg",
    desc: "Waffle-knit button-front crop and shorts in navy — relaxed and elevated."
  },
  {
    id: "zzzcrew-lounge-piece",
    name: "Zzzcrew Lounge Piece",
    category: "Loungewear & Pyjama Sets",
    price: 17000,
    sizes: "XS – XL",
    image: "images/zzzcrew_lounge_piece_17000.jpg",
    desc: "Lace-trimmed satin cami and shorts — a little more structured, a little more chic."
  },
  {
    id: "livesso-lounge-2pc",
    name: "Livesso 2-Piece Lounge Wear",
    category: "Loungewear & Pyjama Sets",
    price: 15000,
    sizes: "S – L",
    image: "images/livesso_2_piece_lounge_wear__15_000__1_.jpg",
    desc: "Ribbed cami and tie-front shorts. Available in lilac, blue and pink."
  },
  {
    id: "livesso-lace-lounge-2pc",
    name: "Livesso Lace Lounge 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 12000,
    sizes: "S – L",
    image: "images/livesso_lace_lounge_2_piece__12000.jpg",
    desc: "Navy ribbed cami and shorts trimmed in soft pink lace — a cosy, feminine everyday set."
  },
  {
    id: "napfluff-2pc",
    name: "Napfluff 2-Piece",
    category: "Loungewear & Pyjama Sets",
    price: 12000,
    sizes: "XS – XXL",
    image: "images/napfluff_2_piece__12000__1_.jpg",
    desc: "Seersucker stripe cami and shorts with delicate bow ties down the front. Available in lilac/pink and blue."
  },

  // ---------- LOUNGE PANTS ----------
  {
    id: "lounge-pants-plaid",
    name: "Lounge Pants",
    category: "Lounge Pants",
    price: 10000,
    sizes: "S – XL",
    image: "images/lounge_pants__10000.jpg",
    desc: "Soft flannel plaid lounge pants, sold individually in black/grey or red/rust — mix and match with any cami. Priced per pair."
  },
];
