import * as path from "path";
import resolvePkg from "resolve-pkg";

// 実行場所がrootになる
export const rootPath = process.cwd();
export const appPath = (nextPath: string): string => path.join(rootPath, nextPath);

export const pkg = require(appPath("./package.json"));

export const find = (searchPath: string): string => {
  const result = resolvePkg(searchPath);
  if (result) {
    return result;
  }
  throw new Error(`Not found: ${searchPath}`);
};