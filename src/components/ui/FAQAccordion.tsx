import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/types';
import { generateFAQSchema } from '@/lib/seo';

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  description?: string;
}

export default function FAQAccordion({
  items,
  title = 'Pertanyaan yang Sering Diajukan (FAQ)',
  description = 'Jawaban transparan untuk pertanyaan seputar proses pengerjaan, biaya, kepemilikan, dan pemeliharaan website.',
}: FAQAccordionProps) {
  const schema = generateFAQSchema(items);

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200" aria-label="FAQ Section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200 open:border-blue-300 open:shadow-sm"
            >
              <summary className="flex items-center justify-between gap-4 p-5 text-left font-semibold text-slate-900 cursor-pointer list-none select-none hover:text-blue-600 transition-colors">
                <span className="text-base">{item.question}</span>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0" />
              </summary>
              <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
