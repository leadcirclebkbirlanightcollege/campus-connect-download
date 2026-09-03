export interface ReleaseConfig {
  appName: string;
  version: string;
  versionCode: number;
  apkUrl: string;
  apkFileName: string;
  releaseDate: string;
  fileSize: string;
  fileSizeBytes?: number;
  minAndroidVersion: string;
  targetAndroidVersion?: string;
  packageName: string;
  sha256: string;
  status: 'available' | 'maintenance' | 'unavailable';
  statusMessage?: string;
  institution: string;
  department: string;
  officialDomain: string;
  releaseNotes: string[];
}

export const DEFAULT_APP_CONFIG: ReleaseConfig = {
  appName: "Campus Connect",
  version: "1.0.0",
  versionCode: 100,
  apkUrl: "/downloads/campus-connect-v1.0.0.apk",
  apkFileName: "campus-connect-v1.0.0.apk",
  releaseDate: "September 2026",
  fileSize: "24.8 MB",
  fileSizeBytes: 26004684,
  minAndroidVersion: "Android 8.0 (Oreo) and above",
  targetAndroidVersion: "Android 14 (API 34)",
  packageName: "in.indevs.campusconnect",
  sha256: "a7f3e498c89b012948d39e248b9cf6e021d6e35ab78c1308e2f8149e21785f40",
  status: "available",
  statusMessage: "",
  institution: "B. K. Birla Night College, Kalyan",
  department: "Department of Computer Science",
  officialDomain: "download.campusconnect.indevs.in",
  releaseNotes: [
    "Official inaugural release for B. K. Birla Night College, Kalyan.",
    "Integrated Student Dashboard with real-time academic schedules & updates.",
    "Official Announcements & Circulars from the Department of Computer Science.",
    "Authorized Attendance Tracking & live percentage metrics.",
    "Digital Student Identity Card with cryptographic campus verification.",
    "Interactive College Events, Activities, and Competitions directory.",
    "E-Cell Experience: Discover Vision to Venture initiatives and startup activities.",
    "Faculty & Academic Workspace for authorized attendance and lecture management."
  ]
};
