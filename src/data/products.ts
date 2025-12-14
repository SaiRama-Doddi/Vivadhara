import type { Product } from "../types/product";

export const products: Product[] = [
  /* -------------------------------------------
      1. MAIZE DDGS
  -------------------------------------------- */
  {
    id: "1",
    slug: "maize-ddgs",
    name: "Maize DDGS",
    category: "High-Protein Feed",
    shortDescription:
      "High-protein, energy-rich Maize DDGS sourced from premium ethanol plants. Ideal for poultry, cattle, swine & aquaculture.",
    description:
      `Vivadhara Agro Ventures supplies high-quality Maize DDGS with consistent nutritional value, sourced from trusted ethanol plants. Maize DDGS is rich in protein, metabolizable energy, and digestible fiber—making it one of the most efficient and cost-effective feed ingredients for livestock. It improves weight gain, enhances milk production, and supports better FCR in poultry. Suitable for cattle, poultry, swine, and aquaculture applications.`,
    specs: {
      protein: "28–32%",
      fiber: "9–12%",
      moisture: "10–12%",
      energy: "High metabolizable energy",
      form: "Powder / Granular",
      origin: "India",
    },
    uses: [
      "Poultry Feed",
      "Cattle Feed",
      "Swine Feed",
      "Fish & Shrimp Feed",
    ],
    features: [
      "High protein & energy",
      "Good digestibility",
      "Cost-effective alternative protein",
      "Consistent quality",
    ],
    images: [
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764402871/IMG_4999_axamjt.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764402871/IMG_5012_a7zurl.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764402869/IMG_5007_fntrd9.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764402869/IMG_4992_begwge.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764402868/IMG_4995_wd3blk.jpg"
    ],
  },

  /* -------------------------------------------
      2. MIXED DDGS (MAIZE + RICE)
  -------------------------------------------- */
  {
    id: "2",
    slug: "mixed-ddgs-35",
    name: "Mixed DDGS (Maize + Rice) – 35% Protein",
    category: "High-Protein Feed",
    shortDescription:
      "Balanced 35% protein Mixed DDGS using maize and rice for superior livestock nutrition.",
    description:
      `The 35% Protein Mixed DDGS blend is a nutrient-dense combination of maize and rice DDGS. This mix delivers a balanced amino acid profile, high digestibility, and excellent energy value. It is widely used as an economical, versatile feed ingredient that improves growth rate, supports better FCR, and enhances milk yield. Ideal for poultry, cattle, swine, and aquaculture feed formulations.`,
    specs: {
      protein: "35% (average)",
      moisture: "10–12%",
      fiber: "9–14%",
      form: "Powder",
      origin: "India",
    },
    uses: [
      "Poultry Feed",
      "Cattle Feed",
      "Swine Feed",
      "Aqua Feed",
    ],
    features: [
      "Balanced protein profile",
      "Better amino acid spectrum",
      "High digestibility & energy",
      "Economical feed alternative",
    ],
    images: [
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764403945/IMG_4681-mixed_rrpyc9.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764403940/IMG_4683-mixed_brapiu.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764403939/IMG_4680-mixed_ndfsjm.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764403938/IMG_4672-mixed_kxqob0.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764403937/IMG_4671-mixed_tzqqdh.jpg",
    ],
  },

  /* -------------------------------------------
      3. RICE DDGS
  -------------------------------------------- */
  {
    id: "3",
    slug: "rice-ddgs",
    name: "Rice DDGS",
    category: "High-Protein Feed",
    shortDescription:
      "Premium-quality Rice DDGS with excellent digestibility and high energy value.",
    description:
      `Rice DDGS from reputable rice-based ethanol plants is rich in digestible protein, amino acids, and metabolizable energy. It is widely used as a sustainable feed ingredient for poultry, cattle, swine, and aquaculture. Rice DDGS enhances growth, improves feed efficiency, and provides a consistent nutritional profile ideal for commercial feed mills.`,
    specs: {
      protein: "26–30%",
      moisture: "10–12%",
      fiber: "9–12%",
      energy: "High",
      origin: "India",
    },
    uses: [
      "Poultry Feed",
      "Cattle Feed",
      "Swine Feed",
      "Fish & Shrimp Feed",
    ],
    features: [
      "Stable nutritional quality",
      "High protein & energy",
      "Eco-friendly, sustainable",
      "Excellent digestibility",
    ],
    images: [
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404306/rice-ddgs4_tzvj4x.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404307/rice-ddgs2_b90ur9.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404307/rice-ddhs3_zcvozf.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404307/rice-ddgs1_e8fxhl.jpg"
    ],
  },

  /* -------------------------------------------
      4. CORN E-FIBER
  -------------------------------------------- */
  {
    id: "4",
    slug: "corn-e-fiber",
    name: "Corn E-Fiber",
    category: "Fiber Ingredient",
    shortDescription:
      "Corn fiber enriched with corn steep liquor (CSL) — higher protein and excellent roughage.",
    description:
      `Corn E-Fiber is a blend of corn fiber and corn steep liquor, resulting in a nutrient-rich, economical feed ingredient. With 18–20% protein, it provides more nutrition than standard corn fiber and supports rumen health. Its prebiotic nature enhances digestion and serves as excellent roughage for cattle, goats, sheep, and poultry.`,
    specs: {
      protein: "18–20%",
      moisture: "10–12%",
      oil: "Max 3%",
      form: "Powder",
      origin: "India",
      packing: "50 kg PP Bag",
    },
    uses: [
      "Cattle Feed",
      "Poultry Feed",
      "Goat / Sheep Feed",
      "Oil Cake Manufacturing",
    ],
    features: [
      "Higher protein than normal corn fiber",
      "Good energy source",
      "Prebiotic digestive support",
      "90% insoluble fiber",
    ],
    images: [
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404530/corn1_pc5ion.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404531/corn2_t8o4g3.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404531/corn3_kr5gy9.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404531/corn4_ex0hvr.jpg",
    ],
  },

  /* -------------------------------------------
      5. CORN COB POWDER
  -------------------------------------------- */
  {
    id: "5",
    slug: "corn-cob-powder",
    name: "Corn Cob Powder",
    category: "Fiber Ingredient",
    shortDescription:
      "High-absorbing, chemical-free corn cob powder used in feed & industrial applications.",
    description:
      `Corn Cob Powder is a natural, biodegradable fiber source used for cattle & poultry feed, litter bedding, carrier applications, and industrial fillers. It has excellent absorbency (4–5×), making it ideal for poultry deep-litter systems. Available in multiple mesh sizes and widely used in veterinary, agro, and chemical industries.`,
    specs: {
      protein: "3–4%",
      crudeFiber: "34%",
      moisture: "3%",
      energy: "364 kcal/100g",
      mesh: "20–40 / 40–60 / 120",
      packing: "30 kg PP Bag",
    },
    uses: [
      "Cattle & Poultry Feed Fiber",
      "Deep-litter Bedding",
      "Carrier for Animal Health Products",
      "Agro-chemical Filler",
    ],
    features: [
      "Odor-free and chemical-free",
      "Biodegradable and safe",
      "Very high absorbency",
    ],
    images: [
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405358/corn-cub-powder1_p4gmf6.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405358/corn-cub-powder4_kjne5m.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405367/corn-cub-powder3_mkie18.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405361/corn-cub-powder2_aff6gs.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405359/corn-cub-powder5_p3fjg3.jpg",
    ],
  },

  /* -------------------------------------------
      6. GROUNDNUT SHELL POWDER
  -------------------------------------------- */
  {
    id: "6",
    slug: "groundnut-shell-powder",
    name: "Groundnut Shell Powder",
    category: "Fiber Ingredient",
    shortDescription:
      "High-fiber groundnut shell powder used in feed, fertilizer, and industrial applications.",
    description:
      `Groundnut Shell Powder is a rich source of natural fiber containing essential trace minerals. With 37% fiber and low fat, it supports rumen health and digestion in dairy cattle. It is also widely used as an organic fertilizer, soil conditioner, and industrial filler due to its coarse texture and high purity.`,
    specs: {
      moisture: "5–8%",
      fiber: "37%",
      protein: "5–6%",
      form: "Powder",
      mesh: "100 mesh",
      minerals: "Calcium, zinc, iodine, iron, manganese",
    },
    uses: [
      "Cattle Feed",
      "Organic Fertilizer",
      "Soil Conditioner",
      "Industrial Filler",
    ],
    features: [
      "100% natural & biodegradable",
      "High-fiber content",
      "Neutral fragrance",
      "Long shelf life",
    ],
    images: [
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404945/Groundnut_Shell_Powder-4_znpiso.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404947/Groundnut_Shell_Powder-5_ycyj3g.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404940/Groundnut_Shell_Powder-3_kywvx6.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404937/Groundnut_Shell_Powder-2_idnqw4.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764404937/Groundnut_Shell_Powder-1_niutnf.jpg",
    ],
  },

  /* -------------------------------------------
      7. BLACK GRAM / URAD DAL HUSK
  -------------------------------------------- */
  {
    id: "7",
    slug: "urad-husk",
    name: "Black Gram / Urad Dal Husk",
    category: "Roughage Ingredient",
    shortDescription:
      "High-fiber urad husk ideal for rumen health and economical cattle feed.",
    description:
      `Black Gram Husk is a high-fiber by-product used extensively as roughage in cattle and buffalo feed. With nearly 80% dietary fiber, it enhances digestion, rumen activity, and gut motility. It is a cost-effective source of bulk fiber suitable for dairy, beef cattle, and commercial feed mills.`,
    specs: {
      fiber: "79.6%",
      protein: "11.3%",
      fat: "0.59%",
      carbohydrates: "74.2%",
      NDF: "48%",
      ADF: "37%",
      energy: "340 kcal",
    },
    uses: ["Cattle Feed", "Buffalo Feed", "High-Fiber Diets"],
    features: [
      "Excellent source of roughage",
      "Supports rumen function",
      "Low-cost fiber alternative",
    ],
    images: [
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405355/Black_Gram_Urad_Dal_Husk-1_x7z7ne.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405355/Black_Gram_Urad_Dal_Husk-3_wksari.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405355/Black_Gram_Urad_Dal_Husk-2_bdwpls.jpg",
    ],
  },

  /* -------------------------------------------
      8. MAIZE DOC
  -------------------------------------------- */
  {
    id: "8",
    slug: "maize-doc",
    name: "Maize DOC (De-Oiled Cake)",
    category: "Protein Ingredient",
    shortDescription:
      "High-protein, low-fat maize DOC ideal for cattle, poultry & aquaculture.",
    description:
      `Maize DOC is produced after extracting maize oil, resulting in a protein-rich, low-fat ingredient widely used in animal feed industries. It is highly digestible, supports balanced nutrition, and has stable shelf life. Suitable for cattle, poultry, fish feed, and feed manufacturing units.`,
    specs: {
      protein: "28–30%",
      moisture: "Below 14%",
      fat: "Below 1%",
      carbohydrates: "60–70%",
      crudeFiber: "Max 12%",
      ash: "Max 10%",
      color: "Yellow to brown",
    },
    uses: [
      "Cattle Feed",
      "Poultry Feed",
      "Aqua Feed",
      "Feed Manufacturing",
    ],
    features: [
      "High protein, low fat",
      "Good digestibility",
      "Stable shelf life",
      "Hygienically processed",
    ],
    images: [
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405365/Maize_DOC_De-Oiled_Cake_-5_prs2fj.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405363/Maize_DOC_De-Oiled_Cake_-4_pcmvij.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405360/Maize_DOC_De-Oiled_Cake_-3_nkxwdq.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405359/Maize_DOC_De-Oiled_Cake_-2_avdlvb.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764405358/Maize_DOC_De-Oiled_Cake_-1_cyjxe5.jpg",
    ],
  },

  /* -------------------------------------------
      9. REDGRAM / TOOR HUSK
  -------------------------------------------- */
  {
    id: "9",
    slug: "redgram-husk",
    name: "Redgram Husk / Toor Dal Husk",
    category: "Roughage Ingredient",
    shortDescription:
      "High-fiber Toor Dal Husk used as digestible roughage for cattle and buffaloes.",
    description:
      `Redgram Husk is a coarse fiber source rich in crude fiber (60%) and is widely used as digestible roughage in cattle and buffalo feed. It enhances rumen movement, improves digestion, and can be included up to 40% in total feed composition. Highly economical and excellent for dairy animals.`,
    specs: {
      crudeFiber: "60.4%",
      protein: "4.11%",
      fat: "0.64%",
      form: "Coarse husk",
    },
    uses: [
      "Cattle Feed",
      "Buffalo Feed",
      "High-Fiber Diets",
    ],
    features: [
      "Improves rumen activity",
      "Cost-effective roughage source",
      "Easily digestible fiber",
    ],
    images: [
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764406049/Redgram_Husk_Toor_Dal_Husk-3_w3icvu.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764406049/Redgram_Husk_Toor_Dal_Husk-4_uc0gfy.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764406049/Redgram_Husk_Toor_Dal_Husk-2_rok3r1.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764406048/Redgram_Husk_Toor_Dal_Husk-1_n5ufve.jpg"
    ],
  },

  /* -------------------------------------------
      10. WHEAT BRAN
  -------------------------------------------- */
  {
    id: "10",
    slug: "wheat-bran",
    name: "Wheat Bran",
    category: "Fiber & Energy Ingredient",
    shortDescription:
      "Nutritious, non-GMO Wheat Bran rich in fiber, protein, vitamins & minerals.",
    description:
      `Wheat Bran is a high-fiber, nutrient-rich ingredient processed from the outer layer of wheat grain. It is widely used in cattle and poultry diets to enhance digestion, gut health, and nutrient absorption. With balanced protein and essential minerals, wheat bran remains a staple in livestock feeding.`,
    specs: {
      moisture: "Max 13%",
      protein: "12–15%",
      crudeFiber: "5% min",
      sandSilica: "1.5% max",
      acidInsolubleAsh: "0.5% max",
      variety: "Fine / Super Fine",
    },
    uses: ["Cattle Feed", "Poultry Feed", "Feed Manufacturing"],
    features: [
      "Highly digestible fiber",
      "Supports gut health",
      "Long shelf life",
      "Non-GMO & clean",
    ],
    images: [
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764406928/IMG_9547_mib0qz.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764406928/IMG_9549_ew7pqu.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764406929/IMG_9548_iguogm.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764406928/IMG_9545_jf10s8.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764406927/IMG_9546_tijsvo.jpg"
    ],
  },

  /* -------------------------------------------
      11. WHEAT FLAKES
  -------------------------------------------- */
  {
    id: "11",
    slug: "wheat-flakes",
    name: "Wheat Flakes",
    category: "Energy Ingredient",
    shortDescription:
      "Whole-grain wheat flakes rich in carbohydrates, fiber & plant-based protein.",
    description:
      `Wheat Flakes are nutritious whole-grain flakes used as an energy-rich ingredient in livestock feed. They support digestive health, supply steady energy, and improve bulk density in feed formulations. Naturally low in fat and cholesterol-free, wheat flakes are safe for cattle, poultry, and general feed applications.`,
    specs: {
      energy: "330–357 kcal",
      protein: "9.5–12 g",
      fat: "1.5–2.6 g",
      carbohydrates: "61–71 g",
      fiber: "11–15 g",
    },
    uses: [
      "Cattle Feed",
      "Poultry Feed",
      "General Feed Ingredients",
    ],
    features: [
      "Steady energy source",
      "High-fiber whole grain",
      "Low fat & cholesterol-free",
    ],
    images: [
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764407115/IMG_9550_jdla0e.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764407116/IMG_9553_e4xhi6.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764407117/IMG_9552_l48tuc.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764407116/IMG_9551_ja7u1c.jpg",
      "https://res.cloudinary.com/dtjjjyekl/image/upload/v1764407119/IMG_9554_aayvzo.jpg"
    ],
  },


  /* -------------------------------------------
    12. COTTON SEED OIL CAKE
-------------------------------------------- */
{
  id: "12",
  slug: "cotton-seed-oil-cake",
  name: "Cotton Seed Oil Cake",
  category: "Protein-Rich Feed Ingredient",
  shortDescription:
    "High-protein cotton seed oil cake ideal for dairy cattle and balanced feed formulations.",
  description:
    `Cotton Seed Oil Cake is a widely used protein-rich cattle feed ingredient, especially suitable for dairy cattle when used in balanced rations. It supports milk production, muscle development, and overall animal health. Processed from high-quality cotton seeds, it provides essential nutrients with good digestibility and consistent quality.`,
  specs: {
    moisture: "Max 10%",
    oilContent: "Min 6%",
    crudeFiber: "Max 25%",
    protein: "Min 24%",
    colour: "Greenish Yellow",
  },
  uses: [
    "Dairy Cattle Feed",
    "Cattle Feed",
    "Compound Feed Manufacturing",
  ],
  features: [
    "High protein content",
    "Enhances milk yield",
    "Good digestibility",
    "Consistent quality & long shelf life",
  ],
  images: [
  
    "https://res.cloudinary.com/dtjjjyekl/image/upload/v1765716926/e64eff02-56b4-4f95-ada0-2476c421afd7_fa0yzf.jpg",
    "https://res.cloudinary.com/dtjjjyekl/image/upload/v1765716926/83982322-7532-457b-82da-aea85aeaaf40_qobwbz.jpg",
    "https://res.cloudinary.com/dtjjjyekl/image/upload/v1765716926/89c9b00a-6ebb-4896-957f-25eb2339f245_x19stn.jpg",
    "https://res.cloudinary.com/dtjjjyekl/image/upload/v1765716926/IMG_0397_dwyr9u.jpg"
  ],
},

/* -------------------------------------------
    13. GROUNDNUT OIL CAKE (PEANUT CAKE)
-------------------------------------------- */
{
  id: "13",
  slug: "groundnut-oil-cake",
  name: "Groundnut Oil Cake (Peanut Cake)",
  category: "High-Protein Feed Ingredient",
  shortDescription:
    "Natural, high-quality protein feed that is highly digestible and palatable for livestock.",
  description:
    `Groundnut Oil Cake, also known as Peanut Cake, is a premium natural protein-rich feed ingredient widely used in livestock and poultry nutrition. It is highly digestible and palatable, making it ideal for dairy cattle, buffalo, poultry, sheep, and goats. Regular inclusion in balanced rations helps boost milk fat, enhance animal growth, and improve overall health.`,
  specs: {
    crudeProtein: "45–48%",
    moisture: "Max 10%",
    oilContent: "Min 8%",
    crudeFiber: "Max 14%",
  },
  uses: [
    "Dairy Cattle Feed",
    "Buffalo Feed",
    "Poultry Feed",
    "Sheep & Goat Feed",
  ],
  features: [
    "Very high protein content",
    "Highly digestible & palatable",
    "Boosts milk fat",
    "Supports animal growth & health",
  ],
  images: [
 
    "https://res.cloudinary.com/dtjjjyekl/image/upload/v1765717116/IMG_0405_py0rzx.jpg",
    "https://res.cloudinary.com/dtjjjyekl/image/upload/v1765717115/IMG_9631_iaoitl.jpg",
    "https://res.cloudinary.com/dtjjjyekl/image/upload/v1765717115/IMG_9632_khk5t5.jpg"
  ],
},


/* -------------------------------------------
    14. RED GRAM HUSK (TOOR HUSK / TOOR CHUNI)
-------------------------------------------- */



];
