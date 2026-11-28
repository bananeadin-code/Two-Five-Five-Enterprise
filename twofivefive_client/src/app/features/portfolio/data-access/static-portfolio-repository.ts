import { Injectable } from '@angular/core';
import { type Observable, of } from 'rxjs';
import { CASE_STUDIES } from '../data/case-studies';
import { type CaseStudy } from '../models/case-study';
import { PortfolioRepository } from './portfolio-repository';

@Injectable()
export class StaticPortfolioRepository extends PortfolioRepository {
  list(): Observable<readonly CaseStudy[]> {
    return of(CASE_STUDIES);
  }

  featured(): Observable<readonly CaseStudy[]> {
    return of(CASE_STUDIES.filter((study) => study.featured));
  }

  bySlug(slug: string): Observable<CaseStudy | null> {
    return of(CASE_STUDIES.find((study) => study.slug === slug) ?? null);
  }
}
