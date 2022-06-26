import { Types } from 'mongoose';

export interface UserSchemaType {
  user_id: string;
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  phone: string;
  avatar: {
    url?: string;
    filename?: string;
  };
  bio: string;
  graduation_year: string;
  stream: string;
  interests: string[];
  create_time: Date;
  oauth_provider: string;
  is_mentor: boolean;
  signup_completed: boolean;
  mentor_information: Types.ObjectId | undefined;
  bookings: Types.ObjectId[] | undefined;
  verified: boolean;
  token: string;
  issueToken: () => string;
  comparePassword: (password: string) => Promise<boolean>;
  createVerificationToken: () => string;
}

export interface AdminSchemaType {
  name: string;
  email: string;
  password: string;
  otp: number;
  validTill: Date;
  comparePassword: (password: string) => Promise<boolean>;
  verifyOTP: (otp: number) => Promise<boolean>;
  generateOTP: () => Promise<number>;
  issueToken: () => string;
}

export interface TopicSchemaType {
  value: number;
  emojiIcon: string;
  emojiBadge: string;
  motivation: string;
  topicName: string;
  topicDescription: string;
}

export interface BannerSchemaType {
  content: string;
  height: number;
  show: boolean;
}

type DayEnumType =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

interface DurationType {
  start_hour: number;
  end_hour: number;
  available: boolean;
  locale: string;
}

export interface ExperienceType {
  company: string;
  role: string;
  start_year: string;
  end_year: string;
}

export interface MentorSchemaType {
  user_id: string;
  first_name: string;
  last_name: string;
  avatar: {
    url?: string;
    filename?: string;
  };
  experiences: ExperienceType[];
  bio: string;
  expertise: string[];
  languages: string[];
  linkedIn: string;
  twitter: string;
  is_mentoring: boolean;
  topics: number[];
  time_slots: Record<DayEnumType, DurationType>;
  approved: boolean;
  top_mentor: boolean;
}

export interface Room {
  id: string; // Client version of Room may have id optional
  created_by?: string;
  name?: string;
  opts?: {
    maxPeople?: string; // Will be int parsed when used
  };
}

export interface Topic {
  value: number;
  topicName: string;
  motivation: MotivationEnumType;
  description: string;
  emojiIcon: string;
  emojiBadge: string;
}

export type MotivationEnumType =
  | 'Job Search'
  | 'Career Advice'
  | 'Mentorship'
  | 'Leadership'
  | 'Skills';

export interface AdminUser extends Express.User {
  role: 'admin' | null | undefined;
}
