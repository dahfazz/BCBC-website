import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../../services/partners.service';
import { Partner } from '../../models/partner.model';

@Component({
  selector: 'app-partners',
  imports: [],
  templateUrl: './partners.html',
  styleUrl: './partners.scss',
  standalone: true
})
export class Partners implements OnInit {
  partners: Partner[] = [];

  constructor(private partnersService: PartnersService) {}

  ngOnInit(): void {
    this.partners = this.partnersService.getPartners();
  }
}
