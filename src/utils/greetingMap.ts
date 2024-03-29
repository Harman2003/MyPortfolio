export const greetingMap = (key: string) => {
  switch (key) {
    case "/":
      return [
        "Hello",
        "Bonjour",
        "Ciao",
        "Olà",
        "やあ",
        "Hallå",
        "Guten tag",
        "Hallo",
        "नमस्ते",
        "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
      ];
    case "/home":
      return ["Home"];
    case "/work":
      return ["Work"];
    case "/about":
      return ["About"];
    case "/contact":
      return ["Contact"];
    default:
      return ["Error"];
  }
};
