// Define branded type utilities
declare const brand: unique symbol;

type Brand<T, TBrand> = T & { [brand]: TBrand };

// Define our branded types
export type UUID = Brand<string, "UUID">;

export const isUUID = (value: string): value is UUID => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
  return uuidRegex.test(value);
};

export const asUUID = (value: string): UUID => {
  if (!isUUID(value)) {
    throw new Error(`Invalid UUID: ${value}`);
  }
  return value as UUID;
};
