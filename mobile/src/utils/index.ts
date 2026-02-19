// Utility fonksiyonları

/**
 * Tarih formatlamak için yardımcı fonksiyon
 */
export function formatDate(date: Date, locale: string = 'tr-TR'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Telefon numarası formatlamak için yardımcı fonksiyon
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

/**
 * Boş string kontrolü
 */
export function isEmpty(value: string | null | undefined): boolean {
  return !value || value.trim().length === 0;
}
