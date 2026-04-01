import { formatPrice } from './formatPrice';

export function buildWhatsAppUrl(items) {
  const phone = '77000000000';
  const lines = [
    'Здравствуйте! Хочу уточнить наличие следующих товаров:',
    '',
    ...items.flatMap((item, index) => [
      `${index + 1}. ${item.name}`,
      `ID: ${item.id}`,
      `Цена: ${formatPrice(item.price)}`,
      ''
    ]),
    `Всего товаров: ${items.length}`
  ];

  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
}
