export interface Student{
    id?:number,
    name:string,
    roll:number,
    branch:string,
    yop:number,
    email:string,
    phone:string,
}

export interface Attendance {
    id?: number,
    stuId:number,
    attendanceDate: Date,
    status: boolean
}