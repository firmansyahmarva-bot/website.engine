import Link from 'next/link';
import { ArrowRight, Sparkles, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { ToolItem } from '@/content/tools';
import { generateDirectWhatsAppUrl } from '@/lib/whatsapp';

interface ToolCtaProps {
  tool: ToolItem;
}

export default function ToolCta({ tool }: ToolCtaProps) {
  const ctaHref =
    tool.ctaType === 'configure'
      ? '/configure'
      : tool.ctaType === 'audit-gratis'
      ? '/audit-gratis'
      : '/website-packages';

  const ctaBtnText =
    tool.ctaType === 'configure'
      ? 'Buka Konfigurator Website'
      : tool.ctaType === 'audit-gratis'
      ? 'Dapatkan Audit Gratis'
      : 'Lihat Paket Website Bisnis';

  const whatsappUrl = generateDirectWhatsAppUrl(`Tools: ${tool.name}`);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white p-8 md:p-12 shadow-xl border border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-semibold mb-4 border border-blue-400/20">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Solusi Rekayasa Website Profesional</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
          {tool.ctaTitle}
        </h3>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8">
          {tool.ctaDescription}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-blue-600/30 text-center"
          >
            <span>{ctaBtnText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-white text-sm font-semibold border border-slate-700 transition-colors text-center"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Diskusi WhatsApp Langsung</span>
          </a>
        </div>

        {/* Highlights */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Skor Google PageSpeed 100/100</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero-Malware & Hostinger/Edge Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Setup Konversi & WhatsApp Otomatis</span>
          </div>
        </div>
      </div>
    </div>
  );
}
