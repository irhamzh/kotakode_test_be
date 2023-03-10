import { StaffMiddleware } from './staff.middleware';

describe('StaffMiddleware', () => {
  it('should be defined', () => {
    expect(new StaffMiddleware()).toBeDefined();
  });
});
