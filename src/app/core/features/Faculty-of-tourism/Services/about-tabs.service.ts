import { Injectable } from '@angular/core';
import { AboutTabsData } from '../model/about-faculty.model';

@Injectable({
  providedIn: 'root'
})
export class AboutTabsService {

  getAboutTabsData(): AboutTabsData {
    return {
      title: 'About Faculty of Tourism & Hotels',
      subtitle: 'Learn more about our faculty through our comprehensive information sections',
      sections: [
        {
          id: 'vision-mission',
          title: 'Vision & Mission',
          content: `Our Vision: To be a leading faculty in tourism and hospitality education in Egypt and the region, contributing to sustainable tourism development and cultural heritage preservation.

Our Mission: To provide high-quality education and research in tourism and hospitality management, preparing graduates who are capable of contributing effectively to the development of the tourism industry while preserving Egypt's rich cultural heritage.`,
          additionalInfo: 'We strive to create future leaders who will transform the tourism industry through innovation, sustainability, and respect for cultural diversity.',
          image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: 'goals',
          title: 'Faculty Goals',
          content: `Strategic Goals of the Faculty:

• Excellence in Academic Programs: Develop and deliver cutting-edge curriculum that meets international standards and industry needs.

• Research and Innovation: Conduct impactful research in tourism, hospitality, and heritage management.

• Community Engagement: Serve the local community through tourism development initiatives and cultural preservation projects.

• Industry Partnerships: Build strong relationships with tourism and hospitality organizations for practical training and career opportunities.

• Sustainable Development: Promote sustainable tourism practices that benefit both the environment and local communities.

• Cultural Heritage: Preserve and promote Egypt's rich cultural heritage through tourism education and research.`,
          additionalInfo: 'These goals guide our daily activities and long-term strategic planning to ensure we remain at the forefront of tourism education.',
          image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: 'dean-word',
          title: 'Dean\'s Message',
          content: `Welcome to the Faculty of Tourism & Hotels at Luxor University.

Dear Students, Faculty, and Visitors,

It is my pleasure to welcome you to our esteemed faculty, where we are committed to excellence in tourism and hospitality education. Our faculty stands as a beacon of knowledge and innovation in the heart of Luxor, one of Egypt's most significant tourist destinations.

We take pride in our comprehensive academic programs that combine theoretical knowledge with practical experience. Our graduates are well-prepared to meet the challenges of the rapidly evolving tourism industry while contributing to the sustainable development of Egypt's tourism sector.

Our faculty members are dedicated researchers and educators who work tirelessly to ensure our students receive the highest quality education. We maintain strong partnerships with leading tourism organizations and hotels to provide our students with valuable internship opportunities and career prospects.

As we look to the future, we remain committed to innovation, sustainability, and excellence in all our endeavors. Together, we will continue to shape the future of tourism education and contribute to Egypt's position as a premier global destination.

Prof. Dr. Ahmed Hassan
Dean of Faculty of Tourism & Hotels`,
          additionalInfo: 'The Dean\'s office is always open to students, faculty, and community members who wish to discuss ideas, concerns, or opportunities.',
          image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: 'history',
          title: 'Faculty History',
          content: `Historical Timeline of the Faculty:

1995: Establishment of the Faculty of Tourism & Hotels at Luxor University as one of the first specialized tourism education institutions in Upper Egypt.

2000: Introduction of the Hotel Management Department with state-of-the-art training facilities.

2005: Launch of the Graduate Studies Program offering Master's and PhD degrees in Tourism and Hotel Management.

2010: Establishment of the Tourism Guidance Department to meet the growing demand for professional tour guides.

2015: Opening of the Cultural Heritage Tourism Center to promote sustainable tourism practices.

2018: Launch of international exchange programs with European and regional universities.

2020: Development of digital learning platforms and virtual tourism experiences.

2023: Inauguration of the Modern Tourism Research Center equipped with the latest technology for tourism and hospitality research.

Today: The faculty continues to evolve, adapting to global trends in tourism while maintaining its commitment to preserving Egypt's cultural heritage and promoting sustainable tourism development.`,
          additionalInfo: 'Over nearly three decades, our faculty has graduated thousands of professionals who now work in leadership positions across Egypt and internationally.',
          image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      ]
    };
  }

  getAboutSections() {
    return this.getAboutTabsData().sections;
  }
}