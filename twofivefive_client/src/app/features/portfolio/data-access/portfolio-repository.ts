import { type Observable } from 'rxjs';
import { type CaseStudy } from '../models/case-study';

export abstract class PortfolioRepository {
  abstract list(): Observable<readonly CaseStudy[]>;
  abstract featured(): Observable<readonly CaseStudy[]>;
  abstract bySlug(slug: string): Observable<CaseStudy | null>;
}
