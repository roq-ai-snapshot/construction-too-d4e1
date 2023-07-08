const mapping: Record<string, string> = {
  companies: 'company',
  customers: 'customer',
  rentals: 'rental',
  tools: 'tool',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
