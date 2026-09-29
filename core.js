(function(root){
  'use strict';
  const text = value => typeof value === 'string' ? value : '';
  function phone(value){let n=text(value).replace(/[\s()+-]/g,'');if(/^03\d{9}$/.test(n))n='92'+n.slice(1);return /^\d{10,15}$/.test(n)?n:'';}
  function money(value){return 'Rs '+new Intl.NumberFormat('en-PK',{maximumFractionDigits:2}).format(value);}
  function price(value){return typeof value==='number'&&Number.isFinite(value)&&value>=0?value:null;}
  function safeUrl(value, relative){const v=text(value).trim();if(!v)return '';if(relative&&(/^(?:\.\/)?assets\/[A-Za-z0-9_./-]+$/.test(v))&&!v.includes('..'))return v;try{const url=new URL(v);if(url.protocol==='https:')return url.href;}catch(e){}return '';}
  function validate(data){
    if(!data||data.version!==1||!data.business||!data.content||!Array.isArray(data.categories)||!Array.isArray(data.products))throw new Error('Please choose a valid Fancy Bakers data file.');
    if(data.categories.length>30||data.products.length>200)throw new Error('Please keep the menu below 200 products and 30 categories.');
    const ids=new Set();const categories=new Set();
    data.categories.forEach(c=>{if(!c||!/^[a-z0-9_-]{1,60}$/.test(c.id)||!text(c.name).trim()||categories.has(c.id))throw new Error('Each category needs a unique ID and name.');categories.add(c.id);});
    data.products.forEach(p=>{if(!p||!/^[a-z0-9_-]{1,70}$/.test(p.id)||ids.has(p.id)||!text(p.name).trim()||!categories.has(p.category))throw new Error('Check each product name, category and unique ID.');if(p.price!==null&&price(p.price)===null)throw new Error('Prices must be zero or above, or blank for a quote.');if(typeof p.available!=='boolean')throw new Error('Check product availability.');if(p.image&&!safeUrl(p.image,true))throw new Error('Use an assets/ image path or an HTTPS image URL.');ids.add(p.id);});
    if(!phone(data.business.phone))throw new Error('Add a valid shop telephone number.');
    if(data.business.whatsapp&&!phone(data.business.whatsapp))throw new Error('Check the WhatsApp number. Use 923001234567 or 03001234567 format.');
    for(const key of ['mapsUrl','instagram','facebook'])if(data.business[key]&&!safeUrl(data.business[key]))throw new Error('Use a complete HTTPS link for '+key+'.');
    if(!safeUrl(data.content.heroImage,true))throw new Error('Choose a valid hero image path.');
    return data;
  }
  function total(items, products){let known=0,unknown=0;items.forEach(({id,quantity})=>{const p=products.find(x=>x.id===id&&x.available);if(!p)return;if(price(p.price)===null)unknown+=quantity;else known+=p.price*quantity;});return {known,unknown};}
  function dateLabel(value){if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return text(value);const [y,m,d]=value.split('-').map(Number);return new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric'}).format(new Date(y,m-1,d));}
  function today(){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Karachi',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date());const p=Object.fromEntries(parts.map(x=>[x.type,x.value]));return p.year+'-'+p.month+'-'+p.day;}
  function message({business,products,items,cake,extra}){const lines=['Assalam o Alaikum '+business.shortName+'!','I would like to enquire about the following:'];
    if(cake){lines.push('','CUSTOM CAKE','Name: '+cake.name,'Occasion: '+cake.occasion,'Preferred date: '+dateLabel(cake.date));if(cake.size)lines.push('Size / guests: '+cake.size);if(cake.flavour)lines.push('Preferred flavour: '+cake.flavour);if(cake.idea)lines.push('Design / message: '+cake.idea);}
    if(items.length){lines.push('','SHOP ENQUIRY');items.forEach(({id,quantity})=>{const p=products.find(x=>x.id===id&&x.available);if(p)lines.push(quantity+' × '+p.name+' ('+p.unit+') — '+(price(p.price)===null?'please quote':money(p.price*quantity)));});const t=total(items,products);if(items.some(i=>price(products.find(p=>p.id===i.id)?.price)!==null))lines.push('Priced items subtotal: '+money(t.known));if(t.unknown)lines.push('Other items: price to be confirmed.');}
    if(text(extra).trim())lines.push('','Additional details: '+text(extra).trim());lines.push('','Please confirm availability, final price and collection or delivery arrangements. Thank you.');return lines.join('\n');}
  root.FancyCore={phone,money,price,safeUrl,validate,total,dateLabel,today,message};
})(typeof window!=='undefined'?window:globalThis);
