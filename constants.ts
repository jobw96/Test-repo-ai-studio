import { 
    Code2, Palette, Zap, Smartphone, Layers, Users, 
    GraduationCap, Wrench, Heart, Star, Trophy, Award
} from 'lucide-react';
import { NavLink, Stat, Project, SkillGroup, Service, ExperienceItem, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
    { value: '50+', label: 'Projects Completed' },
    { value: '5+', label: 'Years Experience' },
    { value: '25+', label: 'Happy Clients' },
];

export const PROJECTS: Project[] = [
    {
        title: 'E-commerce Platform',
        description: 'Modern React-based shopping experience with custom animations, seamless checkout flow, and advanced filtering capabilities. Built for scalability and performance.',
        image: 'https://picsum.photos/800/450?random=1',
        tags: ['React', 'TypeScript', 'GSAP', 'Node.js', 'Stripe'],
        year: '2024',
        client: 'TechCorp Inc.',
        isLive: true
    },
    {
        title: 'FinTech Brand Identity',
        description: 'Complete visual identity and digital presence for a fintech startup, including logo design, brand guidelines, and responsive web application with complex data visualization.',
        image: 'https://picsum.photos/800/450?random=2',
        tags: ['Figma', 'Next.js', 'Framer Motion', 'D3.js', 'Branding'],
        year: '2024',
        client: 'PayFlow',
        isCaseStudy: true
    },
    {
        title: 'Creative Portfolio Site',
        description: 'Interactive portfolio website featuring WebGL animations, smooth scroll effects, and creative transitions. Optimized for performance while maintaining visual impact.',
        image: 'https://picsum.photos/800/450?random=3',
        tags: ['Three.js', 'WebGL', 'GSAP', 'Vanilla JS'],
        year: '2023',
        client: 'Creative Agency',
        isAward: true
    },
    {
        title: 'Design System & UI Kit',
        description: 'Comprehensive design system with 50+ components, design tokens, and documentation. Built for consistency and scalability across multiple products.',
        image: 'https://picsum.photos/800/450?random=4',
        tags: ['Figma', 'Storybook', 'React', 'Design Tokens'],
        year: '2023',
        client: 'Open Source',
        isOpenSource: true
    }
];

export const SKILLS: SkillGroup[] = [
    {
        title: 'Technical Skills',
        icon: Code2,
        items: [
            { label: 'React & Next.js', subLabel: 'Expert' },
            { label: 'TypeScript', subLabel: 'Advanced' },
            { label: 'UI/UX Design', subLabel: 'Expert' },
            { label: 'GSAP & Animations', subLabel: 'Advanced' },
            { label: 'Three.js & WebGL', subLabel: 'Intermediate' }
        ]
    },
    {
        title: 'Tools & Software',
        icon: Wrench,
        items: [
            { label: 'Figma' }, { label: 'VS Code' }, { label: 'Adobe CC' },
            { label: 'Blender' }, { label: 'Git' }, { label: 'Docker' }
        ]
    },
    {
        title: 'Education',
        icon: GraduationCap,
        items: [
            { label: 'Computer Science, BS', subLabel: 'Stanford University • 2019' },
            { label: 'UX Design Certificate', subLabel: 'Google Career Certificates • 2020' }
        ]
    },
    {
        title: 'Interests',
        icon: Heart,
        items: [
            { label: 'Photography' }, { label: 'Hiking' },
            { label: 'Music' }, { label: 'Gaming' }
        ]
    },
    {
        title: 'Core Expertise',
        icon: Star,
        items: [
            { label: 'JavaScript & Vue.js', subLabel: 'Expert' },
            { label: 'Python & Django', subLabel: 'Expert' },
            { label: 'Brand Strategy', subLabel: 'Expert' },
            { label: 'Motion Graphics', subLabel: 'Advanced' },
            { label: 'Mobile Design', subLabel: 'Advanced' }
        ]
    },
    {
        title: 'Tech Stack',
        icon: Layers,
        items: [
            { label: 'Vue.js' }, { label: 'Node.js' }, { label: 'Python' },
            { label: 'MongoDB' }, { label: 'AWS' }, { label: 'GraphQL' }
        ]
    },
    {
        title: 'Certifications',
        icon: Award,
        items: [
            { label: 'AWS Certified Solutions Architect', subLabel: 'Amazon Web Services • 2023' },
            { label: 'Certified Scrum Master', subLabel: 'Scrum Alliance • 2022' }
        ]
    },
    {
        title: 'Recognition',
        icon: Trophy,
        items: [
            { label: 'Awwwards Winner' }, { label: 'CSS Awards' },
            { label: 'Dev Speaker' }, { label: 'Tech Mentor' }
        ]
    }
];

export const SERVICES: Service[] = [
    {
        title: 'Frontend Development',
        description: 'Building responsive, performant web applications with modern technologies like React, Next.js, and TypeScript. Focus on clean code and optimal user experience.',
        icon: Code2,
        tags: ['React', 'Next.js', 'TypeScript']
    },
    {
        title: 'UI/UX Design',
        description: 'Creating intuitive user interfaces and seamless user experiences through research, prototyping, and testing. Design systems and brand consistency are key focuses.',
        icon: Palette,
        tags: ['Figma', 'Prototyping', 'User Testing']
    },
    {
        title: 'Creative Coding',
        description: 'Crafting interactive experiences and animations that bring designs to life using GSAP, Three.js, and Canvas. Making the web more engaging and memorable.',
        icon: Zap,
        tags: ['GSAP', 'Three.js', 'WebGL']
    },
    {
        title: 'Mobile Development',
        description: 'Building cross-platform mobile applications with React Native and Progressive Web Apps. Ensuring consistent experience across all devices and platforms.',
        icon: Smartphone,
        tags: ['React Native', 'PWA', 'Expo']
    },
    {
        title: 'Brand Identity',
        description: 'Developing comprehensive brand identities including logo design, visual guidelines, and digital asset creation. Helping brands tell their story visually.',
        icon: Layers,
        tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity']
    },
    {
        title: 'Consulting & Training',
        description: 'Providing strategic guidance on design systems, frontend architecture, and team processes. Training teams on modern development practices and design thinking.',
        icon: Users,
        tags: ['Strategy', 'Workshops', 'Mentoring']
    }
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: 'Senior Frontend Developer',
        period: '2022 - Present',
        company: 'TechCorp Inc. • San Francisco, CA',
        description: 'Leading frontend development for multiple high-traffic web applications. Architected and implemented design system used across 15+ products. Mentored junior developers and established best practices for React development.',
        tags: ['React', 'TypeScript', 'Next.js', 'Leadership']
    },
    {
        role: 'Full-Stack Developer',
        period: '2020 - 2022',
        company: 'StartupXYZ • Remote',
        description: 'Built and maintained full-stack applications from concept to production. Collaborated closely with designers to implement pixel-perfect UIs. Optimized application performance resulting in 40% faster load times.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
        role: 'UI/UX Designer & Developer',
        period: '2019 - 2020',
        company: 'Design Studio ABC • New York, NY',
        description: 'Designed and developed websites for various clients ranging from small businesses to Fortune 500 companies. Specialized in creating responsive designs and implementing complex animations.',
        tags: ['Figma', 'JavaScript', 'GSAP', 'WordPress']
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        text: "Alex transformed our digital presence completely. His design sense and technical expertise are unmatched. The website he created exceeded all our expectations.",
        author: "Sarah Mitchell",
        role: "CEO, TechStartup",
        image: "https://picsum.photos/100/100?random=10"
    },
    {
        text: "Working with Alex was a game-changer for our startup. His attention to detail and ability to translate complex ideas into beautiful, functional designs is remarkable.",
        author: "Michael Johnson",
        role: "Creative Director, Design Co",
        image: "https://picsum.photos/100/100?random=11"
    },
    {
        text: "The level of professionalism and creativity Alex brings to the table is rare. He not only delivered on time but also provided valuable insights that improved our product.",
        author: "Emily Rodriguez",
        role: "Founder, Innovation Labs",
        image: "https://picsum.photos/100/100?random=12"
    }
];