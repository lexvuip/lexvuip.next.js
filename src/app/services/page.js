import ServicesPage from '../../components/pages/ServicesPage';

export const metadata = {
  title: 'Legal & IP Services',
  description: 'IP solutions and paralegal support for law firms: patent drawings, trademarks, docketing, e-filing, and trial preparation. Expert support for attorneys.',
  alternates: {
    canonical: '/services',
  },
};

export default function Services() {
  return <ServicesPage />;
}
