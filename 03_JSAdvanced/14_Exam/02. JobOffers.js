class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        const addedCandidates = [];
        const keys = ['name', 'education', 'yearsExperience'];
        candidates.map(e => e
            .split('-')
            .reduce((acc, curr, i) => {
                if (i == 2) {
                    curr = Number(curr);
                }
                return ({ ...acc, [keys[i]]: curr });
            }, {}))
            .forEach(c => {
                const candidate = this.jobCandidates.find(e => e.name == c.name);
                if (candidate && candidate.yearsExperience < c.yearsExperience) {
                    candidate.yearsExperience = c.yearsExperience;
                } else {
                    this.jobCandidates.push(c);
                }
                if (!addedCandidates.includes(c.name)) {
                    addedCandidates.push(c.name);
                }
            });
        return `You successfully added candidates: ${addedCandidates.join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        const [person, minimalExp] = chosenPerson.split('-');
        const candidate = this.jobCandidates.find(e => e.name == person);
        if (!candidate) {
            throw new Error(`${person} is not in the candidates list!`);
        }
        if (candidate.yearsExperience < minimalExp) {
            throw new Error(`${person} does not have enough experience as ${this.position}, minimum requirement is ${minimalExp} years.`);
        }
        this.jobCandidates.find(e => e.name == person).yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${person}.`;
    }

    salaryBonus(name) {
        const candidate = this.jobCandidates.find(e => e.name == name);
        if (!candidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if (candidate && candidate.education == 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        }
        if (candidate && candidate.education == 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        }
        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }

    candidatesDatabase() {
        if (this.jobCandidates.length == 0) {
            throw new Error('Candidate Database is empty!');
        }
        const result = ['Candidates list:'];
        this.jobCandidates.sort((a, b) => (a.name).localeCompare(b.name)).forEach(c => result.push(`${c.name}-${c.yearsExperience}`));
        return result.join('\n');
    }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18", "Daniel Jones- Bachelor-19"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());

