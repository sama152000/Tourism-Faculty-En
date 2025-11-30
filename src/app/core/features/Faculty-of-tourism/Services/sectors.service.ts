import { Injectable } from '@angular/core';
import { SectorTabsData } from '../model/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  getSectorTabsData(): SectorTabsData {
    return {
      title: 'Faculty Sectors',
      subtitle: 'Explore the specialized sectors that drive our academic and administrative excellence',
      sectors: [
        {
          id: 'academic-affairs',
          name: 'Academic Affairs',
          title: 'Academic Affairs Sector',
          overview: 'The Academic Affairs Sector oversees all educational programs, curriculum development, and academic standards within the faculty. This sector ensures the delivery of high-quality education that meets international standards and industry requirements.',
          mission: 'To maintain academic excellence through innovative curriculum design, effective teaching methodologies, and continuous improvement of educational programs that prepare students for successful careers in tourism and hospitality.',
          objectives: [
            'Develop and update curriculum to meet industry standards',
            'Ensure quality assurance in all academic programs',
            'Facilitate faculty professional development',
            'Promote innovative teaching and learning methods',
            'Establish partnerships with international institutions'
          ],
          activities: [
            'Curriculum Review and Development',
            'Academic Program Accreditation',
            'Faculty Training and Development',
            'Student Academic Support',
            'International Exchange Programs'
          ],
          responsibilities: [
            'Academic Program Management',
            'Quality Assurance Oversight',
            'Faculty Performance Evaluation',
            'Student Academic Progress Monitoring',
            'Educational Policy Implementation'
          ],
          facultyMembers: 45,
          staff: 12,
          icon: 'pi pi-book'
        },
        {
          id: 'student-affairs',
          name: 'Student Affairs',
          title: 'Student Affairs Sector',
          overview: 'The Student Affairs Sector is dedicated to supporting student life, welfare, and extracurricular activities. This sector ensures that students have access to comprehensive support services that enhance their academic journey and personal development.',
          mission: 'To provide comprehensive student support services that foster personal growth, academic success, and professional development while creating a vibrant campus community.',
          objectives: [
            'Provide comprehensive student support services',
            'Organize extracurricular activities and events',
            'Facilitate student leadership development',
            'Ensure student welfare and well-being',
            'Promote cultural and social integration'
          ],
          activities: [
            'Student Orientation Programs',
            'Career Counseling and Guidance',
            'Cultural and Social Events',
            'Student Club Management',
            'Academic Advising Services'
          ],
          responsibilities: [
            'Student Registration and Records',
            'Disciplinary Affairs Management',
            'Student Housing Coordination',
            'Financial Aid Administration',
            'Alumni Relations'
          ],
          facultyMembers: 25,
          staff: 18,
          icon: 'pi pi-users'
        },
        {
          id: 'research-development',
          name: 'Research & Development',
          title: 'Research & Development Sector',
          overview: 'The Research & Development Sector promotes and coordinates research activities within the faculty. This sector focuses on advancing knowledge in tourism and hospitality through innovative research projects and scholarly publications.',
          mission: 'To advance scientific knowledge and innovation in tourism and hospitality through high-quality research that contributes to industry development and academic excellence.',
          objectives: [
            'Promote research culture within the faculty',
            'Secure funding for research projects',
            'Facilitate collaboration with industry partners',
            'Support faculty and student research initiatives',
            'Disseminate research findings through publications'
          ],
          activities: [
            'Research Project Coordination',
            'Grant Application Support',
            'Academic Conference Organization',
            'Research Publication Assistance',
            'Industry Partnership Development'
          ],
          responsibilities: [
            'Research Strategy Development',
            'Funding Opportunity Identification',
            'Research Ethics Oversight',
            'Publication Quality Control',
            'Research Impact Assessment'
          ],
          facultyMembers: 30,
          staff: 8,
          icon: 'pi pi-search'
        },
        {
          id: 'community-service',
          name: 'Community Service',
          title: 'Community Service Sector',
          overview: 'The Community Service Sector manages the faculty\'s engagement with local communities and tourism development initiatives. This sector ensures that the faculty contributes meaningfully to regional tourism development and community welfare.',
          mission: 'To strengthen the connection between the faculty and local communities through sustainable tourism development projects and community engagement initiatives.',
          objectives: [
            'Develop community-based tourism projects',
            'Provide tourism consulting services',
            'Support local heritage preservation',
            'Facilitate student community engagement',
            'Promote sustainable tourism practices'
          ],
          activities: [
            'Community Tourism Development',
            'Heritage Site Conservation Projects',
            'Local Guide Training Programs',
            'Tourism Awareness Campaigns',
            'Volunteer Service Coordination'
          ],
          responsibilities: [
            'Community Partnership Management',
            'Project Implementation Oversight',
            'Impact Assessment and Reporting',
            'Stakeholder Engagement',
            'Sustainability Monitoring'
          ],
          facultyMembers: 20,
          staff: 15,
          icon: 'pi pi-heart'
        }
      ]
    };
  }

  getSectors() {
    return this.getSectorTabsData().sectors;
  }
}