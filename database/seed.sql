-- Initial Seed Data for iTech MM Solutions (Intas MN Technology)

USE `itechmm`;

-- Insert Default Company Info
INSERT INTO `company_info` (
  `company_name`, `brand_name`, `tagline`, 
  `about_text`, `mission`, `vision`, 
  `primary_email`, `primary_phone`, `address`, `working_hours`
) VALUES (
  'iTech MM Solutions',
  'Intas MN Technology',
  'Engineering Intelligent Digital Solutions for Growing Businesses',
  'iTech MM Solutions is a technology firm specializing in bespoke software architecture, cross-platform mobile apps, cloud computing, and AI process automation.',
  'To empower modern businesses with scalable, high-performance technology that accelerates digital transformation.',
  'To become Myanmar’s leading premier technology and software engineering partner recognized internationally.',
  'contact@itechmm.com',
  '+95 9 123 456 789',
  'Yangon, Myanmar',
  'Monday - Saturday: 9:00 AM - 6:00 PM'
) ON DUPLICATE KEY UPDATE `company_name` = VALUES(`company_name`);

-- Insert Default Services
INSERT INTO `services` (`slug`, `title`, `short_description`, `category`, `icon_name`, `features_json`, `sort_order`, `is_published`) VALUES
(
  'web-applications',
  'Custom Web Application Development',
  'Modern, responsive, high-performance web applications built using Next.js, React, Node.js, and cloud backends.',
  'Web Development',
  'Globe',
  '["Modern Next.js & React Frameworks", "SEO Optimized & Lightning Fast", "Secure Authentication & Role Access", "RESTful & GraphQL API Integrations"]',
  1,
  1
),
(
  'mobile-app-development',
  'Mobile Application Development',
  'Cross-platform iOS and Android mobile apps engineered with Flutter and React Native for silky-smooth performance.',
  'Mobile Development',
  'Smartphone',
  '["Native-Feel iOS & Android Apps", "Offline Storage & Sync", "Push Notifications & Real-Time Sync", "Play Store & App Store Deployment"]',
  2,
  1
),
(
  'enterprise-software',
  'Enterprise Software & ERP',
  'Tailored ERP, CRM, inventory, POS, and business management software custom-built for your business workflows.',
  'Enterprise',
  'Layers',
  '["Custom Business Logic Modeling", "Role-Based Access Control", "Automated Financial & Stock Reporting", "Seamless Legacy Migration"]',
  3,
  1
),
(
  'cloud-devops',
  'Cloud Infrastructure & DevOps',
  'Reliable cloud architecture setup, Docker containerization, CI/CD pipelines, Nginx load balancing, and VPS management.',
  'Infrastructure',
  'Cloud',
  '["Ubuntu VPS & AWS/GCP Setup", "Nginx Reverse Proxy & SSL Automation", "Automated Backups & Monitoring", "High Availability & Scalability"]',
  4,
  1
),
(
  'ai-automation',
  'AI & Process Automation',
  'AI-powered chatbots, intelligent document processing, data pipelines, and workflow automation.',
  'AI & Automation',
  'Cpu',
  '["Custom LLM & AI Agents", "Workflow Automation (n8n/Zapier/Python)", "Automated Customer Support Chatbots", "Smart Data Analytics"]',
  5,
  1
),
(
  'it-consulting',
  'IT Consulting & Security Audit',
  'Strategic technology advisory, code review, performance optimization, and cybersecurity audits.',
  'Consulting',
  'ShieldCheck',
  '["System Architecture Consulting", "Vulnerability & Security Audit", "Performance Tuning & Speed Optimization", "24/7 SLA Technical Support"]',
  6,
  1
) ON DUPLICATE KEY UPDATE `title` = VALUES(`title`);
