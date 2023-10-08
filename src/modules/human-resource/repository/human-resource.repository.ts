import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, FindOneOptions, FindOptionsWhere, Repository } from "typeorm";
import { HumanResource } from "../entities/human-resource.entity";

@Injectable()
export class HumanResourceRepository {

    constructor(@InjectRepository(HumanResource)
    private readonly repository: Repository<HumanResource>
    ) { }
    async save(data: Partial<HumanResource>) {
        return await this.repository.save(data)
    }

    async findAndCount(options?: FindManyOptions<HumanResource>) {
        return await this.repository.findAndCount(options)
    }

    async findOne(options: FindOneOptions<HumanResource>) {
        return await this.repository.findOne(options)
    }

    async update(criterial: FindOptionsWhere<HumanResource>, data: Partial<HumanResource>) {
        return await this.repository.update(criterial, data)
    }

    async softDelete(criterial: FindOptionsWhere<HumanResource>) {
        return await this.repository.softDelete(criterial)
    }
}