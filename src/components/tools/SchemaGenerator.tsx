'use client';

import { useState } from 'react';
import { Code2, Copy, Check, Download, ExternalLink, Plus, Trash2, Building, HelpCircle, Users } from 'lucide-react';

type SchemaType = 'LocalBusiness' | 'Organization' | 'FAQPage';

interface FAQItemState {
  id: string;
  question: string;
  answer: string;
}

export default function SchemaGenerator() {
  const [schemaType, setSchemaType] = useState<SchemaType>('LocalBusiness');
  const [copied, setCopied] = useState(false);

  // LocalBusiness State
  const [lbData, setLbData] = useState({
    subType: 'ProfessionalService',
    name: 'JasaWebsite Indonesia',
    image: 'https://jasawebsite.net/logo.png',
    telephone: '+62-812-3336-7191',
    url: 'https://jasawebsite.net',
    priceRange: 'Rp 1.500.000 - Rp 15.000.000',
    streetAddress: 'Jl. Jenderal Sudirman Kav. 52-53',
    addressLocality: 'Jakarta Selatan',
    addressRegion: 'DKI Jakarta',
    postalCode: '12190',
    addressCountry: 'ID',
    openingHours: 'Mo,Tu,We,Th,Fr 08:30-17:30',
  });

  // Organization State
  const [orgData, setOrgData] = useState({
    name: 'PT Platform Solusi Digital',
    legalName: 'PT Platform Solusi Digital Indonesia',
    url: 'https://jasawebsite.net',
    logo: 'https://jasawebsite.net/logo.png',
    telephone: '+62-812-3336-7191',
    contactType: 'customer service',
    socialLinks: 'https://instagram.com/websiteplatform,\nhttps://linkedin.com/company/websiteplatform',
  });

  // FAQPage State
  const [faqs, setFaqs] = useState<FAQItemState[]>([
    {
      id: '1',
      question: 'Berapa lama proses pembuatan website di JasaWebsite?',
      answer:
        'Proses pengerjaan website memakan waktu 3 hingga 7 hari kerja tergantung paket dan kelengkapan materi konten bisnis Anda.',
    },
    {
      id: '2',
      question: 'Apakah website sudah termasuk hosting dan nama domain?',
      answer:
        'Ya, seluruh paket website kami sudah termasuk registrasi nama domain pilihan (.com / .id) dan Cloud SSD Hosting selama 1 tahun penuh.',
    },
    {
      id: '3',
      question: 'Apakah saya bisa mengubah isi konten website sendiri di kemudian hari?',
      answer:
        'Tentu. Tim kami memberikan dokumentasi panduan lengkap dan dashboard kelola konten yang mudah dipahami tanpa perlu kemampuan coding.',
    },
  ]);

  const addFaq = () => {
    setFaqs((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        question: '',
        answer: '',
      },
    ]);
  };

  const removeFaq = (id: string) => {
    setFaqs((prev) => prev.filter((f) => f.id !== id));
  };

  const updateFaq = (id: string, field: 'question' | 'answer', value: string) => {
    setFaqs((prev) => prev.map((f) => (f.id === id ? { ...f, [field]: value } : f)));
  };

  // Generate structured object
  let schemaObject: Record<string, unknown> = {};

  if (schemaType === 'LocalBusiness') {
    schemaObject = {
      '@context': 'https://schema.org',
      '@type': lbData.subType,
      name: lbData.name,
      image: lbData.image,
      '@id': lbData.url,
      url: lbData.url,
      telephone: lbData.telephone,
      priceRange: lbData.priceRange,
      address: {
        '@type': 'PostalAddress',
        streetAddress: lbData.streetAddress,
        addressLocality: lbData.addressLocality,
        addressRegion: lbData.addressRegion,
        postalCode: lbData.postalCode,
        addressCountry: lbData.addressCountry,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:30',
          closes: '17:30',
        },
      ],
    };
  } else if (schemaType === 'Organization') {
    const sameAsArr = orgData.socialLinks
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    schemaObject = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: orgData.name,
      legalName: orgData.legalName,
      url: orgData.url,
      logo: orgData.logo,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: orgData.telephone,
        contactType: orgData.contactType,
        areaServed: 'ID',
        availableLanguage: ['Indonesian', 'English'],
      },
      sameAs: sameAsArr,
    };
  } else if (schemaType === 'FAQPage') {
    schemaObject = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs
        .filter((f) => f.question.trim() && f.answer.trim())
        .map((f) => ({
          '@type': 'Question',
          name: f.question.trim(),
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.answer.trim(),
          },
        })),
    };
  }

  const jsonString = JSON.stringify(schemaObject, null, 2);
  const fullHtmlSnippet = `<script type="application/ld+json">\n${jsonString}\n</script>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullHtmlSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/ld+json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `schema-${schemaType.toLowerCase()}.jsonld`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Schema Type Switcher */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          type="button"
          onClick={() => setSchemaType('LocalBusiness')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            schemaType === 'LocalBusiness'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Building className="w-4 h-4" />
          <span>Local Business / Kantor Cabang</span>
        </button>

        <button
          type="button"
          onClick={() => setSchemaType('Organization')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            schemaType === 'Organization'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Organization / Perusahaan</span>
        </button>

        <button
          type="button"
          onClick={() => setSchemaType('FAQPage')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
            schemaType === 'FAQPage'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>FAQPage (Tanya Jawab SERP)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form */}
        <div className="lg:col-span-6 space-y-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-blue-600" />
            <span>Formulir Entitas {schemaType}</span>
          </h3>

          {/* LocalBusiness Form */}
          {schemaType === 'LocalBusiness' && (
            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Sub-Tipe Bisnis</label>
                <select
                  value={lbData.subType}
                  onChange={(e) => setLbData({ ...lbData, subType: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white"
                >
                  <option value="ProfessionalService">ProfessionalService (Jasa / Konsultan)</option>
                  <option value="LocalBusiness">LocalBusiness (Umum)</option>
                  <option value="Restaurant">Restaurant (Restoran / Kafe)</option>
                  <option value="Store">Store (Toko Fisik)</option>
                  <option value="MedicalBusiness">MedicalBusiness (Klinik / Dokter)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nama Bisnis</label>
                  <input
                    type="text"
                    value={lbData.name}
                    onChange={(e) => setLbData({ ...lbData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nomor Telepon</label>
                  <input
                    type="text"
                    value={lbData.telephone}
                    onChange={(e) => setLbData({ ...lbData, telephone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Alamat Jalan</label>
                <input
                  type="text"
                  value={lbData.streetAddress}
                  onChange={(e) => setLbData({ ...lbData, streetAddress: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Kota</label>
                  <input
                    type="text"
                    value={lbData.addressLocality}
                    onChange={(e) => setLbData({ ...lbData, addressLocality: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Provinsi</label>
                  <input
                    type="text"
                    value={lbData.addressRegion}
                    onChange={(e) => setLbData({ ...lbData, addressRegion: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Kode Pos</label>
                  <input
                    type="text"
                    value={lbData.postalCode}
                    onChange={(e) => setLbData({ ...lbData, postalCode: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Website URL</label>
                  <input
                    type="url"
                    value={lbData.url}
                    onChange={(e) => setLbData({ ...lbData, url: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Rentang Harga (priceRange)</label>
                  <input
                    type="text"
                    value={lbData.priceRange}
                    onChange={(e) => setLbData({ ...lbData, priceRange: e.target.value })}
                    placeholder="Rp 50.000 - Rp 500.000"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Organization Form */}
          {schemaType === 'Organization' && (
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nama Organisasi</label>
                  <input
                    type="text"
                    value={orgData.name}
                    onChange={(e) => setOrgData({ ...orgData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nama Legal (PT / CV)</label>
                  <input
                    type="text"
                    value={orgData.legalName}
                    onChange={(e) => setOrgData({ ...orgData, legalName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Website URL</label>
                  <input
                    type="url"
                    value={orgData.url}
                    onChange={(e) => setOrgData({ ...orgData, url: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Logo URL</label>
                  <input
                    type="url"
                    value={orgData.logo}
                    onChange={(e) => setOrgData({ ...orgData, logo: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Profil Sosial Media (SameAs, satu per baris)
                </label>
                <textarea
                  rows={3}
                  value={orgData.socialLinks}
                  onChange={(e) => setOrgData({ ...orgData, socialLinks: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 font-mono text-xs"
                />
              </div>
            </div>
          )}

          {/* FAQPage Form */}
          {schemaType === 'FAQPage' && (
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={faq.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Pertanyaan #{idx + 1}</span>
                    {faqs.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeFaq(faq.id)}
                        className="text-slate-400 hover:text-rose-600 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => updateFaq(faq.id, 'question', e.target.value)}
                    placeholder="Tuliskan pertanyaan yang sering ditanyakan..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white font-medium"
                  />
                  <textarea
                    rows={2}
                    value={faq.answer}
                    onChange={(e) => updateFaq(faq.id, 'answer', e.target.value)}
                    placeholder="Tuliskan jawaban yang lengkap dan jelas..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white resize-none"
                  />
                </div>
              ))}

              <button
                type="button"
                onClick={addFaq}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Tambah Pertanyaan Baru</span>
              </button>
            </div>
          )}
        </div>

        {/* Right JSON-LD Output */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between bg-white p-3 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold text-slate-800">Kode JSON-LD Siap Pakai:</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Tersalin!' : 'Salin JSON-LD'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh File</span>
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl bg-slate-950 p-4 font-mono text-xs text-emerald-400 border border-slate-800 overflow-x-auto max-h-[520px]">
            <pre className="whitespace-pre-wrap">{fullHtmlSnippet}</pre>
          </div>

          <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-between text-xs text-slate-600">
            <span>Uji validitas kode di validator resmi Google:</span>
            <a
              href="https://search.google.com/test/rich-results"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:underline font-semibold"
            >
              <span>Google Rich Results Test</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
