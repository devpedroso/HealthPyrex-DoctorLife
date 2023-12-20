import { Appointment } from "./appointment";
import { Doctor } from "./doctor";
import { Patient } from "./patient";

export type Exam = {
  id: number;
  title: string;
  description: string;
  date: string;
  doctorId: number;
  patientId: number;
  patient: Patient;
  doctor: Doctor;
};
