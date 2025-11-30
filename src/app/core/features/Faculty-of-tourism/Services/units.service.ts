import { Injectable } from '@angular/core';
import { UnitTabsData } from '../model/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  getUnitTabsData(): UnitTabsData {
    return {
      title: 'Faculty Units',
      subtitle: 'Specialized units that provide essential support and services to our academic community',
      units: [
        {
          id: 'quality-assurance',
          name: 'Quality Assurance',
          title: 'Quality Assurance Unit',
          overview: 'The Quality Assurance Unit is responsible for maintaining and improving the quality of education and services provided by the faculty. This unit implements quality management systems, conducts regular assessments, and ensures compliance with national and international standards.',
          mission: 'To ensure continuous improvement in educational quality and institutional effectiveness through systematic monitoring, evaluation, and enhancement of all faculty operations.',
          objectives: [
            'Implement comprehensive quality management systems',
            'Conduct regular program and service evaluations',
            'Ensure compliance with accreditation standards',
            'Facilitate continuous improvement processes',
            'Promote quality culture throughout the faculty'
          ],
          functions: [
            'Academic Program Review',
            'Institutional Assessment',
            'Accreditation Preparation',
            'Quality Standards Development',
            'Performance Monitoring'
          ],
          services: [
            'Quality Auditing Services',
            'Assessment and Evaluation',
            'Standards Compliance Monitoring',
            'Quality Training Programs',
            'Improvement Planning Support'
          ],
          personnel: 8,
          capacity: 100,
          icon: 'pi pi-check-circle'
        },
        {
          id: 'training-development',
          name: 'Training & Development',
          title: 'Training & Development Unit',
          overview: 'The Training & Development Unit focuses on enhancing the skills and capabilities of faculty members, staff, and students through comprehensive training programs. This unit designs and delivers professional development initiatives that support career growth and institutional excellence.',
          mission: 'To enhance human capital development through innovative training programs that build competencies, improve performance, and support professional growth.',
          objectives: [
            'Design comprehensive training programs',
            'Enhance professional competencies',
            'Support career development initiatives',
            'Facilitate knowledge transfer and sharing',
            'Promote lifelong learning culture'
          ],
          functions: [
            'Training Needs Assessment',
            'Program Design and Development',
            'Training Delivery and Facilitation',
            'Performance Evaluation',
            'Competency Development'
          ],
          services: [
            'Professional Development Workshops',
            'Leadership Training Programs',
            'Technical Skills Development',
            'Soft Skills Enhancement',
            'Certification Programs'
          ],
          personnel: 12,
          capacity: 200,
          icon: 'pi pi-cog'
        },
        {
          id: 'international-relations',
          name: 'International Relations',
          title: 'International Relations Unit',
          overview: 'The International Relations Unit manages the faculty\'s global partnerships, exchange programs, and international collaborations. This unit facilitates student and faculty mobility, coordinates joint research projects, and promotes the faculty\'s international presence.',
          mission: 'To enhance the faculty\'s global reach and impact through strategic international partnerships, exchange programs, and collaborative initiatives.',
          objectives: [
            'Develop strategic international partnerships',
            'Facilitate student and faculty exchange programs',
            'Coordinate international research collaborations',
            'Promote global academic mobility',
            'Enhance international visibility and reputation'
          ],
          functions: [
            'Partnership Development',
            'Exchange Program Management',
            'International Project Coordination',
            'Mobility Program Administration',
            'Global Network Maintenance'
          ],
          services: [
            'Student Exchange Programs',
            'Faculty Mobility Support',
            'International Partnership Development',
            'Joint Degree Program Coordination',
            'Global Research Collaboration'
          ],
          personnel: 6,
          capacity: 150,
          icon: 'pi pi-globe'
        },
        {
          id: 'media-communications',
          name: 'Media & Communications',
          title: 'Media & Communications Unit',
          overview: 'The Media & Communications Unit manages the faculty\'s public relations, marketing, and communication strategies. This unit handles media relations, social media presence, promotional materials, and internal communications to enhance the faculty\'s visibility and reputation.',
          mission: 'To effectively communicate the faculty\'s achievements, programs, and values to internal and external stakeholders through strategic communication initiatives.',
          objectives: [
            'Develop comprehensive communication strategies',
            'Manage media relations and public image',
            'Enhance digital presence and engagement',
            'Create compelling promotional content',
            'Facilitate effective internal communications'
          ],
          functions: [
            'Public Relations Management',
            'Content Creation and Publishing',
            'Social Media Management',
            'Event Promotion and Coverage',
            'Brand Management'
          ],
          services: [
            'Media Relations Support',
            'Digital Marketing Services',
            'Content Development',
            'Event Documentation',
            'Communication Strategy Consulting'
          ],
          personnel: 10,
          capacity: 300,
          icon: 'pi pi-megaphone'
        }
      ]
    };
  }

  getUnits() {
    return this.getUnitTabsData().units;
  }
}