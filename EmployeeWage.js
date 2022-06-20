// uC 1 If else condition

{
    const IS_ABSENT=0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == IS_ABSENT)
    {
        console.log("UC1 - Employee is absent");
        return;
    }
    else
    {
        console.log("UC1- Employee is present");
    }
}

// UC 2 Switch Case

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs = 0
{
    
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck)
    {
       case IS_PART_TIME:
            empHrs=PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs=FULL_TIME_HOURS;
            break;
        default:
            empHrs=0;
            break;
    }
    let empWage = (empHrs * WAGE_PER_HOUR);
    console.log("UC2 - Employee Wage : " + empWage);
}
// UC 3 Function

{
    let empCheck = Math.floor(Math.random() * 10) % 3;
    function getWorkingHours(empCheck)
    {
        switch (empCheck)
        {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }
    empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC3 -  " + "Hour : " + empHrs + " Employee Wage : " + empWage);
}

// UC 4 For loop (repeatation Statement)

{
    const numOfWorkinfDays=20;
    let totalEmpHrs=0;
    for(let day=0; day<numOfWorkinfDays; day++)
    {
        let empCheck = Math.floor(Math.random() * 10 ) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("UC4 - Total Hrs : " + totalEmpHrs + " Emp Wage : " + empWage);
}

// UC 5 While Loop (Repeatation statement)

{
    let numOfWorkinfDays =20;
    let maxHrsInMonth=160;
    let totalEmpHrs=0;
    let totaWorkingDays=0;
    while(totalEmpHrs <= maxHrsInMonth && totaWorkingDays < numOfWorkinfDays)
    {
        totaWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs *WAGE_PER_HOUR;
    console.log("UC5 - Total Days  " + totaWorkingDays + " : Total Hrs  " + totalEmpHrs + " : Emp Wage " + empWage);
}

// Array

    let numOfWorkinfDays =20;
    let maxHrsInMonth=160;
    let totalEmpHrs=0;
    let totaWorkingDays=0;    
    let empDailyWageArr = new Array();
    let empDailyWageMap = new Map();
    let empDailyHrsMap = new Map();

    function CalDailyWage(empHrs)
    {
        return empHrs * WAGE_PER_HOUR;
    }

    while (totalEmpHrs <= maxHrsInMonth && totaWorkingDays < numOfWorkinfDays)
    {
        totaWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10 ) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(CalDailyWage(empHrs));
    }

    let empWage = CalDailyWage(totalEmpHrs);
    console.log("UC6 - Total Days  " + totaWorkingDays + " : Total Hrs  " + totalEmpHrs + " : Emp Wage " + empWage);