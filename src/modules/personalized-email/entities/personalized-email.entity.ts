import { HumanResource } from "../../../modules/human-resource/entities/human-resource.entity";
import { AbstractEntity } from "../../../shared/entity/abstract.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity('personalized_emails')
export class PersonalizedEmail extends AbstractEntity {

    @Column({ type: 'varchar', })
    subject: string

    @Column({ type: 'varchar', })
    body: string

    @ManyToOne(() => HumanResource, (human_resource) => human_resource.id)
    @JoinColumn({ name: 'human_resource' })
    humanResource: HumanResource

}
