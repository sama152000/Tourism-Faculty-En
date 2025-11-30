import { Injectable } from '@angular/core';
import { ContentItem, ContentData, ContactInfo } from '../model/content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contentItems: ContentItem[] = [
    // News Items
    {
      id: '1',
      title: 'Faculty Seminar on Sustainable Tourism Development',
      excerpt: 'Our faculty organized a comprehensive seminar focusing on eco-friendly and sustainable tourism development practices for the future.',
      content: `The Faculty of Tourism & Hotels recently hosted a groundbreaking seminar on sustainable tourism development, bringing together leading experts, academic researchers, and industry professionals to explore the future of eco-friendly tourism practices.

      The event, held at the faculty's main auditorium, featured keynote presentations from renowned sustainability experts who shared innovative approaches to responsible tourism management. Topics covered included environmental conservation strategies, community-based tourism initiatives, and the integration of green technologies in hospitality operations.

      Dr. Sarah Ahmed, Dean of the Faculty, emphasized the importance of preparing future tourism professionals to address environmental challenges while maintaining economic viability. "Our students need to understand that sustainable practices are not just environmentally responsible but also economically advantageous," she stated.

      The seminar included interactive workshops where participants explored case studies from successful sustainable tourism projects worldwide. Students presented their own research on local conservation efforts and proposed innovative solutions for Egypt's tourism industry.

      The event concluded with a panel discussion featuring representatives from leading eco-resorts and sustainable tourism organizations, providing valuable networking opportunities for students and faculty members alike.`,
      image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: new Date('2025-01-15'),
      category: 'news',
      link: '/news-details/1'
    },
    {
      id: '2',
      title: 'Student Workshop in Hotel Operations Management',
      excerpt: 'Students participated in an intensive workshop gaining practical insights into hospitality and hotel management best practices.',
      content: `Students from the Faculty of Tourism & Hotels participated in an intensive three-day workshop focused on hotel operations management, providing them with hands-on experience in hospitality industry best practices.

      The workshop was conducted in partnership with several five-star hotels in Luxor, allowing students to observe and participate in real-world hotel operations. Participants rotated through different departments including front office, housekeeping, food and beverage, and management.

      Industry professionals led practical sessions covering guest relations, revenue management, quality control, and staff coordination. Students learned about the latest hotel management software and digital check-in systems currently used in luxury establishments.

      "This workshop bridges the gap between theoretical knowledge and practical application," explained Professor Mohamed Hassan, who coordinated the event. "Our students gain valuable insights that will serve them well in their future careers."

      The program included simulation exercises where students handled real-world scenarios such as guest complaints, emergency situations, and special event coordination. Many participants received internship offers from the participating hotels based on their performance during the workshop.`,
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: new Date('2025-01-10'),
      category: 'news',
      link: '/news-details/2'
    },
    {
      id: '3',
      title: 'Annual Cultural Heritage Week Celebration',
      excerpt: 'The annual event showcased diverse performances and exhibits celebrating Egypt\'s rich cultural heritage and tourism significance.',
      content: `The Faculty of Tourism & Hotels celebrated its annual Cultural Heritage Week with a spectacular showcase of Egypt's rich historical legacy and its significance to modern tourism.

      The week-long celebration featured daily presentations by students and faculty members, each focusing on different aspects of Egyptian culture, from ancient pharaonic traditions to contemporary artistic expressions. The event attracted visitors from across the university and the local community.

      Interactive exhibits displayed traditional crafts, historical artifacts (replicas), and multimedia presentations showcasing famous archaeological sites. Students demonstrated traditional cooking methods and presented research on culinary tourism potential.

      Guest speakers included local historians, museum curators, and cultural preservation experts who shared insights on maintaining cultural authenticity while developing tourism offerings. The presentations emphasized the balance between accessibility and preservation.

      The celebration concluded with a traditional music and dance performance, followed by a cultural fair where students sold handmade crafts and traditional foods, with proceeds supporting the faculty's cultural preservation research projects.

      "This event reinforces our commitment to preserving and promoting Egypt's cultural heritage while training our students to be responsible cultural ambassadors," noted Dr. Amira Farouk, Professor of Cultural Tourism.`,
      image: 'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: new Date('2025-01-05'),
      category: 'news',
      link: '/news-details/3'
    },

    // Articles
    {
      id: '4',
      title: 'The Future of Digital Marketing in Tourism',
      excerpt: 'Exploring how digital transformation is reshaping marketing strategies in the tourism and hospitality industry.',
      content: `The tourism and hospitality industry is undergoing a digital revolution that is fundamentally changing how businesses connect with travelers and manage customer relationships. This transformation presents both opportunities and challenges for industry professionals.

      Social media platforms have become primary channels for destination marketing, with visual content driving booking decisions. Instagram, TikTok, and YouTube influence travel choices more than traditional advertising, requiring tourism professionals to develop new content creation skills.

      Artificial intelligence and machine learning are revolutionizing personalization in travel recommendations. Hotels and travel agencies now use sophisticated algorithms to analyze customer preferences and behavior patterns, creating customized experiences that increase satisfaction and loyalty.

      Virtual and augmented reality technologies offer unprecedented opportunities for destination marketing. Potential travelers can now take virtual tours of hotels, explore attractions, and experience destinations before booking, reducing uncertainty and increasing conversion rates.

      Data analytics has become crucial for understanding market trends and customer behavior. Tourism businesses that effectively collect and analyze customer data can make informed decisions about pricing, marketing strategies, and service improvements.

      The rise of mobile technology means that tourism experiences increasingly begin and end on smartphones. Mobile-first design and seamless digital experiences are no longer optional but essential for competitive advantage.

      As the industry continues to evolve, tourism professionals must stay current with digital trends while maintaining the human touch that makes travel experiences memorable and meaningful.`,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: new Date('2025-01-20'),
      category: 'articles',
      link: '/news-details/4'
    },
    {
      id: '5',
      title: 'Sustainable Hospitality: Best Practices for Egyptian Hotels',
      excerpt: 'A comprehensive guide to implementing sustainable practices in the Egyptian hospitality sector.',
      content: `Egypt's hospitality sector has immense potential to lead the region in sustainable tourism practices. With increasing global awareness of environmental issues, Egyptian hotels can differentiate themselves by implementing comprehensive sustainability programs.

      Energy efficiency represents the most immediate opportunity for sustainable improvements. Hotels can reduce energy consumption by 20-30% through LED lighting, smart HVAC systems, and energy management software that automatically adjusts usage based on occupancy patterns.

      Water conservation is particularly crucial in Egypt's arid climate. Successful hotels have implemented greywater recycling systems, low-flow fixtures, and drought-resistant landscaping that maintains aesthetic appeal while reducing water usage by up to 40%.

      Waste reduction programs can significantly impact both environmental footprint and operational costs. Hotels implementing comprehensive recycling, composting, and waste reduction initiatives often see substantial decreases in waste management expenses while improving their environmental credentials.

      Local sourcing of food and materials supports Egyptian communities while reducing transportation-related emissions. Hotels that partner with local farmers and artisans often discover unique offerings that enhance guest experiences while supporting regional economies.

      Staff training in sustainable practices ensures consistent implementation and creates ambassadors for environmental responsibility. Employees who understand and embrace sustainability initiatives often contribute innovative ideas for further improvements.

      Guest engagement in sustainability efforts can enhance satisfaction while reducing resource consumption. Many travelers appreciate opportunities to participate in environmental programs and view eco-friendly hotels more favorably.

      The financial benefits of sustainability often exceed initial investment costs within 2-3 years, making environmental responsibility a sound business strategy for Egyptian hospitality providers.`,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: new Date('2025-01-18'),
      category: 'articles',
      link: '/news-details/5'
    },

    // Announcements
    {
      id: '6',
      title: 'New Master\'s Program in Heritage Tourism Management',
      excerpt: 'The faculty announces a new graduate program focusing on cultural heritage preservation and sustainable tourism development.',
      content: `The Faculty of Tourism & Hotels is excited to announce the launch of our new Master's Program in Heritage Tourism Management, beginning in the fall semester of 2025. This innovative program addresses the growing need for specialized professionals in cultural heritage tourism.

      The program combines theoretical foundations in tourism management with practical skills in heritage preservation, sustainable development, and cultural interpretation. Students will engage with real-world projects in collaboration with Egyptian museums, archaeological sites, and cultural institutions.

      Core curriculum includes courses in heritage site management, cultural tourism planning, preservation technologies, visitor experience design, and sustainable tourism development. Students will also complete a capstone project working directly with local heritage sites.

      Distinguished faculty members bring extensive experience from international heritage organizations, UNESCO, and leading tourism institutions. Guest lecturers include renowned experts in archaeology, museum studies, and cultural preservation.

      Application requirements include a bachelor's degree in tourism, archaeology, history, or related field, along with demonstrated interest in cultural heritage. International students are encouraged to apply, with scholarships available for qualified candidates.

      The program features partnerships with the Egyptian Ministry of Tourism and Antiquities, providing students with access to exclusive sites and networking opportunities with industry leaders.

      Graduates will be prepared for leadership positions in heritage tourism organizations, cultural institutions, destination management companies, and government tourism agencies.

      Applications are now being accepted through the university's online portal, with a deadline of March 31, 2025. Information sessions will be held monthly at the faculty building.`,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: new Date('2025-01-22'),
      category: 'announcements',
      link: '/news-details/6'
    },
    {
      id: '7',
      title: 'Faculty Exchange Program with European Universities',
      excerpt: 'Students and faculty can now participate in exchange programs with partner universities in France, Italy, and Spain.',
      content: `The Faculty of Tourism & Hotels is pleased to announce the establishment of student and faculty exchange programs with prestigious European universities, offering unprecedented opportunities for international academic collaboration.

      Partner institutions include the University of Bologna (Italy), ESCP Business School (France), and the University of Barcelona (Spain). These partnerships provide access to different perspectives on tourism management and European hospitality industry practices.

      Student exchange opportunities are available for undergraduate juniors and seniors, as well as graduate students. Participants spend one semester abroad while maintaining progress toward their degrees at the Faculty of Tourism & Hotels.

      Exchange students will take courses in international tourism management, European hospitality systems, and regional tourism development. All courses are taught in English, though basic language skills in the host country's language are encouraged.

      Faculty exchange programs enable our professors to conduct collaborative research, share teaching methodologies, and develop joint academic projects. European faculty will also visit our campus as guest lecturers and research collaborators.

      Financial support is available through various scholarship programs, including partial funding for travel and living expenses. The faculty's international office will assist with visa applications, housing arrangements, and pre-departure preparation.

      Application procedures vary by partner institution and program duration. Interested students should maintain a minimum GPA of 3.0 and demonstrate proficiency in English. Application deadlines are typically six months before the intended exchange period.

      This initiative aligns with the faculty's commitment to internationalizing education and preparing students for careers in the global tourism industry. Participants return with enhanced language skills, cultural competency, and international networks.

      Information sessions will be conducted bi-weekly, with representatives from partner universities visiting campus during the spring semester to meet prospective exchange students.`,
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: new Date('2025-01-19'),
      category: 'announcements',
      link: '/news-details/7'
    },

    // Events
    {
      id: '8',
      title: 'Tourism & Hospitality Conference 2025',
      excerpt: 'Join industry experts and faculty members to discuss future trends in tourism education and professional practice.',
      content: `The Faculty of Tourism & Hotels proudly presents the Tourism & Hospitality Conference 2025, bringing together industry leaders, academic researchers, and students to explore the future of tourism education and professional practice.

      This year's theme, "Innovation and Sustainability in Tourism," addresses critical challenges facing the industry while highlighting opportunities for growth and development. The conference will feature keynote presentations, panel discussions, and networking sessions.

      Confirmed keynote speakers include Dr. Elena Rodriguez, Director of Sustainable Tourism at the World Tourism Organization, and Ahmed Hassan, CEO of Red Sea Global, who will share insights on mega-project development and environmental responsibility.

      Technical sessions will cover topics including digital transformation in hospitality, crisis management in tourism, cultural heritage preservation, and emerging market trends. Each session includes time for questions and discussion with presenters.

      Student research presentations will showcase innovative projects in tourism management, hospitality technology, and sustainable development. Winners of the student research competition will receive scholarships and internship opportunities.

      Industry exhibition area will feature displays from leading hotels, tour operators, technology providers, and tourism boards. Participants can explore career opportunities and learn about latest industry innovations.

      Professional development workshops will focus on practical skills including revenue management, customer service excellence, and digital marketing strategies. These sessions are designed for both students and working professionals.

      Registration includes conference materials, refreshment breaks, networking lunch, and access to all sessions. Early bird discounts are available for registrations received before February 15, 2025.

      The conference provides continuing education credits for tourism professionals and networking opportunities with industry leaders from across the region.`,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: new Date('2025-03-15'),
      category: 'events',
      link: '/news-details/8'
    },
    {
      id: '9',
      title: 'Cultural Heritage Preservation Workshop',
      excerpt: 'Students present innovative projects on preserving Egypt\'s cultural identity and promoting sustainable heritage tourism.',
      content: `The Faculty of Tourism & Hotels invites students, professionals, and community members to participate in our Cultural Heritage Preservation Workshop, featuring student presentations on innovative approaches to protecting Egypt's cultural legacy.

      Student teams will present projects developed throughout the academic year, focusing on practical solutions for heritage site management, visitor education, and community engagement. Projects include digital documentation initiatives, sustainable tourism models, and cultural interpretation programs.

      Workshop sessions will demonstrate various preservation techniques, from traditional restoration methods to cutting-edge digital technologies. Participants will learn about 3D scanning, virtual reality applications, and digital archives for cultural preservation.

      Expert panels will include archaeologists, museum professionals, and heritage tourism specialists who will provide feedback on student projects and share insights from their professional experience. Discussion topics include balancing preservation with accessibility and engaging younger generations with cultural heritage.

      Hands-on activities will allow participants to experience conservation techniques, traditional craft methods, and interpretive program development. These interactive sessions are designed to provide practical skills applicable to various heritage contexts.

      Community representatives will share perspectives on cultural preservation from local viewpoints, emphasizing the importance of involving communities in heritage tourism development and ensuring that tourism benefits reach local populations.

      The workshop concludes with an action planning session where participants develop concrete steps for implementing heritage preservation initiatives in their communities or professional contexts.

      Lunch will feature traditional Egyptian cuisine prepared according to historical recipes, providing a culinary heritage experience that complements the workshop's educational objectives.

      Registration is open to students from all disciplines, heritage professionals, and community members interested in cultural preservation. Materials will be provided, but participants are encouraged to bring notebook computers for digital exercises.`,
      image: 'https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: new Date('2025-02-28'),
      category: 'events',
      link: '/news-details/9'
    }
  ];

  getAllContent(): ContentItem[] {
    return this.contentItems;
  }

  getContentByCategory(category: string): ContentItem[] {
    if (category === 'all') {
      return this.contentItems;
    }
    return this.contentItems.filter(item => item.category === category);
  }

  getContentById(id: string): ContentItem | undefined {
    return this.contentItems.find(item => item.id === id);
  }

  getRelatedContent(category: string, currentId: string, limit: number = 3): ContentItem[] {
    return this.contentItems
      .filter(item => item.category === category && item.id !== currentId)
      .slice(0, limit);
  }

  getNextContent(currentId: string): ContentItem | undefined {
    const currentIndex = this.contentItems.findIndex(item => item.id === currentId);
    if (currentIndex >= 0 && currentIndex < this.contentItems.length - 1) {
      return this.contentItems[currentIndex + 1];
    }
    return undefined;
  }

  getPreviousContent(currentId: string): ContentItem | undefined {
    const currentIndex = this.contentItems.findIndex(item => item.id === currentId);
    if (currentIndex > 0) {
      return this.contentItems[currentIndex - 1];
    }
    return undefined;
  }

  getContentCategories(): Array<{id: string, label: string, routerLink: string}> {
    return [
      { id: 'news', label: 'News', routerLink: '/news-list?category=news' },
      { id: 'articles', label: 'Articles', routerLink: '/news-list?category=articles' },
      { id: 'announcements', label: 'Announcements', routerLink: '/news-list?category=announcements' },
      { id: 'events', label: 'Events', routerLink: '/news-list?category=events' }
    ];
  }

  getContactInfo(): ContactInfo {
    return {
      address: 'Faculty of Tourism & Hotels, Luxor University, South Valley, Luxor, Egypt',
      email: 'info@tourism.luxor.edu.eg',
      phone: '+20 95 237 1234',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.3742123456!2d32.6396!3d25.6872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQxJzE0LjAiTiAzMsKwMzgnMjIuNiJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg'
    };
  }
}