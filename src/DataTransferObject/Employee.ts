import { employmentType } from "../types/types";

class Employee {
    private _name: string;
    private _title: string;
    private _salary: number;
    private _employmentOption: employmentType;
    private _company: string;
    private _skills: string[];

    constructor(
        name: string,
        title: string,
        salary: number,
        employmentOption: employmentType,
        company: string,
        skills: string[]
    ){
        this._name = name;
        this._title = title;
        this._salary = salary;
        this._employmentOption = employmentOption;
        this._company = company;
        this._skills = skills
    }

    get name(): string {
        return this._name;
    }

    get title(): string {
        return this._title;
    }

    get salary(): number {
        return this._salary;
    }

    get employmentOption(): employmentType {
        return this._employmentOption;
    }

    get company(): string {
        return this._company;
    }

    get skills(): string[] {
        return this._skills;
    }
}

export default Employee