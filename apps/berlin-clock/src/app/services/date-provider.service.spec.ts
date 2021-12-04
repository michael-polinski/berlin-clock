import { DateProviderService } from './date-provider.service';

describe('DateProviderService', () => {
  let service: DateProviderService;

  beforeEach(() => {
    service = new DateProviderService();
  });

  it(`test that the service should create without an error.`, () => {
    expect(service).toBeTruthy();
  });

  it(`test that the property 'date$' emits the current date.`, done => {
    service.date$.subscribe(receivedDate => {
      receivedDate.setHours(receivedDate.getHours(), receivedDate.getMinutes(), receivedDate.getSeconds(), 0);

      const now = new Date();
      now.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), 0);

      expect(receivedDate).toStrictEqual(now);
      done();
    });
  });
});
