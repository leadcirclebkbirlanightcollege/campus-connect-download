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
  apkUrl: "https://github.com/leadcirclebkbirlanightcollege/campus-connect-download/releases/download/v1.0.0/CampusConnect-v1.0.0.apk",
  apkFileName: "CampusConnect-v1.0.0.apk",
  releaseDate: "September 2026",
  fileSize: "6.9 MB",
  fileSizeBytes: 7279636,
  minAndroidVersion: "Android 8.0 (Oreo) and above",
  targetAndroidVersion: "Android 14 (API 34)",
  packageName: "in.indevs.campusconnect",
  sha256: "6ca101b1903a29a832325f95f29923ee169682000323198a749c7c0cb7d7b748",
  status: "available",
  statusMessage: "",
  institution: "B. K. Birla Night College, Kalyan",
  department: "Department of Computer Science",
  officialDomain: "bkbnc-campus.vercel.app",
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
