// ── User Types ──────────────────────────────────────────
export type UserRole = 'student' | 'instructor' | 'admin';

export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: UserRole;
  bio?: string;
  linkedin_url?: string;
  created_at: string;
}

// ── Course Types ─────────────────────────────────────────
export type CourseLevel    = 'beginner' | 'intermediate' | 'advanced';
export type CourseCategory =
  | 'ai-ml'
  | 'web-development'
  | 'mobile'
  | 'design'
  | 'career';

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail_url: string;
  instructor_id: string;
  instructor?: User;
  category: CourseCategory;
  level: CourseLevel;
  duration_hours: number;
  total_lessons: number;
  price: number;        // 0 = free
  is_published: boolean;
  tags: string[];
  created_at: string;
  updated_at: string;
  _count?: { enrollments: number };
}

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  description?: string;
  youtube_video_id: string;   // unlisted YouTube video
  duration_minutes: number;
  order_index: number;
  resource_urls?: string[];   // PDF / file links
  is_preview: boolean;        // free preview lesson
}

// ── Enrollment Types ─────────────────────────────────────
export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  course?: Course;
  enrolled_at: string;
  completed_at?: string;
  progress_percent: number;
}

export interface LessonProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  is_completed: boolean;
  completed_at?: string;
}

// ── Event Types ──────────────────────────────────────────
export type EventType = 'workshop' | 'webinar' | 'bootcamp' | 'meetup' | 'competition';

export interface AcademyEvent {
  id: string;
  title: string;
  slug: string;
  description: string;
  event_type: EventType;
  thumbnail_url?: string;
  start_date: string;
  end_date: string;
  is_online: boolean;
  location?: string;
  meeting_link?: string;
  is_free: boolean;
  max_capacity?: number;
  created_at: string;
  _count?: { registrations: number };
}

// ── Certificate Types ────────────────────────────────────
export interface Certificate {
  id: string;
  user_id: string;
  course_id: string;
  user?: User;
  course?: Course;
  issued_at: string;
  verify_code: string;    // unique UUID for public verification
}

// ── Blog Types ───────────────────────────────────────────
export type BlogCategory = 'ai' | 'tech' | 'career' | 'tutorial' | 'news';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;        // Markdown
  thumbnail_url?: string;
  author_id: string;
  author?: User;
  category: BlogCategory;
  tags: string[];
  is_published: boolean;
  published_at?: string;
  created_at: string;
}

// ── API Response Types ───────────────────────────────────
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
  total_pages: number;
}
