import Employee from "../DataTransferObject/Employee";

class EmployeeFactory {
    public createWebDevFullTime(name: string, company: string) :Employee {
        return new Employee(
            name,
            "Web Developer",
            4000000,
            "Full-Time",
            company,
            ["HTML", "CSS", "Javascript", "PHP", "Nodejs"]
        );
    }

    public createMobileDevInternship(name: string, company: string, skills: string[]) :Employee {
        return new Employee(
            name,
            "Mobile Developer",
            2000000,
            "Internship",
            company,
            skills,
        );
    }

    public createWinamoreStdDevContract(name: string, title: string, salary: number, skills: string[]) :Employee {
        return new Employee(
            name,
            title,
            salary,
            "Contract",
            "Winamore Studio",
            skills,
        );
    }
}

export default EmployeeFactory;