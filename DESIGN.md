# Tasarım Sistemi: Prestij ve Otoritenin Editoryal İmzası

Bu doküman, 'Gul Partners' hukuk bürosu için hazırlanan özel tasarım sisteminin temel ilkelerini ve uygulama rehberini içerir. Amacımız, standart hukuk sitesi şablonlarının ötesine geçerek; güven, miras ve modern şeffaflığı harmanlayan üst düzey bir dijital deneyim sunmaktır.

## 1. Yaratıcı Kuzey Yıldızı: "Dijital Arşivist"
Bu tasarım sisteminin ruhu **"Dijital Arşivist"** kavramına dayanır. Tasarım, prestijli bir hukuk kütüphanesinin sessiz otoritesini ve bir sanat galerisinin editoryal ferahlığını yansıtmalıdır. Geleneksel hukuk terminolojisinin ağırlığı, asimetrik yerleşimler, geniş beyaz alanlar (whitespace) ve keskin tipografik hiyerarşi ile modernize edilir. Bu sistemde "boşluk", doldurulması gereken bir eksiklik değil; mesajın önemini vurgulayan stratejik bir lükstür.

## 2. Renk Paleti ve Katmanlaşma Kuralları
Renkler, sadece görsel bir tercih değil, hiyerarşiyi belirleyen yapı taşlarıdır.

*   **Birincil Renk (Primary - #5F5E5E):** Derin antrasit tonları, güveni ve kurumsallığı temsil eder.
*   **İkincil Renk (Secondary - #735D00):** Muted Gold (#B59410'dan türetilen), yalnızca kritik eylemlerde ve başarı vurgularında kullanılan prestij sembolüdür.
*   **Yüzeyler (Surfaces):** Ivory White (#FAFAFA) temel zeminimizdir.

### "Çizgisiz Tasarım" (No-Line Rule)
Bu sistemde bölümleri ayırmak için asla `1px solid border` kullanmayın. Sınırlar, yalnızca arka plan rengindeki mikro değişimlerle belirlenmelidir.
*   Bir bölümü diğerinden ayırmak için `surface` (#F9F9F9) üzerine `surface-container-low` (#F2F4F4) katmanı yerleştirin.
*   **Cam ve Gradyan Etkisi:** Ana CTA butonlarında veya hero arka planlarında `primary` ile `primary-container` arasında geçiş yapan, neredeyse fark edilmeyen gradyanlar kullanarak derinlik katın.

## 3. Tipografi: Otorite ve Netlik
Tipografi, markanın ses tonudur. Gelenekselin gücü ile geleceğin netliği arasındaki köprüdür.

*   **Display & Headline (Noto Serif):** Karar verici, ağırbaşlı ve köklü. Büyük ölçekli kullanımlarda (Display-LG: 3.5rem) harf aralıklarını (letter-spacing) hafifçe daraltarak (e.g., -2%) editoryal bir dergi hissi yaratın.
*   **Body & Title (Inter):** Modern, rasyonel ve okunabilir. Hukuki metinlerin karmaşıklığını, Inter'in net yapısı ve geniş satır arası boşlukları (line-height) ile dengeleyin.

**Hiyerarşi Stratejisi:**
- Bir sayfada sadece bir adet `display-lg` bulunmalıdır.
- Alt başlıklar (`title-md`) her zaman `on-surface-variant` (#5A6061) rengiyle kullanılarak ana başlığın otoritesi korunmalıdır.

## 4. Derinlik ve Elevasyon (Tonal Layering)
Geleneksel gölgelerden ve kutu görünümlerinden kaçının. Derinlik, "Tonal Katmanlama" ile sağlanır.

*   **Katmanlama Prensibi:** Bir kartı veya konteyneri öne çıkarmak için gölge yerine `surface-container-lowest` (#FFFFFF) rengini `surface-container-low` (#F2F4F4) zemin üzerine yerleştirin. Bu, doğal bir yükselti illüzyonu yaratır.
*   **Ambient Shadows (Ortam Gölgeleri):** Eğer bir öğenin mutlaka "yüzmesi" gerekiyorsa, gölgeyi `on-surface` renginin %4 - %8 opaklığında, 40px - 60px arası geniş bir blur değeriyle uygulayın.
*   **Ghost Border:** Erişilebilirlik için sınır gerekirse, `outline-variant` (#ADB3B4) rengini %10 opaklıkla kullanın. Kesinlikle %100 opak sınırlar kullanmayın.

## 5. Bileşen Tasarımı (Components)

### Butonlar
*   **Primary:** Keskin köşeli (0px radius), `primary` dolgulu, üzerinde `on-primary` (#FAF7F6) metin. Metinler her zaman `label-md` veya `title-sm` ölçeğinde ve Bold/Medium olmalıdır.
*   **Secondary:** Dolgusuz, sadece `primary` metin ve alt kısımdaki mikro bir "underline" (1px) ile editoryal bir link gibi görünmelidir.

### Kartlar ve Listeler (Cards & Lists)
*   **Yasak:** Kartlar arasında ayırıcı çizgi (divider) kullanımı yasaktır.
*   **Çözüm:** Gruplandırma için `spacing-10` (3.5rem) dikey boşluk veya `surface-container` renk bloklarını kullanın.
*   **İçerik:** Kart içindeki başlıklar `headline-sm` (Noto Serif) olmalı, açıklama metni ise `body-md` (Inter) ile sınırlanmalıdır.

### Girdi Alanları (Input Fields)
*   Altı çizili (underlined) stil tercih edilmelidir. `outline` rengi pasif durumda %20 opaklıkta, odaklanıldığında (focus) `secondary` (gold) rengine dönen 1px'lik ince bir hat.

### Özel Bileşen: "Hukuki Vurgu Blokları" (Legal Pull-quotes)
*   Makale veya vaka analizleri içinde, `headline-md` ölçeğinde Noto Serif ve İtalyik yapıda, sol tarafında `secondary` (gold) renginde ince bir dikey asimetrik çizgi bulunan bloklar.

## 6. Yapılması Gerekenler ve Pitfall'lar (Do's & Don'ts)

| Yapın (Do) | Yapmayın (Don't) |
| :--- | :--- |
| **Asimetrik Yerleşim:** Görselleri ve metinleri hafifçe kaydırarak editoryal bir ritim yakalayın. | **Rijit Izgara:** Her şeyi birbirine hizalanmış kutuların içine hapsetmeyin. |
| **Geniş Boşluklar:** `spacing-16` (5.5rem) ve üzerini kullanarak içeriğe nefes aldırın. | **Sıkışıklık:** Bilgiyi tek ekrana sığdırmak için tipografi ölçeğini küçültmeyin. |
| **Keskin Köşeler:** `0px` radius kuralına sadık kalarak prestijli ve ciddi bir duruş sergileyin. | **Yuvarlak Köşeler:** Modernleşmek adına yumuşak köşeler kullanmayın; bu, ciddiyeti zayıflatır. |
| **Anlamlı Fotoğrafçılık:** Grain (kumlanma) efekti olan, yüksek kontrastlı siyah-beyaz veya desatüre fotoğraflar kullanın. | **Stock Görseller:** Gülümseyen el sıkışan insanlar gibi jenerik stok fotoğraflardan kaçının. |

## 7. Dil ve Tonlama (Turkish Editorial Tone)
Metinler her zaman "Siz" diliyle, mesafeli ama çözüm odaklı olmalıdır. 
- *Örnek:* "Bizimle iletişime geçin" yerine **"Danışmanlık Alın"** veya **"Çözüm Ortaklığı İçin"**.
- Tipografik olarak Türkçe karakterlerin (ğ, ş, ı, İ) Noto Serif içindeki uyumunu her zaman kontrol edin; bu karakterlerin formları, görsel hiyerarşinin bir parçasıdır.