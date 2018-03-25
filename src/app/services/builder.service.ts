import { Contact } from './../model/contact';
import { LifeStyle } from './../model/profile/lifeStyle';
import { Habit } from './../model/profile/habit';
import { FamilyValues } from './../model/profile/familyValues';
import { Sibling } from './../model/profile/siblings';
import { CareerDetail } from './../model/profile/careerDetail';
import { Career } from './../model/profile/career';
import { CollageDetails } from './../model/profile/collageDetails';
import { PersonalDetail } from './../model/profile/personalDetails';
import { BasicDetail } from './../model/profile/basicDetail';
import { Person } from './../model/person';
import { Injectable } from '@angular/core';
import { Ethinicity } from '../model/profile/ethinicity';

@Injectable()
export class BuilderService {

  private basicDetail = new BasicDetail;
  private personalDetail = new PersonalDetail();
  private ethnicity = new Ethinicity();
  private collageDetails = new CollageDetails();
  private careerDetail = new CareerDetail();
  private sibling  = new Sibling();
  private familyValues = new FamilyValues();
  private habit = new Habit();
  private lifeStyle = new LifeStyle();
  private contact = new Contact();



  constructor() { }

  buildBasicDetails(person: Person): BasicDetail {
    this.basicDetail.bodyType = person.bodyType;
    this.basicDetail.complexion = person.complexion;
    this.basicDetail.height = person.height;
    this.basicDetail.managedBy = 'self';
    this.basicDetail.showName = true;
    this.basicDetail.weight = person.weight;
    this.basicDetail.gender = person.gender;
    return this.basicDetail;
  }

  buildPersonalDetails(person: Person): PersonalDetail {
    this.personalDetail.dob = person.dob;
    this.personalDetail.eyeColor = 'black';
    this.personalDetail.habit = null;
    this.personalDetail.maritalStatus = person.maritalStatus;
    this.personalDetail.occupation = 'Not Working';
    return this.personalDetail;
  }

  buildEthinicity(person: Person): Ethinicity {
   this.ethnicity.caste = person.cast;
   this.ethnicity.gotra = person.gotra;
   this.ethnicity.gotraToSave = person.gotraToSave;
    return this.ethnicity;
  }

  buildCollegeDetails(person: Person): CollageDetails {
    this.collageDetails.highestEducation = person.qualification;
    this.collageDetails.schoolCollegeName = person.nameOfCollage;
    this.collageDetails.subject = person.subject;
    this.collageDetails.university = person.univercity;
     return this.collageDetails;
  }

  buildCareerDetails(person: Person): CareerDetail {
    this.careerDetail.occupation = person.occupation;
    this.careerDetail.income = person.income;
    this.careerDetail.experience = 7;
    this.careerDetail.designation = person.desgination;
    return this.careerDetail;
  }

  buildSibiling(person: Person): Sibling {
    this.sibling.marriedBrothers = person.noOfMarriedBrother;
    this.sibling.marriedSister = person.noOfMarriedSisters;
    this.sibling.noOfBrothers = person.noOfBrother;
    this.sibling.noOfSister = person.noOfSisters;
    return this.sibling;
  }

  buildFamilyValues(person: Person): FamilyValues {
    this.familyValues.familyStatus = person.familyStatus;
    this.familyValues.familyType = person.familyType;
    this.familyValues.familyValue = person.familyValues;
    this.familyValues.livingWithParants = person.livingWithParants;
    return this.familyValues;
  }

  buildHabit(person: Person): Habit {
    this.habit.diet = person.eatingHabit;
    this.habit.drink = person.drink;
    this.habit.smoke = person.somke;
    this.habit.openToPets = false;
    return this.habit;
  }

  buildLifeStyle(person: Person): LifeStyle {
     this.lifeStyle.hobbies = person.hobbies;
     this.lifeStyle.foodAndCook = 'Chinese Food | Mexican Food | Italian Food | Japanese Food ' +
     '| Greek cuisine | French cuisine | Thai cuisine | Spanish cuisine | Indian cuisine |';
     this.lifeStyle.interest = 'Explore new plases';
    return this.lifeStyle;
  }

  buildContact(person: Person): Contact {
    this.contact.address = 'T3 ,Top Floor, Indus Estate multi, Karariya farm,'
    + ' Karariya, near coach factory, Bhopal, 462010';
    this.contact.email = person.email;
    this.contact.landline = '';
    this.contact.mobileNumber = person.primeryContactNo;
    this.contact.mobileNumber2 = person.secoundryContactNo;
   return this.contact;
 }

}
