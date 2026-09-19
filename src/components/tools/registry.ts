import React from 'react';
import {
  Tags,
  MessageSquare,
  Gauge,
  Calculator,
  Code2,
  Share2,
  Search,
  Monitor,
  Eye,
  Link2,
  Sparkles,
  QrCode,
  FileImage,
  Lightbulb,
  KeyRound,
  Palette,
  AtSign,
  FileSignature,
  Globe,
} from 'lucide-react';

// Existing 10 tools
import MetaTagGenerator from '@/components/tools/MetaTagGenerator';
import WhatsAppLinkGenerator from '@/components/tools/WhatsAppLinkGenerator';
import WebsiteSpeedEstimator from '@/components/tools/WebsiteSpeedEstimator';
import RoasCalculator from '@/components/tools/RoasCalculator';
import SchemaGenerator from '@/components/tools/SchemaGenerator';
import OgPreview from '@/components/tools/OgPreview';
import SerpCharacterCounter from '@/components/tools/SerpCharacterCounter';
import ViewportTester from '@/components/tools/ViewportTester';
import ContrastChecker from '@/components/tools/ContrastChecker';
import UtmBuilder from '@/components/tools/UtmBuilder';

// 8 New SEO Tools
import QrCodeGenerator from '@/components/tools/QrCodeGenerator';
import ImageCompressor from '@/components/tools/ImageCompressor';
import BusinessNameGenerator from '@/components/tools/BusinessNameGenerator';
import PasswordGenerator from '@/components/tools/PasswordGenerator';
import ColorPaletteGenerator from '@/components/tools/ColorPaletteGenerator';
import BioLinkGenerator from '@/components/tools/BioLinkGenerator';
import EmailSignatureGenerator from '@/components/tools/EmailSignatureGenerator';
import FaviconGenerator from '@/components/tools/FaviconGenerator';

export const TOOL_COMPONENTS: Record<string, React.ComponentType> = {
  // Existing 10 tools
  'meta-tag-generator': MetaTagGenerator,
  'whatsapp-link-generator': WhatsAppLinkGenerator,
  'website-speed-estimator': WebsiteSpeedEstimator,
  'roas-calculator': RoasCalculator,
  'schema-generator': SchemaGenerator,
  'og-preview': OgPreview,
  'serp-character-counter': SerpCharacterCounter,
  'viewport-tester': ViewportTester,
  'contrast-checker': ContrastChecker,
  'utm-builder': UtmBuilder,

  // 8 New Tools
  'qr-code-generator': QrCodeGenerator,
  'kompres-gambar': ImageCompressor,
  'generator-nama-usaha': BusinessNameGenerator,
  'generator-password': PasswordGenerator,
  'generator-palet-warna': ColorPaletteGenerator,
  'generator-link-bio': BioLinkGenerator,
  'generator-tanda-tangan-email': EmailSignatureGenerator,
  'generator-favicon': FaviconGenerator,
};

export const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Tags,
  MessageSquare,
  Gauge,
  Calculator,
  Code2,
  Share2,
  Search,
  Monitor,
  Eye,
  Link2,
  Sparkles,
  QrCode,
  FileImage,
  Lightbulb,
  KeyRound,
  Palette,
  AtSign,
  FileSignature,
  Globe,
};
