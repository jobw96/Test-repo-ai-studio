import { LucideIcon } from 'lucide-react';

export interface NavLink {
    label: string;
    href: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    year: string;
    client: string;
    isLive?: boolean;
    isCaseStudy?: boolean;
    isAward?: boolean;
    isOpenSource?: boolean;
}

export interface SkillGroup {
    title: string;
    icon: LucideIcon;
    items: { label: string; subLabel?: string }[];
}

export interface Service {
    title: string;
    description: string;
    icon: LucideIcon;
    tags: string[];
}

export interface ExperienceItem {
    role: string;
    period: string;
    company: string;
    description: string;
    tags: string[];
}

export interface Testimonial {
    text: string;
    author: string;
    role: string;
    image: string;
}
