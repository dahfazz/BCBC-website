import { Injectable } from '@angular/core';
import { Partner } from '../models/partner.model';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  private mockPartners: Partner[] = [
    {
      id: 1,
      name: 'SportGear Pro',
      logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=SportGear+Pro',
      website: 'https://example.com',
      description: 'Fournisseur premium d\'équipements et de vêtements de sport'
    },
    {
      id: 2,
      name: 'Energy Boost',
      logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Energy+Boost',
      website: 'https://example.com',
      description: 'Partenaire officiel en nutrition sportive et hydratation'
    },
    {
      id: 3,
      name: 'TechFit Analytics',
      logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=TechFit',
      website: 'https://example.com',
      description: 'Analyses sportives avancées et suivi de performance'
    },
    {
      id: 4,
      name: 'City Bank',
      logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=City+Bank',
      website: 'https://example.com',
      description: 'Services financiers et partenaire bancaire communautaire'
    },
    {
      id: 5,
      name: 'Air Transport Co',
      logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Air+Transport',
      website: 'https://example.com',
      description: 'Partenaire officiel de voyage et de logistique'
    },
    {
      id: 6,
      name: 'Prime Fitness',
      logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Prime+Fitness',
      website: 'https://example.com',
      description: 'Centre d\'entraînement et de bien-être partenaire'
    },
    {
      id: 7,
      name: 'Media Sports Network',
      logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=MSN',
      website: 'https://example.com',
      description: 'Partenaire de diffusion et de couverture médiatique'
    },
    {
      id: 8,
      name: 'Local Auto Group',
      logo: 'https://via.placeholder.com/200x100/333333/FFFFFF?text=Auto+Group',
      website: 'https://example.com',
      description: 'Sponsor officiel automobile et transport'
    }
  ];

  getPartners(): Partner[] {
    return this.mockPartners;
  }
}
