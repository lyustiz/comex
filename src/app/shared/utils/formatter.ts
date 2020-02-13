export class Formatter {

  static snakeToCamel(str: string) {
    return str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
  }

  static toCamelCase(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }

  static toPascalCase(str: string) {
    return str
    .replace(/\w\S*/g, (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase());
  }

}

