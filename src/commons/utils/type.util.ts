export class TypeUtil {
  private constructor() {} // eslint-disable-line @typescript-eslint/no-empty-function

  public static exists(value: any) {
    return value !== null && value !== undefined;
  }
  public static hasText(value: any) {
    return TypeUtil.exists(value) && value !== '';
  }
}
