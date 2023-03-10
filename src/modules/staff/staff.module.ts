import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from '../attendance/entities/attendance.entity';
import { UpdateStaffMiddleware } from '../middleware/staff.middleware';

@Module({
  controllers: [StaffController],
  providers: [StaffService],
  imports: [TypeOrmModule.forFeature([Attendance])]
})
export class StaffModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(UpdateStaffMiddleware).forRoutes({
        path: "/staffs/:id",
        version: '1',
        method: RequestMethod.PUT,
      });
  }
}
