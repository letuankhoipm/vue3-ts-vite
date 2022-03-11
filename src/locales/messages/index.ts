import enLocale from "element-plus/lib/locale/lang/en";
import viLocale from "element-plus/lib/locale/lang/vi";
import en from "./en";
import vi from "./vi";

export default { en: { ...en, ...enLocale }, vi: { ...vi, ...viLocale } };
