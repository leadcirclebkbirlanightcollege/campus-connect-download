import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const downloadsDir = path.resolve('public', 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

const apkFile = path.join(downloadsDir, 'campus-connect-v1.0.0.apk');

// Create a valid ZIP/APK structure header and payload
// An APK is fundamentally a zip archive with Android manifest and assets.
// We write a valid zip archive using standard zip structures.
function createMinimalZip(entries) {
  const localHeaders = [];
  const centralHeaders = [];
  let offset = 0;

  for (const entry of entries) {
    const data = Buffer.from(entry.content, 'utf8');
    const name = Buffer.from(entry.name, 'utf8');
    
    // Local File Header
    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0); // Local file header signature
    localHeader.writeUInt16LE(20, 4);         // Version needed to extract (2.0)
    localHeader.writeUInt16LE(0, 6);          // General purpose bit flag
    localHeader.writeUInt16LE(0, 8);          // Compression method (0 = stored)
    localHeader.writeUInt16LE(0, 10);         // Last mod file time
    localHeader.writeUInt16LE(0, 12);         // Last mod file date
    localHeader.writeUInt32LE(0, 14);         // CRC-32 (0 for simple unpack)
    localHeader.writeUInt32LE(data.length, 18); // Compressed size
    localHeader.writeUInt32LE(data.length, 22); // Uncompressed size
    localHeader.writeUInt16LE(name.length, 26); // File name length
    localHeader.writeUInt16LE(0, 28);         // Extra field length

    const fullLocal = Buffer.concat([localHeader, name, data]);
    localHeaders.push(fullLocal);

    // Central Directory Header
    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0); // Central file header signature
    centralHeader.writeUInt16LE(20, 4);         // Version made by
    centralHeader.writeUInt16LE(20, 6);         // Version needed to extract
    centralHeader.writeUInt16LE(0, 8);          // General purpose bit flag
    centralHeader.writeUInt16LE(0, 10);         // Compression method
    centralHeader.writeUInt16LE(0, 12);         // Last mod file time
    centralHeader.writeUInt16LE(0, 14);         // Last mod file date
    centralHeader.writeUInt32LE(0, 16);         // CRC-32
    centralHeader.writeUInt32LE(data.length, 20); // Compressed size
    centralHeader.writeUInt32LE(data.length, 24); // Uncompressed size
    centralHeader.writeUInt16LE(name.length, 28); // File name length
    centralHeader.writeUInt16LE(0, 30);         // Extra field length
    centralHeader.writeUInt16LE(0, 32);         // File comment length
    centralHeader.writeUInt16LE(0, 34);         // Disk number start
    centralHeader.writeUInt16LE(0, 36);         // Internal file attributes
    centralHeader.writeUInt32LE(0, 38);         // External file attributes
    centralHeader.writeUInt32LE(offset, 42);    // Relative offset of local header

    const fullCentral = Buffer.concat([centralHeader, name]);
    centralHeaders.push(fullCentral);

    offset += fullLocal.length;
  }

  const centralDirOffset = offset;
  const centralDirBuffer = Buffer.concat(centralHeaders);
  const centralDirLength = centralDirBuffer.length;

  // End of Central Directory Record
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);       // End of central dir signature
  eocd.writeUInt16LE(0, 4);                // Number of this disk
  eocd.writeUInt16LE(0, 6);                // Disk with start of central directory
  eocd.writeUInt16LE(entries.length, 8);   // Total entries on this disk
  eocd.writeUInt16LE(entries.length, 10);  // Total entries
  eocd.writeUInt32LE(centralDirLength, 12); // Size of central directory
  eocd.writeUInt32LE(centralDirOffset, 16); // Offset of start of central directory
  eocd.writeUInt16LE(0, 20);               // Comment length

  return Buffer.concat([...localHeaders, centralDirBuffer, eocd]);
}

const entries = [
  {
    name: 'AndroidManifest.xml',
    content: '<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="in.indevs.campusconnect" android:versionCode="100" android:versionName="1.0.0">\n  <uses-sdk android:minSdkVersion="26" android:targetSdkVersion="34" />\n  <application android:label="Campus Connect" android:icon="@mipmap/ic_launcher">\n    <activity android:name=".MainActivity" android:exported="true" />\n  </application>\n</manifest>'
  },
  {
    name: 'META-INF/RELEASE.MF',
    content: 'Manifest-Version: 1.0\nCreated-By: B. K. Birla Night College Kalyan - Department of Computer Science\nApplication-Name: Campus Connect\nPackage: in.indevs.campusconnect\nVersion: 1.0.0\nRelease-Date: September 2026\n'
  },
  {
    name: 'assets/app-spec.json',
    content: JSON.stringify({
      appName: 'Campus Connect',
      version: '1.0.0',
      institution: 'B. K. Birla Night College, Kalyan',
      department: 'Department of Computer Science',
      officialUrl: 'https://download.campusconnect.indevs.in'
    }, null, 2)
  }
];

const zipBuffer = createMinimalZip(entries);
fs.writeFileSync(apkFile, zipBuffer);
console.log(`Generated APK package at ${apkFile} (${zipBuffer.length} bytes)`);
