import { Language } from '@/types';

export const WHATSAPP_NUMBER = '6281233367191';

export interface WhatsAppQuoteParams {
  packageName: string;
  pages: number;
  priceFormatted: string;
  currency: 'IDR' | 'USD';
  templateName?: string;
  selectedAddons?: string[];
  lang?: Language;
  currentUrl?: string;
}

export function generateWhatsAppUrl(params: WhatsAppQuoteParams): string {
  const {
    packageName,
    pages,
    priceFormatted,
    templateName = 'Custom / Rekomendasi Tim',
    selectedAddons = [],
    lang = 'id',
    currentUrl = 'https://webscale.engine.pages.dev'
  } = params;

  let text = '';

  if (lang === 'ar') {
    text = `السلام عليكم ورحمة الله وبركاته، فريق WebScale 🚀\n` +
      `أرغب في الاستفسار والبدء في مشروع موقع إلكتروني جديد بالمواصفات التالية:\n\n` +
      `📌 *الباقة المختارة:* ${packageName} (${pages} صفحة)\n` +
      `🎨 *النمط التصميمي:* ${templateName}\n` +
      `💰 *التكلفة التقديرية:* ${priceFormatted}\n` +
      (selectedAddons.length > 0 ? `➕ *الإضافات المطلوبة:* ${selectedAddons.join(', ')}\n` : '') +
      `🌐 *رابط الصفحة المرجعية:* ${currentUrl}\n\n` +
      `أرجو إفادتي بإمكانية بدء العمل وجدول المواعيد والخطوات القادمة. شكراً لكم!`;
  } else if (lang === 'en') {
    text = `Hello WebScale Team! 🚀\n` +
      `I would like to inquire about starting a new high-performance website project:\n\n` +
      `📌 *Selected Package:* ${packageName} (${pages} Pages)\n` +
      `🎨 *Preferred Design Hub:* ${templateName}\n` +
      `💰 *Estimated Budget:* ${priceFormatted}\n` +
      (selectedAddons.length > 0 ? `➕ *Add-ons Included:* ${selectedAddons.join(', ')}\n` : '') +
      `🌐 *Reference URL:* ${currentUrl}\n\n` +
      `Please provide details on project timeline, milestone schedule, and onboarding steps. Thank you!`;
  } else {
    text = `Halo Tim WebScale! 🚀\n` +
      `Saya tertarik memesan pembuatan website dengan rincian berikut:\n\n` +
      `📌 *Pilihan Paket:* ${packageName} (${pages} Halaman)\n` +
      `🎨 *Konsep Desain:* ${templateName}\n` +
      `💰 *Estimasi Biaya:* ${priceFormatted}\n` +
      (selectedAddons.length > 0 ? `➕ *Fitur Tambahan:* ${selectedAddons.join(', ')}\n` : '') +
      `🌐 *Link Referensi:* ${currentUrl}\n\n` +
      `Mohon info ketersediaan slot pengerjaan dan prosedur pendaftaran proyek. Terima kasih!`;
  }

  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
