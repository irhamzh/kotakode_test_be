import { Injectable, NestMiddleware } from '@nestjs/common';
import { DifferentStaffError } from 'src/errors/ResourceError';
import { Staff } from '../staff/entities/staff.entity';

// Implemented middleware for 'staffs' route update to
// do validations (a staff can't update other staff's data)
@Injectable()
export class UpdateStaffMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: () => void) {
    const staffId = req.params.id;
    const requesterStaffId = await Staff.findOne({
      where: {accessToken: req.headers.authorization?.split(" ")[1]}
    })

    if (staffId && requesterStaffId && staffId != requesterStaffId.id){
      throw  DifferentStaffError();
    }

    next();
  }
}
