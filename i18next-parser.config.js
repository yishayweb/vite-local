export default {
  // What files to scan for keys
  input: ["src/language/translationKeys/**/*.{ts,tsx}"],

  // Where to put the translation files
  output: "public/tr/$LOCALE/$NAMESPACE.json",

  // What languages you want files generated for
  locales: ["en", "es"],

  // Keep existing translations when updating files
  keepRemoved: true,

  // Add comments in translation files to help translators
  contextSeparator: "_",

  // Create a catalog of all keys
  createOldCatalogs: true,
  defaultValue: "LANGUAGE_VALUE_NEEDED",
};
