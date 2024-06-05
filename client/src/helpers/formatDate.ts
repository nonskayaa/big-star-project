export default function formatDate(inputDate: Date): string {
  return new Date(inputDate).toLocaleDateString("en-GB").replaceAll("/", ".");
}
