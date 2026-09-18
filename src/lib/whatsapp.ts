import { PricingBreakdown } from '@/types';
import { formatIDR } from '@/content/pricing';

export const WHATSAPP_PHONE_NUMBER = '6281233367191'; // JasaWebsite WhatsApp business number

export function generateWhatsAppMessage(breakdown: PricingBreakdown): string {
  const featureList =
    breakdown.selectedFeatures.length > 0
      ? breakdown.selectedFeatures.map((f) => f.name.id).join(', ')
      : 'Fitur Standar';

  const domainLabel =
    breakdown.domainOption === 'existing'
      ? 'Sudah Memiliki Domain Sendiri'
      : 'Termasuk Registrasi Domain (.com / .id)';

  const hostingLabel =
    breakdown.hostingOption === 'existing'
      ? 'Sudah Memiliki Hosting Sendiri'
      : 'Termasuk Cloud SSD Hosting 1 Tahun';

  const message = [
    `Halo Tim Website Platform, saya ingin berkonsultasi mengenai pembuatan website dengan rincian konfigurasi berikut:`,
    ``,
    `*RINCIAN SPESIFIKASI WEBSITE*`,
    `• Tipe Website: ${breakdown.websiteType.name.id}`,
    `• Konsep Desain: ${breakdown.design.name.id}`,
    `• Jumlah Halaman: ${breakdown.pageCount} Halaman`,
    `• Fitur Terpilih: ${featureList}`,
    `• Status Domain: ${domainLabel}`,
    `• Status Hosting: ${hostingLabel}`,
    ``,
    `*ESTIMASI BIAYA INVESTASI:*`,
    `• Total Estimasi: ${formatIDR(breakdown.estimatedTotal)}`,
    ``,
    `Mohon informasi ketersediaan slot pengerjaan dan langkah selanjutnya. Terima kasih!`,
  ].join('\n');

  return message;
}

export function generateWhatsAppUrl(breakdown: PricingBreakdown): string {
  const message = generateWhatsAppMessage(breakdown);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encoded}`;
}

export function generateDirectWhatsAppUrl(context: string): string {
  const message = `Halo Tim Website Platform, saya ingin konsultasi terkait ${context}. Mohon informasi selengkapnya.`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
