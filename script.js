const WA_NUMBER = '212718668861';
let currentLang = 'fr';
let currentModalProduct = null;

// ===== CATALOGUE COMPLET (notes vérifiées) =====
const products = {
  femme: [
    { name: "L'IMPÉRATRICE", brand: "Dolce & Gabbana", emoji: "🌸", bg: "bg-rose", notes: { tete: "Kiwi, Poivre rose, Rhubarbe", coeur: "Cyclamen, Jasmin, Pastèque", fond: "Citronnier, Musc, Bois de santal" } },
    { name: "DELINA", brand: "Parfums de Marly", emoji: "🌹", bg: "bg-peche", notes: { tete: "Litchi, Rhubarbe, Bergamote", coeur: "Rose de Damas, Pivoine, Muguet", fond: "Musc, Cachemire, Vanille" } },
    { name: "BURBERRY HER", brand: "Burberry", emoji: "🫐", bg: "bg-lavande", notes: { tete: "Mûre, Myrtille, Framboise", coeur: "Jasmin, Violette", fond: "Ambre sec, Musc" } },
    { name: "PRADA PARADOXE", brand: "Prada", emoji: "🤍", bg: "bg-sable", notes: { tete: "Poire, Mandarine, Bergamote", coeur: "Fleur d'oranger, Néroli, Jasmin Sambac", fond: "Vanille Bourbon, Ambre, Musc blanc, Benjoin" } },
    { name: "NARCISO FOR HER", brand: "Narciso Rodriguez", emoji: "🪷", bg: "bg-rose", notes: { tete: "Rose, Pêche", coeur: "Musc", fond: "Patchouli, Bois de santal" } },
    { name: "WICKED", brand: "Victoria's Secret", emoji: "🖤", bg: "bg-noir", notes: { tete: "Freesia", coeur: "Sucre brun", fond: "Vanille de Tahiti" } },
    { name: "J'ADORE", brand: "Dior", emoji: "💛", bg: "bg-gold", notes: { tete: "Poire, Melon, Magnolia", coeur: "Rose, Jasmin, Ylang-ylang", fond: "Musc, Cèdre, Santal, Vanille" } },
    { name: "LIBRE", brand: "Yves Saint Laurent", emoji: "🌙", bg: "bg-lavande", notes: { tete: "Lavande, Mandarine, Cassis", coeur: "Fleur d'oranger, Jasmin, Lavande", fond: "Vanille, Ambre gris, Vétiver" } },
    { name: "BLACK OPIUM", brand: "Yves Saint Laurent", emoji: "☕", bg: "bg-noir", notes: { tete: "Poire, Poivre rose, Fleur d'oranger", coeur: "Café, Jasmin, Amande amère, Réglisse", fond: "Vanille, Patchouli, Cèdre, Bois de cachemire" } },
    { name: "L'INTERDIT", brand: "Givenchy", emoji: "🌫️", bg: "bg-sable", notes: { tete: "Poire, Bergamote", coeur: "Tubéreuse, Fleur d'oranger, Jasmin Sambac", fond: "Patchouli, Vanille, Vétiver, Ambroxan" } },
    { name: "BORN IN ROMA", brand: "Valentino", emoji: "🌺", bg: "bg-peche", notes: { tete: "Cassis, Poivre rose, Bergamote", coeur: "Jasmin Sambac, Thé au jasmin", fond: "Vanille Bourbon, Cashmeran, Bois de gaïac" } }
  ],
  unisex: [
    { name: "KIRKÈ", brand: "Tiziana Terenzi", emoji: "🪐", bg: "bg-lavande", notes: { tete: "Fruit de la passion, Pêche, Poire, Framboise, Bourgeon de cassis, Sable", coeur: "Muguet", fond: "Musc, Bois de santal, Patchouli, Vanille, Héliotrope" } },
    { name: "BACCARAT ROUGE 540", brand: "Maison Francis Kurkdjian", emoji: "💎", bg: "bg-rose", notes: { tete: "Safran, Jasmin", coeur: "Bois ambré, Ambre gris, Hédione", fond: "Résine de sapin, Cèdre, Sucre, Mousse de chêne" } },
    { name: "VERT MALACHITE", brand: "Giorgio Armani Privé", emoji: "💚", bg: "bg-mint", notes: { tete: "Orange amère, Petitgrain", coeur: "Jasmin Sambac, Ylang-ylang, Poivre rose", fond: "Lys, Vanille, Benjoin" } },
    { name: "ROUGE MALACHITE", brand: "Giorgio Armani Privé", emoji: "❤️", bg: "bg-peche", notes: { tete: "Tubéreuse, Poivre rose, Sauge sclarée", coeur: "Tubéreuse, Jasmin Sambac, Ylang-ylang, Fleur d'oranger", fond: "Cashmeran, Ambre" } }
  ],
  homme: [
    { name: "EROS", brand: "Versace", emoji: "⚡", bg: "bg-bleu", notes: { tete: "Menthe, Pomme verte, Citron", coeur: "Fève tonka, Ambroxan, Géranium", fond: "Vanille, Vétiver, Mousse de chêne, Cèdre" } },
    { name: "L'HOMME", brand: "Yves Saint Laurent", emoji: "🪵", bg: "bg-sable", notes: { tete: "Bergamote, Citron, Gingembre", coeur: "Feuille de violette, Basilic, Poivre blanc", fond: "Bois de santal, Cèdre, Vétiver, Fève tonka" } },
    { name: "1 MILLION", brand: "Paco Rabanne", emoji: "💰", bg: "bg-gold", notes: { tete: "Mandarine sanguine, Pamplemousse, Menthe", coeur: "Rose, Cannelle, Épices", fond: "Cuir, Ambre, Patchouli, Bois" } },
    { name: "LE BEAU", brand: "Jean Paul Gaultier", emoji: "🌊", bg: "bg-bleu", notes: { tete: "Bergamote", coeur: "Noix de coco", fond: "Fève tonka" } },
    { name: "TERRE D'HERMÈS", brand: "Hermès", emoji: "🌿", bg: "bg-mint", notes: { tete: "Pamplemousse, Orange", coeur: "Poivre, Pélargonium", fond: "Vétiver, Cèdre, Patchouli, Benjoin" } },
    { name: "IMAGINATION", brand: "Louis Vuitton", emoji: "✨", bg: "bg-lavande", notes: { tete: "Bergamote de Calabre, Citron, Orange de Sicile", coeur: "Néroli, Gingembre, Cannelle", fond: "Thé noir, Ambroxan, Bois de gaïac, Encens" } },
    { name: "BOSS BOTTLED", brand: "Hugo Boss", emoji: "🖤", bg: "bg-noir", notes: { tete: "Pomme, Citron, Bergamote", coeur: "Géranium, Cannelle, Clou de girofle", fond: "Santal, Vétiver, Cèdre" } },
    { name: "LEGEND", brand: "Montblanc", emoji: "🏔️", bg: "bg-bleu", notes: { tete: "Bergamote, Lavande, Feuille d'ananas", coeur: "Mousse de chêne, Géranium, Pomme, Rose", fond: "Santal, Fève tonka" } },
    { name: "BORN IN ROMA UOMO", brand: "Valentino", emoji: "🏛️", bg: "bg-sable", notes: { tete: "Notes minérales, Feuille de violette, Sel", coeur: "Sauge, Gingembre", fond: "Notes boisées, Vétiver" } }
  ]
};

// ===== PHOTOS PRODUITS =====
const collectionPhoto = {
  femme: 'images/bottle-femme-blanc.jpg',
  homme: 'images/bottle-homme-blue.jpg',
  unisex: 'images/bottles-duo.jpg'
};

// ===== RENDU CARTES =====
function renderCard(p, collection) {
  return `
    <div class="product-card" onclick="openModal('${collection}','${p.name.replace(/'/g,"\\'")}')">
      <div class="product-img ${p.bg || 'bg-sable'}" style="background-image:url('${collectionPhoto[collection]}')"><span class="product-emoji-badge">${p.emoji}</span></div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-ml">50 ML</div><div class="product-inspired">Inspiré de ${p.brand}</div>
        <div class="product-prices">
          <span class="price-old">80 DH</span>
          <span class="price-new">70 DH</span>
        </div>
        <div class="notes-preview">🎵 Cliquer pour voir les notes</div>
      </div>
    </div>`;
}

function renderGrids() {
  document.getElementById('grid-femme').innerHTML = products.femme.map(p => renderCard(p,'femme')).join('');
  document.getElementById('grid-unisex').innerHTML = products.unisex.map(p => renderCard(p,'unisex')).join('');
  document.getElementById('grid-homme').innerHTML = products.homme.map(p => renderCard(p,'homme')).join('');
  document.getElementById('grid-femme-unisex').innerHTML = products.unisex.map(p => renderCard(p,'unisex')).join('');
  document.getElementById('grid-homme-unisex').innerHTML = products.unisex.map(p => renderCard(p,'unisex')).join('');
}

// ===== MODAL =====
function openModal(collection, name) {
  const list = products[collection];
  const p = list.find(x => x.name === name);
  if (!p) return;
  currentModalProduct = p;
  document.getElementById('modal-photo').src = collectionPhoto[collection];
  document.getElementById('modal-photo').alt = p.name + ' — ROOH';
  document.getElementById('modal-emoji').textContent = p.emoji;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-brand').textContent = 'Inspiré de ' + p.brand;
  document.getElementById('modal-ml').textContent = '🧴 Flacon 50 ML';
  document.getElementById('modal-notes').innerHTML =
    `<div style="margin-bottom:8px;"><span style="font-size:10px;letter-spacing:2px;color:#C9A96E;">TÊTE</span><br>${p.notes.tete}</div>
     <div style="margin-bottom:8px;"><span style="font-size:10px;letter-spacing:2px;color:#C9A96E;">CŒUR</span><br>${p.notes.coeur}</div>
     <div><span style="font-size:10px;letter-spacing:2px;color:#C9A96E;">FOND</span><br>${p.notes.fond}</div>`;
  const tags = [...p.notes.tete.split(','), ...p.notes.coeur.split(','), ...p.notes.fond.split(',')];
  document.getElementById('modal-tags').innerHTML = tags.slice(0,6).map(t =>
    `<span style="font-size:10px;background:#F2E8E0;color:#7A5C42;padding:4px 10px;border-radius:20px;margin:3px;">${t.trim()}</span>`
  ).join('');
  const overlay = document.getElementById('modal-overlay');
  overlay.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal-overlay').style.display = 'none';
  currentModalProduct = null;
}

function orderFromModal() {
  if (currentModalProduct) orderOnWhatsApp(currentModalProduct.name + ' (inspiré de ' + currentModalProduct.brand + ')');
}

// ===== WHATSAPP =====
const WA_NUMBER_FULL = '212718668861';
function orderOnWhatsApp(productName) {
  const msg = `Bonjour Rooh 🌸\n\nJe souhaite commander :\n- Parfum : ${productName}\n- Quantité : \n- Nom & Prénom : \n- Ville de livraison : \n- Adresse complète :`;
  window.open(`https://wa.me/${WA_NUMBER_FULL}?text=${encodeURIComponent(msg)}`, '_blank');
}

function orderPack() {
  const msg = `Bonjour Rooh 🌸\n\nJe souhaite commander le PACK × 4 à 250 DH :\n- Parfum 1 : \n- Parfum 2 : \n- Parfum 3 : \n- Parfum 4 : \n- Nom & Prénom : \n- Ville de livraison : \n- Adresse complète :`;
  window.open(`https://wa.me/${WA_NUMBER_FULL}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== FORMULAIRE =====
function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('f-name').value;
  const phone = document.getElementById('f-phone').value;
  const city = document.getElementById('f-city').value;
  const parfum = document.getElementById('f-parfum').value;
  const qty = document.getElementById('f-qty').value;
  const msg = document.getElementById('f-msg').value;
  const text = `Bonjour Rooh 🌸\n\nNouvelle commande :\n- Nom : ${name}\n- Téléphone : ${phone}\n- Ville : ${city}\n- Parfum : ${parfum}\n- Quantité : ${qty}\n- Message : ${msg || '—'}`;
  window.open(`https://wa.me/${WA_NUMBER_FULL}?text=${encodeURIComponent(text)}`, '_blank');
}

// ===== LANGUE =====
const translations = {
  fr: {
    nav_accueil:'ACCUEIL', nav_femme:'FEMME', nav_homme:'HOMME', nav_unisex:'UNISEX',
    nav_histoire:'NOTRE HISTOIRE', nav_contact:'CONTACT',
    promo:'🌸 PRIX DE LANCEMENT — 70 DH LE PARFUM · PACK 4 PARFUMS À SEULEMENT 250 DH 🌸',
    hero_text:'Chaque fragrance est une histoire, un souvenir, une émotion. Née au Maroc, portée par l\'âme.',
    hero_btn:'DÉCOUVRIR LA COLLECTION',
    femme_label:'🌸 COLLECTION FEMME', homme_label:'🪵 COLLECTION HOMME', unisex_label:'🪐 COLLECTION UNISEXE',
    pack_tag:'OFFRE EXCLUSIVE', pack_title:'PACK ROOH × 4',
    pack_desc:'Compose ton pack de 4 parfums au choix parmi toutes nos collections.',
    pack_save:'ÉCONOMISE 70 DH', pack_btn:'COMPOSER MON PACK',
    histoire_label:'NOTRE HISTOIRE', histoire_title:'L\'Âme derrière chaque flacon',
    histoire_text:'Depuis toujours, j\'avais le rêve d\'avoir ma propre marque de parfum, vu mon obsession pour les fragrances — chaque note me porte un souvenir. J\'ai choisi chaque note avec prudence et amour pour offrir de très bons parfums inspirés par les grandes maisons. Après le décès de mon père, je fais de mon mieux pour le rendre fier. Chaque note touche l\'âme — c\'est pour cela que j\'ai choisi le nom ROOH.',
    livraison_label:'LIVRAISON & SERVICE', liv1_title:'LIVRAISON MAROC', liv1_desc:'Partout au Maroc, à domicile',
    liv2_title:'COMMANDE FACILE', liv2_desc:'Via WhatsApp ou formulaire',
    liv3_title:'EMBALLAGE SOIGNÉ', liv3_desc:'Chaque commande emballée avec soin',
    contact_label:'NOUS CONTACTER', contact_title:'Restons en contact',
    form_name:'NOM & PRÉNOM', form_phone:'TÉLÉPHONE', form_city:'VILLE',
    form_parfum:'PARFUM CHOISI', form_qty:'QUANTITÉ', form_msg:'MESSAGE (OPTIONNEL)',
    form_btn:'ENVOYER LA COMMANDE',
    footer_copy:'© 2026 ROOH BY SALMA — PARFUMS DE L\'ÂME — TOUS DROITS RÉSERVÉS',
    footer_legal:'ROOH est une marque indépendante. Nos fragrances sont des créations inspirées des grandes maisons de parfumerie.',
    founder_label:'SALMA — FONDATRICE',
    founder_hint:'Ajoute ta photo ici 📸'
  },
  ar: {
    nav_accueil:'الرئيسية', nav_femme:'نساء', nav_homme:'رجال', nav_unisex:'للجنسين',
    nav_histoire:'قصتنا', nav_contact:'تواصل معنا',
    promo:'🌸 أسعار الإطلاق — 70 درهم للعطر · باقة 4 عطور بـ 250 درهم فقط 🌸',
    hero_text:'كل عطر قصة، ذكرى، إحساس. وُلدت في المغرب، تحملها الروح.',
    hero_btn:'اكتشفي المجموعة',
    femme_label:'🌸 مجموعة النساء', homme_label:'🪵 مجموعة الرجال', unisex_label:'🪐 مجموعة للجنسين',
    pack_tag:'عرض حصري', pack_title:'باقة روح × 4',
    pack_desc:'اختاري 4 عطور من مجموعاتنا. أنشئي توقيعك الخاص.',
    pack_save:'وفري 70 درهم', pack_btn:'اختاري باقتك',
    histoire_label:'قصتنا', histoire_title:'الروح خلف كل فلاكون',
    histoire_text:'كان حلمي دائماً أن أمتلك علامتي التجارية الخاصة في عالم العطور. اخترت كل نوتة بعناية وحب. بعد وفاة والدي، أبذل قصارى جهدي لأجعله فخوراً بي. كل نوتة تلامس الروح — لهذا اخترت اسم روح.',
    livraison_label:'التوصيل والخدمة', liv1_title:'توصيل للمغرب', liv1_desc:'في جميع أنحاء المغرب',
    liv2_title:'طلب سهل', liv2_desc:'عبر واتساب أو النموذج',
    liv3_title:'تغليف أنيق', liv3_desc:'كل طلب معبأ بعناية',
    contact_label:'تواصلي معنا', contact_title:'نحن هنا لك',
    form_name:'الاسم الكامل', form_phone:'رقم الهاتف', form_city:'المدينة',
    form_parfum:'العطر المختار', form_qty:'الكمية', form_msg:'رسالة (اختياري)',
    form_btn:'إرسال الطلب',
    footer_copy:'© 2026 روح بقلم سلمى — عطور الروح — جميع الحقوق محفوظة',
    footer_legal:'روح علامة تجارية مستقلة. عطورنا إبداعات مستوحاة من دور العطور العالمية الكبرى.',
    founder_label:'سلمى — المؤسسة',
    founder_hint:'أضيفي صورتك هنا 📸'
  }
};

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.body.classList.toggle('ar', lang === 'ar');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.innerHTML = t[key];
  });
  document.querySelector('.lang-switch').textContent = lang === 'fr' ? 'العربية' : 'FRANÇAIS';
}

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  renderGrids();
  document.querySelector('.lang-switch').addEventListener('click', () => setLang(currentLang === 'fr' ? 'ar' : 'fr'));
  document.querySelector('.hamburger')?.addEventListener('click', toggleMenu);
  document.querySelector('#contact-form')?.addEventListener('submit', submitForm);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
