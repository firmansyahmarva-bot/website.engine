import { WHATSAPP_PHONE_NUMBER } from './whatsapp';
export { WHATSAPP_PHONE_NUMBER };

export interface LeadSubmissionData {
  fullName: string;
  whatsapp: string;
  companyName?: string;
  industry?: string;
  packageChoice?: string;
  city?: string;
  notes?: string;
}

export async function submitLead(data: LeadSubmissionData): Promise<{ success: boolean; whatsappFallbackUrl: string }> {
  const cleanPhone = data.whatsapp.replace(/[^0-9]/g, '');
  
  // Format prefilled WhatsApp message for immediate fallback or redirect
  const waLines = [
    `*KONSULTASI PEMBUATAN WEBSITE*`,
    `• Nama: ${data.fullName}`,
    `• WhatsApp: ${cleanPhone}`,
    data.companyName ? `• Perusahaan/Brand: ${data.companyName}` : '',
    data.city ? `• Kota/Wilayah: ${data.city}` : '',
    data.industry ? `• Industri: ${data.industry}` : '',
    data.packageChoice ? `• Paket Diminati: ${data.packageChoice}` : '',
    data.notes ? `• Catatan: ${data.notes}` : '',
    ``,
    `Mohon estimasi pengerjaan dan langkah selanjutnya. Terima kasih!`
  ].filter(Boolean);

  const fallbackUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(waLines.join('\n'))}`;

  // Dispatch analytics event if available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'Lead',
        event_label: data.packageChoice || 'General Consultation',
        value: 1,
      });
    } catch (e) {
      console.warn('Analytics event dispatch failed', e);
    }
  }

  try {
    const response = await fetch('/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      return { success: Boolean(result.success), whatsappFallbackUrl: fallbackUrl };
    }
  } catch (err) {
    console.warn('Contact PHP submission failed, using WhatsApp fallback', err);
  }

  return { success: true, whatsappFallbackUrl: fallbackUrl };
}
