import mysql from 'mysql2/promise';
import { config } from './config';
import { awaitable } from '@/lib/asyncHelper';
import getLogger from '@/root/logger';

let connection : mysql.Connection | null = null;

async function getConnection() {
    if (connection) return connection;

    connection = await mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database,
    })

    return connection;
}

export async function addActivity(activity: string) {
    const query = `INSERT INTO Activity (activity) VALUES (?)`;
    const params = [activity];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to add activity: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.insertId as number;
}

export async function addPassport(passport_num: string, issue_date: string, expire: string, place_of_issue: string) {
    const query = `INSERT INTO Passport (passport_number, issue_date, expire, place_of_issue) VALUES (?, ?, ?, ?)`;
    const params = [passport_num, issue_date, expire, place_of_issue];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to add passport: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.insertId as number;
}

export async function addPersonType(person_type: string) {
    const query = `INSERT INTO PersonType (type) VALUES (?)`;
    const params = [person_type];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to add person type: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.insertId as number;
}

export async function addVisaType(type: string, desc: string, fee: number, validity: number) {
    const query = `INSERT INTO VisaType (type, description, fee, max_validity_period) VALUES (?, ?, ?, ?)`;
    const params = [type, desc, fee, validity];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to add visa type: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.insertId as number;
}

export async function setPersonEligibility(person_id: number, visa_id: number) {
    const query = `INSERT INTO EligiblePerson (person, visa_type) VALUES (?, ?)`;
    const params = [person_id, visa_id];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to set person eligibility: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.insertId as number;
}

export async function setActivityEligibility(visa_id: number, activity_id: number, eligibility: boolean) {
    const query = `INSERT INTO ActivityEligibility (visa_type, activity, eligibility) VALUES (?, ?, ?)`;
    const params = [visa_id, activity_id, eligibility];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to set activity eligibility: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.insertId as number;
}

export async function addController(first_name: string, last_name: string, email: string) {
    const query = `INSERT INTO Controller (first_name, last_name, email) VALUES (?, ?, ?)`;
    const params = [first_name, last_name, email];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to add controller: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.insertId as number;
}

export async function addCandidate(email: string, gender: string, birthday: string, first_name: string, last_name: string, nationality: string, passport: number, prev_passport?: number) {
    const query = `INSERT INTO Candidate (email, gender, birthday, first_name, last_name, nationality, passport${prev_passport? ', prev_passport' : ''}) VALUES (?, ?, ?, ?, ?, ?, ?${prev_passport? ', ?' : ''})`;
    const params = [email, gender, birthday, first_name, last_name, nationality, passport, prev_passport];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to add candidate: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.insertId as number;
}

export async function addTravelHistory(candidate_id: number, country: string, start_date: string, end_date: string) {
    const query = `INSERT INTO Visits (candidate, country, start_date, end_date) VALUES (?, ?, ?, ?)`;
    const params = [candidate_id, country, start_date, end_date];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to add travel history: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.insertId as number;
}

export async function addVisaApplication(visa_type: number, candidate: number, reason: string, bio_page?: string, photo?: string) {
    const query = `INSERT INTO Visa (visa_type, candidate, bio_page, photo, reason, status) VALUES (?, ?, ?, ?, ?, ?)`;
    const params = [visa_type, candidate, bio_page, photo, reason, "PENDING"];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to add visa: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.insertId as number;
}

export async function setVisaFlightNumber(visa_id: number, flight_number: string) {
    const query = `UPDATE Visa SET flight_number = ? WHERE id = ?`;
    const params = [flight_number, visa_id];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to set visa flight number: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.affectedRows as number;
}

export async function setVisaController(visa_id: number, controller_id: number) {
    const query = `UPDATE Visa SET controller = ? WHERE id = ?`;
    const params = [controller_id, visa_id];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to set visa controller: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.affectedRows as number;
}

export async function setVisaFingerprint(visa_id: number, fingerprint: string) {
    const query = `UPDATE Visa SET fingerprint = ? WHERE id = ?`;
    const params = [fingerprint, visa_id];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to set visa fingerprint: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.affectedRows as number;
}

export async function setVisaStatus(visa_id: number, status: string, granted_date?: string, remarks?: string) {
    const query = `UPDATE Visa SET status = ?, granted_date = ?, remarks = ? WHERE id = ?`;
    const params = [status, granted_date, remarks, visa_id];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to set visa status: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.affectedRows as number;
}

export async function scheduleInterview(visa_id: number, timestamp: number) {
    const query = `INSERT INTO Interview (visa, interview_time, status) VALUES (?, ?, ?)`;
    const params = [visa_id, timestamp, "SCHEDULED"];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to add interview: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.insertId as number;
}

export async function setInterviewStatus(interview_id: number, interviewer: string, status: string, remarks: string) {
    const query = `UPDATE Interview SET interviewer = ?, status = ?, remarks = ? WHERE id = ?`;
    const params = [interviewer, status, remarks, interview_id];

    const conn = await getConnection();

    const [result, error] = await awaitable(conn.execute(query, params));

    if (error) {
        getLogger('error').error(`Failed to set interview status: ${error}`);
        return -1;
    }

    const [res, _] = result as any;
    return res.affectedRows as number;
}


export async function getVisaTypes() {
    // call getEligiblePersons and make a list
    // call getActivityEligibility and make a list

    /*
    return VisaType[] where VisaType = {
        id: number,
        type: string,
        description: string,
        fee: number,
        max_validity_period: number,
        eligible_persons: PersonType[],
        activity_eligibility: Activity[]
    }

    where PersonType = {
        id: number,
        type: string
    }

    where Activity = {
        id: number,
        activity: string,
        eligibility: boolean
    }
    */

    const query = `
        SELECT 
            VisaType.id AS VisaTypeId, 
            VisaType.type AS VisaType,
            PersonType.type AS AllowedPerson,
            Activity.activity AS AllowedActivity,
            ActivityEligibility.eligibility AS Eligibility
        FROM 
            VisaType 
        LEFT JOIN 
            EligiblePerson ON VisaType.id = EligiblePerson.visa_type 
        LEFT JOIN 
            PersonType ON EligiblePerson.person = PersonType.id
        LEFT JOIN 
            ActivityEligibility ON VisaType.id = ActivityEligibility.visa_type 
        LEFT JOIN 
            Activity ON ActivityEligibility.activity = Activity.id;
    `;

    const conn = await getConnection();


    const [queryResult, error] = await awaitable(conn.execute(query));

    if (error) {
        getLogger('error').error(`Failed to set interview status: ${error}`);
        throw new Error(`Failed to get visa types: ${error}`);
    }

    const [results, _] = queryResult as any;

    const visaTypes = results.reduce((acc: any, curr: any) => {
        const { VisaTypeId, VisaType, AllowedPerson, AllowedActivity: Activity, Eligibility } = curr;

        if (!acc[VisaTypeId]) {
            acc[VisaTypeId] = {
                id: VisaTypeId,
                type: VisaType,
                eligible_persons: [],
                allowed_activities: [],
                non_allowed_activities: []
            };
        }

        if (AllowedPerson) {
            acc[VisaTypeId].eligible_persons.push(AllowedPerson);
        }

        if (Activity) {
            if (Eligibility) {
                acc[VisaTypeId].allowed_activities.push(Activity);
            } else {
                acc[VisaTypeId].non_allowed_activities.push(Activity);
            }
        }

        return acc;
    }, {}); 

    Object.keys(visaTypes).forEach((key: any) => {
        visaTypes[key].eligible_persons = visaTypes[key].eligible_persons.filter((v: any, i: any, a: any) => a.indexOf(v) === i);
        visaTypes[key].allowed_activities = visaTypes[key].allowed_activities.filter((v: any, i: any, a: any) => a.indexOf(v) === i);
        visaTypes[key].non_allowed_activities = visaTypes[key].non_allowed_activities.filter((v: any, i: any, a: any) => a.indexOf(v) === i);
    })

    return visaTypes;
}


