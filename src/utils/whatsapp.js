import { formatPrice } from './formatPrice';

export function buildWhatsAppUrl(items) {
  const phone = '77067064338';

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const lines = [
    'Здравствуйте! Хочу уточнить наличие следующих товаров:',
    '',
    ...items.flatMap((item, index) => [
      `${index + 1}. ID: ${item.id}`,
      `Количество: ${item.quantity} шт.`,
      `Цена за 1 шт: ${formatPrice(item.price)}`,
      `Сумма: ${formatPrice(item.price * item.quantity)}`,
      ''
    ]),
    `Всего товаров: ${totalItems} шт.`,
    `Итого: ${formatPrice(totalPrice)}`
  ];

  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
}