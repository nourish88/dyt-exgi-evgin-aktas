import fs from 'fs';

const pages = [
  'src/app/cocuk-beslenmesi-diyetisyen/page.tsx',
  'src/app/ezgi-evgin-diyetisyen/page.tsx',
  'src/app/gizlilik-politikasi/page.tsx',
  'src/app/hamilelik-beslenmesi-ankara/page.tsx',
  'src/app/hesaplayicilar/page.tsx',
  'src/app/insulin-direnci-diyeti-ankara/page.tsx',
  'src/app/kullanim-sartlari/page.tsx',
  'src/app/mobil-uygulamamiz/page.tsx',
  'src/app/pcos-diyetisyen-ankara/page.tsx',
  'src/app/randevu/page.tsx',
  'src/app/sporcu-beslenmesi-ankara/page.tsx'
];

for (const page of pages) {
  if (!fs.existsSync(page)) continue;
  let content = fs.readFileSync(page, 'utf-8');
  let changed = false;

  content = content.replace(/description:\s*(["'])(.*?)\1/gs, (match, quote, desc) => {
    // If it's short enough, skip
    if (desc.length <= 150) return match;
    
    // Auto-shorten logic
    let newDesc = desc;
    if (page.includes('cocuk-beslenmesi')) {
      newDesc = "Çocuk ve ergen beslenmesinde uzman diyetisyen desteği. İştahsızlık, kilo sorunları ve sağlıklı gelişim için Ankara'da kişiye özel program.";
    } else if (page.includes('ezgi-evgin-diyetisyen')) {
      newDesc = "Dyt. Ezgi Evgin: Ankara'da yüz yüze ve online beslenme danışmanlığı. Kalıcı kilo verme, sağlıklı yaşam ve kişiye özel diyet programları.";
    } else if (page.includes('gizlilik-politikasi') || page.includes('kullanim-sartlari')) {
      newDesc = desc.substring(0, 140) + "...";
    } else if (page.includes('hamilelik-beslenmesi')) {
      newDesc = "Hamilelikte sağlıklı kilo alımı ve emzirme döneminde süt artıran beslenme planı. Ankara'da hamile diyeti için uzman destek alın.";
    } else if (page.includes('hesaplayicilar')) {
      newDesc = "Ücretsiz vücut kitle indeksi (BMI), ideal kilo ve günlük kalori ihtiyacı hesaplama araçları. Kendi ölçümlerinizi hemen yapın.";
    } else if (page.includes('insulin-direnci')) {
      newDesc = "İnsülin direnci tanısı sonrası kişiye özel beslenme tedavisi. Ankara'da insülin direnci diyetisyeni ile sağlıklı ve kalıcı kilo verin.";
    } else if (page.includes('mobil-uygulamamiz')) {
      newDesc = "Danışan portalı ile diyet programınız cebinizde. Öğün takibi, su hatırlatıcı ve diyetisyene anlık mesajlaşma imkanı.";
    } else if (page.includes('pcos-diyetisyen')) {
      newDesc = "PCOS (Polikistik Over Sendromu) için kişiye özel beslenme tedavisi. Hormon dostu diyet ile semptomları hafifletin ve kilo verin.";
    } else if (page.includes('randevu')) {
      newDesc = "Ankara Eryaman ve online beslenme danışmanlığı için randevu alın. İlk görüşme tamamen ücretsizdir. Hemen WhatsApp'tan iletişime geçin.";
    } else if (page.includes('sporcu-beslenmesi')) {
      newDesc = "Performans artışı, kas kazanımı veya yağ kaybı odaklı sporcu beslenmesi planları. Profesyonel ve amatör sporcular için Ankara'da uzman destek.";
    }

    if (newDesc !== desc) {
      changed = true;
      console.log(`Shortened [${newDesc.length}]: ${newDesc}`);
      return `description: ${quote}${newDesc}${quote}`;
    }
    return match;
  });

  // Shorten layout.tsx description too
  if (page === 'src/app/layout.tsx') {
    // Already did manually? Actually let's just do it directly.
  }

  if (changed) {
    fs.writeFileSync(page, content);
  }
}
