import * as path from "path"
import { glob } from "glob"

export async function deleteCachedFile(file: string) {
	const filePath = path.resolve(file);
	if (require.cache[filePath]) {
		delete require.cache[filePath];
	}
}

export async function loadFiles(dirName: string) {
	try {
		const files = await glob(path.join(process.cwd(), dirName, "**/*.{ts,js}").replace(/\\/g, "/"));
		const tsAndJsFiles = files.filter(file => [".ts", ".js"].includes(path.extname(file)));
		await Promise.all(tsAndJsFiles.map(deleteCachedFile));
		return tsAndJsFiles;
	} catch (error) {
		console.error(`Error loading file from directory ${dirName}: ${error}`);
		throw error;
	}
}