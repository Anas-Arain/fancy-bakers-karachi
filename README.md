# Fancy Bakers — website aur price editor

Prepared 29 September 2026.

**Sab se pehle `START-HERE.html` browser mein kholein.** Puri ZIP ko Extract All / Unzip karein; files ZIP ke andar se na kholein.

## Is package mein kya hai?

| File / folder | Kaam |
| --- | --- |
| `website/index.html` | Customer website; browser mein double-click karke preview karein |
| `website/site-data.js` | Aapke rates, products, shop details aur main page text |
| `website/styles.css` | Website ka design aur mobile layout |
| `website/app.js` + `core.js` | Filters, custom cake form, enquiry, totals aur validation |
| `website/assets/` | Saari website images, local WebP format mein |
| `owner-tools/price-editor.html` | Form se rates aur details edit karne ka offline tool |
| `owner-tools/editor.js` + `editor.css` | Editor source code |
| `previews/` | Desktop aur mobile screenshots |
| `RESEARCH-AND-TESTS.md` | Verified details, image notes aur testing ki limits |

Website plain HTML, CSS aur JavaScript hai. Customer website chalane ke liye npm, Node.js, database, paid editor ya build step ki zaroorat nahi. JavaScript enabled hona chahiye. Modern Chrome, Edge, Firefox aur Safari ke liye standard web features use kiye gaye hain; practical browser verification Chromium mein hui hai.

## Price change karna — coding ki zaroorat nahi

1. `owner-tools/price-editor.html` browser mein kholein. Laptop par file manage karna sab se aasaan rahega; editor ka mobile layout bhi hai.
2. **Products & prices** mein product ka rate aur **Price unit** likhein. Misal: price `1250`, unit `1 kg`. Yeh sirf samjhane ke liye example hai, shop ka verified rate nahi.
3. Blank price ka matlab **Ask for a quote** hai. `0` ka matlab **Rs 0** hai, is liye unknown price ke liye zero na likhein.
4. **Download updated file** dabayein. Agar automatic download nazar na aaye to **Save site-data.js** use karein. File ka naam bilkul `site-data.js` hona chahiye, `site-data (1).js` nahi.
5. Download ki hui file se `website/site-data.js` replace karein. Purani file ki backup copy rakh lein.
6. `website/index.html` dobara khol kar ya refresh karke rate check karein. Live site ke liye updated website folder dobara upload karein.

**Download ka alternative:** editor ke **Alternative: copy the file contents** ko kholein. Poora generated text plain-text editor mein paste karke UTF-8 mein `site-data.js` save karein. Windows Notepad mein “All files” select karein taake `.txt` add na ho. Browser security warning aaye to usay bypass na karein; copy/save alternative use karein.

Editor mein ki hui changes sirf us khule page mein rehti hain. Save ki hui file replace hone se pehle original website update nahi hoti. Live site apne aap update nahi hoti. Editor dobara kholne par woh `website/site-data.js` padhta hai; saved file **Import data file** se bhi load kar sakte hain.

## Product add ya remove karna

- **+ Add product** dabayein; name, category, description, rate aur unit fill karein.
- **Show on website** off karne se product hide ho jata hai. Dobara on karne se wapas aa jata hai.
- **Opens custom cake form** sirf custom cake enquiry ke liye on karein. Regular products enquiry list mein add hote hain.
- **Remove product** confirmation ke baad editor ke data se product hata deta hai. File save/replace/upload ke baad live website mein change aata hai.
- 200 products aur 30 categories tak data validation supported hai. Categories ko rename/add karna ho to `site-data.js` ki `categories` list edit ki ja sakti hai; existing IDs unique rakhein.

## WhatsApp aur shop details

**Shop details** tab mein verified WhatsApp order number likhein: `03...` ya country-code format `92...`. Website isay normalize kar leti hai. Number blank ho to website shop ka Call button dikhati hai. Number add hone par enquiry mein **Continue on WhatsApp** aata hai; customer apna message review karke WhatsApp mein Send karta hai.

Telephone, displayed telephone, address, hours, Maps link, delivery note aur social links bhi isi tab se change hote hain. Telephone aur displayed telephone dono ko ek jaisa update karein. Public listing ka phone WhatsApp par registered hai ya nahi, confirm nahi hua; is liye WhatsApp field jaan-boojh kar blank hai.

Delivery ke liye areas, charges, minimum order, payment method aur timing ki asli policy likhein. Website filhaal customer ko shop se confirm karne ka kehti hai. Custom cakes ka lead time bhi **Page text & images > Custom cake description** mein add kar sakte hain.

## Apni product photos lagana

1. Apni photo `website/assets/` mein copy karein, misal `chocolate-cake.jpg`.
2. Product ke **Image path** mein `assets/chocolate-cake.jpg` likhein. Names mein spaces na rakhna aasaan rahega.
3. Main hero photo ke liye **Page text & images > Hero image path** update karein. Image description bhi sahi likhein.
4. Sample images AI-generated inspiration hain, actual shop products ki photographs nahi. Sab sample images replace karne ke baad hi **Image note** clear karein.
5. File save/replace karke nayi images aur updated data dono upload karein.

Hero ke liye portrait photo, product card ke liye square ya landscape photo behtar hai. WebP/JPG use karke file sizes chhote rakhein. Files ka upper/lower case actual filename ke saath match hona chahiye.

## Website live kaise karni hai

Package mein public website sirf **website** folder hai. Aapke static web host ya existing hosting ke public document root mein **website folder ke andar ka content** upload karein. Wahan root par `index.html`, `styles.css`, `site-data.js`, `core.js`, `app.js` aur `assets/` honi chahiye. `owner-tools`, guides, test files aur previews public upload karna zaroori nahi.

Is site ka build command nahi hai. Agar host publish directory poochhe to `website` choose karein; agar manual uploader folder poochhe to `website` folder choose karein. Existing hosting mein aksar public folder ka naam `public_html` hota hai; apne host ka configured document root use karein. Domain aur HTTPS apne host ke through connect karein.

Upload ke baad phone par public URL kholein. Cake form, enquiry, Maps link, Call aur apne confirmed WhatsApp number par message opening check karein. Hosting cache ho to purge/refresh karein. Rates badalne ke baad private/incognito window mein naya rate bhi check karein.

Complete ZIP mein source aur editor dono hain. **Is package ki website abhi publish nahi ki gayi.** User ke apni hosting par launch karne ke liye portable files di gayi hain.

## Orders ka actual flow

Customer products select karta hai ya custom cake form fill karta hai. Website uski enquiry banati hai. WhatsApp configured ho to us app mein message khulta hai; warna customer message copy karke shop ko call kar sakta hai. Website khud message send, order confirm, stock reserve ya payment collect nahi karti. Shop final price, availability aur collection/delivery confirm karti hai.

Unsent enquiry page memory mein hoti hai aur reload/close par clear ho jati hai. Is version mein order database, admin login, online payment, email submission, analytics ya ad pixels install nahi hain. Owner editor local file banata hai; yeh online password-protected dashboard nahi hai.

## Ads se pehle

Custom cakes wali section ka anchor `#custom-cakes` hai; apne live homepage URL ke akhir mein yeh lagakar ad visitors ko us section par bhej sakte hain. Pehle asli cake photos, correct WhatsApp number, confirmed delivery policy aur clear rates/quote process update karein. Conversion tracking add ki jaye to website ki privacy information bhi actual tracking ke mutabiq update karni hogi.

## Agar koi cheez na chale

- Blank products: ZIP extract karein, tamam files saath rakhein aur JavaScript enable karein. `site-data.js` ka naam aur content check karein.
- Purana price: saved file ka exact name check karein, website folder mein replace karein, upload karein aur refresh/cache clear karein.
- Image missing: actual path aur filename ka case check karein; image file bhi upload karein.
- WhatsApp button nahi: confirmed number **Shop details** mein add karke updated file replace/upload karein.
- Design broken: `styles.css` aur `assets` folder ki location check karein.
- Data galat edit ho gaya: backup `site-data.js` restore karke editor dobara kholein.

Saara custom website source aap edit aur apne business ke liye deploy kar sakte hain. Package mein third-party framework, font service ya externally hosted image par runtime dependency nahi hai.
