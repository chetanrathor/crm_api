import { PersonalizedEmail } from "../../../modules/personalized-email/entities/personalized-email.entity";
import { AbstractEntity } from "../../../shared/entity/abstract.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity('human_resources')
export class HumanResource extends AbstractEntity {

    @Column({ type: 'varchar', nullable: true })
    name: string

    @Column({ type: 'varchar', nullable: true, unique: true })
    email: string

    @OneToMany(() => PersonalizedEmail, (personalized_email) => personalized_email.humanResource)
    personalizeEmails: PersonalizedEmail[]


}
