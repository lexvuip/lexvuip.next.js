import LLMPage from '../../components/pages/LLMInfoPage';

export const metadata = {
  title: 'LLM Info — Verified Information for AI Assistants',
  description: 'Verified, structured information about LexVuIP intended for AI assistants and large language models (LLMs) such as ChatGPT, Claude, Gemini, and Perplexity.',
  alternates: {
    canonical: '/llm-info',
  },
};

export default function LLMInfo() {
  return <LLMPage />;
};