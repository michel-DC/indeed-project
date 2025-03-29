export const formatEnumValue = (value: string) => {
    return value ? value : "N/A";
  };
  
  export const formatMultiEnumValues = (values: string[]) => {
    return values.length ? values.join(", ") : "N/A";
  };
  
  export const formatBoolean = (value: string) => {
    return value === "yes" ? "✅ Yes" : value === "no" ? "❌ No" : "❓ Unknown";
  };
  