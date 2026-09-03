# Campus Connect — Official Student App Download Portal

**B. K. Birla Night College, Kalyan**  
*Department of Computer Science*

Production-ready, high-performance web portal for distributing the official **Campus Connect** Android application (`v1.0.0`).

---

## 🎯 Purpose

This standalone repository serves as the official distribution gateway:
```
Student Discovers Campus Connect
           ↓
Understands Features & Academic Workflows
           ↓
Downloads Cryptographically Verified APK
           ↓
Installs with Easy Step-by-Step Guidance
           ↓
Connects to the College Community
```

---

## 💎 Design & Aesthetics

- **Play Store & Apple-Grade Presentation**: Clean app squircle icon, verified institutional badges, live sticky scroll-down download bar, Google Play-style technical specifications table, What's New changelog, and dynamic QR code generation.
- **Brand Palette**:
  - Primary: `#1D4ED8`
  - Primary Dark: `#0F172A`
  - Accent: `#2563EB`
  - Background: `#F8FAFC`
  - Surface: `#FFFFFF`
  - Border: `#E2E8F0`
- **Authentic Campus Connect Features**:
  - 📢 Announcements & Circulars
  - 📅 Events & Hackathons
  - 📚 Academics & Lecture Schedules
  - 📊 Attendance Tracking & Compliance
  - 🎯 Student Engagement & Contests
  - 🪪 Digital Student ID with Cryptographic QR
  - 📋 Assignments & Tasks
  - 🏅 Results & Marks
  - 🎓 Faculty Academic Workspace
  - 🚀 E-Cell: Vision to Venture

---

## ⚙️ Centralized Release System

The website is designed so that future APK releases require **zero UI changes**. Everything is driven by a single source of truth:

- Runtime Config: `public/config/release.json`
- Compile-time Fallback: `src/config/appConfig.ts`

### Current Version: `1.0.0` (Build 100)

Configuration properties:
```json
{
  "appName": "Campus Connect",
  "version": "1.0.0",
  "versionCode": 100,
  "apkUrl": "/downloads/campus-connect-v1.0.0.apk",
  "apkFileName": "campus-connect-v1.0.0.apk",
  "releaseDate": "September 2026",
  "fileSize": "24.8 MB",
  "minAndroidVersion": "Android 8.0 (Oreo) and above",
  "packageName": "in.indevs.campusconnect",
  "sha256": "a7f3e498c89b012948d39e248b9cf6e021d6e35ab78c1308e2f8149e21785f40",
  "status": "available",
  "releaseNotes": [ ... ]
}
```

---

## 🚀 How to Publish a New Release (e.g. v1.0.1)

1. **Place the new APK binary**:
   Drop your signed release APK into:
   ```
   public/downloads/campus-connect-v1.0.1.apk
   ```
   *(Or host on S3/Cloud Storage and paste the absolute URL).*

2. **Update `public/config/release.json`**:
   ```json
   {
     "version": "1.0.1",
     "apkUrl": "/downloads/campus-connect-v1.0.1.apk",
     "apkFileName": "campus-connect-v1.0.1.apk",
     "releaseDate": "October 2026",
     "fileSize": "25.1 MB",
     "sha256": "<new-sha256-checksum>",
     "releaseNotes": [
       "Bug fixes and performance improvements",
       "Enhanced attendance notification delivery"
     ]
   }
   ```

3. **Deploy or Commit**:
   - The UI, sticky download banner, specs table, release notes, and dynamic QR codes automatically update to `v1.0.1`!

---

## 🛠️ Development & Building

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🔒 Security & Privacy Notice

- **Direct Institutional Distribution**: Downloaded directly from the official domain (`download.campusconnect.indevs.in`).
- **Zero Student Credential Collection**: This portal does not ask for student roll numbers, passwords, emails, or phone numbers.
- **No Trackers**: Non-invasive event logging exclusively for download button clicks and QR interactions.

---

## 🏛️ Institutional Hierarchy

- **Institution**: B. K. Birla Night College, Kalyan
- **Department**: Department of Computer Science
- **Platform**: Campus Connect
- **Copyright**: © 2026 Campus Connect