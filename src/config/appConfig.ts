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
    "Official release for B. K. Birla Night College, Kalyan (Department of Computer Science).",
    "Home Dashboard: Timetable status, attendance threshold warnings, and daily check-in streaks (+10 pts/day).",
    "Academics Hub: Lectures, timetable, attendance history, assignments, documents, results, learning circles, and scan attendance.",
    "Campus Community: Events, announcements, leaderboard rankings, learning circles, points, and help & support.",
    "E-Cell ('Vision to Venture'): Ideas to Impact pipeline, student stall registrations (100 slots), and pitch initiatives.",
    "Verified Student Profile: Digital student credentials (SYCS B.Sc. CS), profile completion tracker, and privacy settings."
  ]
};
