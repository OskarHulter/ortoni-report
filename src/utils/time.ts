import path from 'path';

export function msToTime(duration: number): string {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    const parts = [];
    if (hours > 0) parts.push(hours + 'h');
    if (minutes > 0) parts.push(minutes + 'm');
    if (seconds > 0 || parts.length === 0) parts.push(seconds + 's');

    return parts.join(' ');
}
export function normalizeFilePath(filePath: string): string {
    // Normalize the path to handle different separators
    const normalizedPath = path.normalize(filePath);
    // Get the base name of the file (removes any leading directories)
    return path.basename(normalizedPath);
}