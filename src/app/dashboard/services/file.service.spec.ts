import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FileService } from './file.service';
import { STORAGE } from '../../common';

describe('FileService', () => {
  let service: FileService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        FileService,
        { provide: STORAGE, useValue: localStorage },
      ],
    });
    service = TestBed.inject(FileService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding requests.
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch list', () => {
    const mockData: any[] = []; // Replace with your mock data

    service.list().subscribe(data => {
      expect(data.length).toBe(mockData.length);
    });

    const req = httpMock.expectOne('assets/dashboard-manifest.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should get data', () => {
    const mockData: any = {};
    const options = { range: '2024-4', hash: 'hash', skipCache: true };

    service.getData(options).subscribe(data => {
      expect(data).toEqual(mockData);
      expect(localStorage[options.range]).toBeTruthy();
    });

    const req = httpMock.expectOne(`assets/dashboard-data/${options.range}.json`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

  it('should get data from cache', () => {
    const mockData: any = {
      hash: 'hashof20244',
      data: {
        id: '2024-4',
        year: 2024,
        month: 4,
        days: 30,
      },
    };
    localStorage['2024-4'] = JSON.stringify(mockData);

    const options = { range: '2024-4', hash: 'hashof20244' };
    service.getData(options).subscribe(data => {
      expect(data).toEqual(mockData.data);
    });

    httpMock.expectNone(`assets/dashboard-data/${options.range}.json`);
  });

  it('should get data when hash not match', () => {
    const mockData: any = {
      hash: 'hashof20244',
      data: {
        id: '2024-4',
        year: 2024,
        month: 4,
        days: 30,
      },
    };
    localStorage['2024-4'] = JSON.stringify(mockData);

    const options = { range: '2024-4', hash: 'hashof2024-4' };
    service.getData(options).subscribe(data => {
      expect(data).toEqual(mockData.data);
    });

    const req = httpMock.expectOne(`assets/dashboard-data/${options.range}.json`);
    expect(req.request.method).toBe('GET');
    req.flush(mockData.data);
  });
});
