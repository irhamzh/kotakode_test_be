import { BaseEntity, BaseEntityWithUUID } from "src/common/base.entity";
import { Staff } from "src/modules/staff/entities/staff.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity({ name: 'attendances'})
export class Attendance extends BaseEntity {
    @Column({ nullable: true})
    arrivalTime: Date;

    @Column({ nullable: true})
    exitTime: Date;

    @Column()
    staffId: string;

    @ManyToOne(() => Staff, (staff) => staff.attendances)
    staff: Staff;
}