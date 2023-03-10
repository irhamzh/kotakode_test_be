import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import { BaseEntityWithUUID } from '../../../common/base.entity';
import { hashPassword } from '../../../helpers/password.helpers';
import { Exclude } from 'class-transformer';
import { Attendance } from 'src/modules/attendance/entities/attendance.entity';

@Entity({ name: 'staffs' })
export class Staff extends BaseEntityWithUUID {
  @Column({ unique: true})
  staffId: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  passwordHash: string;

  @Exclude()
  @Column({ nullable: true })
  accessToken: string;

  @Column({ unique: true })
  username: string;

  // flag for each staff's attendance status
  @Column({ nullable: true })
  latestAttendanceId: string;

  @OneToMany(() => Attendance, (attendances) => attendances.staff)
  attendances: Attendance[];

  @BeforeInsert()
  async hashUserPassword() {
    if (this.passwordHash) {
      this.passwordHash = await hashPassword(this.passwordHash);
    }
  }
}
