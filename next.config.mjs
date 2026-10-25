/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/people-advisory-organisation-setup',
        destination: '/services/strategic-hr-consulting',
        permanent: true,
      },
      {
        source: '/services/labour-law-compliance-people-audits',
        destination: '/services/labour-law-compliance-audits',
        permanent: true,
      },
      {
        source: '/services/people-systems-payroll-compensation',
        destination: '/services/hr-transformation',
        permanent: true,
      },
      {
        source: '/services/employee-relations-workplace-investigations',
        destination: '/services/talent-employee-experience',
        permanent: true,
      },
      {
        source: '/services/strategic-talent-succession-planning',
        destination: '/services/organisational-development',
        permanent: true,
      },
      {
        source: '/services/leadership-capability-corporate-training',
        destination: '/learning',
        permanent: true,
      },
      {
        source: '/insights/scaling-beyond-founders-organisational-design',
        destination: '/insights/why-performance-management-fails-even-when-the-process-exists',
        permanent: true,
      },
      {
        source: '/insights/statutory-compliance-labour-law-risk-mitigation',
        destination: '/insights/how-to-prepare-for-an-hr-process-review',
        permanent: true,
      },
      {
        source: '/insights/modern-compensation-frameworks-and-hrms-alignment',
        destination: '/insights/what-a-useful-hr-dashboard-should-help-leaders-decide',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
