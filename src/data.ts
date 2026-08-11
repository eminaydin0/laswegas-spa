export const SALON = {
  name: 'Laswegas Spa Merkezi',
  nameShort: 'Laswegas',
  tagline: 'Kayseri Melikgazi Masaj ve Spa Merkezi',
  subtitle: "Kayseri'nin Güvenilir Spa Merkezi",
  phone: '0532 748 19 64',
  phoneTel: '+905327481964',
  whatsapp: '905327481964',
  email: 'info@laswegasspa.com',
  address: 'Gevher Nesibe Mah. Hastane Cad. No:17/B Melikgazi/Kayseri',
  addressShort: 'Hastane Cad. No:17/B',
  district: 'Gevher Nesibe Mahallesi',
  hours: 'Her gün 10:00 — 22:00',
  city: 'Kayseri / Melikgazi',
  landmark: 'Erciyes Üniversitesi Tıp Fakültesi / Gevher Nesibe Hastanesi hattına yakın',
};

export const LOCATION = {
  mapEmbed:
    'https://maps.google.com/maps?q=Gevher%20Nesibe%20Mah.%20Hastane%20Cad.%20Melikgazi%20Kayseri&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Gevher+Nesibe+Mah.+Hastane+Cad.+No:17/B+Melikgazi+Kayseri',
  directions: [
    {
      title: 'Özel araç',
      text: 'Melikgazi merkezden Hastane Caddesi yönüne ilerleyin. Gevher Nesibe Mahallesi girişinde No:17/B tabelasını arayın. Cadde üzerinde kısa süreli park imkânı bulunur; yoğun saatlerde yan sokakları tercih edin.',
    },
    {
      title: 'Toplu taşıma',
      text: 'Şehir merkezinden Melikgazi / hastane hattı otobüs ve dolmuşlarıyla Hastane Caddesi durağına inebilirsiniz. Duraktan yürüyüş mesafesi yaklaşık 2–4 dakikadır.',
    },
    {
      title: 'Taksi / transfer',
      text: 'Şoföre “Gevher Nesibe Mahallesi, Hastane Caddesi No:17/B, Laswegas Spa” demeniz yeterli. Talas, Kocasinan ve Organize bölgesinden ortalama 15–25 dakika sürer.',
    },
  ],
  tips: [
    'İlk gelişte WhatsApp’tan konum pin’i isteyebilirsiniz.',
    'Randevu saatinizden 5–10 dakika önce gelmeniz önerilir.',
    'Son seans kabulü genelde 20:30 civarındadır.',
  ],
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/laswegasspa',
  facebook: 'https://www.facebook.com/laswegasspa',
  whatsapp: () =>
    `https://api.whatsapp.com/send/?phone=${SALON.whatsapp}&text=${encodeURIComponent('Merhaba, Laswegas Spa hakkında bilgi almak istiyorum.')}&type=phone_number&app_absent=0`,
  maps: 'https://www.google.com/maps/search/?api=1&query=Gevher+Nesibe+Mah.+Hastane+Cad.+No:17/B+Melikgazi+Kayseri',
};

export const whatsappLink = (message: string) =>
  `https://api.whatsapp.com/send/?phone=${SALON.whatsapp}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

export const IMAGES = {
  heroMassage: 'https://images.pexels.com/photos/6629612/pexels-photo-6629612.jpeg?auto=compress&cs=tinysrgb&w=1920',
  aboutInterior: 'https://images.pexels.com/photos/6899544/pexels-photo-6899544.jpeg?auto=compress&cs=tinysrgb&w=1280',
  gallery1: 'https://images.pexels.com/photos/35884499/pexels-photo-35884499.jpeg?auto=compress&cs=tinysrgb&w=1280',
  gallery2: 'https://images.pexels.com/photos/6186740/pexels-photo-6186740.jpeg?auto=compress&cs=tinysrgb&w=1280',
  gallery3: 'https://images.pexels.com/photos/6560252/pexels-photo-6560252.jpeg?auto=compress&cs=tinysrgb&w=1280',
  gallery5: 'https://images.pexels.com/photos/6187657/pexels-photo-6187657.jpeg?auto=compress&cs=tinysrgb&w=1280',
  gallery6: 'https://images.pexels.com/photos/6187648/pexels-photo-6187648.jpeg?auto=compress&cs=tinysrgb&w=1280',
  gallery7: 'https://images.pexels.com/photos/6188113/pexels-photo-6188113.jpeg?auto=compress&cs=tinysrgb&w=1280',
  gallery8: 'https://images.pexels.com/photos/9146381/pexels-photo-9146381.jpeg?auto=compress&cs=tinysrgb&w=1280',
  therapist1: 'https://images.pexels.com/photos/3865545/pexels-photo-3865545.jpeg?auto=compress&cs=tinysrgb&w=900',
  therapist2: 'https://images.pexels.com/photos/6628599/pexels-photo-6628599.jpeg?auto=compress&cs=tinysrgb&w=900',
  therapist3: 'https://images.pexels.com/photos/9335959/pexels-photo-9335959.jpeg?auto=compress&cs=tinysrgb&w=900',
  therapist4: 'https://images.pexels.com/photos/4599371/pexels-photo-4599371.jpeg?auto=compress&cs=tinysrgb&w=900',
};

export const CAROUSEL = [
  {
    src: 'https://images.pexels.com/photos/6629612/pexels-photo-6629612.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Laswegas Spa Merkezi',
    text: 'Melikgazi’de sakin bir mola',
  },
  {
    src: 'https://images.pexels.com/photos/6187652/pexels-photo-6187652.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Sıcak yağ ritüelleri',
    text: 'Sultan ve Bali masajlarıyla derin rahatlama',
  },
  {
    src: 'https://images.pexels.com/photos/6899544/pexels-photo-6899544.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Temiz, huzurlu odalar',
    text: 'Mahremiyet ve hijyen önceliğimiz',
  },
  {
    src: 'https://images.pexels.com/photos/6187657/pexels-photo-6187657.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Sıcak taş terapisi',
    text: 'Soğukta sertleşen kaslar için',
  },
  {
    src: 'https://images.pexels.com/photos/6188113/pexels-photo-6188113.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Kişiye özel seans',
    text: 'Klasik, medikal, Thai ve aroma terapi',
  },
];

export type Service = {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  longDescription: string;
  duration: string;
  intensity: string;
  oil: string;
  image: string;
  benefits: string[];
  regions: string[];
  bestFor: string[];
  howItWorks: string[];
  sessionFlow: string[];
  aftercare: string[];
  avoidIf: string[];
  detailIntro: string;
  technique: string;
};

export const SERVICES: Service[] = [
  {
    id: 'klasik-masaj',
    name: 'Klasik Masaj',
    nameEn: 'Classic Massage',
    description:
      'Ofis yorgunluğu ve günlük kas gerginliği için yumuşak, akıcı hareketlerle uygulanan klasik bütün vücut masajı.',
    detailIntro:
      'Klasik masaj, Laswegas’ta en sık tercih edilen uygulamadır. Amaç; yüzeysel ve orta derinlikteki kasları yumuşatmak, kan dolaşımını hızlandırmak ve günün biriktirdiği gerginliği azaltmaktır. Yağ ile yapılır; baskı şiddeti size göre ayarlanır.',
    technique:
      'Uzun strok (effleurage), yoğurma (petrissage), sürtme ve hafif titreşim teknikleri kullanılır. İsveç masajı temellidir; agresif derin baskı yoktur.',
    longDescription:
      'Klasik masaj, omuz, boyun ve bel bölgesine odaklanarak uzun stroklar ve yoğurma hareketleriyle kasları gevşetir. Masa başı çalışanlar, uzun yol yapanlar ve Kayseri’nin soğuk günlerinde sertleşen kaslar için idealdir. Seans sonunda çoğu misafir omuzlarında belirgin rahatlama hisseder.',
    duration: '60 dk',
    intensity: 'Hafif — orta',
    oil: 'Nötr bitkisel yağ veya hafif aromatik yağ',
    image: 'https://images.pexels.com/photos/38407816/pexels-photo-38407816.jpeg?auto=compress&cs=tinysrgb&w=1280',
    benefits: [
      'Boyun ve omuz gerginliğini azaltır',
      'Kan dolaşımını hızlandırır',
      'Uyku kalitesini destekler',
      'Günlük stresi yumuşatır',
      'Kas esnekliğini artırır',
      'Genel beden hafifliği sağlar',
    ],
    regions: [
      'Boyun ve ense',
      'Omuz kuşağı (trapez)',
      'Sırt ve kürek kemikleri arası',
      'Bel bölgesi',
      'Kollar ve ön kollar',
      'Bacaklar (isteğe bağlı)',
    ],
    bestFor: [
      'Masa başı / bilgisayar çalışanları',
      'İlk kez masaj deneyecekler',
      'Akşam yorgunluğu ve stres',
      'Hafif–orta kas sertliği',
      'Uyku düzenini desteklemek isteyenler',
    ],
    howItWorks: [
      'Yağ ile cilt üzerinde kaygan, uzun hareketler uygulanır.',
      'Kas lifleri yumuşak yoğurma ile açılır; oksijen ve kan akışı artar.',
      'Sinir sistemi parasempatik moda geçer; nefes ve nabız sakinleşir.',
      'Seans sonunda kas tonusu düşer, eklem çevresi daha rahat hisseder.',
    ],
    sessionFlow: [
      'Kısa görüşme: şikâyet ve baskı tercihi',
      'Sırt üstü veya yüzüstü pozisyon',
      'Sırt, boyun, omuz çalışması',
      'Bel ve bacak geçişi',
      'Kısa dinlenme ve su önerisi',
    ],
    aftercare: [
      'Bol su için',
      'Ağır spor aynı gün yapılmasın',
      'Hafif ısınma / ılık duş iyi gelir',
      '24 saat içinde hafif kas hassasiyeti normal olabilir',
    ],
    avoidIf: [
      'Açık yara, enfeksiyon veya ateş',
      'Yeni kırık / ameliyat sonrası doktor onayı yoksa',
      'Akut inflamasyonlu bölgeler',
    ],
  },
  {
    id: 'thai-masaji',
    name: 'Thai Masajı',
    nameEn: 'Thai Massage',
    description:
      'Esneme ve baskı teknikleriyle eklemleri açan, enerji akışını destekleyen geleneksel Tay masajı.',
    detailIntro:
      'Thai masajı yağsız uygulanır. Terapist elleri, dirsekleri, dizleri ve ayaklarını kullanarak baskı uygular; sizi yoga benzeri pozisyonlarda esnetir. Pasif bir “yatıp dinlenme” masajı değildir — hareketlidir, esnekliği ve eklem açıklığını hedefler.',
    technique:
      'Sen hatları üzerinde baskı, pasif esneme, ritmik kompresyon. Yağ kullanılmaz; genelde rahat kıyafetle veya ince spa kıyafetiyle yapılır.',
    longDescription:
      'Esneklik kaybı, bel tutulması ve hareketsizlik şikâyetinde etkili. 90 dakikada eklem hareket açıklığı artar; bacaklar ve bel daha hafif hisseder. Spor sonrası toparlanma için de tercih edilir.',
    duration: '90 dk',
    intensity: 'Orta — yoğun (esnetmeli)',
    oil: 'Yağ kullanılmaz',
    image: 'https://images.pexels.com/photos/34821383/pexels-photo-34821383.jpeg?auto=compress&cs=tinysrgb&w=1280',
    benefits: [
      'Esnekliği belirgin artırır',
      'Bel ve sırtı açar',
      'Eklem hareketini genişletir',
      'Kalça ve hamstring gerginliğini çözer',
      'Duruşu destekler',
      'Derin ama “uyanık” bir rahatlama verir',
    ],
    regions: [
      'Omurga hattı',
      'Bel ve kalça',
      'Bacak arkası (hamstring)',
      'İç bacak ve addüktörler',
      'Omuz ve kollar',
      'Ayak tabanı ve baldırlar',
    ],
    bestFor: [
      'Hareketsiz yaşam / uzun oturma',
      'Sporcular ve esneklik isteyenler',
      'Bel–kalça sıkışması hissi',
      'Yağlı masaj istemeyenler',
      'Enerji ve açılma arayanlar',
    ],
    howItWorks: [
      'Kas ve bağ dokusu kontrollü esnetilir; eklem kapsülü yumuşar.',
      'Baskı noktaları dolaşımı ve lokal gerginliği etkiler.',
      'Pasif yoga pozisyonları postürü düzeltmeye yardımcı olur.',
      'Seans sonrası hareket açıklığı artar, bacaklar daha uzun hisseder.',
    ],
    sessionFlow: [
      'Esneklik ve şikâyet değerlendirmesi',
      'Yer matı veya geniş masaj yatağı',
      'Bacak ve kalça açılışları',
      'Sırt, omuz ve kol esnetmeleri',
      'Kapanış nefes / kısa dinlenme',
    ],
    aftercare: [
      'Hafif yürüyüş iyi gelir',
      'Aşırı esneme aynı gün yapılmasın',
      'Bol sıvı alın',
      'Kaslarda 1 gün hafif sızı olabilir',
    ],
    avoidIf: [
      'Akut bel fıtığı atağı (doktor onayı şart)',
      'Osteoporoz / kırık riski',
      'Gebelik (özel protokol gerekir)',
      'Yeni eklem yaralanması',
    ],
  },
  {
    id: 'medikal-masaj',
    name: 'Medikal Masaj',
    nameEn: 'Medical Massage',
    description:
      'Kronik sırt, boyun ve bel ağrılarına yönelik, derin doku ve tetik noktası odaklı terapötik masaj.',
    detailIntro:
      'Medikal masaj, “rahatlama”dan çok sorun odaklıdır. Seans öncesi şikâyetinizi dinleriz; baskı derin dokuya iner, tetik noktaları (trigger point) ve kas bantları hedeflenir. Tüm vücut yerine problemli bölgeye yoğunlaşmak yaygındır.',
    technique:
      'Derin doku, tetik noktası terapisi, lokal enflamasyon çevresi çalışması. Yağ az miktarda kullanılır; baskı klasik masajdan daha yoğundur.',
    longDescription:
      'Boyun tutulması, bel ağrısı, siyatik hissi, postür bozukluğu veya antrenman sonrası kas sertliğinde uygulanır. Düzenli seanslarda ağrı sıklığı azalır, hareket kolaylaşır.',
    duration: '75 dk',
    intensity: 'Orta — yüksek',
    oil: 'Az yağ / lokal çalışma',
    image: 'https://images.pexels.com/photos/20860601/pexels-photo-20860601.jpeg?auto=compress&cs=tinysrgb&w=1280',
    benefits: [
      'Kronik kas ağrısını hedefler',
      'Tetik noktalarını çözer',
      'Hareket açıklığını artırır',
      'Postür kaynaklı gerginliği azaltır',
      'Spor sonrası toparlanmayı hızlandırır',
      'Lokal kanlanmayı artırır',
    ],
    regions: [
      'Boyun ve üst trapez',
      'Kürek kemiği çevresi',
      'Bel–sakrum bölgesi',
      'Kalça (piriformis / gluteal)',
      'İliotibial bant (ITB) çevresi',
      'Şikâyete göre lokal odak',
    ],
    bestFor: [
      'Uzun süreli boyun / bel ağrısı',
      'Masa başı postür problemleri',
      'Sporcu kas sertliği',
      'Siyatik benzeri kalça–bacak hissi',
      'Klasik masajın yetmediği yoğun gerginlik',
    ],
    howItWorks: [
      'Derin baskı ile kas içi nodüller yumuşatılır.',
      'Tetik noktalar lokal dolaşımı bozan “düğümleri” hedefler.',
      'Problemli bölgeye süre ayrıldığı için etki daha spesifik olur.',
      'Seans sonrası 24–48 saatte iyileşme hissi artabilir.',
    ],
    sessionFlow: [
      'Şikâyet ve ağrı haritası',
      'Problemli bölgeye odak',
      'Derin doku + tetik noktası',
      'Hareket kontrolü / hafif esneme',
      'Evde dikkat edilecekler önerisi',
    ],
    aftercare: [
      'İlk 24 saat ağır kaldırmayın',
      'Bölgeyi sıcak tutun (doktor aksini demediyse)',
      'Hafif yürüyüş',
      'Şiddetli ağrı artarsa bizi arayın',
    ],
    avoidIf: [
      'Akut disk hernisi atağı (tıbbi onay gerekir)',
      'Derin ven trombozu şüphesi',
      'Ateşli hastalık',
      'Kanser tedavisi sürecinde doktor onayı olmadan',
    ],
  },
  {
    id: 'aroma-terapi-masaji',
    name: 'Aroma Terapi Masajı',
    nameEn: 'Aroma Therapy Massage',
    description:
      'Lavanta, okaliptüs ve nane gibi doğal uçucu yağlarla bedeni ve zihni birlikte dinlendiren duyusal masaj.',
    detailIntro:
      'Aroma terapi masajı, klasik masajın yumuşak tekniğini uçucu yağların kokusal etkisiyle birleştirir. Hedef hem kas gevşemesi hem de zihinsel sakinliktir. Yağ karışımı o günkü ihtiyaca göre seçilir: uyku, ferahlık veya yumuşak denge.',
    technique:
      'Hafif–orta klasik stroklar + kişiye özel uçucu yağ karışımı (lavanta, okaliptüs, nane, gül, sandal vb.).',
    longDescription:
      'Yoğun iş temposundan sonra “kafamı boşaltmak istiyorum” diyen misafirler için favori. Akşam seanslarında uyku öncesi sık tercih edilir; cildi de besler.',
    duration: '60 dk',
    intensity: 'Hafif',
    oil: 'Uçucu yağ + taşıyıcı yağ karışımı',
    image: 'https://images.pexels.com/photos/6629612/pexels-photo-6629612.jpeg?auto=compress&cs=tinysrgb&w=1280',
    benefits: [
      'Stresi yumuşatır',
      'Nefes ve zihin sakinliği verir',
      'Cildi besler ve yumuşatır',
      'Uyku öncesi idealdir',
      'Hafif baş ağrısı / gerilimde ferahlatır',
      'Duyusal bir “kaçış” hissi yaratır',
    ],
    regions: [
      'Omuz ve boyun',
      'Sırt',
      'Göğüs üstü (hafif, rahatlatıcı)',
      'Kollar ve eller',
      'Bacaklar',
      'Şakak / ense çevresi (çok hafif)',
    ],
    bestFor: [
      'Stres ve kaygı yoğunluğu',
      'Uyku sorunu yaşayanlar',
      'Yoğun koku–duyu deneyimi isteyenler',
      'Hafif baskı tercih edenler',
      'Akşam dinlenme seansı',
    ],
    howItWorks: [
      'Uçucu yağlar koku yoluyla limbik sistemi etkiler.',
      'Yumuşak masaj kas tonusunu düşürür.',
      'Parasempatik sistem devreye girer; nefes derinleşir.',
      'Cilt bariyeri yağlarla nemlenir.',
    ],
    sessionFlow: [
      'Yağ tercihi (gevşeme / ferahlık / denge)',
      'Yumuşak bütün vücut veya üst beden',
      'Boyun–omuz odaklı kapanış',
      'Kısa dinlenme, oda kokusu ile geçiş',
    ],
    aftercare: [
      'Yağın emilmesi için 1–2 saat duş erteleyin',
      'Güneşe çıkmadan önce fazla yağlı bölgeleri silin',
      'Alerji hissi olursa bildiriniz',
      'Akşam seansıysa uykuya geçiş kolaylaşabilir',
    ],
    avoidIf: [
      'Uçucu yağ alerjisi / hassasiyet',
      'Gebelikte bazı yağlar kontrendike (bilgi verin)',
      'Açık cilt lezyonları',
      'Astım atağı döneminde yoğun koku',
    ],
  },
  {
    id: 'sultan-masaji',
    name: 'Sultan Masajı',
    nameEn: 'Sultan Massage',
    description:
      'Sıcak yağ ve uzun, akıcı hareketlerle uygulanan, özel günler için tercih edilen lüks ritüel masajı.',
    detailIntro:
      'Sultan masajı Laswegas’ın imza ritüelidir. Sıcak yağ, uzun stroklar ve orta–derin baskıyla hem rahatlama hem “özel gün” hissi verir. Doğum günü, yıldönümü veya kendine hediye seansları için sık seçilir; çift odası da mümkündür.',
    technique:
      'Sıcak yağ ritüeli, uzun effleurage, omuz–sırtta orta derin yoğurma, sıcak havlu kapanışı.',
    longDescription:
      '90 dakikalık uygulamada loş ışık ve sakin müzikle tam bir kaçış hissi. Fiziksel gevşemenin yanında duygusal dinlenme arayanlar için idealdir.',
    duration: '90 dk',
    intensity: 'Hafif — orta',
    oil: 'Sıcak özel yağ karışımı',
    image: 'https://images.pexels.com/photos/6187652/pexels-photo-6187652.jpeg?auto=compress&cs=tinysrgb&w=1280',
    benefits: [
      'Derin kas gevşemesi',
      'Sıcak yağla dolaşım artışı',
      'Özel gün / hediye deneyimi',
      'Zihinsel dinlenme',
      'Ciltte yumuşaklık',
      'Çift seansı için uygun format',
    ],
    regions: [
      'Tüm sırt hattı',
      'Boyun ve omuz',
      'Bel',
      'Kollar',
      'Bacaklar',
      'Ayaklar (kapanış)',
    ],
    bestFor: [
      'Özel günler ve hediyeler',
      'Lüks spa ritüeli arayanlar',
      'Stres + hafif kas gerginliği',
      'Çift randevusu',
      'Klasik masajı uzatılmış, zenginleştirilmiş isteyenler',
    ],
    howItWorks: [
      'Sıcak yağ dokuyu yumuşatır, strokları derinleştirir.',
      'Uzun hareketler sinir sistemini sakinleştirir.',
      'Omuz–sırt yoğunluğu günlük yükü alır.',
      'Sıcak havlu ile seans kapanır; vücut ısısı korunur.',
    ],
    sessionFlow: [
      'Karşılama ve yağ ısısı ayarı',
      'Sırt ve üst beden ritüeli',
      'Bel–bacak geçişi',
      'Sıcak havlu ve kısa dinlenme',
      'İçecek servisi (pakete göre)',
    ],
    aftercare: [
      'Yağlı ciltle hemen soğuğa çıkmayın',
      'Bol su',
      'Aynı gün ağır spor yok',
      'Dinlenmeye devam edin',
    ],
    avoidIf: [
      'Yüksek ateş',
      'Yağ alerjisi',
      'Açık yaralar',
      'Akut inflamasyon',
    ],
  },
  {
    id: 'bali-masaji',
    name: 'Bali Masajı',
    nameEn: 'Balinese Massage',
    description:
      'Sıcak taş ve aromatik yağlarla uygulanan, kan dolaşımını hızlandıran holistik Bali masajı.',
    detailIntro:
      'Bali masajı, aromatik yağlar ile sıcak taşları birleştirir. Akıcı İsveç hareketleri ve noktasal baskılar bir aradadır. Kayseri kışında soğuktan sertleşmiş omuz–sırt için özellikle tercih edilir; klasik masajdan biraz daha yoğun, Thai kadar esnetmeli değildir.',
    technique:
      'Aromatik yağ + sıcak taş (bazalt), avuç/parmak baskısı, uzun strok ve lokal ısı transferi.',
    longDescription:
      'Kan dolaşımını canlandırır, vücutta sıcak ferahlık bırakır. Thai’nin esneme tarzını istemeyen ama klasik masajdan daha dolu bir seans arayanlar için dengeli seçenektir.',
    duration: '75 dk',
    intensity: 'Orta',
    oil: 'Aromatik yağ + sıcak taş',
    image: 'https://images.pexels.com/photos/5378218/pexels-photo-5378218.jpeg?auto=compress&cs=tinysrgb&w=1280',
    benefits: [
      'Sıcak taşla derin ısı',
      'Kan dolaşımını canlandırır',
      'Soğukta sertleşen kasları yumuşatır',
      'Lenf akışını destekler',
      'Omuz–sırt gerginliğini çözer',
      'Tropik, ferahlatıcı bir his bırakır',
    ],
    regions: [
      'Sırt ve omurga yanları',
      'Omuz kuşağı',
      'Bel',
      'Baldırlar',
      'Ayak tabanı',
      'Avuç içi / ön kol',
    ],
    bestFor: [
      'Kış ayları / üşüyen kaslar',
      'Dolaşım yavaşlığı hissi',
      'Klasik + ısı isteyenler',
      'Orta yoğunluk arayanlar',
      'Aromatik deneyim sevenler',
    ],
    howItWorks: [
      'Sıcak taş ısıyı kas dokusuna iletir; sertlik yumuşar.',
      'Yağlı stroklar dolaşımı hızlandırır.',
      'Noktasal baskı gergin bantları çözer.',
      'Seans sonrası vücut sıcak ve hafif kalır.',
    ],
    sessionFlow: [
      'Isı toleransı ve yağ tercihi',
      'Sırtta sıcak taş yerleştirme',
      'Yağlı masaj + taşla geçiş',
      'Bacak ve ayak çalışması',
      'Soğuma / dinlenme',
    ],
    aftercare: [
      'Hemen soğuk havaya çıkmayın',
      'Bol su için',
      'Aşırı sıcak banyo aynı gün şart değil',
      'Hafif yorgunluk normal olabilir',
    ],
    avoidIf: [
      'Yüksek tansiyon (kontrolsüz)',
      'Metal implant / hassas bölgelerde taş dikkat',
      'Cilt yanığı / hassasiyet',
      'Ateş veya enfeksiyon',
    ],
  },
];

export const getServiceById = (id: string) => SERVICES.find((s) => s.id === id);

export type Therapist = {
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  image: string;
};

export const THERAPISTS: Therapist[] = [
  {
    name: 'Merve Aktaş',
    title: 'Baş Terapist & Spa Sorumlusu',
    experience: '12 yıl deneyim',
    specialties: ['Thai Masajı', 'Sultan Masajı', 'Bali Masajı'],
    image: IMAGES.therapist1,
  },
  {
    name: 'Burcu Yılmaz',
    title: 'Sertifikalı Masaj Terapisti',
    experience: '8 yıl deneyim',
    specialties: ['Klasik Masaj', 'Aroma Terapi', 'Medikal Masaj'],
    image: IMAGES.therapist2,
  },
  {
    name: 'Zeynep Kara',
    title: 'Aromaterapi Uzmanı',
    experience: '6 yıl deneyim',
    specialties: ['Aroma Terapi', 'Lenf Drenaj', 'Cilt Bakımı'],
    image: IMAGES.therapist3,
  },
  {
    name: 'Ayşe Demirci',
    title: 'Medikal Masaj Uzmanı',
    experience: '10 yıl deneyim',
    specialties: ['Medikal Masaj', 'Derin Doku', 'Spor Masajı'],
    image: IMAGES.therapist4,
  },
];

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Elif Sönmez',
    role: 'Melikgazi',
    text: 'İş sonrası omuzlarım kitleniyordu. Laswegas’ta klasik masaja başladım, üçüncü seanstan sonra boyun tutulmam ciddi azaladı. Oda temiz, ekip güler yüzlü.',
    rating: 5,
  },
  {
    name: 'Hakan Öztürk',
    role: 'Sporcu · Talas',
    text: 'Antrenman sonrası medikal masaj için geliyorum. Ayşe Hanım’ın derin doku çalışması sırt ağrımı gerçekten hafifletiyor.',
    rating: 5,
  },
  {
    name: 'Selin Aydın',
    role: 'Kocasinan',
    text: 'Doğum günümde sultan masajı aldım. Sıcak yağ, loş ışık, sessiz ortam… Gerçekten dinlendim. Çift seansı da denedik.',
    rating: 5,
  },
  {
    name: 'Mehmet Can',
    role: 'Düzenli misafir · Melikgazi',
    text: 'Aroma terapiyi akşamları tercih ediyorum. Lavanta karışımıyla uyku kalitem düzeldi. Instagram’dan da randevu soruyorum, dönüşleri hızlı.',
    rating: 5,
  },
];

export type Package = {
  name: string;
  tagline: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
};

export const PACKAGES: Package[] = [
  {
    name: 'Rahatlama',
    tagline: 'Kısa mola, net ferahlık',
    price: '₺900',
    duration: '60 dakika',
    features: [
      'Klasik veya aroma terapi masajı',
      'Masaj öncesi bitki çayı',
      'Sıcak havlu servisi',
      'Kişiye özel yağ seçimi',
    ],
    popular: false,
  },
  {
    name: 'Laswegas Spa',
    tagline: 'En çok tercih edilen tam seans',
    price: '₺1.750',
    duration: '120 dakika',
    features: [
      'İki masaj kombinasyonu',
      'Sultan veya Bali masajı dahil',
      'Sıcak taş uygulaması',
      'Mevsim meyvesi servisi',
      'Özel aromaterapi karışımı',
    ],
    popular: true,
  },
  {
    name: 'Laswegas Premium',
    tagline: 'Üç saatlik özel ritüel',
    price: '₺3.200',
    duration: '180 dakika',
    features: [
      'Üç masaj kombinasyonu',
      'Thai + Sultan + Aroma terapi',
      'VIP oda kullanımı',
      'İçecek & meyve tabağı',
      'Terapist tercihi',
      'Özel gün / hediye paketi seçeneği',
    ],
    popular: false,
  },
];
