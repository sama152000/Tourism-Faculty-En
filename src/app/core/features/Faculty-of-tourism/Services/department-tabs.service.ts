import { Injectable } from '@angular/core';
import { DepartmentTabsData, DepartmentsData } from '../model/departments.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentTabsService {

  getDepartmentTabsData(): DepartmentTabsData {
    return {
      title: 'Academic Departments',
      subtitle: 'Explore our specialized departments and their comprehensive programs',
      departments: [
        {
          id: 'tourism-studies',
          name: 'Tourism Studies',
          title: 'Department of Tourism Studies',
          overview: 'The Tourism Studies Department is dedicated to providing comprehensive education in tourism planning, destination management, and sustainable tourism development. Our program combines theoretical knowledge with practical experience to prepare students for leadership roles in the global tourism industry.',
          mission: 'To develop competent tourism professionals who can contribute to sustainable tourism development while preserving cultural heritage and promoting responsible tourism practices.',
          objectives: [
            'Provide students with comprehensive knowledge of tourism systems and operations',
            'Develop skills in tourism planning and destination management',
            'Foster understanding of sustainable tourism practices',
            'Promote cultural heritage preservation through tourism',
            'Prepare students for careers in tourism organizations and government agencies'
          ],
          courses: [
            'Tourism Geography and Destinations',
            'Tourism Planning and Development',
            'Sustainable Tourism Management',
            'Cultural Heritage Tourism',
            'Tourism Marketing and Promotion',
            'Tourism Economics and Finance',
            'Tour Operations Management',
            'Tourism Policy and Legislation'
          ],
          careerOpportunities: [
            'Tourism Development Officer',
            'Destination Marketing Manager',
            'Tourism Consultant',
            'Cultural Heritage Tourism Specialist',
            'Tourism Research Analyst',
            'Government Tourism Officer',
            'Tourism Project Manager',
            'Sustainable Tourism Coordinator'
          ],
          facultyMembers: 18,
          students: 320,
          image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=600',
          icon: 'pi pi-globe'
        },
        
        {
          id: 'hotel-management',
          name: 'Hotel Management',
          title: 'Department of Hotel Management',
          overview: 'The Hotel Management Department focuses on developing future leaders in the hospitality industry. Our comprehensive program covers all aspects of hotel operations, from front office management to food and beverage operations, providing students with hands-on experience in modern hotel facilities.',
          mission: 'To prepare skilled hospitality professionals who can excel in hotel operations, management, and service delivery while maintaining the highest standards of guest satisfaction and operational efficiency.',
          objectives: [
            'Develop expertise in hotel operations and management',
            'Master food and beverage management techniques',
            'Understand financial management in hospitality',
            'Develop leadership and customer service skills',
            'Learn revenue management and hotel marketing strategies'
          ],
          courses: [
            'Hotel Operations Management',
            'Food and Beverage Management',
            'Front Office Operations',
            'Housekeeping Management',
            'Hotel Financial Management',
            'Revenue Management',
            'Hospitality Marketing',
            'Hotel Human Resources Management'
          ],
          careerOpportunities: [
            'Hotel General Manager',
            'Food & Beverage Manager',
            'Front Office Manager',
            'Revenue Manager',
            'Hotel Operations Manager',
            'Guest Services Manager',
            'Hotel Marketing Manager',
            'Hospitality Consultant'
          ],
          facultyMembers: 22,
          students: 280,
          image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600',
          icon: 'pi pi-building'
        },
        {
          id: 'guidance-interpretation',
          name: 'Guidance & Interpretation',
          title: 'Department of Tourism Guidance & Interpretation',
          overview: 'The Tourism Guidance & Interpretation Department specializes in training professional tour guides and interpretive specialists. Our program emphasizes Egyptology, cultural interpretation, and communication skills to create knowledgeable guides who can effectively share Egypt\'s rich heritage with visitors.',
          mission: 'To train professional tour guides and cultural interpreters who can effectively communicate Egypt\'s historical and cultural significance while providing exceptional visitor experiences.',
          objectives: [
            'Develop comprehensive knowledge of Egyptian history and culture',
            'Master interpretive and communication techniques',
            'Learn guiding skills for different types of tourists',
            'Understand tourism ethics and professional standards',
            'Develop multilingual communication abilities'
          ],
          courses: [
            'Ancient Egyptian History',
            'Islamic and Coptic Heritage',
            'Archaeological Site Interpretation',
            'Guiding Techniques and Methods',
            'Tourism Communication Skills',
            'Foreign Languages for Tourism',
            'Cultural Interpretation',
            'Museum Studies and Management'
          ],
          careerOpportunities: [
            'Licensed Tour Guide',
            'Museum Interpreter',
            'Cultural Heritage Specialist',
            'Archaeological Site Guide',
            'Tourism Information Officer',
            'Cultural Tourism Coordinator',
            'Heritage Site Manager',
            'Tourism Education Specialist'
          ],
          facultyMembers: 15,
          students: 180,
          image: 'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&w=600',
          icon: 'pi pi-users'
        },
        {
          id: 'sustainable-tourism',
          name: 'Sustainable Tourism',
          title: 'Department of Sustainable Tourism Development',
          overview: 'The Sustainable Tourism Department is our newest addition, focusing on environmentally responsible tourism practices and community-based tourism development. This forward-thinking program addresses the growing need for sustainable approaches in the tourism industry.',
          mission: 'To promote sustainable tourism practices that balance economic benefits with environmental conservation and community development, ensuring tourism contributes positively to local communities and ecosystems.',
          objectives: [
            'Develop understanding of sustainable tourism principles',
            'Learn environmental impact assessment for tourism',
            'Master community-based tourism development',
            'Understand eco-tourism and nature-based tourism',
            'Promote responsible tourism practices'
          ],
          courses: [
            'Sustainable Tourism Principles',
            'Environmental Impact Assessment',
            'Community-Based Tourism',
            'Eco-tourism Development',
            'Tourism and Climate Change',
            'Responsible Tourism Management',
            'Conservation Tourism',
            'Rural Tourism Development'
          ],
          careerOpportunities: [
            'Sustainable Tourism Consultant',
            'Eco-tourism Manager',
            'Community Tourism Coordinator',
            'Environmental Tourism Specialist',
            'Conservation Tourism Officer',
            'Sustainable Development Officer',
            'Rural Tourism Developer',
            'Corporate Sustainability Manager'
          ],
          facultyMembers: 12,
          students: 150,
          image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600',
          icon: 'pi pi-leaf'
        }
      ]
    };
  }

  getDepartments() {
    return this.getDepartmentTabsData().departments;
  }

  getDepartmentsData(): DepartmentsData {
    return {
      title: 'Our Academic Departments',
      subtitle: 'Explore the major academic departments within the Faculty of Tourism & Hotels',
      departments: [
        {
          id: '1',
          name: 'Tourism Studies',
          description: 'Focuses on tourism planning, heritage management, tour guiding, and destination development strategies.',
          image: './assets/tour4.jpg',
          link: '/departments/tourism'
        },
        {
          id: '2',
          name: 'Hotel Management',
          description: 'Specializes in hotel operations, food & beverage management, service quality, and revenue optimization.',
          image: './assets/tour12.jpeg',
          link: '/departments/hotel'
        },
        {
          id: '3',
          name: 'Guidance & Interpretation',
          description: 'Training professional tour guides and interpretive services for heritage sites and cultural tourism.',
          image: './assets/event3.jpg',
          link: '/departments/guidance'
        },
        {
          id: '4',
          name: 'Sustainable Tourism',
          description: 'Focus on eco-friendly tourism practices, environmental conservation, and community-based tourism.',
          image: './assets/event3.jpg',
          link: '/departments/sustainable'
        }
      ]
    };
  }
}
