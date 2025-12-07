// src/models/roleAssignment.model.ts
import { BaseModel } from '~~/server/models/base.model';
import type { RoleAssignment } from '~~/shared/schemas/models/roleAssignment.schema';

const COLLECTION = 'RoleAssignment';

export class RoleAssignmentModel extends BaseModel<RoleAssignment> {
  constructor() {
    super(COLLECTION);
  }
}
