import type { PAGES } from "../../constants/Pages";

export type PageName = (typeof PAGES)[keyof typeof PAGES];
