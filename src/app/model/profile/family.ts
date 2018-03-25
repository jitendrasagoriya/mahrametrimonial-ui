import { FamilyMember } from './../familyMembers';
import { FamilyValues } from './familyValues';
import { Sibling } from './siblings';
import { Parants } from './parants';

export class Family {
    about: String;
    parants: Parants;
    sibling: Sibling;
    familyValue: FamilyValues;
}
