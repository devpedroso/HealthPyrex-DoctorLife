import { Doctor } from "./doctor";
import { Patient } from "./patient";

export type Appointment = {
  id: number;
  date: string;
  doctorId: number;
  patientId: number;
  modifiedAt: string;
  title: string;
  description: string;
  patient: Patient;
  doctor: Doctor;
};
