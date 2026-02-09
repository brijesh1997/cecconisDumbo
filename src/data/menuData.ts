export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    category: 'All Day' | 'Brunch' | 'Dessert' | 'Drinks';
    image?: string;
}

export const menuItems: MenuItem[] = [
    // All Day
    {
        id: '1',
        name: 'Burrata',
        description: 'Tomato, basil, balsamic glaze',
        price: '$24',
        category: 'All Day',
        image: 'https://images.unsplash.com/photo-1596753066225-acc939cb13dc?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: '2',
        name: 'Truffle Arancini',
        description: 'Wild mushroom, truffle aioli, parmesan',
        price: '$18',
        category: 'All Day'
    },
    {
        id: '3',
        name: 'Lobster Spaghetti',
        description: 'Maine lobster, chili, saffron, basil',
        price: '$48',
        category: 'All Day',
        image: 'https://images.unsplash.com/photo-1626844131082-256783844137?q=80&w=1935&auto=format&fit=crop'
    },
    {
        id: '4',
        name: 'Veal Milanese',
        description: 'Lemon, sea salt, arugula salad',
        price: '$42',
        category: 'All Day'
    },
    {
        id: '5',
        name: 'Branzino',
        description: 'Grilled mediterranean bass, lemon, capers, olive oil',
        price: '$38',
        category: 'All Day'
    },

    // Brunch
    {
        id: '6',
        name: 'Avocado Toast',
        description: 'Poached eggs, chili flakes, sourdough',
        price: '$22',
        category: 'Brunch'
    },
    {
        id: '7',
        name: 'Ricotta Pancakes',
        description: 'Blueberry compote, lemon curd',
        price: '$20',
        category: 'Brunch'
    },
    {
        id: '8',
        name: 'Eggs Benedict',
        description: 'Prosciutto cotto, hollandaise, english muffin',
        price: '$24',
        category: 'Brunch'
    },

    // Dessert
    {
        id: '9',
        name: 'Tiramisu',
        description: 'Espresso soaked ladyfingers, mascarpone cream',
        price: '$14',
        category: 'Dessert'
    },
    {
        id: '10',
        name: 'Panna Cotta',
        description: 'Vanilla bean, berry coulis',
        price: '$12',
        category: 'Dessert'
    },
    {
        id: '11',
        name: 'Gelato Selection',
        description: 'Pistachio, Chocolate, Hazelnut',
        price: '$10',
        category: 'Dessert'
    },

    // Drinks
    {
        id: '12',
        name: 'Negroni',
        description: 'Gin, Campari, Sweet Vermouth',
        price: '$18',
        category: 'Drinks'
    },
    {
        id: '13',
        name: 'Aperol Spritz',
        description: 'Aperol, Prosecco, Soda',
        price: '$16',
        category: 'Drinks'
    },
    {
        id: '14',
        name: 'Chianti Classico',
        description: 'Tuscany, Italy (Glass)',
        price: '$18',
        category: 'Drinks'
    }
];
