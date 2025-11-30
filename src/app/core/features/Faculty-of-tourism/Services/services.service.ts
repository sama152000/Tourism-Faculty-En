import { Injectable } from '@angular/core';
import { ServiceTabsData } from '../model/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  getServiceTabsData(): ServiceTabsData {
    return {
      title: 'Faculty Services',
      subtitle: 'Comprehensive services designed to support students, faculty, and the broader community',
      services: [
        {
          id: 'academic-support',
          name: 'Academic Support',
          title: 'Academic Support Services',
          overview: 'Our Academic Support Services provide comprehensive assistance to students throughout their academic journey. From tutoring and study groups to academic counseling and career guidance, we ensure every student has the resources needed for success.',
          mission: 'To provide comprehensive academic support that enables all students to achieve their full potential and succeed in their chosen fields of study.',
          objectives: [
            'Provide personalized academic counseling',
            'Offer tutoring and study support programs',
            'Facilitate peer learning opportunities',
            'Support students with learning difficulties',
            'Enhance study skills and academic performance'
          ],
          offerings: [
            'Individual Academic Counseling',
            'Peer Tutoring Programs',
            'Study Skills Workshops',
            'Academic Writing Support',
            'Exam Preparation Sessions'
          ],
          benefits: [
            'Improved Academic Performance',
            'Enhanced Study Skills',
            'Increased Confidence',
            'Better Time Management',
            'Stronger Academic Foundation'
          ],
          staffMembers: 15,
          users: 850,
          icon: 'pi pi-graduation-cap'
        },
        {
          id: 'library-resources',
          name: 'Library & Resources',
          title: 'Library & Information Resources',
          overview: 'Our state-of-the-art library provides extensive collections of books, journals, digital resources, and research databases specifically focused on tourism, hospitality, and related fields. We offer both physical and digital access to support learning and research.',
          mission: 'To provide comprehensive information resources and services that support teaching, learning, and research activities within the faculty.',
          objectives: [
            'Maintain comprehensive academic collections',
            'Provide digital access to global resources',
            'Offer research assistance and training',
            'Support faculty teaching and research needs',
            'Create conducive learning environments'
          ],
          offerings: [
            'Physical and Digital Book Collections',
            'Academic Journal Subscriptions',
            'Research Database Access',
            'Study Spaces and Computer Labs',
            'Information Literacy Training'
          ],
          benefits: [
            'Access to Global Academic Resources',
            'Enhanced Research Capabilities',
            'Improved Information Literacy',
            'Collaborative Learning Spaces',
            'Professional Research Support'
          ],
          staffMembers: 12,
          users: 1200,
          icon: 'pi pi-book'
        },
        {
          id: 'career-placement',
          name: 'Career & Placement',
          title: 'Career Development & Placement Services',
          overview: 'Our Career Development & Placement Services help students transition from academic life to professional careers. We provide career counseling, internship opportunities, job placement assistance, and ongoing professional development support.',
          mission: 'To bridge the gap between academic learning and professional practice by providing comprehensive career development and placement services.',
          objectives: [
            'Provide career counseling and guidance',
            'Facilitate internship and job placements',
            'Develop industry partnerships',
            'Enhance employability skills',
            'Support alumni career advancement'
          ],
          offerings: [
            'Career Counseling Sessions',
            'Resume and Interview Preparation',
            'Internship Program Coordination',
            'Job Fair Organization',
            'Professional Skills Workshops'
          ],
          benefits: [
            'Higher Employment Rates',
            'Better Career Preparation',
            'Industry Network Access',
            'Professional Skill Development',
            'Long-term Career Support'
          ],
          staffMembers: 10,
          users: 600,
          icon: 'pi pi-briefcase'
        },
        {
          id: 'technology-support',
          name: 'Technology Support',
          title: 'Information Technology Support Services',
          overview: 'Our Technology Support Services ensure that students and faculty have access to modern computing resources, reliable internet connectivity, and technical assistance. We maintain computer labs, learning management systems, and provide IT training.',
          mission: 'To provide reliable, modern technology infrastructure and support services that enhance teaching, learning, and administrative efficiency.',
          objectives: [
            'Maintain modern IT infrastructure',
            'Provide technical support and training',
            'Ensure network security and reliability',
            'Support digital learning initiatives',
            'Facilitate technology integration in education'
          ],
          offerings: [
            'Computer Lab Access',
            'Network and Internet Services',
            'Learning Management System Support',
            'Software Training Programs',
            'Technical Help Desk Services'
          ],
          benefits: [
            'Enhanced Digital Literacy',
            'Reliable Technology Access',
            'Improved Learning Efficiency',
            'Modern Computing Resources',
            'Comprehensive Technical Support'
          ],
          staffMembers: 8,
          users: 1500,
          icon: 'pi pi-desktop'
        }
      ]
    };
  }

  getServices() {
    return this.getServiceTabsData().services;
  }
}