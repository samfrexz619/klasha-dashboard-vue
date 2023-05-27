import { uid } from "uid";

type Nav = {
  name: string;
  path: string;
  id: number;
}

export type NavItems = {
  id: number;
  main_page: Nav[];
  accept_payment: Nav[];
  send_payment: Nav[];
}

export type TransactionData = {
  transaction_id: string;
  source: string;
  customer_name: string;
  customer_email: string;
  amount: string;
  request_date: string;
  status: 'pending' | 'successful' | string;
  id: string;
}

const navItems: NavItems[] = [
  {
    id: 71,
    main_page: [
      {
        name: 'dashboard',
        path: '/dashboard', 
        id: 0
      },
      {
        name: 'balances',
        path: '/balances',
        id: 2
      },
      {
        name: 'transactions',
        path: '/transactions',
        id: 3
      },
      {
        name: 'analytics',
        path: '/analytics',
        id: 4
      },
      {
        name: 'marketing',
        path: '/marketing',
        id: 5
      },
      {
        name: 'exchange rate',
        path: '/exchange-rate',
        id: 6
      },
    ],
    accept_payment: [
      {
        name: 'checkout',
        path: '/checkout',
        id: 7
      },
      {
        name: 'payment links',
        path: '/payment-link',
        id: 8
      },
    ],
    send_payment: [
      {
        name: 'wire',
        path: '/wire',
        id: 21
      },
    ]
  }
]

const transactionData: TransactionData[] = [
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike owen',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'CB328ABCEDF23416',
    source: 'uba',
    customer_name: "Steve O'Shassy",
    customer_email: '0982764829',
    amount: '480.00',
    request_date: '22.08.2021',
    status: 'successful',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike owen',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike owen',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'successful',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'successful',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'frexz seun',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
  {
    transaction_id: 'GB124QWERTY12346',
    source: 'gtb',
    customer_name: 'mike frexz',
    customer_email: '0223337281',
    amount: '230.00',
    request_date: '24.08.2021',
    status: 'pending',
    id: uid(4),
  },
]
export type Sales = {
  id: string;
  date?: string;
  moment: string;
  amount?: string;
  image?: string;
}

export interface Items {
  name: string;
  id: number;
}

const salesOverview: Sales[] = [
  {
    id: uid(4),
    moment: 'Today\'s sales',
    amount: '₦1,652.50'
  },
  {
    id: uid(4),
    date: '24 Aug - 01 Sep 21',
    moment: 'this week',
    amount: '₦1,652.50',
    image: '/graphs/week.svg'
  },
  {
    id: uid(4),
    date: '24 Aug - 01 Sep 21',
    moment: 'this month',
    amount: '₦1,652.50',
    image: '/graphs/present.svg'
  },
  {
    id: uid(4),
    date: '24 Aug - 01 Sep 21',
    moment: 'last month',
    amount: '₦1,652.50',
    image: '/graphs/last.svg'
  },
]


export {navItems, transactionData, salesOverview}